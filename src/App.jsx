import React, { useState, useRef, useEffect } from 'react';
import { Users, Pencil, Move, Trash2, Save, Undo, ChevronRight, Eraser, Settings, ShieldCheck, ShieldAlert, GripVertical, UserPlus, X, RefreshCw, Camera, FolderOpen, Plus, FileText, Download, LayoutGrid, ClipboardList, Edit3, Briefcase, AlertTriangle, Loader2 } from 'lucide-react';

// --- CUSTOM ICONS ---
const ClubLogo = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="8"
    strokeLinecap="round"
    className={className}
  >
    <g transform="translate(50,60)">
      {[0, 120, 240].map((angle, i) => (
        <path
          key={i}
          d="M 0 0 Q -15 -25 0 -48" 
          transform={`rotate(${angle})`}
        />
      ))}
    </g>
  </svg>
);

const CourtIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="5" y1="2" x2="19" y2="2" strokeWidth="4" />
    <line x1="5" y1="9" x2="19" y2="9" />
  </svg>
);

// --- HELPERS ---
const getRoleColor = (role) => {
  if (role === 'S') return 'bg-yellow-400 text-yellow-950 border-yellow-500';
  if (role === 'L') return 'bg-white text-slate-900 border-slate-300';
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
        { id: 1, x: 80, y: 75 }, 
        { id: 2, x: 80, y: 18 }, 
        { id: 3, x: 50, y: 18 }, 
        { id: 4, x: 20, y: 18 }, 
        { id: 5, x: 20, y: 75 }, 
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

// --- COMPONENTS ---

const RotationSquare = ({ rotation, roster }) => {
  const zones = {};
  roster.slice(0,6).forEach((player, idx) => {
      const z = getPlayerZone(idx, rotation);
      zones[z] = player;
  });

  const renderCell = (zoneId, borderClasses) => {
      const p = zones[zoneId];
      return (
          <div className={`flex flex-col items-center justify-center ${borderClasses} bg-white h-full overflow-hidden p-0.5`}>
              <div className="font-black text-slate-900 text-[10px] sm:text-[12px] leading-none mb-0.5 export-text-fix">{p ? p.number : '-'}</div>
              <div className="text-[6px] sm:text-[8px] font-bold text-slate-500 uppercase leading-none">{p ? p.role : ''}</div>
          </div>
      );
  };

  return (
    <div className="w-full h-full aspect-square border-2 border-slate-900 rounded-lg overflow-hidden flex flex-col">
        <div className="flex-1 flex border-b border-slate-900">
            <div className="flex-1">{renderCell(4, "border-r border-slate-900")}</div>
            <div className="flex-1">{renderCell(3, "border-r border-slate-900")}</div>
            <div className="flex-1">{renderCell(2, "")}</div>
        </div>
        <div className="flex-1 flex">
            <div className="flex-1">{renderCell(5, "border-r border-slate-900")}</div>
            <div className="flex-1">{renderCell(6, "border-r border-slate-900")}</div>
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
  onMouseDown
}) => {
  const canvasRef = useRef(null);

  const drawPath = (ctx, points, color, width, height) => {
    if (points.length < 2) return;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = small ? 2 : 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    let p0 = points[0];
    ctx.moveTo((p0.x / 100) * width, (p0.y / 100) * height);
    for (let i = 1; i < points.length - 2; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const x1 = (p1.x / 100) * width;
      const y1 = (p1.y / 100) * height;
      const x2 = (p2.x / 100) * width;
      const y2 = (p2.y / 100) * height;
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;
      ctx.quadraticCurveTo(x1, y1, midX, midY);
    }
    if (points.length > 2) {
      const pLast = points[points.length - 1];
      const pSecondLast = points[points.length - 2];
      ctx.quadraticCurveTo(
        (pSecondLast.x / 100) * width, (pSecondLast.y / 100) * height,
        (pLast.x / 100) * width, (pLast.y / 100) * height
      );
    } else if (points.length === 2) {
       const pLast = points[1];
       ctx.lineTo((pLast.x / 100) * width, (pLast.y / 100) * height);
    }
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = courtRef?.current || canvas?.parentElement;
    
    if (canvas && parent) {
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1; 
      
      if (Math.abs(canvas.width - rect.width * dpr) > 5 || Math.abs(canvas.height - rect.height * dpr) > 5) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      }
      
      const ctx = canvas.getContext('2d');
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);
      const width = rect.width;
      const height = rect.height;
      
      if (paths) {
          paths.forEach(path => {
            drawPath(ctx, path.points, path.color, width, height);
          });
      }
      if (currentPath && currentPath.points.length > 0) {
        drawPath(ctx, currentPath.points, currentPath.color, width, height);
      }
    }
  }, [paths, currentPath, courtRef, small]);

  return (
    <div 
      ref={courtRef}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      id={!small ? "court-capture-area" : undefined}
      className={`relative w-full aspect-square bg-[#f0f4f8] ${!small ? 'shadow-sm border-2 border-slate-900 cursor-crosshair' : 'border border-slate-300'} select-none bg-white`}
      style={{ touchAction: 'none' }}
    >
        <div className="absolute inset-0 bg-[#fff] pointer-events-none"></div> 
        <div className="absolute top-0 left-0 right-0 h-[5%] z-0 flex items-center justify-center overflow-hidden border-b border-slate-900 pointer-events-none"></div>
        <div className="absolute top-[33.33%] left-0 right-0 h-px bg-slate-900 pointer-events-none"></div>
        {!small && <div className="absolute top-[34%] right-2 text-[10px] font-bold text-slate-400 font-mono tracking-widest pointer-events-none">ATTACK LINE</div>}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900 z-10 pointer-events-none"></div>
        <canvas ref={canvasRef} className="absolute inset-0 z-20 w-full h-full pointer-events-none" />
        <div className={`relative z-30 w-full h-full ${readOnly ? 'pointer-events-none' : ''}`}>
          {children}
        </div>
    </div>
  );
};

const PlayerToken = ({ player, x, y, isDragging, isBench, style, small = false, onStartInteraction, isSelected }) => {
  const isGhost = style?.position === 'fixed';
  const sizeClasses = small ? "w-5 h-5 text-[8px] border" : "w-10 h-10 md:w-14 md:h-14 border-2";
  const tokenColorClass = getRoleColor(player.role);

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
      style={{ 
        left: x !== undefined && !isGhost ? `${x}%` : style?.left, 
        top: y !== undefined && !isGhost ? `${y}%` : style?.top,
        transform: x !== undefined && !isGhost ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
        touchAction: 'none'
      }}
    >
      <div className="flex flex-col items-center justify-center h-full w-full pointer-events-none select-none">
        <span className={`${small ? 'font-black text-[9px] leading-none' : 'font-black text-sm md:text-lg'} drop-shadow-none`}>{player.number}</span>
        {!small && <span className="text-[8px] md:text-[9px] opacity-90 uppercase tracking-tighter font-semibold leading-none">{player.role}</span>}
      </div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('board'); 
  const [currentRotation, setCurrentRotation] = useState(1);
  const [currentPhase, setCurrentPhase] = useState('primary'); 
  const [mode, setMode] = useState('move'); 
  const [drawColor, setDrawColor] = useState('#000000');
  const [enforceRules, setEnforceRules] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  // Persistence Keys
  const STORAGE_KEY_TEAMS = 'avb_teams';
  const STORAGE_KEY_ACTIVE_TEAM = 'avb_active_team_id';
  const STORAGE_KEY_LINEUPS = 'avb_lineups';
  const STORAGE_KEY_ACTIVE_LINEUP = 'avb_active_lineup_id';
  
  const defaultRoster = [
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

  // --- GLOBAL DATA STATE ---
  const [teams, setTeams] = useState([]);
  const [currentTeamId, setCurrentTeamId] = useState(null);
  const [lineups, setLineups] = useState([]);
  const [currentLineupId, setCurrentLineupId] = useState(null);

  // --- UI STATE ---
  const [isLineupManagerOpen, setIsLineupManagerOpen] = useState(false);
  const [isTeamManagerOpen, setIsTeamManagerOpen] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  
  // Renaming State
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  // --- WORKING MEMORY (Active Lineup) ---
  const [roster, setRoster] = useState(defaultRoster);
  const [savedRotations, setSavedRotations] = useState({}); 
  const [activePlayerIds, setActivePlayerIds] = useState([]); 
  const [playerPositions, setPlayerPositions] = useState({});
  const [paths, setPaths] = useState([]);
  const [history, setHistory] = useState([]);

  // Interaction
  const [draggedPlayer, setDraggedPlayer] = useState(null);
  const [selectedBenchPlayerId, setSelectedBenchPlayerId] = useState(null); 
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); 
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState(null); 
  const courtRef = useRef(null);

  // --- INITIALIZATION ---
  useEffect(() => {
    const savedTeams = JSON.parse(localStorage.getItem(STORAGE_KEY_TEAMS) || '[]');
    let activeTeamId = localStorage.getItem(STORAGE_KEY_ACTIVE_TEAM);

    let initialTeams = savedTeams;
    if (savedTeams.length === 0) {
        const defaultTeam = { id: 'team_default', name: 'My Team', roster: defaultRoster };
        initialTeams = [defaultTeam];
        activeTeamId = defaultTeam.id;
        localStorage.setItem(STORAGE_KEY_TEAMS, JSON.stringify(initialTeams));
    }
    setTeams(initialTeams);
    setCurrentTeamId(activeTeamId || initialTeams[0].id);

    const savedLineups = JSON.parse(localStorage.getItem(STORAGE_KEY_LINEUPS) || '[]');
    let activeLineupId = localStorage.getItem(STORAGE_KEY_ACTIVE_LINEUP);
    
    setLineups(savedLineups); 

    const teamLineups = savedLineups.filter(l => l.teamId === (activeTeamId || initialTeams[0].id));
    if (teamLineups.length > 0) {
        if (!teamLineups.find(l => l.id === activeLineupId)) {
            activeLineupId = teamLineups[0].id;
        }
        loadLineup(activeLineupId, savedLineups);
    } else {
        createLineup('Lineup 1', initialTeams.find(t => t.id === (activeTeamId || initialTeams[0].id)).roster, activeTeamId || initialTeams[0].id, savedLineups);
    }

    // Load Html2Canvas
    if (!window.html2canvas) {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const getStorageKey = (rot, phase) => `${rot}_${phase}`;

  const saveCurrentState = () => {
    const key = getStorageKey(currentRotation, currentPhase);
    setSavedRotations(prev => ({
      ...prev,
      [key]: {
        positions: playerPositions,
        paths: paths,
        activePlayers: activePlayerIds
      }
    }));
  };

  useEffect(() => {
    if (currentLineupId && lineups.length > 0) {
      const key = getStorageKey(currentRotation, currentPhase);
      const updatedLineups = lineups.map(l => {
        if (l.id === currentLineupId) {
          return {
            ...l,
            roster: roster,
            rotations: {
              ...savedRotations,
              [key]: { 
                 positions: playerPositions,
                 paths: paths,
                 activePlayers: activePlayerIds
              }
            }
          };
        }
        return l;
      });
      localStorage.setItem(STORAGE_KEY_LINEUPS, JSON.stringify(updatedLineups));
    }
  }, [roster, savedRotations, playerPositions, paths, activePlayerIds, currentLineupId]); 

  // --- AUTO-SAVE ROSTER TO TEAM ---
  useEffect(() => {
    if (currentTeamId && teams.length > 0) {
        // Auto-update the active team's roster when the roster state changes
        const updatedTeams = teams.map(t => 
            t.id === currentTeamId ? { ...t, roster: roster } : t
        );
        // Only update if actually different to avoid render loops (simple check not implemented for brevity, but map creates new refs)
        // However, we need to sync this to localStorage.
        // We use a functional update to ensure we don't depend on stale `teams` state if it updates rapidly.
        // But `teams` is in dependency array? No, only `roster` triggers this.
        // Let's just do it.
        setTeams(updatedTeams);
        localStorage.setItem(STORAGE_KEY_TEAMS, JSON.stringify(updatedTeams));
    }
  }, [roster]);

  // --- TEAM MANAGEMENT ---
  const createTeam = () => {
      const newTeam = {
          id: `team_${Date.now()}`,
          name: newItemName || 'New Team',
          roster: defaultRoster
      };
      const updatedTeams = [...teams, newTeam];
      setTeams(updatedTeams);
      localStorage.setItem(STORAGE_KEY_TEAMS, JSON.stringify(updatedTeams));
      switchTeam(newTeam.id, updatedTeams);
      setNewItemName('');
      setIsTeamManagerOpen(false);
  };

  const switchTeam = (teamId, updatedTeamsList = null) => {
      saveCurrentState(); 
      setCurrentTeamId(teamId);
      localStorage.setItem(STORAGE_KEY_ACTIVE_TEAM, teamId);
      
      const allLineups = JSON.parse(localStorage.getItem(STORAGE_KEY_LINEUPS) || '[]');
      setLineups(allLineups);
      const teamLineups = allLineups.filter(l => l.teamId === teamId);
      
      const sourceTeams = updatedTeamsList || teams;
      const team = sourceTeams.find(t => t.id === teamId);

      if (team) {
        if (teamLineups.length > 0) {
            loadLineup(teamLineups[0].id, allLineups);
        } else {
            createLineup('Lineup 1', team.roster, teamId, allLineups);
        }
      }
      setIsTeamManagerOpen(false);
  };

  const deleteTeam = (id) => {
      if (teams.length <= 1) return alert("Cannot delete last team.");
      const updated = teams.filter(t => t.id !== id);
      setTeams(updated);
      localStorage.setItem(STORAGE_KEY_TEAMS, JSON.stringify(updated));
      if (currentTeamId === id) switchTeam(updated[0].id, updated);
  };

  const renameTeam = (id, newName) => {
      const updated = teams.map(t => t.id === id ? { ...t, name: newName } : t);
      setTeams(updated);
      localStorage.setItem(STORAGE_KEY_TEAMS, JSON.stringify(updated));
      setEditId(null);
  };

  // --- LINEUP MANAGEMENT ---
  const createLineup = (name, rosterToUse, teamId = currentTeamId, currentLineupsList = lineups) => {
    const newLineup = {
      id: `lineup_${Date.now()}`,
      teamId: teamId,
      name: name,
      roster: JSON.parse(JSON.stringify(rosterToUse)), 
      rotations: {} 
    };
    
    const updatedLineups = [...currentLineupsList, newLineup];
    setLineups(updatedLineups);
    localStorage.setItem(STORAGE_KEY_LINEUPS, JSON.stringify(updatedLineups));
    
    loadLineup(newLineup.id, updatedLineups);
    setIsLineupManagerOpen(false);
    setNewItemName('');
  };

  const loadLineup = (id, sourceLineups = lineups) => {
    const target = sourceLineups.find(l => l.id === id);
    if (!target) return;

    setCurrentLineupId(id);
    localStorage.setItem(STORAGE_KEY_ACTIVE_LINEUP, id);
    setRoster(target.roster);
    setSavedRotations(target.rotations || {});
    
    setCurrentRotation(1);
    setCurrentPhase('primary');
    setHistory([]);
    setIsLineupManagerOpen(false);
    setSelectedBenchPlayerId(null);
    
    const key = getStorageKey(1, 'primary');
    const data = target.rotations?.[key];
    if (data) {
       setPlayerPositions(data.positions);
       setPaths(data.paths);
       setActivePlayerIds(data.activePlayers);
    } else {
       initRotationDefaults(1, target.roster);
    }
  };

  const deleteLineup = (id) => {
      const teamLineups = lineups.filter(l => l.teamId === currentTeamId);
      if (teamLineups.length <= 1) return alert("Must have at least one lineup.");
      
      const updated = lineups.filter(l => l.id !== id);
      setLineups(updated);
      localStorage.setItem(STORAGE_KEY_LINEUPS, JSON.stringify(updated));
      
      if (currentLineupId === id) {
          const next = updated.find(l => l.teamId === currentTeamId);
          loadLineup(next.id, updated);
      }
  };

  const renameLineup = (id, newName) => {
      const updated = lineups.map(l => l.id === id ? { ...l, name: newName } : l);
      setLineups(updated);
      localStorage.setItem(STORAGE_KEY_LINEUPS, JSON.stringify(updated));
      setEditId(null);
  };

  const clearAllData = () => {
      if (confirm("Are you sure? This will delete ALL teams and lineups on this device.")) {
          localStorage.removeItem(STORAGE_KEY_TEAMS);
          localStorage.removeItem(STORAGE_KEY_LINEUPS);
          localStorage.removeItem(STORAGE_KEY_ACTIVE_TEAM);
          localStorage.removeItem(STORAGE_KEY_ACTIVE_LINEUP);
          window.location.reload();
      }
  };

  // --- LOGIC ---
  const initRotationDefaults = (rotNum, currentRoster) => {
      const positions = calculateDefaultPositions(rotNum, currentRoster);
      const newActiveIds = Object.keys(positions);
      
      setActivePlayerIds(newActiveIds);
      setPlayerPositions(positions);
      setPaths([]);
  };

  const handleViewChange = (newRot, newPhase) => {
    saveCurrentState();
    const key = getStorageKey(newRot, newPhase);
    
    if (savedRotations[key]) {
      const data = savedRotations[key];
      setPlayerPositions(data.positions);
      setPaths(data.paths);
      setActivePlayerIds(data.activePlayers);
    } else {
      if (newRot === currentRotation && savedRotations[getStorageKey(newRot, currentPhase)]) {
          initRotationDefaults(newRot, roster);
      } else {
          initRotationDefaults(newRot, roster);
      }
    }
    
    setCurrentRotation(newRot);
    setCurrentPhase(newPhase);
    setHistory([]);
    setSelectedBenchPlayerId(null);
  };

  const handleExport = (elementId, filename) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    if (!window.html2canvas) {
        alert("Image generation tool is loading. Please wait a moment and try again.");
        return;
    }

    setIsExporting(true);
    
    setTimeout(() => {
        window.html2canvas(element, { 
            scale: 2, 
            useCORS: true, 
            logging: false,
            backgroundColor: '#ffffff' 
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `${filename}.png`;
            link.href = canvas.toDataURL();
            link.click();
            setIsExporting(false);
        }).catch(err => {
            console.error(err);
            alert("Error generating image.");
            setIsExporting(false);
        });
    }, 100);
  };

  // --- HELPERS FOR CONSTRAINTS ---
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

  // --- GLOBAL EVENT LISTENERS (TOUCH + MOUSE) ---
  const getCoords = (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
        return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    const handleWindowMove = (e) => {
        const { x, y } = getCoords(e);
        setMousePos({ x, y });
        const rect = courtRef.current?.getBoundingClientRect();
        
        if ((isDrawing || draggedPlayer) && e.cancelable) {
            e.preventDefault();
        }

        if (!rect) return;

        if (mode === 'move' && draggedPlayer && !draggedPlayer.isBench) {
             let newX = ((x - rect.left) / rect.width) * 100;
             let newY = ((y - rect.top) / rect.height) * 100;
             if (enforceRules) {
                const limits = getConstraints(draggedPlayer.id);
                newX = Math.max(limits.minX, Math.min(limits.maxX, newX));
                newY = Math.max(limits.minY, Math.min(limits.maxY, newY));
             }
             setPlayerPositions(prev => ({ ...prev, [draggedPlayer.id]: { x: newX, y: newY } }));
        } else if (mode === 'draw' && isDrawing) {
             const cx = ((x - rect.left) / rect.width) * 100;
             const cy = ((y - rect.top) / rect.height) * 100;
             if (cx > -20 && cx < 120 && cy > -20 && cy < 120) {
                setCurrentPath(prev => ({ ...prev, points: [...prev.points, { x: cx, y: cy }] }));
             }
        }
    };

    const handleWindowUp = (e) => {
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
                       
                       // GUARD: Prevent replacing self (fixes disappearing bug if player is ghost-duplicated)
                       if (benchId !== nearestId) {
                           const newActive = activePlayerIds.map(id => id === nearestId ? benchId : id);
                           setActivePlayerIds(newActive);
                           setPlayerPositions(prev => {
                               const next = {...prev};
                               // Safety check: ensure the court position still exists
                               if (next[nearestId]) {
                                   next[benchId] = { ...next[nearestId] }; // Deep copy position
                                   delete next[nearestId];
                               }
                               return next;
                           });
                       }
                   }
               }
           }
           setDraggedPlayer(null);
       } else if (mode === 'draw' && isDrawing) {
           setIsDrawing(false);
           if (currentPath && currentPath.points.length > 1) {
               setPaths(prev => [...prev, currentPath]);
           }
           setCurrentPath(null);
       }
    };

    window.addEventListener('mousemove', handleWindowMove);
    window.addEventListener('mouseup', handleWindowUp);
    window.addEventListener('touchmove', handleWindowMove, { passive: false });
    window.addEventListener('touchend', handleWindowUp);
    
    return () => {
        window.removeEventListener('mousemove', handleWindowMove);
        window.removeEventListener('mouseup', handleWindowUp);
        window.removeEventListener('touchmove', handleWindowMove);
        window.removeEventListener('touchend', handleWindowUp);
    };
  }, [mode, draggedPlayer, isDrawing, enforceRules, currentPath, playerPositions, activePlayerIds]);

  const handleTokenDown = (e, playerId, isBench) => {
      if (isBench && mode === 'move') {
          if (selectedBenchPlayerId === playerId) {
              setSelectedBenchPlayerId(null);
          } else {
              setSelectedBenchPlayerId(playerId);
          }
          saveToHistory();
          setDraggedPlayer({ id: playerId, isBench });
      } 
      else if (!isBench && mode === 'move') {
          if (selectedBenchPlayerId) {
              const benchId = selectedBenchPlayerId;
              const courtId = playerId;
              const newActive = activePlayerIds.map(id => id === courtId ? benchId : id);
              setActivePlayerIds(newActive);
              setPlayerPositions(prev => {
                  const next = {...prev};
                  next[benchId] = next[courtId]; 
                  delete next[courtId]; 
                  return next;
              });
              setSelectedBenchPlayerId(null); 
          } else {
              saveToHistory();
              setDraggedPlayer({ id: playerId, isBench });
          }
      }
  };

  const handleCourtDown = (e) => {
      if (mode === 'draw') {
          saveToHistory();
          setIsDrawing(true);
          const { x, y } = getCoords(e);
          const rect = courtRef.current.getBoundingClientRect();
          const cx = ((x - rect.left) / rect.width) * 100;
          const cy = ((y - rect.top) / rect.height) * 100;
          setCurrentPath({ points: [{x: cx, y: cy}], color: drawColor });
      } else if (mode === 'move') {
          setSelectedBenchPlayerId(null);
      }
  };

  const saveToHistory = () => {
    setHistory(prev => [...prev, {
      playerPositions: JSON.parse(JSON.stringify(playerPositions)),
      paths: JSON.parse(JSON.stringify(paths)),
      activePlayers: [...activePlayerIds]
    }]);
    if (history.length > 20) setHistory(prev => prev.slice(1));
  };

  const undo = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setPlayerPositions(previousState.playerPositions);
    setPaths(previousState.paths);
    setActivePlayerIds(previousState.activePlayers);
    setHistory(prev => prev.slice(0, -1));
  };
  
  const updateRoster = (index, field, value) => {
    if (field === 'number' && value.length > 4) return; 
    const newRoster = [...roster];
    newRoster[index] = { ...newRoster[index], [field]: value };
    setRoster(newRoster);
  };

  const phases = [
    { id: 'primary', label: 'Serve Receive 1' },
    { id: 'secondary', label: 'Serve Receive 2' },
    { id: 'transition', label: 'Transition' },
    { id: 'defense', label: 'Base Defense' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans select-none">
      {/* Ghost Token */}
      {draggedPlayer && draggedPlayer.isBench && (
           <PlayerToken 
              player={roster.find(p => p.id === draggedPlayer.id)} 
              isDragging={true} 
              isBench={true}
              style={{ position: 'fixed', left: mousePos.x, top: mousePos.y }}
           />
      )}

      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 p-4 sticky top-0 z-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
                <div className="bg-red-600 p-2 rounded-lg text-white shrink-0">
                    <ClubLogo size={24} />
                </div>
                <div className="min-w-0">
                    <h1 className="text-xl font-black tracking-tight text-white whitespace-nowrap overflow-hidden text-ellipsis">ACADEMYVB <span className="text-red-500">PRO</span></h1>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        <span className="font-bold text-white">{teams.find(t => t.id === currentTeamId)?.name}</span>
                        <ChevronRight size={12} />
                        <span className="font-bold text-slate-300">{lineups.find(l => l.id === currentLineupId)?.name || 'Untitled'}</span>
                    </div>
                </div>
            </div>

            {/* NAV TABS - Scrollable on mobile */}
            <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700 overflow-x-auto max-w-[200px] md:max-w-none no-scrollbar mx-2">
                <button onClick={() => setActiveTab('roster')} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'roster' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}>
                    <Users size={16} /> Roster
                </button>
                <button onClick={() => setActiveTab('board')} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'board' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}>
                    <CourtIcon size={16} /> Court
                </button>
                <button onClick={() => { setActiveTab('export'); saveCurrentState(); }} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'export' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}>
                    <ClipboardList size={16} /> Game Plan
                </button>
            </div>

            <div className="flex items-center gap-2 shrink-0">
                 <button onClick={() => setIsTeamManagerOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-medium hover:bg-slate-700 transition-colors">
                    <Briefcase size={16} className="text-blue-400" /> <span className="hidden md:inline">Teams</span>
                 </button>
                 <button onClick={() => setIsLineupManagerOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-medium hover:bg-slate-700 transition-colors">
                    <FolderOpen size={16} className="text-red-400" /> <span className="hidden md:inline">Lineups</span>
                 </button>
            </div>
        </div>
      </header>

      {/* TEAM MANAGER MODAL */}
      {isTeamManagerOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="bg-slate-900 border border-slate-700 p-0 rounded-xl shadow-2xl w-full max-w-[500px] overflow-hidden">
                  <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800">
                      <h2 className="text-xl font-bold text-white">My Teams</h2>
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
                  <div className="p-6 bg-slate-800 border-t border-slate-700">
                      <div className="flex gap-2 mb-4">
                          <input 
                            type="text" 
                            placeholder="New Team Name (e.g. 17 National)" 
                            className="flex-1 p-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            value={newItemName}
                            onChange={(e) => setNewItemName(e.target.value)}
                          />
                          <button onClick={createTeam} className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm transition-colors flex items-center gap-2">
                              <Plus size={16} /> Create Team
                          </button>
                      </div>
                      <button onClick={clearAllData} className="w-full p-2 bg-slate-800 hover:bg-red-900/30 text-red-400 rounded-lg font-medium text-xs flex items-center justify-center gap-2 border border-slate-700 hover:border-red-800">
                          <AlertTriangle size={14} /> Reset All Data
                      </button>
                  </div>
              </div>
          </div>
      )}

      {/* LINEUP MANAGER MODAL */}
      {isLineupManagerOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="bg-slate-900 border border-slate-700 p-0 rounded-xl shadow-2xl w-full max-w-[500px] overflow-hidden">
                  <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800">
                      <h2 className="text-xl font-bold text-white">Lineups <span className="text-slate-500 text-sm ml-2">for {teams.find(t=>t.id===currentTeamId)?.name}</span></h2>
                      <button onClick={() => setIsLineupManagerOpen(false)} className="text-slate-400 hover:text-white"><X size={20} /></button>
                  </div>
                  
                  <div className="p-4 overflow-y-auto flex-1 space-y-2">
                      {lineups.filter(l => l.teamId === currentTeamId).map(l => (
                          <div key={l.id} className={`flex items-center justify-between p-3 rounded-lg border transition-all ${currentLineupId === l.id ? 'bg-red-900/20 border-red-500/50' : 'bg-slate-800 border-slate-700 hover:border-slate-500'}`}>
                              {editId === l.id ? (
                                  <input 
                                      className="bg-slate-900 border border-red-500 rounded px-2 py-1 text-sm text-white flex-1 mr-2"
                                      value={editName}
                                      onChange={(e) => setEditName(e.target.value)}
                                      onBlur={() => renameLineup(l.id, editName)}
                                      onKeyDown={(e) => e.key === 'Enter' && renameLineup(l.id, editName)}
                                      autoFocus
                                  />
                              ) : (
                                  <button onClick={() => loadLineup(l.id)} className="flex-1 text-left font-bold text-sm text-slate-200">{l.name}</button>
                              )}
                              <div className="flex items-center gap-2">
                                  {currentLineupId === l.id && <span className="text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-full">ACTIVE</span>}
                                  <button onClick={(e) => { e.stopPropagation(); setEditId(l.id); setEditName(l.name); }} className="p-2 text-slate-500 hover:text-blue-400"><Pencil size={14} /></button>
                                  <button onClick={(e) => { e.stopPropagation(); deleteLineup(l.id); }} className="p-2 text-slate-500 hover:text-red-500"><Trash2 size={14} /></button>
                              </div>
                          </div>
                      ))}
                  </div>

                  <div className="p-6 bg-slate-800 border-t border-slate-700">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Create New Lineup</h3>
                      <input 
                        type="text" 
                        placeholder="Lineup Name (e.g. Regionals Day 1)" 
                        className="w-full p-3 bg-slate-900 border border-slate-600 rounded-lg mb-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-red-500 outline-none"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                      />
                      {/* SIMPLIFIED LINEUP CREATION BUTTON */}
                      <button 
                        onClick={() => createLineup(newItemName || 'New Lineup', roster)} 
                        className="w-full p-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2"
                      >
                          <Plus size={16} /> Create Lineup
                      </button>
                  </div>
              </div>
          </div>
      )}

      <main className="max-w-7xl mx-auto p-4 md:p-6 pb-20 md:pb-6">
        
        {/* --- BOARD VIEW --- */}
        {activeTab === 'board' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Controls */}
            {/* Mobile: Show Bench Above Court */}
            <div className="block lg:hidden lg:col-span-3 space-y-4">
                 {/* Mobile Bench Duplicate */}
                 <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Bench / Subs</h3>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {roster.filter(p => !activePlayerIds.includes(p.id)).map(player => (
                            <div 
                                key={player.id} 
                                className={`relative flex-none flex flex-col items-center p-2 rounded-lg border w-16 transition-all ${selectedBenchPlayerId === player.id ? 'bg-blue-900/50 border-blue-500 ring-2 ring-blue-500' : 'bg-slate-900 border-slate-700'}`}
                                onMouseDown={(e) => handleTokenDown(e, player.id, true)}
                                onTouchStart={(e) => handleTokenDown(e, player.id, true)}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-1 shadow-sm ${getRoleColor(player.role)}`}>
                                    {player.number}
                                </div>
                                <div className="text-[9px] font-bold text-slate-300 truncate w-full text-center">{player.name}</div>
                            </div>
                        ))}
                    </div>
                    {selectedBenchPlayerId && (
                        <div className="text-center text-xs text-blue-400 mt-2 font-bold animate-pulse">
                            Tap a player on court to swap
                        </div>
                    )}
                </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-xl">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Select Rotation</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <button
                      key={num}
                      onClick={() => handleViewChange(num, currentPhase)}
                      className={`py-3 rounded-xl font-black text-lg transition-all ${currentRotation === num ? 'bg-red-600 text-white shadow-lg scale-105 ring-2 ring-red-400' : 'bg-slate-900 text-slate-400 hover:bg-slate-700'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-xl">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Game Phase</h3>
                <div className="flex flex-col gap-2">
                   {phases.map(p => (
                       <button
                         key={p.id}
                         onClick={() => handleViewChange(currentRotation, p.id)}
                         className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold transition-all ${currentPhase === p.id ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-slate-400 hover:bg-slate-700'}`}
                       >
                           {p.label}
                           {currentPhase === p.id && <div className="w-2 h-2 bg-red-500 rounded-full" />}
                       </button>
                   ))}
                </div>
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                     <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Tools</h3>
                     <button onClick={() => { saveToHistory(); setPaths([]); }} className="text-xs text-rose-500 hover:text-rose-400 flex items-center gap-1 font-bold"><Trash2 size={12} /> Clear Ink</button>
                </div>
                
                <div className="flex bg-slate-900 p-1 rounded-xl mb-4">
                    <button onClick={() => setMode('move')} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'move' ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}><Move size={16} /> Move</button>
                    <button onClick={() => setMode('draw')} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'draw' ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}><Pencil size={16} /> Draw</button>
                </div>

                {mode === 'draw' && (
                    <div className="flex gap-3 justify-center mb-4">
                      {['#000000', '#22c55e', '#3b82f6', '#ef4444', '#facc15', '#ffffff'].map(c => (
                          <button key={c} onClick={() => setDrawColor(c)} className={`w-8 h-8 rounded-full border-2 border-slate-600 shadow-sm transition-transform hover:scale-110 ${drawColor === c ? 'ring-2 ring-offset-2 ring-slate-400 scale-110 border-white' : ''}`} style={{ backgroundColor: c }} />
                      ))}
                    </div>
                )}
                
                <button onClick={() => setEnforceRules(!enforceRules)} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border text-xs font-bold transition-colors ${enforceRules ? 'bg-emerald-900/30 border-emerald-500/50 text-emerald-400' : 'bg-slate-900 border-slate-700 text-slate-500'}`}>
                    <span className="flex items-center gap-2">{enforceRules ? <ShieldCheck size={16} /> : <ShieldAlert size={16} />} Overlap Rules</span>
                    <span className={`px-2 py-0.5 rounded ${enforceRules ? 'bg-emerald-500 text-emerald-950' : 'bg-slate-700 text-slate-400'}`}>{enforceRules ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>

            {/* MAIN COURT */}
            <div className="lg:col-span-6 flex flex-col items-center">
               
               <div className="w-full max-w-[500px] flex justify-between items-center mb-3 px-1">
                  <button 
                      onClick={undo} 
                      disabled={history.length === 0} 
                      className={`text-sm flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-colors ${history.length === 0 ? 'text-slate-600 bg-slate-800' : 'bg-slate-700 text-white hover:bg-slate-600'}`}
                  >
                      <Undo size={14} /> Undo
                  </button>
                  <button 
                      onClick={() => handleExport('court-capture-area', `Rotation-${currentRotation}-${currentPhase}`)} 
                      disabled={isExporting}
                      className={`text-sm flex items-center gap-2 px-4 py-2 rounded-full font-bold text-white transition-colors ${isExporting ? 'bg-slate-600 cursor-wait' : 'bg-slate-700 hover:bg-slate-600'}`}
                  >
                      {isExporting ? <Loader2 size={14} className="animate-spin" /> : <Camera size={14} />}
                      {isExporting ? 'Saving...' : 'Download Image'}
                  </button>
               </div>

               <div className="w-full bg-slate-800 p-2 rounded-2xl shadow-2xl ring-1 ring-slate-700">
                    <Court courtRef={courtRef} paths={paths} currentPath={currentPath} onMouseDown={handleCourtDown}>
                      {Object.entries(playerPositions).map(([id, pos]) => {
                        const player = roster.find(p => p.id === id);
                        if (!player) return null;
                        return <PlayerToken key={id} player={player} x={pos.x} y={pos.y} isDragging={draggedPlayer?.id === id && !draggedPlayer?.isBench} isBench={false} onStartInteraction={handleTokenDown} />;
                      })}
                      {enforceRules && mode === 'move' && <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm opacity-90 pointer-events-none z-40 uppercase tracking-wider">Rules Active</div>}
                    </Court>
               </div>
               
               <div className="mt-6 flex justify-center">
                  {/* UPDATED RESET BUTTON TEXT */}
                  <button onClick={() => initRotationDefaults(currentRotation, roster)} className="text-slate-500 hover:text-white text-xs font-bold flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                     <RefreshCw size={12} /> Reset Positions & Drawings
                   </button>
               </div>
            </div>

            {/* DESKTOP BENCH */}
            <div className="hidden lg:block lg:col-span-3 space-y-4">
                <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 h-full">
                    <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Bench / Subs</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {roster.filter(p => !activePlayerIds.includes(p.id)).map(player => (
                            <div 
                                key={player.id} 
                                className="relative flex flex-col items-center p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-red-500 cursor-grab active:cursor-grabbing group transition-all"
                                onMouseDown={(e) => handleTokenDown(e, player.id, true)}
                                onTouchStart={(e) => handleTokenDown(e, player.id, true)}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 shadow-sm ${getRoleColor(player.role)}`}>
                                    {player.number}
                                </div>
                                <div className="text-xs font-bold text-slate-300">{player.name}</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase">{player.role}</div>
                            </div>
                        ))}
                    </div>
                    {roster.filter(p => !activePlayerIds.includes(p.id)).length === 0 && (
                         <div className="text-center text-slate-600 text-sm py-10 italic">Empty Bench</div>
                    )}
                </div>
            </div>
          </div>
        )}

        {/* --- EXPORT GRID VIEW (Fixed 8.5x11 Ratio) --- */}
        {activeTab === 'export' && (
            <div className="bg-slate-100 min-h-screen flex justify-center py-8">
                {/* FIXED DIMENSIONS: 1224px width, 1584px height (8.5x11 Scaled) */}
                <div id="full-report-grid" className="bg-white text-slate-900 w-[1224px] h-[1584px] shadow-2xl p-12 relative overflow-hidden flex flex-col box-border">
                    
                    {/* Page Header */}
                    <div className="flex justify-between items-end border-b-4 border-slate-900 pb-6 mb-8">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="text-red-600"><ClubLogo size={56} /></div>
                                <h1 className="text-5xl font-black text-slate-900 tracking-tight">GAME PLAN</h1>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-500 pl-2">{lineups.find(l => l.id === currentLineupId)?.name}</h2>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Team</div>
                            <div className="text-3xl font-black text-slate-900">{teams.find(t=>t.id===currentTeamId)?.name}</div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 gap-6 flex-1">
                        {[1, 2, 3, 4, 5, 6].map(rot => (
                            <div key={rot} className="flex gap-6 h-[190px] border-b border-slate-200 pb-4">
                                {/* Left Col: Rotation Header & Square (Fixed Width) */}
                                <div className="w-32 flex-none flex flex-col items-center justify-center gap-2 border-r border-slate-200 pr-6">
                                    <div className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm pb-[2px] leading-none pt-0.5">R{rot}</div>
                                    <div className="w-20 h-20">
                                        <RotationSquare rotation={rot} roster={roster} />
                                    </div>
                                </div>

                                {/* Right Col: Phases (Fixed 4 Columns) */}
                                <div className="flex-1 grid grid-cols-4 gap-6">
                                    {phases.map(phase => {
                                        const key = getStorageKey(rot, phase.id);
                                        // Auto-populate data if missing (Bug fix for empty cells)
                                        let data = savedRotations[key];

                                        // FORCE CURRENT STATE IF VIEW MATCHES (Fixes drawing sync issues)
                                        if (rot === currentRotation && phase.id === currentPhase) {
                                            data = {
                                                positions: playerPositions,
                                                paths: paths,
                                                activePlayers: activePlayerIds
                                            };
                                        }
                                        
                                        // AUTO-HEAL: If data is missing OR if the players in data don't exist in current roster
                                        let validData = true;
                                        if (data && data.positions) {
                                            const savedIDs = Object.keys(data.positions);
                                            // Check if at least 6 saved players still exist in roster
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
                                                {/* Modified container to center the square court without forcing clip */}
                                                <div className="flex-1 border border-slate-900 rounded-lg flex justify-center items-center overflow-hidden bg-white p-1">
                                                    <div className="h-full aspect-square relative">
                                                        <Court 
                                                            small={true} 
                                                            paths={data.paths || []} 
                                                            readOnly={true}
                                                        >
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

                    {/* Footer */}
                    <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center text-xs font-bold text-slate-400 uppercase">
                        <div>Generated by ACADEMYVB PRO</div>
                        <div>{new Date().toLocaleDateString()}</div>
                    </div>
                </div>

                {/* Floating Download Button (Outside capture area) */}
                <div className="fixed bottom-8 right-8 z-[9999]">
                    <button 
                        onClick={() => handleExport('full-report-grid', 'GamePlan-Full')}
                        disabled={isExporting}
                        className={`bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl hover:scale-105 transition-all ${isExporting ? 'opacity-70 cursor-wait' : ''}`}
                    >
                        {isExporting ? <Loader2 size={24} className="animate-spin" /> : <Download size={24} />}
                        {isExporting ? 'Generating...' : 'Download Image'}
                    </button>
                </div>
            </div>
        )}

        {/* --- ROSTER VIEW --- */}
        {activeTab === 'roster' && (
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
             <div className="p-6 border-b border-slate-700 flex flex-col md:flex-row justify-between items-center bg-slate-900/50 gap-4">
              <div>
                  <h2 className="text-xl font-bold text-white">Team Roster</h2>
                  <p className="text-xs text-slate-400 mt-1">Editing <strong>{teams.find(t=>t.id===currentTeamId)?.name}</strong></p>
              </div>
              <div className="flex gap-3">
                 <button onClick={() => setRoster(prev => [...prev, { id: `p${Date.now()}`, role: 'DS', name: 'New', number: '' }])} className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-500 transition-colors"><UserPlus size={16} /> Add Player</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {roster.map((player, idx) => (
                <div key={player.id} className="p-4 border border-slate-700 bg-slate-900 rounded-xl relative group hover:border-red-500 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{idx < 6 ? `Starter ${idx + 1}` : 'Bench'}</div>
                    {roster.length > 6 && (
                        <button onClick={() => setRoster(prev => prev.filter(p => p.id !== player.id))} className="text-slate-500 hover:text-rose-500 transition-colors"><Trash2 size={14} /></button>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    {/* Fixed Color Logic Here */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${getRoleColor(player.role)}`}>
                        {player.number || '#'}
                    </div>
                    <div className="flex-1">
                        <input 
                            type="text" 
                            value={player.name} 
                            onChange={(e) => updateRoster(idx, 'name', e.target.value)} 
                            className="w-full bg-transparent font-bold text-white border-b border-slate-700 focus:border-red-500 focus:outline-none py-1"
                            placeholder="Name"
                        />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Role</label>
                        <select value={player.role} onChange={(e) => updateRoster(idx, 'role', e.target.value)} className="w-full p-2 bg-slate-800 border border-slate-600 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-red-500">
                            {["S", "OH1", "OH2", "M1", "M2", "OPP", "L", "DS", "SS", "OH", "M"].map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Number / Initials</label>
                        <input 
                            type="text" 
                            value={player.number} 
                            onChange={(e) => updateRoster(idx, 'number', e.target.value)} 
                            className="w-full p-2 bg-slate-800 border border-slate-600 rounded-lg text-xs text-center text-white focus:outline-none focus:ring-2 focus:ring-red-500" 
                            placeholder="# / Init"
                        />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
