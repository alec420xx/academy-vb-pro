import React, { useState, useRef, useEffect } from 'react';
import { Users, Pencil, Move, Trash2, Undo, Redo, ChevronRight, UserPlus, X, RefreshCw, Camera, FolderOpen, Plus, Download, Trophy, Shield, Loader2, Printer, Hexagon, Circle, Minus, RotateCcw } from 'lucide-react';

// --- CONSTANTS & CONFIGURATION ---
const OFFENSE_PHASES = [
  { id: 'receive1', label: 'Receive 1' },
  { id: 'receive2', label: 'Receive 2' },
  { id: 'transition', label: 'Transition' },
  { id: 'freeball', label: 'Free Ball' },
];

const DEFENSE_PHASES = [
  { id: 'base', label: 'Base' },
  { id: 'def_outside', label: 'Outside', attacker: 'left' }, 
  { id: 'def_middle', label: 'Middle', attacker: 'middle' },
  { id: 'def_opp', label: 'Opposite', attacker: 'right' }, 
];

const DEFAULT_ROSTER = [
  { id: 'p1', role: 'S', name: 'Setter', number: '1' },
  { id: 'p2', role: 'OH1', name: 'Outside 1', number: '2' },
  { id: 'p3', role: 'M1', name: 'Middle 1', number: '3' },
  { id: 'p4', role: 'OPP', name: 'Opposite', number: '4' },
  { id: 'p5', role: 'OH2', name: 'Outside 2', number: '5' },
  { id: 'p6', role: 'M2', name: 'Middle 2', number: '6' },
  { id: 'p7', role: 'L', name: 'Libero', number: '9' },
  { id: 'p8', role: 'DS', name: 'Def. Spec', number: '10' },
  { id: 'p9', role: 'SS', name: 'Serve Sub', number: '11' },
  { id: 'p10', role: 'OH', name: 'Sub OH', number: '12' },
  { id: 'p11', role: 'S', name: 'Sub Setter', number: '13' },
  { id: 'p12', role: 'M', name: 'Sub Middle', number: '14' },
];

// --- HELPERS ---
const generateId = (prefix) => `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

const getStorageKey = (rot, phase, mode) => `${rot}_${phase}_${mode}`;

const getRoleColor = (role) => {
  if (role === 'S') return 'bg-yellow-400 text-yellow-950 border-yellow-500';
  if (role === 'L') return 'bg-white text-slate-900 border-slate-300';
  if (role === '?' || role === 'Open') return 'bg-slate-200 text-slate-400 border-slate-300 border-dashed';
  if (role.startsWith('M')) return 'bg-indigo-600 text-white border-indigo-700';
  if (role.startsWith('OH')) return 'bg-emerald-600 text-white border-emerald-700';
  if (role === 'OPP' || role === 'DS' || role === 'SS') return 'bg-rose-600 text-white border-rose-700';
  return 'bg-slate-500 text-white border-slate-600';
};

const getPlayerZone = (playerIndex, rotationNumber) => {
  const zoneSequence = [1, 6, 5, 4, 3, 2];
  const startIdx = (rotationNumber - 1) % 6;
  let seqIndex = (startIdx - playerIndex) % 6;
  if (seqIndex < 0) seqIndex += 6;
  return zoneSequence[seqIndex];
};

const calculateDefaultPositions = (rotNum, currentRoster) => {
    const starters = currentRoster.slice(0, 6);
    const newPositions = {};
    if (starters.length === 0) return newPositions;

    const courtZones = [
        { id: 1, x: 75, y: 75 }, 
        { id: 2, x: 75, y: 35 }, 
        { id: 3, x: 50, y: 35 }, 
        { id: 4, x: 25, y: 35 }, 
        { id: 5, x: 25, y: 75 }, 
        { id: 6, x: 50, y: 75 }, 
    ];
    
    starters.forEach((player, index) => {
        const zoneId = getPlayerZone(index, rotNum);
        const zone = courtZones.find(z => z.id === zoneId);
        if (zone) {
            newPositions[player.id] = { x: zone.x, y: zone.y };
        }
    });
    return newPositions;
};

// Hit Testing Helpers
const getDistance = (p1, p2) => Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

const isPointInPolygon = (point, vs) => {
    let x = point.x, y = point.y;
    let inside = false;
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        let xi = vs[i].x, yi = vs[i].y;
        let xj = vs[j].x, yj = vs[j].y;
        let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
};

const distToSegment = (p, v, w) => {
  const l2 = (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
  if (l2 === 0) return getDistance(p, v);
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return getDistance(p, { x: v.x + t * (w.x - v.x), y: v.y + t * (w.y - v.y) });
};

const getCentroid = (points) => {
    let x = 0, y = 0;
    points.forEach(p => { x += p.x; y += p.y; });
    return { x: x / points.length, y: y / points.length };
};

// --- CUSTOM ICONS ---
const ClubLogo = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className={className}>
    <g transform="translate(50,60)">
      {[0, 120, 240].map((angle, i) => (
        <path key={i} d="M 0 0 Q -15 -25 0 -48" transform={`rotate(${angle})`}/>
      ))}
    </g>
  </svg>
);

const CustomArrowIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 5L5 19" />
        <path d="M15 5h4v4" />
    </svg>
);

const DiagonalLineIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="4" y1="20" x2="20" y2="4" />
    </svg>
);

const CourtIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Full Court Rectangle */}
    <rect x="5" y="2" width="14" height="20" rx="2" />
    {/* Net Line (Middle) */}
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// --- COMPONENTS ---

const RotationSquare = ({ rotation, roster, small = false }) => {
  const zones = {};
  roster.slice(0,6).forEach((player, idx) => {
      const z = getPlayerZone(idx, rotation);
      zones[z] = player;
  });

  const borderClass = small ? "border-slate-900" : "border-slate-900 border-2";
  const innerBorderClass = small ? "border-slate-900" : "border-slate-900";

  const renderCell = (zoneId, cellBorderClasses) => {
      const p = zones[zoneId];
      return (
          <div className={`flex flex-col items-center justify-center ${cellBorderClasses} bg-white h-full overflow-hidden p-0.5`}>
              <div className="font-black text-slate-900 text-[10px] sm:text-[12px] leading-none mb-0.5 export-text-fix">{p ? p.number : '-'}</div>
              <div className="text-[6px] sm:text-[8px] font-bold text-slate-500 uppercase leading-none">{p ? p.role : ''}</div>
          </div>
      );
  };

  return (
    <div className={`w-full h-full aspect-square ${borderClass} rounded-lg overflow-hidden flex flex-col bg-white`}>
        <div className={`flex-1 flex border-b ${innerBorderClass}`}>
            <div className="flex-1">{renderCell(4, `border-r ${innerBorderClass}`)}</div>
            <div className="flex-1">{renderCell(3, `border-r ${innerBorderClass}`)}</div>
            <div className="flex-1">{renderCell(2, "")}</div>
        </div>
        <div className="flex-1 flex">
            <div className="flex-1">{renderCell(5, `border-r ${innerBorderClass}`)}</div>
            <div className="flex-1">{renderCell(6, `border-r ${innerBorderClass}`)}</div>
            <div className="flex-1">{renderCell(1, "")}</div>
        </div>
    </div>
  );
};

const Court = ({ 
  children, 
  paths = [], 
  currentPath, 
  courtRef, 
  readOnly = false, 
  small = false, 
  onMouseDown,
  onDoubleClick, 
  playerPositions = {},
  attacker = null,
  hoveredElement = null
}) => {
  const canvasRef = useRef(null);

  const drawArrowHead = (ctx, from, to, size = 10) => {
      const angle = Math.atan2(to.y - from.y, to.x - from.x);
      ctx.beginPath();
      ctx.moveTo(to.x, to.y);
      ctx.lineTo(to.x - size * Math.cos(angle - Math.PI / 6), to.y - size * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(to.x - size * Math.cos(angle + Math.PI / 6), to.y - size * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();
  };

  const drawPath = (ctx, pathData, width, height) => {
    const { points, color, type, anchorId, modifiers, widthFactor } = pathData;
    if (points.length < 1) return;

    let drawPoints = points;

    // Resolve Anchoring
    if (anchorId && playerPositions[anchorId]) {
        const anchorPos = playerPositions[anchorId];
        const ax = (anchorPos.x / 100) * width;
        const ay = (anchorPos.y / 100) * height;
        drawPoints = points.map(p => ({
            x: ax + (p.x / 100) * width,
            y: ay + (p.y / 100) * height
        }));
    } else if (anchorId) {
        return; 
    } else {
        drawPoints = points.map(p => ({
            x: (p.x / 100) * width,
            y: (p.y / 100) * height
        }));
    }

    if (drawPoints.length < 2 && type !== 'rect') return;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    
    // --- DRAWING LOGIC BASED ON TYPE ---
    if (type === 'rect') {
        const start = drawPoints[0];
        const end = drawPoints[drawPoints.length - 1]; 
        const w = end.x - start.x;
        const h = end.y - start.y;
        
        ctx.globalAlpha = 0.3; 
        ctx.fillRect(start.x, start.y, w, h);
        ctx.globalAlpha = 1.0;
        ctx.lineWidth = 1;
        ctx.strokeRect(start.x, start.y, w, h);
    } 
    else if (type === 'triangle') {
        if (drawPoints.length < 2) return;
        const start = drawPoints[0]; 
        const end = drawPoints[drawPoints.length - 1]; 
        
        const angle = Math.atan2(end.y - start.y, end.x - start.x);
        const dist = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
        const factor = widthFactor || (modifiers?.shift ? 1.2 : 0.6);
        const baseWidth = dist * factor; 

        const baseLeftX = end.x + baseWidth/2 * Math.cos(angle - Math.PI/2);
        const baseLeftY = end.y + baseWidth/2 * Math.sin(angle - Math.PI/2);
        
        const baseRightX = end.x + baseWidth/2 * Math.cos(angle + Math.PI/2);
        const baseRightY = end.y + baseWidth/2 * Math.sin(angle + Math.PI/2);

        ctx.moveTo(start.x, start.y);
        ctx.lineTo(baseLeftX, baseLeftY);
        ctx.lineTo(baseRightX, baseRightY);
        ctx.closePath();
        
        ctx.globalAlpha = 0.3;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.stroke();
    }
    else if (type === 'polygon') {
        if (drawPoints.length < 2) return;

        ctx.moveTo(drawPoints[0].x, drawPoints[0].y);
        for(let i=1; i<drawPoints.length; i++) {
            ctx.lineTo(drawPoints[i].x, drawPoints[i].y);
        }
        
        // Close shape for polygons ALWAYS
        // Even if creating, we visualize the close
        if (drawPoints.length > 2) {
            ctx.closePath();
            ctx.globalAlpha = 0.3;
            ctx.fill();
            ctx.globalAlpha = 1.0;
        }
        
        ctx.stroke();
    }
    else if (type === 'line') {
        if (drawPoints.length < 2) return;
        ctx.moveTo(drawPoints[0].x, drawPoints[0].y);
        ctx.lineTo(drawPoints[1].x, drawPoints[1].y);
        ctx.stroke();
    }
    else {
        // Arrow/Pencil Logic
        ctx.lineWidth = small ? 2 : 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        let p0 = drawPoints[0];
        ctx.moveTo(p0.x, p0.y);

        let drawEnd = drawPoints[drawPoints.length - 1];

        if (type === 'arrow' && drawPoints.length > 1) {
            const last = drawPoints[drawPoints.length - 1];
            let prev = drawPoints[Math.max(0, drawPoints.length - 2)]; 
            
            // Janky Arrow Fix: Find a point at least 10 units back for stable angle
            for (let i = drawPoints.length - 2; i >= 0; i--) {
                if (getDistance(last, drawPoints[i]) > 10) {
                    prev = drawPoints[i];
                    break;
                }
            }

            const angle = Math.atan2(last.y - prev.y, last.x - prev.x);
            const shortenBy = small ? 5 : 10;
            drawEnd = {
                x: last.x - shortenBy * Math.cos(angle),
                y: last.y - shortenBy * Math.sin(angle)
            };
        }

        for (let i = 1; i < drawPoints.length - 2; i++) {
          const p1 = drawPoints[i];
          const p2 = drawPoints[i + 1];
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
        }

        if (drawPoints.length > 2) {
             ctx.lineTo(drawEnd.x, drawEnd.y);
        } else {
             ctx.lineTo(drawEnd.x, drawEnd.y);
        }
        ctx.stroke();

        if (type === 'arrow') {
            const last = drawPoints[drawPoints.length - 1];
            // Recalculate prev for the head draw to match the end adjustment
            let prev = drawPoints[Math.max(0, drawPoints.length - 2)];
            for (let i = drawPoints.length - 2; i >= 0; i--) {
                if (getDistance(last, drawPoints[i]) > 10) {
                    prev = drawPoints[i];
                    break;
                }
            }
            drawArrowHead(ctx, prev, last, small ? 6 : 12);
        }
    }
  };

  const drawUIOverlay = (ctx, hoveredElement, width, height) => {
      if (!hoveredElement) return;
      const { index, type, vertexIndex } = hoveredElement;
      const path = paths[index];
      if (!path) return;

      // Draw vertices
      let drawPoints = path.points.map(p => ({
          x: (p.x / 100) * width,
          y: (p.y / 100) * height
      }));

      // If anchored, adjust points
      if (path.anchorId && playerPositions[path.anchorId]) {
          const anchorPos = playerPositions[path.anchorId];
          const ax = (anchorPos.x / 100) * width;
          const ay = (anchorPos.y / 100) * height;
          drawPoints = path.points.map(p => ({
              x: ax + (p.x / 100) * width,
              y: ay + (p.y / 100) * height
          }));
      }

      ctx.save();
      
      // Draw all vertices as small circles, BUT NOT FOR DRAW/PENCIL
      if (path.type === 'polygon' || path.type === 'line' || path.type === 'triangle') {
          drawPoints.forEach((p, i) => {
              ctx.beginPath();
              ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
              ctx.fillStyle = (type === 'vertex' && vertexIndex === i) ? '#3b82f6' : 'white';
              ctx.strokeStyle = '#1e293b';
              ctx.lineWidth = 2;
              ctx.fill();
              ctx.stroke();
          });
      }

      // Calculate Center
      let center = {x:0, y:0};
      if (path.type === 'line') {
          center = {
              x: (drawPoints[0].x + drawPoints[drawPoints.length-1].x)/2,
              y: (drawPoints[0].y + drawPoints[drawPoints.length-1].y)/2
          };
      } else if (path.type === 'arrow' || path.type === 'draw') {
          // Use middle point of the array to ensure it's on the curve
          const midIdx = Math.floor(drawPoints.length / 2);
          center = drawPoints[midIdx];
      } else {
          center = getCentroid(drawPoints);
      }

      // Draw Buttons (Delete & Move)
      const btnRadius = 12;
      const spacing = 18; 
      
      // Delete Button (Right)
      const delX = center.x + spacing;
      const delY = center.y;
      ctx.beginPath();
      ctx.arc(delX, delY, btnRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#ef4444';
      ctx.fill();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(delX - 4, delY - 4);
      ctx.lineTo(delX + 4, delY + 4);
      ctx.moveTo(delX + 4, delY - 4);
      ctx.lineTo(delX - 4, delY + 4);
      ctx.stroke();

      // Move Button (Left)
      const moveX = center.x - spacing;
      const moveY = center.y;
      ctx.beginPath();
      ctx.arc(moveX, moveY, btnRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#3b82f6';
      ctx.fill();
      // Draw Cross Arrows for Move
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(moveX - 5, moveY);
      ctx.lineTo(moveX + 5, moveY);
      ctx.moveTo(moveX, moveY - 5);
      ctx.lineTo(moveX, moveY + 5);
      // Arrow tips (simplified)
      ctx.moveTo(moveX - 5, moveY); ctx.lineTo(moveX - 3, moveY - 2);
      ctx.moveTo(moveX - 5, moveY); ctx.lineTo(moveX - 3, moveY + 2);
      ctx.moveTo(moveX + 5, moveY); ctx.lineTo(moveX + 3, moveY - 2);
      ctx.moveTo(moveX + 5, moveY); ctx.lineTo(moveX + 3, moveY + 2);
      ctx.stroke();

      ctx.restore();
  };

  useEffect(() => {
    const handleResize = () => {
        const canvas = canvasRef.current;
        const parent = courtRef?.current || canvas?.parentElement;
        if (canvas && parent) {
            const rect = parent.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            
            const ctx = canvas.getContext('2d');
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.scale(dpr, dpr);
            const width = rect.width;
            const height = rect.height;
            
            if (paths) {
                paths.forEach(path => {
                    drawPath(ctx, path, width, height);
                });
            }
            if (currentPath && currentPath.points.length > 0) {
                drawPath(ctx, currentPath, width, height);
            }
            
            // Draw UI Overlay for Hover/Selection
            if (!readOnly && hoveredElement) {
                drawUIOverlay(ctx, hoveredElement, width, height);
            }
        }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [paths, currentPath, courtRef, small, playerPositions, hoveredElement]); // Added hoveredElement dependency

  return (
    <div 
      ref={courtRef}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      onDoubleClick={onDoubleClick}
      id={!small ? "court-capture-area" : undefined}
      className={`relative w-full aspect-square bg-[#f0f4f8] ${!small ? 'shadow-sm border-2 border-slate-900 cursor-crosshair' : 'border border-slate-300'} select-none bg-white`}
      style={{ touchAction: 'none' }}
    >
        {/* Background */}
        <div className="absolute inset-0 bg-[#fff] pointer-events-none"></div>
        <div className="absolute left-[15%] right-[15%] top-[15%] bottom-[15%] border-2 border-slate-900 pointer-events-none z-10">
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900 flex items-center justify-center"></div>
            <div className="absolute top-[33.33%] left-0 right-0 h-px bg-slate-900"></div>
            {!small && <div className="absolute top-[34%] right-0 text-[8px] font-bold text-slate-400 font-mono tracking-widest uppercase">Attack Line</div>}
        </div>
        {attacker && (
            <div 
                className={`absolute top-[13%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-red-600 z-20 animate-bounce`}
                style={{
                    left: attacker === 'left' ? '80%' : attacker === 'right' ? '20%' : '50%',
                    transform: 'translateX(-50%)'
                }}
            ></div>
        )}
        <canvas ref={canvasRef} className="absolute inset-0 z-20 w-full h-full pointer-events-none" />
        <div className={`relative z-30 w-full h-full ${readOnly ? 'pointer-events-none' : ''}`}>
          {children}
        </div>
    </div>
  );
};

const PlayerToken = ({ player, x, y, isDragging, isBench, style, small = false, onStartInteraction, isSelected }) => {
  const isGhost = style?.position === 'fixed';
  const sizeClasses = small ? "w-5 h-5 text-[8px] border" : "w-11 h-11 md:w-14 md:h-14 border-2";
  const tokenColorClass = getRoleColor(player.role);

  // Position logic handling for Export vs Interactive
  const positionStyle = {};
  
  if (x !== undefined && !isGhost) {
      positionStyle.left = `${x}%`;
      positionStyle.top = `${y}%`;
      
      if (small) {
          // Use margins for export stability to prevent cut-off text in html2canvas
          positionStyle.marginLeft = '-10px';
          positionStyle.marginTop = '-10px';
          positionStyle.transform = 'none';
      } else {
          // Use transform for smooth dragging interactions
          positionStyle.transform = 'translate(-50%, -50%)';
      }
  } else {
      // Fallback/Ghost/Bench dragging
      positionStyle.left = style?.left;
      positionStyle.top = style?.top;
      positionStyle.transform = style?.transform || 'translate(-50%, -50%)';
  }

  return (
    <div
      onMouseDown={(e) => {
        if (onStartInteraction) onStartInteraction(e, player.id, isBench);
      }}
      onTouchStart={(e) => {
        if (onStartInteraction) onStartInteraction(e, player.id, isBench);
      }}
      className={`
        ${isGhost ? 'fixed z-[100] shadow-2xl scale-110 pointer-events-none' : 'absolute transition-transform pointer-events-auto'}
        ${sizeClasses} rounded-full flex items-center justify-center shadow-sm
        ${isDragging ? 'opacity-50' : !small && 'hover:scale-105 cursor-grab active:cursor-grabbing'} 
        ${tokenColorClass} 
        ${isSelected ? 'ring-4 ring-blue-500 ring-offset-2 z-50' : ''}
        font-sans z-40
      `}
      style={{ ...positionStyle, touchAction: 'none' }}
    >
      <div className="flex flex-col items-center justify-center h-full w-full pointer-events-none select-none leading-none -mt-[1px]">
        <span className={`${small ? 'font-black text-[9px]' : 'font-black text-sm md:text-lg'} drop-shadow-none`} style={{ lineHeight: '1' }}>{player.number}</span>
        <span className={`uppercase tracking-tighter font-bold ${small ? 'text-[6px]' : 'text-[8px] md:text-[9px] opacity-90'}`} style={{ lineHeight: '1' }}>{player.role}</span>
      </div>
    </div>
  );
};

// --- GAME PLAN SHEET ---
const GamePlanSheet = ({ teams, currentTeamId, lineups, currentLineupId, roster, savedRotations, currentRotation, currentPhase, playerPositions, paths, activePlayerIds, gameMode }) => (
    <div className="bg-white text-slate-900 w-[1224px] h-[1584px] p-12 relative flex flex-col box-border shadow-2xl origin-top-left">
        {/* Page Header */}
        <div className="flex justify-between items-start border-b-4 border-slate-900 pb-6 mb-8">
            <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                    <div className="text-red-600"><ClubLogo size={56} /></div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight">GAME PLAN</h1>
                </div>
                {/* BIG TEAM NAME HEADER + MODE */}
                <h1 className="text-4xl font-black text-slate-900 uppercase mt-4 mb-2">
                    {teams.find(t=>t.id===currentTeamId)?.name} - <span className={gameMode === 'offense' ? "text-red-600" : "text-blue-600"}>{gameMode}</span>
                </h1>
                <h2 className="text-2xl font-bold text-slate-500 uppercase">
                    {lineups.find(l => l.id === currentLineupId)?.name}
                </h2>
            </div>
            {/* Full Roster Summary - DYNAMIC ROWS */}
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg w-auto min-w-[200px]">
                <div className="text-xs font-bold text-slate-400 uppercase mb-2 border-b pb-1">Full Roster</div>
                <div className="grid gap-x-8 gap-y-1" style={{ gridTemplateRows: 'repeat(3, min-content)', gridAutoFlow: 'column' }}>
                    {roster.map((p, i) => (
                        <div key={p.id} className="text-xs flex justify-between gap-3 w-32">
                            <span className="font-bold text-slate-700 w-6">{p.number}</span>
                            <span className="text-slate-500 truncate flex-1">{p.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 flex-1">
            {[1, 2, 3, 4, 5, 6].map(rot => (
                <div key={rot} className="flex gap-6 h-[190px] border-b border-slate-200 pb-4">
                    <div className="w-32 flex-none flex flex-col items-center justify-center gap-2 border-r border-slate-200 pr-6">
                        <div className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm pb-[2px] leading-none pt-0.5">R{rot}</div>
                        <div className="w-20 h-20">
                            <RotationSquare rotation={rot} roster={roster} />
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-4 gap-6">
                        {(gameMode === 'offense' ? OFFENSE_PHASES : DEFENSE_PHASES).map(phase => {
                            const key = getStorageKey(rot, phase.id, gameMode);
                            let data = savedRotations[key];
                            if (rot === currentRotation && phase.id === currentPhase && gameMode === gameMode) {
                                data = { positions: playerPositions, paths: paths, activePlayers: activePlayerIds };
                            }
                            let validData = true;
                            if (data && data.positions) {
                                const savedIDs = Object.keys(data.positions);
                                const existingCount = savedIDs.filter(id => roster.find(p => p.id === id)).length;
                                if (existingCount < 6) validData = false;
                            } else {
                                validData = false;
                            }
                            if (!validData) {
                                data = { positions: calculateDefaultPositions(rot, roster), paths: [] };
                            } 
                            return (
                                <div key={phase.id} className="flex flex-col h-full">
                                    <div className="flex-1 border border-slate-900 rounded-lg flex justify-center items-center overflow-hidden bg-white p-1">
                                        <div className="h-full aspect-square relative">
                                            <Court small={true} paths={data.paths || []} readOnly={true} playerPositions={data.positions || {}} attacker={phase.attacker}>
                                                {Object.entries(data.positions || {}).map(([id, pos]) => {
                                                    const player = roster.find(p => p.id === id);
                                                    if (!player) return null;
                                                    return <PlayerToken key={id} player={player} x={pos.x} y={pos.y} small={true} />;
                                                })}
                                            </Court>
                                        </div>
                                    </div>
                                    <div className="text-center font-bold text-[9px] uppercase text-slate-500 tracking-wider mt-1">{phase.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center text-xs font-bold text-slate-400 uppercase">
            <div>Generated by ACADEMYVB PRO</div>
            <div>{new Date().toLocaleDateString()}</div>
        </div>
    </div>
);

// --- MAIN APP ---
const App = () => {
  const [activeTab, setActiveTab] = useState('board'); 
  const [gameMode, setGameMode] = useState('offense'); 
  const [currentRotation, setCurrentRotation] = useState(1);
  const [currentPhase, setCurrentPhase] = useState('receive1'); 
  const [mode, setMode] = useState('move'); 
  const [drawColor, setDrawColor] = useState('#000000');
  const [isExporting, setIsExporting] = useState(false);
  const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);
  
  // --- GLOBAL DATA STATE ---
  const [teams, setTeams] = useState([]);
  const [currentTeamId, setCurrentTeamId] = useState(null);
  const [lineups, setLineups] = useState([]);
  const [currentLineupId, setCurrentLineupId] = useState(null);

  // --- UI STATE ---
  const [isLineupManagerOpen, setIsLineupManagerOpen] = useState(false);
  const [isTeamManagerOpen, setIsTeamManagerOpen] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  // --- WORKING MEMORY (Active Lineup) ---
  const [roster, setRoster] = useState(DEFAULT_ROSTER);
  const [savedRotations, setSavedRotations] = useState({}); 
  const [activePlayerIds, setActivePlayerIds] = useState([]); 
  const [playerPositions, setPlayerPositions] = useState({});
  const [paths, setPaths] = useState([]);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]); // Redo stack

  // Interaction
  const [draggedPlayer, setDraggedPlayer] = useState(null);
  const [selectedBenchPlayerId, setSelectedBenchPlayerId] = useState(null); 
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); 
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState(null); 
  
  // New Interaction State
  const [hoveredElement, setHoveredElement] = useState(null); // { type: 'shape'|'vertex', index: number, vertexIndex?: number }
  const [draggedVertex, setDraggedVertex] = useState(null); // { pathIndex: number, vertexIndex: number }

  const courtRef = useRef(null);

  // --- CONSTRAINT HELPERS ---
  const getPlayerIdInZone = (targetZone) => {
    for(let i=0; i<6; i++) {
          const zone = getPlayerZone(i, currentRotation);
          if (zone === targetZone) return activePlayerIds[i]; 
    }
    return null;
  };

  const getConstraints = (playerId) => {
    const playerIdx = activePlayerIds.indexOf(playerId);
    if (playerIdx === -1) return { minX: 0, maxX: 100, minY: 0, maxY: 100 };
    const logicalZone = getPlayerZone(playerIdx, currentRotation);
    const neighbors = { left: [], right: [], front: [], back: [] };
    
    if(logicalZone===1){ neighbors.left.push(6); neighbors.front.push(2); }
    if(logicalZone===2){ neighbors.left.push(3); neighbors.back.push(1); }
    if(logicalZone===3){ neighbors.left.push(4); neighbors.right.push(2); neighbors.back.push(6); }
    if(logicalZone===4){ neighbors.right.push(3); neighbors.back.push(5); }
    if(logicalZone===5){ neighbors.right.push(6); neighbors.front.push(4); }
    if(logicalZone===6){ neighbors.left.push(5); neighbors.right.push(1); neighbors.front.push(3); }

    let limits = { minX: 0, maxX: 100, minY: 0, maxY: 100 };
    const padding = 2; 

    neighbors.left.forEach(z => {
        const nId = getPlayerIdInZone(z); 
        if (nId && playerPositions[nId]) limits.minX = Math.max(limits.minX, playerPositions[nId].x + padding);
    });
    neighbors.right.forEach(z => {
        const nId = getPlayerIdInZone(z); 
        if (nId && playerPositions[nId]) limits.maxX = Math.min(limits.maxX, playerPositions[nId].x - padding);
    });
    neighbors.front.forEach(z => {
        const nId = getPlayerIdInZone(z); 
        if (nId && playerPositions[nId]) limits.minY = Math.max(limits.minY, playerPositions[nId].y + padding);
    });
    neighbors.back.forEach(z => {
        const nId = getPlayerIdInZone(z); 
        if (nId && playerPositions[nId]) limits.maxY = Math.min(limits.maxY, playerPositions[nId].y - padding);
    });
    return limits;
  };

  // --- INTERACTION LOGIC ---
  const getCoords = (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
        return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  };

  const shouldEnforceRules = (phase) => ['receive1', 'receive2'].includes(phase);

  // New Hit Test Logic
  const performHitTest = (cx, cy, width, height) => {
      const absX = (cx / 100) * width;
      const absY = (cy / 100) * height;

      // 1. Check UI Controls (Delete & Move) for ACTIVE hovered element first
      // This bridges the gap between shape body and buttons
      if (hoveredElement && hoveredElement.type !== 'vertex') {
          const path = paths[hoveredElement.index];
          if (path) {
              let drawPoints = path.points.map(p => ({ x: (p.x / 100) * width, y: (p.y / 100) * height }));
              let center = {x:0, y:0};
              
              if (path.type === 'line') {
                  center = {
                      x: (drawPoints[0].x + drawPoints[drawPoints.length-1].x)/2,
                      y: (drawPoints[0].y + drawPoints[drawPoints.length-1].y)/2
                  };
              } else if (path.type === 'arrow' || path.type === 'draw') {
                  const midIdx = Math.floor(drawPoints.length / 2);
                  center = drawPoints[midIdx];
              } else {
                  center = getCentroid(drawPoints);
              }
              
              // Button Positions (offset slightly)
              const spacing = 18;
              const delX = center.x + spacing;
              const delY = center.y;
              const moveX = center.x - spacing;
              const moveY = center.y;

              const distToDel = Math.sqrt(Math.pow(absX - delX, 2) + Math.pow(absY - delY, 2));
              const distToMove = Math.sqrt(Math.pow(absX - moveX, 2) + Math.pow(absY - moveY, 2));
              
              if (distToDel < 15) return { type: 'delete', index: hoveredElement.index };
              if (distToMove < 15) return { type: 'move-shape', index: hoveredElement.index };

              // Proximity Bridge: Keep selection active if near the center control cluster
              const distToCenter = Math.sqrt(Math.pow(absX - center.x, 2) + Math.pow(absY - center.y, 2));
              if (distToCenter < 50) return { type: 'ui-proximity', index: hoveredElement.index }; 
          }
      }

      // 2. Check Vertices
      for (let i = 0; i < paths.length; i++) {
          const path = paths[i];
          if (path.type === 'polygon' || path.type === 'line' || path.type === 'triangle') {
              for (let j = 0; j < path.points.length; j++) {
                  const p = path.points[j];
                  const absXVertex = (p.x / 100) * width;
                  const absYVertex = (p.y / 100) * height;
                  const dist = Math.sqrt(Math.pow(absX - absXVertex, 2) + Math.pow(absY - absYVertex, 2));
                  if (dist < 10) return { type: 'vertex', index: i, vertexIndex: j };
              }
          }
      }

      // 3. Check Bodies
      for (let i = paths.length - 1; i >= 0; i--) {
          const path = paths[i];
          let hit = false;
          const absPoints = path.points.map(p => ({ x: (p.x/100)*width, y: (p.y/100)*height }));
          const pt = { x: absX, y: absY };

          if (path.type === 'polygon' || path.type === 'triangle') {
              if (isPointInPolygon(pt, absPoints)) hit = true;
          } else if (path.type === 'line' || path.type === 'arrow' || path.type === 'draw') {
              // Line detection
              for(let k=0; k<absPoints.length-1; k++){
                  // Increase threshold for easier pencil selection
                  if(distToSegment(pt, absPoints[k], absPoints[k+1]) < 15) hit = true;
              }
          } else if (path.type === 'rect') {
              // Rect detection
              const minX = Math.min(absPoints[0].x, absPoints[1].x);
              const maxX = Math.max(absPoints[0].x, absPoints[1].x);
              const minY = Math.min(absPoints[0].y, absPoints[1].y);
              const maxY = Math.max(absPoints[0].y, absPoints[1].y);
              if (pt.x >= minX && pt.x <= maxX && pt.y >= minY && pt.y <= maxY) hit = true;
          }

          if (hit) return { type: 'shape', index: i };
      }
      return null;
  };

  // --- ENSURE DOWNLOAD DEPENDENCY ---
  useEffect(() => {
    if (!window.html2canvas) {
      const script = document.createElement('script');
      script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // --- LOCAL STORAGE SYNC ---
  useEffect(() => {
    const loadedTeams = JSON.parse(localStorage.getItem('avb_teams') || '[]');
    const loadedLineups = JSON.parse(localStorage.getItem('avb_lineups') || '[]');

    if (loadedTeams.length === 0) {
        const defaultTeam = { id: generateId('team'), name: 'My Team', roster: DEFAULT_ROSTER };
        setTeams([defaultTeam]);
        setCurrentTeamId(defaultTeam.id);
        localStorage.setItem('avb_teams', JSON.stringify([defaultTeam]));
    } else {
        setTeams(loadedTeams);
        setCurrentTeamId(loadedTeams[0].id);
    }
    setLineups(loadedLineups);
  }, []);

  useEffect(() => {
    if (currentTeamId && lineups.length > 0) {
        const teamLineups = lineups.filter(l => l.teamId === currentTeamId);
        if (teamLineups.length > 0 && (!currentLineupId || !teamLineups.find(l => l.id === currentLineupId))) {
            loadLineup(teamLineups[0].id, lineups);
        } else if (teamLineups.length === 0) {
          createLineup('Lineup 1', teams.find(t=>t.id===currentTeamId)?.roster || DEFAULT_ROSTER, currentTeamId, lineups);
        }
    } else if (currentTeamId && lineups.length === 0) {
         createLineup('Lineup 1', teams.find(t=>t.id===currentTeamId)?.roster || DEFAULT_ROSTER, currentTeamId, []);
    }
  }, [currentTeamId, lineups]); 

  useEffect(() => {
      if (Object.keys(playerPositions).length === 0 && roster.length > 0) {
          initRotationDefaults(currentRotation, roster);
      }
  }, [roster, currentRotation]);

  const saveTeamsToStorage = (newTeams) => {
      setTeams(newTeams);
      localStorage.setItem('avb_teams', JSON.stringify(newTeams));
  };

  const saveLineupsToStorage = (newLineups) => {
      setLineups(newLineups);
      localStorage.setItem('avb_lineups', JSON.stringify(newLineups));
  };

  const saveCurrentState = () => {
    if (!currentLineupId) return;
    const key = getStorageKey(currentRotation, currentPhase, gameMode);
    const newRotations = {
      ...savedRotations,
      [key]: {
        positions: playerPositions,
        paths: paths,
        activePlayers: activePlayerIds
      }
    };
    setSavedRotations(newRotations);
    const updatedLineups = lineups.map(l => {
        if (l.id === currentLineupId) {
            return { ...l, rotations: newRotations, roster: roster };
        }
        return l;
    });
    saveLineupsToStorage(updatedLineups);
    return newRotations;
  };

  useEffect(() => {
    if (!currentLineupId) return;
    const timer = setTimeout(() => {
        saveCurrentState();
    }, 500); 
    return () => clearTimeout(timer);
  }, [playerPositions, paths, activePlayerIds]);

  useEffect(() => {
    if (!currentTeamId || teams.length === 0) return;
    const timer = setTimeout(() => {
        const updatedTeams = teams.map(t => {
            if (t.id === currentTeamId) {
                return { ...t, roster: roster };
            }
            return t;
        });
        saveTeamsToStorage(updatedTeams);
    }, 1000); 
    return () => clearTimeout(timer);
  }, [roster, currentTeamId]);

  // --- APP ACTIONS ---
  const createTeam = () => {
      const newTeam = { id: generateId('team'), name: newItemName || 'New Team', roster: DEFAULT_ROSTER };
      saveTeamsToStorage([...teams, newTeam]);
      setNewItemName('');
      setIsTeamManagerOpen(false);
      switchTeam(newTeam.id);
  };

  const switchTeam = (teamId) => {
      saveCurrentState(); 
      setCurrentTeamId(teamId);
      const team = teams.find(t => t.id === teamId);
      if (team) setRoster(team.roster);
      setIsTeamManagerOpen(false);
  };

  const deleteTeam = (id) => {
      if (teams.length <= 1) return alert("Cannot delete last team.");
      const newTeams = teams.filter(t => t.id !== id);
      saveTeamsToStorage(newTeams);
      if (currentTeamId === id) switchTeam(newTeams[0].id);
  };

  const renameTeam = (id, newName) => {
      const newTeams = teams.map(t => t.id === id ? { ...t, name: newName } : t);
      saveTeamsToStorage(newTeams);
      setEditId(null);
  };

  const createLineup = (name, rosterToUse, teamId = currentTeamId, currentLineupsList = lineups) => {
    const safeRoster = (rosterToUse && rosterToUse.length > 0) ? rosterToUse : DEFAULT_ROSTER;
    const newLineup = { id: generateId('lineup'), teamId: teamId, name: name, roster: safeRoster, rotations: {} };
    const newLineups = [...currentLineupsList, newLineup];
    saveLineupsToStorage(newLineups);
    if (newLineups.filter(l => l.teamId === teamId).length === 1 || teamId === currentTeamId) {
        loadLineup(newLineup.id, newLineups);
    }
    setIsLineupManagerOpen(false);
    setNewItemName('');
  };

  const loadLineup = (id, sourceLineups = lineups) => {
    const target = sourceLineups.find(l => l.id === id);
    if (!target) return;
    setCurrentLineupId(id);
    const validRoster = (target.roster && target.roster.length > 0) ? target.roster : DEFAULT_ROSTER;
    setRoster(validRoster);
    setSavedRotations(target.rotations || {});
    setCurrentRotation(1);
    setGameMode('offense');
    setCurrentPhase('receive1');
    setHistory([]);
    setFuture([]); // Clear redo
    setIsLineupManagerOpen(false);
    setSelectedBenchPlayerId(null);
    const key = getStorageKey(1, 'receive1', 'offense');
    const data = target.rotations?.[key];
    if (data && data.activePlayers && data.activePlayers.length > 0) {
       setPlayerPositions(data.positions);
       setPaths(data.paths);
       setActivePlayerIds(data.activePlayers);
    } else {
       initRotationDefaults(1, validRoster);
    }
  };

  const deleteLineup = (id) => {
      const teamLineups = lineups.filter(l => l.teamId === currentTeamId);
      if (teamLineups.length <= 1) return alert("Must have at least one lineup.");
      const newLineups = lineups.filter(l => l.id !== id);
      saveLineupsToStorage(newLineups);
      if (currentLineupId === id) {
          const remaining = newLineups.filter(l => l.teamId === currentTeamId);
          if (remaining.length > 0) loadLineup(remaining[0].id, newLineups);
      }
  };

  const renameLineup = (id, newName) => {
      const newLineups = lineups.map(l => l.id === id ? { ...l, name: newName } : l);
      saveLineupsToStorage(newLineups);
      setEditId(null);
  };

  const initRotationDefaults = (rotNum, currentRoster) => {
      const positions = calculateDefaultPositions(rotNum, currentRoster);
      const newActiveIds = Object.keys(positions);
      setActivePlayerIds(newActiveIds);
      setPlayerPositions(positions);
      setPaths([]);
  };

  const handleViewChange = (newRot, newPhase, newMode = gameMode) => {
    const updatedRotations = saveCurrentState() || savedRotations;
    const nextKey = getStorageKey(newRot, newPhase, newMode);
    if (updatedRotations[nextKey]) {
      const data = updatedRotations[nextKey];
      setPlayerPositions(data.positions);
      setPaths(data.paths);
      setActivePlayerIds(data.activePlayers);
    } else {
      initRotationDefaults(newRot, roster);
    }
    setCurrentRotation(newRot);
    setCurrentPhase(newPhase);
    setGameMode(newMode);
    setHistory([]);
    setFuture([]);
    setSelectedBenchPlayerId(null);
  };

  const handleExport = (elementId, filename) => {
    const element = document.getElementById(elementId);
    if (!element || !window.html2canvas) return;
    setIsExporting(true);

    // --- ROBUST CLONE-BASED EXPORT METHOD ---
    // Creates a clone to render to avoid scroll offsets and current view quirks
    const clone = element.cloneNode(true);
    const rect = element.getBoundingClientRect();
    
    // Style clone to match dimensions but sit at top-left
    clone.style.position = 'fixed';
    clone.style.top = '0';
    clone.style.left = '0';
    clone.style.width = `${rect.width}px`;
    clone.style.height = `${rect.height}px`;
    clone.style.zIndex = '-9999';
    clone.style.backgroundColor = '#ffffff'; // Ensure background
    
    document.body.appendChild(clone);

    // Wait a tick for DOM to settle
    setTimeout(() => {
        window.html2canvas(clone, { 
            scale: 2, 
            useCORS: false, 
            logging: false, 
            backgroundColor: '#ffffff',
            scrollX: 0,
            scrollY: 0,
            windowWidth: document.documentElement.scrollWidth,
            windowHeight: document.documentElement.scrollHeight
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `${filename}.png`;
            link.href = canvas.toDataURL();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Cleanup
            document.body.removeChild(clone);
            setIsExporting(false);
        }).catch(err => {
            console.error(err);
            if (document.body.contains(clone)) document.body.removeChild(clone);
            setIsExporting(false);
        });
    }, 100);
  };

  useEffect(() => {
    const handleWindowMove = (e) => {
        const { x, y } = getCoords(e);
        const rect = courtRef.current?.getBoundingClientRect();
        if (!rect) return;
        
        const cx = ((x - rect.left) / rect.width) * 100;
        const cy = ((y - rect.top) / rect.height) * 100;
        
        // Delta for shape dragging
        const dx = cx - (mousePos.cx || cx); 
        const dy = cy - (mousePos.cy || cy);
        
        setMousePos({ x, y, cx, cy }); // Track both screen and %

        // Hover Detection
        if (mode === 'move' && !draggedPlayer && !draggedVertex && !isDrawing && selectedShapeIndex === null) {
            const hit = performHitTest(cx, cy, rect.width, rect.height);
            if (window.matchMedia("(hover: hover)").matches) {
               setHoveredElement(hit);
            }
        }

        if (mode === 'move' && draggedVertex) {
             e.preventDefault();
             setPaths(prev => {
                 const newPaths = [...prev];
                 const path = { ...newPaths[draggedVertex.pathIndex] };
                 const newPoints = [...path.points];
                 newPoints[draggedVertex.vertexIndex] = { x: cx, y: cy };
                 path.points = newPoints;
                 newPaths[draggedVertex.pathIndex] = path;
                 return newPaths;
             });
        }
        
        // Move Entire Shape
        if (mode === 'move' && selectedShapeIndex !== null) {
             e.preventDefault();
             setPaths(prev => {
                 const newPaths = [...prev];
                 const path = { ...newPaths[selectedShapeIndex] };
                 path.points = path.points.map(p => ({ x: p.x + dx, y: p.y + dy }));
                 newPaths[selectedShapeIndex] = path;
                 return newPaths;
             });
        }

        if (mode === 'move' && draggedPlayer && !draggedPlayer.isBench) {
             let newX = cx;
             let newY = cy;
             if (shouldEnforceRules(currentPhase)) { 
                const constraints = getConstraints(draggedPlayer.id);
                newX = Math.max(constraints.minX, Math.min(constraints.maxX, newX));
                newY = Math.max(constraints.minY, Math.min(constraints.maxY, newY));
             }
             setPlayerPositions(prev => ({ ...prev, [draggedPlayer.id]: { x: newX, y: newY } }));
        } 
        else if (isDrawing && currentPath) {
             // Drawing Logic
             let pointToAdd = { x: cx, y: cy };
             if (currentPath.anchorId) {
                 const anchorPos = playerPositions[currentPath.anchorId];
                 if (anchorPos) pointToAdd = { x: cx - anchorPos.x, y: cy - anchorPos.y };
             }

             if (mode === 'line') {
                 setCurrentPath(prev => ({ ...prev, points: [prev.points[0], pointToAdd] }));
             } else if (mode === 'polygon' || mode === 'triangle') {
                 setCurrentPath(prev => {
                     const newPoints = [...prev.points];
                     newPoints[newPoints.length - 1] = pointToAdd;
                     return { ...prev, points: newPoints };
                 });
             } else {
                 if (cx > -20 && cx < 120 && cy > -20 && cy < 120) {
                    setCurrentPath(prev => ({ ...prev, points: [...prev.points, pointToAdd] }));
                 }
             }
        }
    };

    const handleWindowUp = (e) => {
       if (draggedVertex || selectedShapeIndex !== null) {
           setDraggedVertex(null);
           setSelectedShapeIndex(null); // Stop shape drag
           saveCurrentState();
       }

       if (mode === 'move' && draggedPlayer) {
           if (draggedPlayer.isBench) {
               const rect = courtRef.current?.getBoundingClientRect();
               if (rect) {
                   const { x, y } = getCoords(e);
                   const dropX = ((x - rect.left) / rect.width) * 100;
                   const dropY = ((y - rect.top) / rect.height) * 100;
                   let nearestId = null;
                   let minDist = 15;
                   Object.entries(playerPositions).forEach(([pid, pos]) => {
                       const dist = Math.sqrt(Math.pow(pos.x - dropX, 2) + Math.pow(pos.y - dropY, 2));
                       if (dist < minDist) { minDist = dist; nearestId = pid; }
                   });
                   
                   if (nearestId) {
                       const benchId = draggedPlayer.id;
                       const newActive = activePlayerIds.map(id => id === nearestId ? benchId : id);
                       setActivePlayerIds(newActive);
                       setPlayerPositions(prev => {
                           const next = {...prev};
                           if (next[nearestId]) {
                               next[benchId] = { ...next[nearestId] }; 
                               delete next[nearestId];
                           }
                           return next;
                       });
                       setSelectedBenchPlayerId(null);
                   }
               }
           }
           setDraggedPlayer(null);
           saveCurrentState();
       } else if (isDrawing && (mode === 'line' || mode === 'arrow' || mode === 'draw')) {
           setIsDrawing(false);
           if (currentPath && currentPath.points.length > 1) {
               setPaths(prev => [...prev, currentPath]);
               saveCurrentState();
           }
           setCurrentPath(null);
       }
    };

    window.addEventListener('mousemove', handleWindowMove);
    window.addEventListener('mouseup', handleWindowUp);
    window.addEventListener('mouseleave', handleWindowUp);
    window.addEventListener('touchmove', handleWindowMove, { passive: false });
    window.addEventListener('touchend', handleWindowUp);
    
    return () => {
        window.removeEventListener('mousemove', handleWindowMove);
        window.removeEventListener('mouseup', handleWindowUp);
        window.removeEventListener('mouseleave', handleWindowUp);
        window.removeEventListener('touchmove', handleWindowMove);
        window.removeEventListener('touchend', handleWindowUp);
    };
  }, [mode, draggedPlayer, isDrawing, currentPath, playerPositions, activePlayerIds, savedRotations, draggedVertex, hoveredElement, selectedShapeIndex, mousePos]); 

  const handleTokenDown = (e, playerId, isBench) => {
      e.stopPropagation();
      if (mode === 'move') {
          if (isBench) {
              if (selectedBenchPlayerId === playerId) setSelectedBenchPlayerId(null);
              else setSelectedBenchPlayerId(playerId);
              saveToHistory();
              setDraggedPlayer({ id: playerId, isBench });
          } 
          else {
              if (selectedBenchPlayerId) {
                  // Swap
                  const benchId = selectedBenchPlayerId;
                  const courtId = playerId;
                  if (benchId === courtId) { setSelectedBenchPlayerId(null); return; }
                  const newActive = activePlayerIds.map(id => id === courtId ? benchId : id);
                  setActivePlayerIds(newActive);
                  setPlayerPositions(prev => {
                      const next = {...prev};
                      next[benchId] = next[courtId]; 
                      delete next[courtId]; 
                      return next;
                  });
                  setSelectedBenchPlayerId(null); 
                  saveCurrentState();
              } else {
                  saveToHistory();
                  setDraggedPlayer({ id: playerId, isBench });
              }
          }
      } 
      else if (mode === 'arrow' && !isBench) {
          saveToHistory();
          setIsDrawing(true);
          setCurrentPath({ points: [{x: 0, y: 0}], color: drawColor, type: 'arrow', anchorId: playerId });
      }
  };

  const handleCourtDown = (e) => {
      const { x, y } = getCoords(e);
      const rect = courtRef.current.getBoundingClientRect();
      const cx = ((x - rect.left) / rect.width) * 100;
      const cy = ((y - rect.top) / rect.height) * 100;

      if (mode === 'move') {
          // Check hit
          let hit = hoveredElement;
          if (!hit && e.type === 'touchstart') {
              hit = performHitTest(cx, cy, rect.width, rect.height);
              setHoveredElement(hit);
          }

          if (hit) {
              if (hit.type === 'delete') {
                  setPaths(prev => prev.filter((_, i) => i !== hit.index));
                  setHoveredElement(null);
                  saveCurrentState();
                  return;
              }
              if (hit.type === 'move-shape') {
                  setSelectedShapeIndex(hit.index);
                  saveToHistory();
                  return;
              }
              if (hit.type === 'vertex') {
                  setDraggedVertex({ pathIndex: hit.index, vertexIndex: hit.vertexIndex });
                  saveToHistory();
                  return;
              }
              // If hitting shape body/UI proximity, select for display only (unless touch)
              if ((hit.type === 'shape' || hit.type === 'ui-proximity') && e.type === 'touchstart') {
                  setHoveredElement(hit);
                  return;
              }
          }
          
          if (!hit && e.type === 'touchstart') {
              setHoveredElement(null);
          }
          
          setSelectedBenchPlayerId(null);
      }
      else if (['draw', 'arrow'].includes(mode)) {
          saveToHistory();
          setIsDrawing(true);
          setCurrentPath({ 
              points: [{x: cx, y: cy}], 
              color: drawColor, 
              type: mode, 
              anchorId: null,
              modifiers: { shift: e.shiftKey }
          });
      } else if (mode === 'line') {
          saveToHistory();
          setIsDrawing(true);
          setCurrentPath({
              points: [{x: cx, y: cy}, {x: cx, y: cy}],
              color: drawColor,
              type: 'line'
          });
      } else if (mode === 'polygon') {
          e.stopPropagation(); 
          const newPoint = { x: cx, y: cy };
          
          if (!isDrawing) {
              saveToHistory();
              setIsDrawing(true);
              setCurrentPath({
                  points: [newPoint, newPoint], 
                  color: drawColor, 
                  type: 'polygon', 
                  anchorId: null
              });
          } else {
              const startPoint = currentPath.points[0];
              const dist = Math.sqrt(Math.pow(newPoint.x - startPoint.x, 2) + Math.pow(newPoint.y - startPoint.y, 2));
              
              if (dist < 3 && currentPath.points.length > 2) {
                  setPaths(prev => [...prev, { ...currentPath, points: currentPath.points.slice(0, -1) }]); 
                  saveCurrentState();
                  setCurrentPath(null);
                  setIsDrawing(false);
                  return;
              }

              setCurrentPath(prev => {
                  const newPoints = [...prev.points];
                  newPoints[newPoints.length - 1] = newPoint; 
                  return { ...prev, points: [...newPoints, newPoint] };
              });
          }
      }
  };

  const handleDoubleClick = (e) => {
      if (mode === 'polygon' && isDrawing) {
          e.preventDefault(); e.stopPropagation();
          if (!currentPath) return;
          let finalPoints = [...currentPath.points];
          finalPoints.pop(); 
          
          const uniquePoints = [];
          if(finalPoints.length > 0) uniquePoints.push(finalPoints[0]);
          for(let i=1; i<finalPoints.length; i++){
              const p = finalPoints[i];
              const prev = uniquePoints[uniquePoints.length-1];
              if(Math.sqrt(Math.pow(p.x-prev.x, 2) + Math.pow(p.y-prev.y, 2)) > 0.5) uniquePoints.push(p);
          }
          
          if (uniquePoints.length >= 3) {
               setPaths(prev => [...prev, { ...currentPath, points: uniquePoints }]);
               saveCurrentState();
          }
          setCurrentPath(null);
          setIsDrawing(false);
      }
  };

  // --- HISTORY ---
  const saveToHistory = () => {
    const currentState = {
      playerPositions: JSON.parse(JSON.stringify(playerPositions)),
      paths: JSON.parse(JSON.stringify(paths)),
      activePlayers: [...activePlayerIds]
    };
    setHistory(prev => [...prev, currentState]);
    setFuture([]); // Clear future on new action
    if (history.length > 20) setHistory(prev => prev.slice(1));
  };

  const undo = () => {
    if (history.length === 0) return;
    const currentState = {
      playerPositions: JSON.parse(JSON.stringify(playerPositions)),
      paths: JSON.parse(JSON.stringify(paths)),
      activePlayers: [...activePlayerIds]
    };
    setFuture(prev => [currentState, ...prev]); // Push current to future

    const previousState = history[history.length - 1];
    setPlayerPositions(previousState.playerPositions);
    setPaths(previousState.paths);
    setActivePlayerIds(previousState.activePlayers);
    setHistory(prev => prev.slice(0, -1));
  };

  const redo = () => {
    if (future.length === 0) return;
    const currentState = {
      playerPositions: JSON.parse(JSON.stringify(playerPositions)),
      paths: JSON.parse(JSON.stringify(paths)),
      activePlayers: [...activePlayerIds]
    };
    setHistory(prev => [...prev, currentState]); // Push current to history

    const nextState = future[0];
    setPlayerPositions(nextState.playerPositions);
    setPaths(nextState.paths);
    setActivePlayerIds(nextState.activePlayers);
    setFuture(prev => prev.slice(1));
  };
  
  const updateRoster = (index, field, value) => {
    if (field === 'number' && value.length > 4) return; 
    const newRoster = [...roster];
    newRoster[index] = { ...newRoster[index], [field]: value };
    setRoster(newRoster);
  };

  const currentPhasesList = gameMode === 'offense' ? OFFENSE_PHASES : DEFENSE_PHASES;
  const currentAttacker = currentPhasesList.find(p => p.id === currentPhase)?.attacker;
  const isRulesActive = shouldEnforceRules(currentPhase);

  // Auto-finish polygon if tool changes
  useEffect(() => {
     if (isDrawing && mode === 'polygon' && currentPath && currentPath.points.length > 2) {
         setPaths(prev => [...prev, { ...currentPath, points: currentPath.points.slice(0, -1) }]);
         saveCurrentState();
         setCurrentPath(null);
         setIsDrawing(false);
     } else if (isDrawing) {
         setCurrentPath(null);
         setIsDrawing(false);
     }
  }, [mode]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans select-none pb-20 md:pb-0">
      {draggedPlayer && draggedPlayer.isBench && (
           <PlayerToken player={roster.find(p => p.id === draggedPlayer.id)} isDragging={true} isBench={true} style={{ position: 'fixed', left: mousePos.x, top: mousePos.y }} />
      )}

      {/* --- DESKTOP HEADER --- */}
      <header className="hidden md:block bg-slate-900 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="bg-red-600 p-2 rounded-lg text-white"><ClubLogo size={24} /></div>
                <div>
                    <h1 className="text-xl font-black tracking-tight text-white">ACADEMYVB <span className="text-red-500">PRO</span></h1>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                        <span className="font-bold text-white cursor-pointer hover:text-blue-400" onClick={() => setIsTeamManagerOpen(true)}>{teams.find(t => t.id === currentTeamId)?.name}</span>
                        <ChevronRight size={12} />
                        <span className="font-bold text-slate-300">{lineups.find(l => l.id === currentLineupId)?.name || 'Untitled'}</span>
                    </div>
                </div>
            </div>
            <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
                <button onClick={() => setActiveTab('roster')} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'roster' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}><Users size={16} /> Roster</button>
                <button onClick={() => setActiveTab('board')} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'board' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}><CourtIcon size={16} /> Court</button>
                <button onClick={() => { setActiveTab('export'); saveCurrentState(); }} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'export' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}><Trophy size={16} /> Game Plan</button>
            </div>
            <div className="flex items-center gap-2">
                 <button onClick={() => setIsTeamManagerOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-medium hover:bg-slate-700 transition-colors"><Shield size={16} /> Teams</button>
                 <button onClick={() => setIsLineupManagerOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-medium hover:bg-slate-700 transition-colors"><FolderOpen size={16} /> Lineups</button>
            </div>
        </div>
      </header>

      {/* --- MOBILE HEADER --- */}
      {activeTab !== 'export' && (
        <header className="md:hidden bg-slate-900 border-b border-slate-800 p-3 sticky top-0 z-50 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-2">
                <div className="bg-red-600 p-1.5 rounded-md text-white"><ClubLogo size={18} /></div>
                <div className="leading-none">
                    <div className="font-black text-white text-sm tracking-tight">ACADEMYVB</div>
                    <div className="text-[10px] text-slate-400 font-bold truncate max-w-[120px]" onClick={() => setIsTeamManagerOpen(true)}>{teams.find(t=>t.id===currentTeamId)?.name}</div>
                </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsTeamManagerOpen(true)} className="p-2 bg-slate-800 rounded-full text-slate-300 border border-slate-700"><Shield size={16} /></button>
              <button onClick={() => setIsLineupManagerOpen(true)} className="p-2 bg-slate-800 rounded-full text-slate-300 border border-slate-700"><FolderOpen size={16} /></button>
            </div>
        </header>
      )}

      {/* MODALS */}
      {isTeamManagerOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="bg-slate-900 border border-slate-700 p-0 rounded-xl shadow-2xl w-full max-w-[500px] overflow-hidden">
                  <div className="p-4 md:p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800">
                      <h2 className="text-lg md:text-xl font-bold text-white">My Teams</h2>
                      <button onClick={() => setIsTeamManagerOpen(false)} className="text-slate-400 hover:text-white"><X size={20} /></button>
                  </div>
                  <div className="p-4 max-h-[50vh] overflow-y-auto space-y-2">
                      {teams.map(t => (
                          <div key={t.id} className={`flex items-center justify-between p-3 rounded-lg border transition-all ${currentTeamId === t.id ? 'bg-blue-900/20 border-blue-500/50' : 'bg-slate-800 border-slate-700 hover:border-slate-500'}`}>
                              {editId === t.id ? (
                                  <input 
                                      className="bg-slate-900 border border-blue-500 rounded px-2 py-1 text-sm text-white flex-1 mr-2"
                                      value={editName}
                                      onChange={(e) => setEditName(e.target.value)}
                                      onBlur={() => renameTeam(t.id, editName)}
                                      onKeyDown={(e) => e.key === 'Enter' && renameTeam(t.id, editName)}
                                      autoFocus
                                  />
                              ) : (
                                  <button onClick={() => switchTeam(t.id)} className="flex-1 text-left font-bold text-sm text-slate-200">{t.name}</button>
                              )}
                              <div className="flex items-center gap-2">
                                  {currentTeamId === t.id && <span className="text-[10px] font-bold bg-blue-500 text-white px-2 py-0.5 rounded-full">ACTIVE</span>}
                                  <button onClick={(e) => { e.stopPropagation(); setEditId(t.id); setEditName(t.name); }} className="p-2 text-slate-500 hover:text-blue-400"><Pencil size={14} /></button>
                                  <button onClick={(e) => { e.stopPropagation(); deleteTeam(t.id); }} className="p-2 text-slate-500 hover:text-red-500"><Trash2 size={14} /></button>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="p-4 md:p-6 bg-slate-800 border-t border-slate-700">
                      <div className="flex gap-2 mb-4">
                          <input type="text" placeholder="New Team Name" className="flex-1 p-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm outline-none" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
                          <button onClick={createTeam} className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm flex items-center gap-2"><Plus size={16} /> Create</button>
                      </div>
                  </div>
              </div>
          </div>
      )}

      {isLineupManagerOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="bg-slate-900 border border-slate-700 p-0 rounded-xl shadow-2xl w-full max-w-[500px] overflow-hidden">
                  <div className="p-4 md:p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800">
                      <h2 className="text-lg md:text-xl font-bold text-white">Lineups</h2>
                      <button onClick={() => setIsLineupManagerOpen(false)} className="text-slate-400 hover:text-white"><X size={20} /></button>
                  </div>
                  <div className="p-4 overflow-y-auto flex-1 space-y-2 max-h-[50vh]">
                      {lineups.filter(l => l.teamId === currentTeamId).map(l => (
                          <div key={l.id} className={`flex items-center justify-between p-3 rounded-lg border transition-all ${currentLineupId === l.id ? 'bg-red-900/20 border-red-500/50' : 'bg-slate-800 border-slate-700 hover:border-slate-500'}`}>
                              <button onClick={() => loadLineup(l.id)} className="flex-1 text-left font-bold text-sm text-slate-200">{l.name}</button>
                              <div className="flex items-center gap-2">
                                  {currentLineupId === l.id && <span className="text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-full">ACTIVE</span>}
                                  <button onClick={(e) => { e.stopPropagation(); deleteLineup(l.id); }} className="p-2 text-slate-500 hover:text-red-500"><Trash2 size={14} /></button>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="p-4 md:p-6 bg-slate-800 border-t border-slate-700">
                      <input type="text" placeholder="New Lineup Name" className="w-full p-3 bg-slate-900 border border-slate-600 rounded-lg mb-3 text-white outline-none" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
                      <button onClick={() => createLineup(newItemName || 'New Lineup', roster)} className="w-full p-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2"><Plus size={16} /> Create Lineup</button>
                  </div>
              </div>
          </div>
      )}

      <main className="max-w-7xl mx-auto md:p-6 h-full">
        {/* --- BOARD VIEW --- */}
        {activeTab === 'board' && (
          <div className="flex flex-col h-full">
            {/* MOBILE: BENCH STRIP */}
            <div className="md:hidden bg-slate-900 border-b border-slate-800 py-2 px-2 overflow-x-auto no-scrollbar flex items-center gap-2 sticky top-[57px] z-30">
                {roster.filter(p => !activePlayerIds.includes(p.id)).map(player => (
                    <div key={player.id} className={`flex-none w-10 h-10 rounded-full border-2 flex flex-col items-center justify-center relative ${selectedBenchPlayerId === player.id ? 'ring-4 ring-blue-500 z-10' : ''} ${getRoleColor(player.role)}`} onMouseDown={(e) => handleTokenDown(e, player.id, true)} onTouchStart={(e) => handleTokenDown(e, player.id, true)}>
                        <span className="text-[10px] font-black leading-none">{player.number}</span>
                        <span className="text-[7px] font-bold uppercase leading-none opacity-90">{player.role}</span>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-4 md:p-0">
            {/* Sidebar Controls (Desktop) */}
            <div className="hidden lg:block lg:col-span-3 space-y-4">
                 <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-xl">
                    <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Rotation</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <button key={num} onClick={() => handleViewChange(num, currentPhase)} className={`py-3 rounded-xl font-black text-lg transition-all ${currentRotation === num ? (gameMode === 'offense' ? 'bg-red-600 text-white shadow-lg ring-2 ring-red-400' : 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-400') : 'bg-slate-900 text-slate-400 hover:bg-slate-700'}`}>{num}</button>
                      ))}
                    </div>
                 </div>
                 <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Phase</h3>
                        <div className="flex bg-slate-900 rounded-md p-0.5 border border-slate-700">
                            <button onClick={() => handleViewChange(currentRotation, 'receive1', 'offense')} className={`px-2 py-1 rounded text-[10px] font-bold ${gameMode === 'offense' ? 'bg-red-600 text-white' : 'text-slate-400'}`}>OFF</button>
                            <button onClick={() => handleViewChange(currentRotation, 'base', 'defense')} className={`px-2 py-1 rounded text-[10px] font-bold ${gameMode === 'defense' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>DEF</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                       {currentPhasesList.map(p => (
                           <button key={p.id} onClick={() => handleViewChange(currentRotation, p.id)} className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold transition-all ${currentPhase === p.id ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-slate-400 hover:bg-slate-700'}`}>
                               {p.label}
                               {currentPhase === p.id && <div className={`w-2 h-2 rounded-full ${gameMode === 'offense' ? 'bg-red-500' : 'bg-blue-500'}`} />}
                           </button>
                       ))}
                    </div>
                 </div>
            </div>

            {/* MAIN COURT */}
            <div className="lg:col-span-6 flex flex-col items-center w-full">
               <div className="w-full flex flex-wrap gap-2 justify-between items-center mb-2 px-1">
                  {/* Left Side: Tools & Undo/Redo */}
                  <div className="flex items-center gap-2">
                       <div className="flex gap-1">
                           <button onClick={undo} disabled={history.length === 0} className={`p-2 rounded-lg border border-slate-700 ${history.length === 0 ? 'bg-slate-800 text-slate-600' : 'bg-slate-800 text-white'}`}><Undo size={18} /></button>
                           <button onClick={redo} disabled={future.length === 0} className={`p-2 rounded-lg border border-slate-700 ${future.length === 0 ? 'bg-slate-800 text-slate-600' : 'bg-slate-800 text-white'}`}><Redo size={18} /></button>
                       </div>
                       <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700 overflow-x-auto no-scrollbar max-w-[200px] md:max-w-none">
                           <button onClick={() => setMode('move')} className={`p-1.5 rounded-md ${mode === 'move' ? 'bg-slate-600 text-white' : 'text-slate-400'}`}><Move size={18} /></button>
                           <button onClick={() => setMode('draw')} className={`p-1.5 rounded-md ${mode === 'draw' ? 'bg-slate-600 text-white' : 'text-slate-400'}`}><Pencil size={18} /></button>
                           <button onClick={() => setMode('line')} className={`p-1.5 rounded-md ${mode === 'line' ? 'bg-slate-600 text-white' : 'text-slate-400'}`}><DiagonalLineIcon size={18} /></button>
                           <button onClick={() => setMode('arrow')} className={`p-1.5 rounded-md ${mode === 'arrow' ? 'bg-slate-600 text-white' : 'text-slate-400'}`}><CustomArrowIcon size={18} /></button>
                           <button onClick={() => setMode('polygon')} className={`p-1.5 rounded-md ${mode === 'polygon' ? 'bg-slate-600 text-white' : 'text-slate-400'}`}><Hexagon size={18} /></button>
                      </div>
                  </div>

                  {/* Right Side: Colors & Export */}
                  <div className="flex items-center gap-2">
                       {['draw', 'arrow', 'line', 'rect', 'polygon'].includes(mode) && (
                           <div className="flex items-center gap-1">
                                {['#000000', '#22c55e', '#3b82f6', '#ef4444', '#facc15', '#9ca3af'].map(c => (
                                    <button key={c} onClick={() => setDrawColor(c)} className={`w-5 h-5 rounded-full border border-white transition-transform hover:scale-110 flex-shrink-0 ${drawColor === c ? 'ring-2 ring-offset-1 ring-white scale-110' : ''}`} style={{ backgroundColor: c }} />
                                ))}
                           </div>
                       )}
                      <button onClick={() => handleExport('court-capture-area', `Rotation-${currentRotation}-${currentPhase}`)} disabled={isExporting} className="p-2 bg-slate-800 rounded-lg border border-slate-700 text-white hover:bg-slate-700">
                          {isExporting ? <Loader2 size={18} className="animate-spin" /> : <Camera size={18} />}
                      </button>
                  </div>
               </div>

               <div className="w-full bg-slate-800 p-1 md:p-2 rounded-xl shadow-2xl ring-1 ring-slate-700">
                    <Court courtRef={courtRef} paths={paths} currentPath={currentPath} onMouseDown={handleCourtDown} onDoubleClick={handleDoubleClick} playerPositions={playerPositions} attacker={currentAttacker} hoveredElement={hoveredElement}>
                      {Object.entries(playerPositions).map(([id, pos]) => {
                        const player = roster.find(p => p.id === id);
                        if (!player) return null;
                        return <PlayerToken key={id} player={player} x={pos.x} y={pos.y} isDragging={draggedPlayer?.id === id && !draggedPlayer?.isBench} isBench={false} onStartInteraction={handleTokenDown} />;
                      })}
                    </Court>
               </div>

                {/* MOBILE: CONTROL CENTER */}
                <div className="md:hidden w-full mt-4 space-y-4">
                     <div>
                         <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Rotation</div>
                         <div className="flex justify-between bg-slate-900 p-1 rounded-xl border border-slate-800">
                             {[1,2,3,4,5,6].map(r => (
                                 <button key={r} onClick={() => handleViewChange(r, currentPhase)} className={`w-10 h-10 rounded-lg font-black text-lg flex items-center justify-center ${currentRotation === r ? (gameMode === 'offense' ? 'bg-red-600 text-white shadow-lg' : 'bg-blue-600 text-white shadow-lg') : 'text-slate-500'}`}>{r}</button>
                             ))}
                         </div>
                     </div>
                     <div>
                         <div className="flex justify-between items-center mb-2">
                             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phase</div>
                             <div className="flex bg-slate-900 rounded-md p-0.5 border border-slate-800">
                                <button onClick={() => handleViewChange(currentRotation, 'receive1', 'offense')} className={`px-3 py-1 rounded text-[10px] font-bold ${gameMode === 'offense' ? 'bg-red-600 text-white' : 'text-slate-400'}`}>OFF</button>
                                <button onClick={() => handleViewChange(currentRotation, 'base', 'defense')} className={`px-3 py-1 rounded text-[10px] font-bold ${gameMode === 'defense' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>DEF</button>
                             </div>
                         </div>
                         <div className="grid grid-cols-4 gap-2">
                             {currentPhasesList.map(p => (
                                 <button key={p.id} onClick={() => handleViewChange(currentRotation, p.id)} className={`py-2 rounded-lg text-[10px] font-bold uppercase ${currentPhase === p.id ? 'bg-slate-100 text-slate-900' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>{p.label}</button>
                             ))}
                         </div>
                     </div>
                     <div className="pt-2 flex justify-center pb-8">
                         <button onClick={() => { saveToHistory(); setPaths([]); }} className="text-xs text-rose-500 flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-slate-800"><Trash2 size={14} /> Clear Drawing</button>
                         <button onClick={() => initRotationDefaults(currentRotation, roster)} className="ml-2 text-xs text-slate-400 flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-slate-800"><RefreshCw size={14} /> Reset Pos</button>
                     </div>
                </div>
               
               <div className="hidden md:flex mt-6 justify-center">
                  <button onClick={() => initRotationDefaults(currentRotation, roster)} className="text-slate-500 hover:text-white text-xs font-bold flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"><RefreshCw size={12} /> Reset Positions & Drawings</button>
               </div>
            </div>

            {/* Sidebar Bench (Desktop) */}
            <div className="hidden lg:block lg:col-span-3 space-y-4">
                <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 h-full">
                    <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Bench</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {roster.filter(p => !activePlayerIds.includes(p.id)).map(player => (
                            <div key={player.id} className="relative flex flex-col items-center p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-red-500 cursor-grab active:cursor-grabbing group transition-all" onMouseDown={(e) => handleTokenDown(e, player.id, true)} onTouchStart={(e) => handleTokenDown(e, player.id, true)}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 shadow-sm ${getRoleColor(player.role)}`}>{player.number}</div>
                                <div className="text-xs font-bold text-slate-300">{player.name}</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase">{player.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
          </div>
        )}

        {/* --- EXPORT VIEW --- */}
        <div className={activeTab === 'export' ? 'block' : 'hidden'}>
            <div className="bg-slate-950 min-h-screen pb-24">
                <div className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur border-b border-slate-800 p-4 flex justify-between items-center shadow-lg">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2"><Trophy size={18} className={gameMode === 'offense' ? "text-red-500" : "text-blue-500"} /> Game Plan</h2>
                    
                    {/* NEW EXPORT TOGGLE SWITCH */}
                    <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700 mx-4">
                        <button onClick={() => setGameMode('offense')} className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${gameMode === 'offense' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>OFFENSE</button>
                        <button onClick={() => setGameMode('defense')} className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${gameMode === 'defense' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>DEFENSE</button>
                    </div>

                    <button onClick={() => handleExport('full-report-grid', `GamePlan-${gameMode}`)} disabled={isExporting} className={`${gameMode === 'offense' ? 'bg-red-600 hover:bg-red-500' : 'bg-blue-600 hover:bg-blue-500'} text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm shadow-lg transition-all ${isExporting ? 'opacity-70 cursor-wait' : ''}`}>
                        {isExporting ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />} {isExporting ? 'Generating...' : 'Download'}
                    </button>
                </div>

                <div className="max-w-7xl mx-auto p-4 md:p-6">
                    {/* DESKTOP PREVIEW */}
                    <div className="hidden md:flex justify-center">
                         <div className="relative overflow-hidden shadow-2xl border border-slate-700 rounded-lg bg-white" style={{ width: '100%', maxWidth: '850px', aspectRatio: '1224/1584' }}>
                            <div className="w-full h-full transform origin-top-left" style={{ transform: 'scale(0.69)' }}>
                                 <GamePlanSheet teams={teams} currentTeamId={currentTeamId} lineups={lineups} currentLineupId={currentLineupId} roster={roster} savedRotations={savedRotations} currentRotation={currentRotation} currentPhase={currentPhase} playerPositions={playerPositions} paths={paths} activePlayerIds={activePlayerIds} gameMode={gameMode} />
                            </div>
                         </div>
                    </div>

                    {/* MOBILE PREVIEW */}
                    <div className="md:hidden space-y-6">
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center">
                            {editId === 'gameplan' ? (
                                <input className="bg-slate-700 text-white font-bold text-center text-lg p-1 rounded w-full mb-1" value={editName} onChange={(e) => setEditName(e.target.value)} onBlur={() => { renameTeam(currentTeamId, editName); setEditId(null); }} autoFocus />
                            ) : (
                                <h3 className="text-white font-bold text-lg mb-1" onClick={() => { setEditId('gameplan'); setEditName(teams.find(t=>t.id===currentTeamId)?.name); }}>{teams.find(t=>t.id===currentTeamId)?.name}</h3>
                            )}
                            {/* MOBILE GAME PLAN TOGGLE */}
                            <div className="flex justify-center gap-2 mt-2">
                                <button onClick={() => setGameMode('offense')} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${gameMode === 'offense' ? 'bg-red-600 text-white' : 'bg-slate-700 text-slate-400'}`}>OFFENSE</button>
                                <button onClick={() => setGameMode('defense')} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${gameMode === 'defense' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-400'}`}>DEFENSE</button>
                            </div>
                        </div>
                        {[1, 2, 3, 4, 5, 6].map(rot => (
                            <div key={rot} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
                                <div className="bg-slate-800 p-3 flex items-center justify-between border-b border-slate-700">
                                    <h3 className="font-black text-white text-lg">Rotation {rot}</h3>
                                    <div className="w-20 h-20"><RotationSquare rotation={rot} roster={roster} /></div>
                                </div>
                                <div className="p-3 overflow-x-auto">
                                    <div className="flex gap-4 min-w-max">
                                         {currentPhasesList.map(phase => {
                                             const key = getStorageKey(rot, phase.id, gameMode);
                                             let data = savedRotations[key];
                                             if (rot === currentRotation && phase.id === currentPhase && gameMode === gameMode) { 
                                                 data = { positions: playerPositions, paths: paths, activePlayers: activePlayerIds };
                                             }
                                             let validData = true;
                                             if (data && data.positions) {
                                                 const savedIDs = Object.keys(data.positions);
                                                 const existingCount = savedIDs.filter(id => roster.find(p => p.id === id)).length;
                                                 if (existingCount < 6) validData = false;
                                             } else validData = false;
                                             if (!validData) data = { positions: calculateDefaultPositions(rot, roster), paths: [] };
                                             
                                             return (
                                                 <div key={phase.id} className="w-40 flex flex-col">
                                                     <div className="aspect-square bg-white rounded-lg border border-slate-700 relative overflow-hidden mb-2">
                                                         <Court small={true} paths={data.paths || []} readOnly={true} playerPositions={data.positions || {}} attacker={phase.attacker}>
                                                             {Object.entries(data.positions || {}).map(([id, pos]) => {
                                                                 const player = roster.find(p => p.id === id);
                                                                 if (!player) return null;
                                                                 return <PlayerToken key={id} player={player} x={pos.x} y={pos.y} small={true} />;
                                                             })}
                                                         </Court>
                                                     </div>
                                                     <div className="text-center font-bold text-xs text-slate-400 uppercase">{phase.label}</div>
                                                 </div>
                                             )
                                         })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* HIDDEN EXPORT CANVAS */}
                <div className="fixed -left-[9999px] top-0 overflow-hidden">
                    <div id="full-report-grid">
                         <GamePlanSheet teams={teams} currentTeamId={currentTeamId} lineups={lineups} currentLineupId={currentLineupId} roster={roster} savedRotations={savedRotations} currentRotation={currentRotation} currentPhase={currentPhase} playerPositions={playerPositions} paths={paths} activePlayerIds={activePlayerIds} gameMode={gameMode} />
                    </div>
                </div>
            </div>
        </div>

        {/* --- ROSTER VIEW --- */}
        {activeTab === 'roster' && (
          <div className="max-w-4xl mx-auto bg-slate-800 md:rounded-2xl shadow-xl border-y md:border border-slate-700 overflow-hidden mb-24">
             <div className="p-4 md:p-6 border-b border-slate-700 flex flex-row justify-between items-center bg-slate-900/50 gap-4">
              <h2 className="text-lg md:text-xl font-bold text-white">Roster</h2>
              <button onClick={() => setRoster(prev => [...prev, { id: generateId('p'), role: 'DS', name: 'New', number: '' }])} className="flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm font-bold hover:bg-red-500 transition-colors"><UserPlus size={16} /> Add</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
              {roster.map((player, idx) => (
                <div key={player.id} className="p-3 md:p-4 border border-slate-700 bg-slate-900 rounded-xl relative group hover:border-red-500 transition-colors">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{idx < 6 ? `Starter ${idx + 1}` : 'Bench'}</div>
                    {roster.length > 6 && <button onClick={() => setRoster(prev => prev.filter(p => p.id !== player.id))} className="text-slate-500 hover:text-rose-500 transition-colors"><Trash2 size={14} /></button>}
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-black text-lg ${getRoleColor(player.role)}`}>{player.number || '#'}</div>
                    <div className="flex-1"><input type="text" value={player.name} onChange={(e) => updateRoster(idx, 'name', e.target.value)} className="w-full bg-transparent font-bold text-white border-b border-slate-700 focus:border-red-500 focus:outline-none py-1 text-sm md:text-base" placeholder="Name" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Role</label><select value={player.role} onChange={(e) => updateRoster(idx, 'role', e.target.value)} className="w-full p-1.5 md:p-2 bg-slate-800 border border-slate-600 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-red-500">{["S", "OH1", "OH2", "M1", "M2", "OPP", "L", "DS", "SS", "OH", "M"].map(r => <option key={r} value={r}>{r}</option>)}</select></div>
                    <div><label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Num/Init</label><input type="text" value={player.number} onChange={(e) => updateRoster(idx, 'number', e.target.value)} className="w-full p-1.5 md:p-2 bg-slate-800 border border-slate-600 rounded-lg text-xs text-center text-white focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="#" /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* --- MOBILE BOTTOM NAVIGATION --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 pb-safe z-50">
          <div className="flex justify-around items-center h-16">
              <button onClick={() => setActiveTab('roster')} className={`flex flex-col items-center justify-center w-full h-full ${activeTab === 'roster' ? 'text-red-500' : 'text-slate-500'}`}><Users size={20} className={activeTab === 'roster' ? 'fill-current' : ''} /><span className="text-[10px] font-bold mt-1">Roster</span></button>
              <button onClick={() => setActiveTab('board')} className={`flex flex-col items-center justify-center w-full h-full ${activeTab === 'board' ? 'text-red-500' : 'text-slate-500'}`}><CourtIcon size={20} /><span className="text-[10px] font-bold mt-1">Court</span></button>
              <button onClick={() => { setActiveTab('export'); saveCurrentState(); }} className={`flex flex-col items-center justify-center w-full h-full ${activeTab === 'export' ? 'text-red-500' : 'text-slate-500'}`}><Trophy size={20} /><span className="text-[10px] font-bold mt-1">Plan</span></button>
          </div>
      </div>
    </div>
  );
};

export default App;
