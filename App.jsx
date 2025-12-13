{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red183\green111\blue247;\red23\green24\blue24;\red202\green202\blue202;
\red54\green192\blue160;\red212\green212\blue212;\red113\green192\blue131;\red109\green115\blue120;\red246\green124\blue48;
}
{\*\expandedcolortbl;;\cssrgb\c77255\c54118\c97647;\cssrgb\c11765\c12157\c12549;\cssrgb\c83137\c83137\c83137;
\cssrgb\c23922\c78824\c69020;\cssrgb\c86275\c86275\c86275;\cssrgb\c50588\c78824\c58431;\cssrgb\c50196\c52549\c54510;\cssrgb\c98039\c56471\c24314;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 React\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  useState\cf6 \strokec6 ,\cf4 \strokec4  useRef\cf6 \strokec6 ,\cf4 \strokec4  useEffect \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'react'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf5 \strokec5 Users\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Pencil\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Move\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Trash2\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Save\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Undo\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 ChevronRight\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Eraser\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Settings\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 ShieldCheck\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 ShieldAlert\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 GripVertical\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 UserPlus\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 X\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 RefreshCw\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Camera\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 FolderOpen\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Plus\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 FileText\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Download\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 LayoutGrid\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 ClipboardList\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Edit3\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Briefcase\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 AlertTriangle\cf4 \strokec4  \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'lucide-react'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- CUSTOM ICONS ---\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 ClubLogo\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  size \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 24\cf6 \strokec6 ,\cf4 \strokec4  className \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 ""\cf4 \strokec4  \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 <\cf4 \strokec4 svg\cb1 \
\cb3     xmlns\cf6 \strokec6 =\cf7 \strokec7 "http://www.w3.org/2000/svg"\cf4 \cb1 \strokec4 \
\cb3     width\cf6 \strokec6 =\{\cf4 \strokec4 size\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     height\cf6 \strokec6 =\{\cf4 \strokec4 size\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     viewBox\cf6 \strokec6 =\cf7 \strokec7 "0 0 100 100"\cf4 \cb1 \strokec4 \
\cb3     fill\cf6 \strokec6 =\cf7 \strokec7 "none"\cf4 \cb1 \strokec4 \
\cb3     stroke\cf6 \strokec6 =\cf7 \strokec7 "currentColor"\cf4 \cb1 \strokec4 \
\cb3     strokeWidth\cf6 \strokec6 =\cf7 \strokec7 "8"\cf4 \cb1 \strokec4 \
\cb3     strokeLinecap\cf6 \strokec6 =\cf7 \strokec7 "round"\cf4 \cb1 \strokec4 \
\cb3     className\cf6 \strokec6 =\{\cf4 \strokec4 className\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf8 \strokec8 /* Centered Triskelion Geometry */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 g transform\cf6 \strokec6 =\cf7 \strokec7 "translate(50,58)"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{[\cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 120\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 240\cf6 \strokec6 ].\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 angle\cf6 \strokec6 ,\cf4 \strokec4  i\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 path\cb1 \
\cb3           key\cf6 \strokec6 =\{\cf4 \strokec4 i\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           d\cf6 \strokec6 =\cf7 \strokec7 "M 0 0 Q -15 -25 0 -48"\cf4 \strokec4  \cb1 \
\cb3           transform\cf6 \strokec6 =\{\cf7 \strokec7 `rotate(\cf6 \strokec6 $\{\cf4 \strokec4 angle\cf6 \strokec6 \}\cf7 \strokec7 )`\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         />\cb1 \
\cb3       \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 g\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 </\cf4 \strokec4 svg\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 );\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 CourtIcon\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  size \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 24\cf6 \strokec6 ,\cf4 \strokec4  className \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 ""\cf4 \strokec4  \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 <\cf4 \strokec4 svg\cb1 \
\cb3     xmlns\cf6 \strokec6 =\cf7 \strokec7 "http://www.w3.org/2000/svg"\cf4 \cb1 \strokec4 \
\cb3     width\cf6 \strokec6 =\{\cf4 \strokec4 size\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     height\cf6 \strokec6 =\{\cf4 \strokec4 size\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     viewBox\cf6 \strokec6 =\cf7 \strokec7 "0 0 24 24"\cf4 \cb1 \strokec4 \
\cb3     fill\cf6 \strokec6 =\cf7 \strokec7 "none"\cf4 \cb1 \strokec4 \
\cb3     stroke\cf6 \strokec6 =\cf7 \strokec7 "currentColor"\cf4 \cb1 \strokec4 \
\cb3     strokeWidth\cf6 \strokec6 =\cf7 \strokec7 "2"\cf4 \cb1 \strokec4 \
\cb3     strokeLinecap\cf6 \strokec6 =\cf7 \strokec7 "round"\cf4 \cb1 \strokec4 \
\cb3     strokeLinejoin\cf6 \strokec6 =\cf7 \strokec7 "round"\cf4 \cb1 \strokec4 \
\cb3     className\cf6 \strokec6 =\{\cf4 \strokec4 className\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 rect x\cf6 \strokec6 =\cf7 \strokec7 "5"\cf4 \strokec4  y\cf6 \strokec6 =\cf7 \strokec7 "2"\cf4 \strokec4  width\cf6 \strokec6 =\cf7 \strokec7 "14"\cf4 \strokec4  height\cf6 \strokec6 =\cf7 \strokec7 "20"\cf4 \strokec4  rx\cf6 \strokec6 =\cf7 \strokec7 "2"\cf4 \strokec4  />\cb1 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 line x1\cf6 \strokec6 =\cf7 \strokec7 "5"\cf4 \strokec4  y1\cf6 \strokec6 =\cf7 \strokec7 "2"\cf4 \strokec4  x2\cf6 \strokec6 =\cf7 \strokec7 "19"\cf4 \strokec4  y2\cf6 \strokec6 =\cf7 \strokec7 "2"\cf4 \strokec4  strokeWidth\cf6 \strokec6 =\cf7 \strokec7 "4"\cf4 \strokec4  />\cb1 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 line x1\cf6 \strokec6 =\cf7 \strokec7 "5"\cf4 \strokec4  y1\cf6 \strokec6 =\cf7 \strokec7 "9"\cf4 \strokec4  x2\cf6 \strokec6 =\cf7 \strokec7 "19"\cf4 \strokec4  y2\cf6 \strokec6 =\cf7 \strokec7 "9"\cf4 \strokec4  />\cb1 \
\cb3   \cf6 \strokec6 </\cf4 \strokec4 svg\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 );\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- HELPERS ---\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  getRoleColor \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 role\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 role \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'S'\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf7 \strokec7 'bg-yellow-400 text-yellow-950 border-yellow-500'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 role \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'L'\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf7 \strokec7 'bg-white text-slate-900 border-slate-300'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 role\cf6 \strokec6 .\cf4 \strokec4 startsWith\cf6 \strokec6 (\cf7 \strokec7 'M'\cf6 \strokec6 ))\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf7 \strokec7 'bg-indigo-600 text-white border-indigo-700'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 role\cf6 \strokec6 .\cf4 \strokec4 startsWith\cf6 \strokec6 (\cf7 \strokec7 'OH'\cf6 \strokec6 ))\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf7 \strokec7 'bg-emerald-600 text-white border-emerald-700'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 role \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'OPP'\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  role \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'DS'\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  role \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'SS'\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf7 \strokec7 'bg-rose-600 text-white border-rose-700'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf7 \strokec7 'bg-slate-500 text-white border-slate-600'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  getPlayerZone \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 playerIndex\cf6 \strokec6 ,\cf4 \strokec4  rotationNumber\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  zoneSequence \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 6\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 5\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  startIdx \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 rotationNumber \cf6 \strokec6 -\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 %\cf4 \strokec4  \cf9 \strokec9 6\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 let\cf4 \strokec4  seqIndex \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 startIdx \cf6 \strokec6 -\cf4 \strokec4  playerIndex\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 %\cf4 \strokec4  \cf9 \strokec9 6\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 seqIndex \cf6 \strokec6 <\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\cf4 \strokec4  seqIndex \cf6 \strokec6 +=\cf4 \strokec4  \cf9 \strokec9 6\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 return\cf4 \strokec4  zoneSequence\cf6 \strokec6 [\cf4 \strokec4 seqIndex\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  calculateDefaultPositions \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 rotNum\cf6 \strokec6 ,\cf4 \strokec4  currentRoster\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 const\cf4 \strokec4  starters \cf6 \strokec6 =\cf4 \strokec4  currentRoster\cf6 \strokec6 .\cf4 \strokec4 slice\cf6 \strokec6 (\cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 6\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  newPositions \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\};\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 starters\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  newPositions\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 const\cf4 \strokec4  courtZones \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 80\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 75\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \strokec4  \cb1 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ,\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 80\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 18\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \strokec4  \cb1 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ,\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 50\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 18\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \strokec4  \cb1 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 ,\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 20\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 18\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \strokec4  \cb1 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 5\cf6 \strokec6 ,\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 20\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 75\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \strokec4  \cb1 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 6\cf6 \strokec6 ,\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 50\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 75\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \strokec4  \cb1 \
\cb3     \cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     starters\cf6 \strokec6 .\cf4 \strokec4 forEach\cf6 \strokec6 ((\cf4 \strokec4 player\cf6 \strokec6 ,\cf4 \strokec4  index\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf4 \strokec4  zoneId \cf6 \strokec6 =\cf4 \strokec4  getPlayerZone\cf6 \strokec6 (\cf4 \strokec4 index\cf6 \strokec6 ,\cf4 \strokec4  rotNum\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf4 \strokec4  zone \cf6 \strokec6 =\cf4 \strokec4  courtZones\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 z \cf6 \strokec6 =>\cf4 \strokec4  z\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  zoneId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 zone\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3             newPositions\cf6 \strokec6 [\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  zone\cf6 \strokec6 .\cf4 \strokec4 x\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  zone\cf6 \strokec6 .\cf4 \strokec4 y \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  newPositions\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- COMPONENTS ---\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 RotationSquare\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  rotation\cf6 \strokec6 ,\cf4 \strokec4  roster \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  zones \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\};\cf4 \cb1 \strokec4 \
\cb3   roster\cf6 \strokec6 .\cf4 \strokec4 slice\cf6 \strokec6 (\cf9 \strokec9 0\cf6 \strokec6 ,\cf9 \strokec9 6\cf6 \strokec6 ).\cf4 \strokec4 forEach\cf6 \strokec6 ((\cf4 \strokec4 player\cf6 \strokec6 ,\cf4 \strokec4  idx\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  z \cf6 \strokec6 =\cf4 \strokec4  getPlayerZone\cf6 \strokec6 (\cf4 \strokec4 idx\cf6 \strokec6 ,\cf4 \strokec4  rotation\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       zones\cf6 \strokec6 [\cf4 \strokec4 z\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  player\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  renderCell \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 zoneId\cf6 \strokec6 ,\cf4 \strokec4  borderClasses\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  p \cf6 \strokec6 =\cf4 \strokec4  zones\cf6 \strokec6 [\cf4 \strokec4 zoneId\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `flex flex-col items-center justify-center \cf6 \strokec6 $\{\cf4 \strokec4 borderClasses\cf6 \strokec6 \}\cf7 \strokec7  bg-white h-full overflow-hidden`\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "font-black text-slate-900 text-[10px] sm:text-[12px] leading-none mb-0.5"\cf6 \strokec6 >\{\cf4 \strokec4 p \cf6 \strokec6 ?\cf4 \strokec4  p\cf6 \strokec6 .\cf2 \strokec2 number\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '-'\cf6 \strokec6 \}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-[6px] sm:text-[8px] font-bold text-slate-500 uppercase leading-none"\cf6 \strokec6 >\{\cf4 \strokec4 p \cf6 \strokec6 ?\cf4 \strokec4  p\cf6 \strokec6 .\cf4 \strokec4 role \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 ''\cf6 \strokec6 \}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-full h-full aspect-square border-2 border-slate-900 rounded-lg overflow-hidden flex flex-col"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 flex border-b border-slate-900"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1"\cf6 \strokec6 >\{\cf4 \strokec4 renderCell\cf6 \strokec6 (\cf9 \strokec9 4\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "border-r border-slate-900"\cf6 \strokec6 )\}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1"\cf6 \strokec6 >\{\cf4 \strokec4 renderCell\cf6 \strokec6 (\cf9 \strokec9 3\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "border-r border-slate-900"\cf6 \strokec6 )\}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1"\cf6 \strokec6 >\{\cf4 \strokec4 renderCell\cf6 \strokec6 (\cf9 \strokec9 2\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 ""\cf6 \strokec6 )\}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 flex"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1"\cf6 \strokec6 >\{\cf4 \strokec4 renderCell\cf6 \strokec6 (\cf9 \strokec9 5\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "border-r border-slate-900"\cf6 \strokec6 )\}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1"\cf6 \strokec6 >\{\cf4 \strokec4 renderCell\cf6 \strokec6 (\cf9 \strokec9 6\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "border-r border-slate-900"\cf6 \strokec6 )\}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1"\cf6 \strokec6 >\{\cf4 \strokec4 renderCell\cf6 \strokec6 (\cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 ""\cf6 \strokec6 )\}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 Court\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  \cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   children\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   paths \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [],\cf4 \strokec4  \cb1 \
\cb3   currentPath\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   courtRef\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   readOnly \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 false\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   small \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 false\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   onMouseDown\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  canvasRef \cf6 \strokec6 =\cf4 \strokec4  useRef\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  drawPath \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 ctx\cf6 \strokec6 ,\cf4 \strokec4  points\cf6 \strokec6 ,\cf4 \strokec4  color\cf6 \strokec6 ,\cf4 \strokec4  width\cf6 \strokec6 ,\cf4 \strokec4  height\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 points\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 <\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     ctx\cf6 \strokec6 .\cf4 \strokec4 beginPath\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3     ctx\cf6 \strokec6 .\cf4 \strokec4 strokeStyle \cf6 \strokec6 =\cf4 \strokec4  color\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     ctx\cf6 \strokec6 .\cf4 \strokec4 lineWidth \cf6 \strokec6 =\cf4 \strokec4  small \cf6 \strokec6 ?\cf4 \strokec4  \cf9 \strokec9 2\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     ctx\cf6 \strokec6 .\cf4 \strokec4 lineCap \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'round'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     ctx\cf6 \strokec6 .\cf4 \strokec4 lineJoin \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'round'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 let\cf4 \strokec4  p0 \cf6 \strokec6 =\cf4 \strokec4  points\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3     ctx\cf6 \strokec6 .\cf4 \strokec4 moveTo\cf6 \strokec6 ((\cf4 \strokec4 p0\cf6 \strokec6 .\cf4 \strokec4 x \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  width\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 p0\cf6 \strokec6 .\cf4 \strokec4 y \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  height\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 for\cf4 \strokec4  \cf6 \strokec6 (\cf2 \strokec2 let\cf4 \strokec4  i \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 ;\cf4 \strokec4  i \cf6 \strokec6 <\cf4 \strokec4  points\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 -\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ;\cf4 \strokec4  i\cf6 \strokec6 ++)\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  p1 \cf6 \strokec6 =\cf4 \strokec4  points\cf6 \strokec6 [\cf4 \strokec4 i\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  p2 \cf6 \strokec6 =\cf4 \strokec4  points\cf6 \strokec6 [\cf4 \strokec4 i \cf6 \strokec6 +\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  x1 \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 p1\cf6 \strokec6 .\cf4 \strokec4 x \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  width\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  y1 \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 p1\cf6 \strokec6 .\cf4 \strokec4 y \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  height\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  x2 \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 p2\cf6 \strokec6 .\cf4 \strokec4 x \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  width\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  y2 \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 p2\cf6 \strokec6 .\cf4 \strokec4 y \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  height\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  midX \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 x1 \cf6 \strokec6 +\cf4 \strokec4  x2\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  midY \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 y1 \cf6 \strokec6 +\cf4 \strokec4  y2\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       ctx\cf6 \strokec6 .\cf4 \strokec4 quadraticCurveTo\cf6 \strokec6 (\cf4 \strokec4 x1\cf6 \strokec6 ,\cf4 \strokec4  y1\cf6 \strokec6 ,\cf4 \strokec4  midX\cf6 \strokec6 ,\cf4 \strokec4  midY\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 points\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  pLast \cf6 \strokec6 =\cf4 \strokec4  points\cf6 \strokec6 [\cf4 \strokec4 points\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 -\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  pSecondLast \cf6 \strokec6 =\cf4 \strokec4  points\cf6 \strokec6 [\cf4 \strokec4 points\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 -\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3       ctx\cf6 \strokec6 .\cf4 \strokec4 quadraticCurveTo\cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 (\cf4 \strokec4 pSecondLast\cf6 \strokec6 .\cf4 \strokec4 x \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  width\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 pSecondLast\cf6 \strokec6 .\cf4 \strokec4 y \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  height\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 (\cf4 \strokec4 pLast\cf6 \strokec6 .\cf4 \strokec4 x \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  width\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 pLast\cf6 \strokec6 .\cf4 \strokec4 y \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  height\cb1 \
\cb3       \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 points\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3        \cf2 \strokec2 const\cf4 \strokec4  pLast \cf6 \strokec6 =\cf4 \strokec4  points\cf6 \strokec6 [\cf9 \strokec9 1\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3        ctx\cf6 \strokec6 .\cf4 \strokec4 lineTo\cf6 \strokec6 ((\cf4 \strokec4 pLast\cf6 \strokec6 .\cf4 \strokec4 x \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  width\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 pLast\cf6 \strokec6 .\cf4 \strokec4 y \cf6 \strokec6 /\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  height\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     ctx\cf6 \strokec6 .\cf4 \strokec4 stroke\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  canvas \cf6 \strokec6 =\cf4 \strokec4  canvasRef\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  parent \cf6 \strokec6 =\cf4 \strokec4  courtRef\cf6 \strokec6 ?.\cf4 \strokec4 current \cf6 \strokec6 ||\cf4 \strokec4  canvas\cf6 \strokec6 ?.\cf4 \strokec4 parentElement\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 canvas \cf6 \strokec6 &&\cf4 \strokec4  parent\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  rect \cf6 \strokec6 =\cf4 \strokec4  parent\cf6 \strokec6 .\cf4 \strokec4 getBoundingClientRect\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  dpr \cf6 \strokec6 =\cf4 \strokec4  window\cf6 \strokec6 .\cf4 \strokec4 devicePixelRatio \cf6 \strokec6 ||\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 ;\cf4 \strokec4  \cb1 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf5 \strokec5 Math\cf6 \strokec6 .\cf4 \strokec4 abs\cf6 \strokec6 (\cf4 \strokec4 canvas\cf6 \strokec6 .\cf4 \strokec4 width \cf6 \strokec6 -\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 width \cf6 \strokec6 *\cf4 \strokec4  dpr\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 5\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  \cf5 \strokec5 Math\cf6 \strokec6 .\cf4 \strokec4 abs\cf6 \strokec6 (\cf4 \strokec4 canvas\cf6 \strokec6 .\cf4 \strokec4 height \cf6 \strokec6 -\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 height \cf6 \strokec6 *\cf4 \strokec4  dpr\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 5\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         canvas\cf6 \strokec6 .\cf4 \strokec4 width \cf6 \strokec6 =\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 width \cf6 \strokec6 *\cf4 \strokec4  dpr\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         canvas\cf6 \strokec6 .\cf4 \strokec4 height \cf6 \strokec6 =\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 height \cf6 \strokec6 *\cf4 \strokec4  dpr\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         canvas\cf6 \strokec6 .\cf4 \strokec4 style\cf6 \strokec6 .\cf4 \strokec4 width \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \strokec4 rect\cf6 \strokec6 .\cf4 \strokec4 width\cf6 \strokec6 \}\cf7 \strokec7 px`\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         canvas\cf6 \strokec6 .\cf4 \strokec4 style\cf6 \strokec6 .\cf4 \strokec4 height \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \strokec4 rect\cf6 \strokec6 .\cf4 \strokec4 height\cf6 \strokec6 \}\cf7 \strokec7 px`\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  ctx \cf6 \strokec6 =\cf4 \strokec4  canvas\cf6 \strokec6 .\cf4 \strokec4 getContext\cf6 \strokec6 (\cf7 \strokec7 '2d'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       ctx\cf6 \strokec6 .\cf4 \strokec4 setTransform\cf6 \strokec6 (\cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       ctx\cf6 \strokec6 .\cf4 \strokec4 clearRect\cf6 \strokec6 (\cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  canvas\cf6 \strokec6 .\cf4 \strokec4 width\cf6 \strokec6 ,\cf4 \strokec4  canvas\cf6 \strokec6 .\cf4 \strokec4 height\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       ctx\cf6 \strokec6 .\cf4 \strokec4 scale\cf6 \strokec6 (\cf4 \strokec4 dpr\cf6 \strokec6 ,\cf4 \strokec4  dpr\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  width \cf6 \strokec6 =\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 width\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  height \cf6 \strokec6 =\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 height\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 paths\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           paths\cf6 \strokec6 .\cf4 \strokec4 forEach\cf6 \strokec6 (\cf4 \strokec4 path \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3             drawPath\cf6 \strokec6 (\cf4 \strokec4 ctx\cf6 \strokec6 ,\cf4 \strokec4  path\cf6 \strokec6 .\cf4 \strokec4 points\cf6 \strokec6 ,\cf4 \strokec4  path\cf6 \strokec6 .\cf4 \strokec4 color\cf6 \strokec6 ,\cf4 \strokec4  width\cf6 \strokec6 ,\cf4 \strokec4  height\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentPath \cf6 \strokec6 &&\cf4 \strokec4  currentPath\cf6 \strokec6 .\cf4 \strokec4 points\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         drawPath\cf6 \strokec6 (\cf4 \strokec4 ctx\cf6 \strokec6 ,\cf4 \strokec4  currentPath\cf6 \strokec6 .\cf4 \strokec4 points\cf6 \strokec6 ,\cf4 \strokec4  currentPath\cf6 \strokec6 .\cf4 \strokec4 color\cf6 \strokec6 ,\cf4 \strokec4  width\cf6 \strokec6 ,\cf4 \strokec4  height\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 paths\cf6 \strokec6 ,\cf4 \strokec4  currentPath\cf6 \strokec6 ,\cf4 \strokec4  courtRef\cf6 \strokec6 ,\cf4 \strokec4  small\cf6 \strokec6 ]);\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div \cb1 \
\cb3       ref\cf6 \strokec6 =\{\cf4 \strokec4 courtRef\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       onMouseDown\cf6 \strokec6 =\{\cf4 \strokec4 onMouseDown\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3       id\cf6 \strokec6 =\{!\cf4 \strokec4 small \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 "court-capture-area"\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 undefined\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       className\cf6 \strokec6 =\{\cf7 \strokec7 `relative w-full aspect-square bg-[#f0f4f8] \cf6 \strokec6 $\{!\cf4 \strokec4 small \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'shadow-sm border-2 border-slate-900 cursor-crosshair'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'border border-slate-300'\cf6 \strokec6 \}\cf7 \strokec7  overflow-hidden select-none touch-none bg-white`\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute inset-0 bg-[#fff] pointer-events-none"\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \strokec4  \cb1 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute top-0 left-0 right-0 h-[5%] z-0 flex items-center justify-center overflow-hidden border-b border-slate-900 pointer-events-none"\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute top-[33.33%] left-0 right-0 h-px bg-slate-900 pointer-events-none"\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{!\cf4 \strokec4 small \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute top-[34%] right-2 text-[10px] font-bold text-slate-400 font-mono tracking-widest pointer-events-none"\cf6 \strokec6 >\cf5 \strokec5 ATTACK\cf4 \strokec4  \cf5 \strokec5 LINE\cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute top-0 left-0 right-0 h-1 bg-slate-900 z-10 pointer-events-none"\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 canvas ref\cf6 \strokec6 =\{\cf4 \strokec4 canvasRef\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "absolute inset-0 z-20 w-full h-full pointer-events-none"\cf4 \strokec4  />\cb1 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `relative z-30 w-full h-full \cf6 \strokec6 $\{\cf4 \strokec4 readOnly \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'pointer-events-none'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 ''\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 \{\cf4 \strokec4 children\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 PlayerToken\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  player\cf6 \strokec6 ,\cf4 \strokec4  x\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 ,\cf4 \strokec4  isDragging\cf6 \strokec6 ,\cf4 \strokec4  isBench\cf6 \strokec6 ,\cf4 \strokec4  style\cf6 \strokec6 ,\cf4 \strokec4  small \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 false\cf6 \strokec6 ,\cf4 \strokec4  onMouseDown \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  isGhost \cf6 \strokec6 =\cf4 \strokec4  style\cf6 \strokec6 ?.\cf4 \strokec4 position \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'fixed'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  sizeClasses \cf6 \strokec6 =\cf4 \strokec4  small \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 "w-5 h-5 text-[8px] border"\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "w-10 h-10 md:w-14 md:h-14 border-2"\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div\cb1 \
\cb3       onMouseDown\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         e\cf6 \strokec6 .\cf4 \strokec4 stopPropagation\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 onMouseDown\cf6 \strokec6 )\cf4 \strokec4  onMouseDown\cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 ,\cf4 \strokec4  player\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  isBench\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\}\cf4 \cb1 \strokec4 \
\cb3       className\cf6 \strokec6 =\{\cf7 \strokec7 `\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7         \cf6 \strokec6 $\{\cf4 \strokec4 isGhost \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'fixed z-[100] shadow-2xl scale-110 pointer-events-none'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'absolute transition-transform pointer-events-auto'\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cf7 \cb3 \strokec7         \cf6 \strokec6 $\{\cf4 \strokec4 sizeClasses\cf6 \strokec6 \}\cf7 \strokec7  rounded-full flex items-center justify-center shadow-sm\cf4 \cb1 \strokec4 \
\cf7 \cb3 \strokec7         \cf6 \strokec6 $\{\cf4 \strokec4 isDragging \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'opacity-50'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 small \cf6 \strokec6 &&\cf4 \strokec4  \cf7 \strokec7 'hover:scale-105 cursor-grab active:cursor-grabbing'\cf6 \strokec6 \}\cf7 \strokec7  \cf4 \cb1 \strokec4 \
\cf7 \cb3 \strokec7         \cf6 \strokec6 $\{\cf4 \strokec4 getRoleColor\cf6 \strokec6 (\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 role\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cf7 \cb3 \strokec7         font-sans z-40\cf4 \cb1 \strokec4 \
\cf7 \cb3 \strokec7       `\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3       style\cf6 \strokec6 =\{\{\cf4 \strokec4  \cb1 \
\cb3         left\cf6 \strokec6 :\cf4 \strokec4  x \cf6 \strokec6 !==\cf4 \strokec4  \cf2 \strokec2 undefined\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 isGhost \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \strokec4 x\cf6 \strokec6 \}\cf7 \strokec7 %`\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  style\cf6 \strokec6 ?.\cf4 \strokec4 left\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3         top\cf6 \strokec6 :\cf4 \strokec4  y \cf6 \strokec6 !==\cf4 \strokec4  \cf2 \strokec2 undefined\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 isGhost \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \strokec4 y\cf6 \strokec6 \}\cf7 \strokec7 %`\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  style\cf6 \strokec6 ?.\cf4 \strokec4 top\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         transform\cf6 \strokec6 :\cf4 \strokec4  x \cf6 \strokec6 !==\cf4 \strokec4  \cf2 \strokec2 undefined\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 isGhost \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'translate(-50%, -50%)'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'translate(-50%, -50%)'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         touchAction\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'none'\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col items-center justify-center h-full w-full pointer-events-none select-none"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\{\cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \strokec4 small \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'font-black text-[9px] leading-none'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'font-black text-sm md:text-lg'\cf6 \strokec6 \}\cf7 \strokec7  drop-shadow-none`\cf6 \strokec6 \}>\{\cf4 \strokec4 player\cf6 \strokec6 .\cf2 \strokec2 number\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{!\cf4 \strokec4 small \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-[8px] md:text-[9px] opacity-90 uppercase tracking-tighter font-semibold leading-none"\cf6 \strokec6 >\{\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 role\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 App\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 activeTab\cf6 \strokec6 ,\cf4 \strokec4  setActiveTab\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 'board'\cf6 \strokec6 );\cf4 \strokec4  \cb1 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 currentRotation\cf6 \strokec6 ,\cf4 \strokec4  setCurrentRotation\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf9 \strokec9 1\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 currentPhase\cf6 \strokec6 ,\cf4 \strokec4  setCurrentPhase\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 'primary'\cf6 \strokec6 );\cf4 \strokec4  \cb1 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 mode\cf6 \strokec6 ,\cf4 \strokec4  setMode\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 'move'\cf6 \strokec6 );\cf4 \strokec4  \cb1 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 drawColor\cf6 \strokec6 ,\cf4 \strokec4  setDrawColor\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 '#000000'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 enforceRules\cf6 \strokec6 ,\cf4 \strokec4  setEnforceRules\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // Persistence Keys\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 STORAGE_KEY_TEAMS\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'avb_teams'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 STORAGE_KEY_ACTIVE_TEAM\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'avb_active_team_id'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 STORAGE_KEY_LINEUPS\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'avb_lineups'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 STORAGE_KEY_ACTIVE_LINEUP\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'avb_active_lineup_id'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  defaultRoster \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p1'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'S'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Setter'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '1'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p2'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'OH1'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Outside 1'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '2'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p3'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'M1'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Middle 1'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p4'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'OPP'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Opposite'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '4'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p5'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'OH2'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Outside 2'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '5'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p6'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'M2'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Middle 2'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '6'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p7'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'L'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Libero'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '9'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p8'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'DS'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Def. Spec'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '10'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p9'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'SS'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Serve Sub'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '11'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p10'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'OH'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Sub OH'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '12'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p11'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'S'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Sub Setter'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '13'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'p12'\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'M'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Sub Middle'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '14'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // --- GLOBAL DATA STATE ---\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 teams\cf6 \strokec6 ,\cf4 \strokec4  setTeams\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 currentTeamId\cf6 \strokec6 ,\cf4 \strokec4  setCurrentTeamId\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 lineups\cf6 \strokec6 ,\cf4 \strokec4  setLineups\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 currentLineupId\cf6 \strokec6 ,\cf4 \strokec4  setCurrentLineupId\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // --- UI STATE ---\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 isLineupManagerOpen\cf6 \strokec6 ,\cf4 \strokec4  setIsLineupManagerOpen\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 isTeamManagerOpen\cf6 \strokec6 ,\cf4 \strokec4  setIsTeamManagerOpen\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 newItemName\cf6 \strokec6 ,\cf4 \strokec4  setNewItemName\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 ''\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cb1 \
\cb3   \cf8 \strokec8 // Renaming State\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 editId\cf6 \strokec6 ,\cf4 \strokec4  setEditId\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 editName\cf6 \strokec6 ,\cf4 \strokec4  setEditName\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 ''\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // --- WORKING MEMORY (Active Lineup) ---\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 roster\cf6 \strokec6 ,\cf4 \strokec4  setRoster\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf4 \strokec4 defaultRoster\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 savedRotations\cf6 \strokec6 ,\cf4 \strokec4  setSavedRotations\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\{\});\cf4 \strokec4  \cb1 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 activePlayerIds\cf6 \strokec6 ,\cf4 \strokec4  setActivePlayerIds\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 ([]);\cf4 \strokec4  \cb1 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 playerPositions\cf6 \strokec6 ,\cf4 \strokec4  setPlayerPositions\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\{\});\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 paths\cf6 \strokec6 ,\cf4 \strokec4  setPaths\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 history\cf6 \strokec6 ,\cf4 \strokec4  setHistory\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // Interaction\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 draggedPlayer\cf6 \strokec6 ,\cf4 \strokec4  setDraggedPlayer\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 mousePos\cf6 \strokec6 ,\cf4 \strokec4  setMousePos\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\{\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf6 \strokec6 \});\cf4 \strokec4  \cb1 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 isDrawing\cf6 \strokec6 ,\cf4 \strokec4  setIsDrawing\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 currentPath\cf6 \strokec6 ,\cf4 \strokec4  setCurrentPath\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \strokec4  \cb1 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  courtRef \cf6 \strokec6 =\cf4 \strokec4  useRef\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // --- INITIALIZATION ---\cf4 \cb1 \strokec4 \
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf8 \strokec8 // 1. Load Teams\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  savedTeams \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 parse\cf6 \strokec6 (\cf4 \strokec4 localStorage\cf6 \strokec6 .\cf4 \strokec4 getItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_TEAMS\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 '[]'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 let\cf4 \strokec4  activeTeamId \cf6 \strokec6 =\cf4 \strokec4  localStorage\cf6 \strokec6 .\cf4 \strokec4 getItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_ACTIVE_TEAM\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 let\cf4 \strokec4  initialTeams \cf6 \strokec6 =\cf4 \strokec4  savedTeams\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 savedTeams\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf4 \strokec4  defaultTeam \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'team_default'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'My Team'\cf6 \strokec6 ,\cf4 \strokec4  roster\cf6 \strokec6 :\cf4 \strokec4  defaultRoster \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3         initialTeams \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 defaultTeam\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3         activeTeamId \cf6 \strokec6 =\cf4 \strokec4  defaultTeam\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_TEAMS\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 initialTeams\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     setTeams\cf6 \strokec6 (\cf4 \strokec4 initialTeams\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setCurrentTeamId\cf6 \strokec6 (\cf4 \strokec4 activeTeamId \cf6 \strokec6 ||\cf4 \strokec4  initialTeams\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ].\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3     \cf8 \strokec8 // 2. Load Lineups\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  savedLineups \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 parse\cf6 \strokec6 (\cf4 \strokec4 localStorage\cf6 \strokec6 .\cf4 \strokec4 getItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_LINEUPS\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 '[]'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 let\cf4 \strokec4  activeLineupId \cf6 \strokec6 =\cf4 \strokec4  localStorage\cf6 \strokec6 .\cf4 \strokec4 getItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_ACTIVE_LINEUP\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     setLineups\cf6 \strokec6 (\cf4 \strokec4 savedLineups\cf6 \strokec6 );\cf4 \strokec4  \cb1 \
\
\cb3     \cf2 \strokec2 const\cf4 \strokec4  teamLineups \cf6 \strokec6 =\cf4 \strokec4  savedLineups\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 teamId \cf6 \strokec6 ===\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 activeTeamId \cf6 \strokec6 ||\cf4 \strokec4  initialTeams\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ].\cf4 \strokec4 id\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 teamLineups\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 teamLineups\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  activeLineupId\cf6 \strokec6 ))\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3             activeLineupId \cf6 \strokec6 =\cf4 \strokec4  teamLineups\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ].\cf4 \strokec4 id\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         loadLineup\cf6 \strokec6 (\cf4 \strokec4 activeLineupId\cf6 \strokec6 ,\cf4 \strokec4  savedLineups\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         createLineup\cf6 \strokec6 (\cf7 \strokec7 'Lineup 1'\cf6 \strokec6 ,\cf4 \strokec4  initialTeams\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 activeTeamId \cf6 \strokec6 ||\cf4 \strokec4  initialTeams\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ].\cf4 \strokec4 id\cf6 \strokec6 )).\cf4 \strokec4 roster\cf6 \strokec6 ,\cf4 \strokec4  activeTeamId \cf6 \strokec6 ||\cf4 \strokec4  initialTeams\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ].\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  savedLineups\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 const\cf4 \strokec4  script \cf6 \strokec6 =\cf4 \strokec4  document\cf6 \strokec6 .\cf4 \strokec4 createElement\cf6 \strokec6 (\cf7 \strokec7 'script'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     script\cf6 \strokec6 .\cf4 \strokec4 src \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     script\cf6 \strokec6 .\cf2 \strokec2 async\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 true\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     document\cf6 \strokec6 .\cf4 \strokec4 body\cf6 \strokec6 .\cf4 \strokec4 appendChild\cf6 \strokec6 (\cf4 \strokec4 script\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 []);\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  getStorageKey \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 rot\cf6 \strokec6 ,\cf4 \strokec4  phase\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \strokec4 rot\cf6 \strokec6 \}\cf7 \strokec7 _\cf6 \strokec6 $\{\cf4 \strokec4 phase\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  saveCurrentState \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  key \cf6 \strokec6 =\cf4 \strokec4  getStorageKey\cf6 \strokec6 (\cf4 \strokec4 currentRotation\cf6 \strokec6 ,\cf4 \strokec4  currentPhase\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setSavedRotations\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 ...\cf4 \strokec4 prev\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 [\cf4 \strokec4 key\cf6 \strokec6 ]:\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         positions\cf6 \strokec6 :\cf4 \strokec4  playerPositions\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         paths\cf6 \strokec6 :\cf4 \strokec4  paths\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         activePlayers\cf6 \strokec6 :\cf4 \strokec4  activePlayerIds\cb1 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}));\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentLineupId \cf6 \strokec6 &&\cf4 \strokec4  lineups\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  key \cf6 \strokec6 =\cf4 \strokec4  getStorageKey\cf6 \strokec6 (\cf4 \strokec4 currentRotation\cf6 \strokec6 ,\cf4 \strokec4  currentPhase\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  updatedLineups \cf6 \strokec6 =\cf4 \strokec4  lineups\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  currentLineupId\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 ...\cf4 \strokec4 l\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3             roster\cf6 \strokec6 :\cf4 \strokec4  roster\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3             rotations\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 ...\cf4 \strokec4 savedRotations\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 [\cf4 \strokec4 key\cf6 \strokec6 ]:\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\cb3                  positions\cf6 \strokec6 :\cf4 \strokec4  playerPositions\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3                  paths\cf6 \strokec6 :\cf4 \strokec4  paths\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3                  activePlayers\cf6 \strokec6 :\cf4 \strokec4  activePlayerIds\cb1 \
\cb3               \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 return\cf4 \strokec4  l\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3       localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_LINEUPS\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 updatedLineups\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 roster\cf6 \strokec6 ,\cf4 \strokec4  savedRotations\cf6 \strokec6 ,\cf4 \strokec4  playerPositions\cf6 \strokec6 ,\cf4 \strokec4  paths\cf6 \strokec6 ,\cf4 \strokec4  activePlayerIds\cf6 \strokec6 ,\cf4 \strokec4  currentLineupId\cf6 \strokec6 ]);\cf4 \strokec4  \cb1 \
\
\cb3   \cf8 \strokec8 // --- TEAM MANAGEMENT ---\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  createTeam \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  newTeam \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 `team_\cf6 \strokec6 $\{\cf5 \strokec5 Date\cf6 \strokec6 .\cf4 \strokec4 now\cf6 \strokec6 ()\}\cf7 \strokec7 `\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3           name\cf6 \strokec6 :\cf4 \strokec4  newItemName \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 'New Team'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3           roster\cf6 \strokec6 :\cf4 \strokec4  defaultRoster\cb1 \
\cb3       \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  updatedTeams \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [...\cf4 \strokec4 teams\cf6 \strokec6 ,\cf4 \strokec4  newTeam\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3       setTeams\cf6 \strokec6 (\cf4 \strokec4 updatedTeams\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_TEAMS\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 updatedTeams\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3       switchTeam\cf6 \strokec6 (\cf4 \strokec4 newTeam\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  updatedTeams\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setNewItemName\cf6 \strokec6 (\cf7 \strokec7 ''\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setIsTeamManagerOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  switchTeam \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 teamId\cf6 \strokec6 ,\cf4 \strokec4  updatedTeamsList \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       saveCurrentState\cf6 \strokec6 ();\cf4 \strokec4  \cb1 \
\cb3       setCurrentTeamId\cf6 \strokec6 (\cf4 \strokec4 teamId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_ACTIVE_TEAM\cf6 \strokec6 ,\cf4 \strokec4  teamId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  allLineups \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 parse\cf6 \strokec6 (\cf4 \strokec4 localStorage\cf6 \strokec6 .\cf4 \strokec4 getItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_LINEUPS\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 '[]'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setLineups\cf6 \strokec6 (\cf4 \strokec4 allLineups\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  teamLineups \cf6 \strokec6 =\cf4 \strokec4  allLineups\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 teamId \cf6 \strokec6 ===\cf4 \strokec4  teamId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  sourceTeams \cf6 \strokec6 =\cf4 \strokec4  updatedTeamsList \cf6 \strokec6 ||\cf4 \strokec4  teams\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  team \cf6 \strokec6 =\cf4 \strokec4  sourceTeams\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  teamId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 team\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 teamLineups\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3             loadLineup\cf6 \strokec6 (\cf4 \strokec4 teamLineups\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ].\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  allLineups\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3             createLineup\cf6 \strokec6 (\cf7 \strokec7 'Lineup 1'\cf6 \strokec6 ,\cf4 \strokec4  team\cf6 \strokec6 .\cf4 \strokec4 roster\cf6 \strokec6 ,\cf4 \strokec4  teamId\cf6 \strokec6 ,\cf4 \strokec4  allLineups\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       setIsTeamManagerOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  deleteTeam \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 id\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 teams\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 <=\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  alert\cf6 \strokec6 (\cf7 \strokec7 "Cannot delete last team."\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  updated \cf6 \strokec6 =\cf4 \strokec4  teams\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 !==\cf4 \strokec4  id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setTeams\cf6 \strokec6 (\cf4 \strokec4 updated\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_TEAMS\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 updated\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentTeamId \cf6 \strokec6 ===\cf4 \strokec4  id\cf6 \strokec6 )\cf4 \strokec4  switchTeam\cf6 \strokec6 (\cf4 \strokec4 updated\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ].\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  updated\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  renameTeam \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  newName\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  updated \cf6 \strokec6 =\cf4 \strokec4  teams\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  id \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf6 \strokec6 ...\cf4 \strokec4 t\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  newName \cf6 \strokec6 \}\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  t\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setTeams\cf6 \strokec6 (\cf4 \strokec4 updated\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_TEAMS\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 updated\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3       setEditId\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // --- LINEUP MANAGEMENT ---\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  createLineup \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 name\cf6 \strokec6 ,\cf4 \strokec4  rosterToUse\cf6 \strokec6 ,\cf4 \strokec4  teamId \cf6 \strokec6 =\cf4 \strokec4  currentTeamId\cf6 \strokec6 ,\cf4 \strokec4  currentLineupsList \cf6 \strokec6 =\cf4 \strokec4  lineups\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  newLineup \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 `lineup_\cf6 \strokec6 $\{\cf5 \strokec5 Date\cf6 \strokec6 .\cf4 \strokec4 now\cf6 \strokec6 ()\}\cf7 \strokec7 `\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       teamId\cf6 \strokec6 :\cf4 \strokec4  teamId\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       name\cf6 \strokec6 :\cf4 \strokec4  name\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       roster\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 parse\cf6 \strokec6 (\cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 rosterToUse\cf6 \strokec6 )),\cf4 \strokec4  \cb1 \
\cb3       rotations\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\}\cf4 \strokec4  \cb1 \
\cb3     \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  updatedLineups \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [...\cf4 \strokec4 currentLineupsList\cf6 \strokec6 ,\cf4 \strokec4  newLineup\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3     setLineups\cf6 \strokec6 (\cf4 \strokec4 updatedLineups\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_LINEUPS\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 updatedLineups\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     loadLineup\cf6 \strokec6 (\cf4 \strokec4 newLineup\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  updatedLineups\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setIsLineupManagerOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setNewItemName\cf6 \strokec6 (\cf7 \strokec7 ''\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  loadLineup \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  sourceLineups \cf6 \strokec6 =\cf4 \strokec4  lineups\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  target \cf6 \strokec6 =\cf4 \strokec4  sourceLineups\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 target\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3     setCurrentLineupId\cf6 \strokec6 (\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_ACTIVE_LINEUP\cf6 \strokec6 ,\cf4 \strokec4  id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setRoster\cf6 \strokec6 (\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 roster\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setSavedRotations\cf6 \strokec6 (\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 rotations \cf6 \strokec6 ||\cf4 \strokec4  \cf6 \strokec6 \{\});\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     setCurrentRotation\cf6 \strokec6 (\cf9 \strokec9 1\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setCurrentPhase\cf6 \strokec6 (\cf7 \strokec7 'primary'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setHistory\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\cb3     setIsLineupManagerOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  key \cf6 \strokec6 =\cf4 \strokec4  getStorageKey\cf6 \strokec6 (\cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'primary'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  data \cf6 \strokec6 =\cf4 \strokec4  target\cf6 \strokec6 .\cf4 \strokec4 rotations\cf6 \strokec6 ?.[\cf4 \strokec4 key\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 data\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3        setPlayerPositions\cf6 \strokec6 (\cf4 \strokec4 data\cf6 \strokec6 .\cf4 \strokec4 positions\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3        setPaths\cf6 \strokec6 (\cf4 \strokec4 data\cf6 \strokec6 .\cf4 \strokec4 paths\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3        setActivePlayerIds\cf6 \strokec6 (\cf4 \strokec4 data\cf6 \strokec6 .\cf4 \strokec4 activePlayers\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3        initRotationDefaults\cf6 \strokec6 (\cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  target\cf6 \strokec6 .\cf4 \strokec4 roster\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  deleteLineup \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 id\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  teamLineups \cf6 \strokec6 =\cf4 \strokec4  lineups\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 teamId \cf6 \strokec6 ===\cf4 \strokec4  currentTeamId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 teamLineups\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 <=\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  alert\cf6 \strokec6 (\cf7 \strokec7 "Must have at least one lineup."\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  updated \cf6 \strokec6 =\cf4 \strokec4  lineups\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 !==\cf4 \strokec4  id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setLineups\cf6 \strokec6 (\cf4 \strokec4 updated\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_LINEUPS\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 updated\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentLineupId \cf6 \strokec6 ===\cf4 \strokec4  id\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 const\cf4 \strokec4  next \cf6 \strokec6 =\cf4 \strokec4  updated\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 teamId \cf6 \strokec6 ===\cf4 \strokec4  currentTeamId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3           loadLineup\cf6 \strokec6 (\cf4 \strokec4 next\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  updated\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  renameLineup \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  newName\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  updated \cf6 \strokec6 =\cf4 \strokec4  lineups\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  id \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf6 \strokec6 ...\cf4 \strokec4 l\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  newName \cf6 \strokec6 \}\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  l\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setLineups\cf6 \strokec6 (\cf4 \strokec4 updated\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_LINEUPS\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 updated\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3       setEditId\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  saveAsMasterTeam \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  updatedTeams \cf6 \strokec6 =\cf4 \strokec4  teams\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  currentTeamId \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf6 \strokec6 ...\cf4 \strokec4 t\cf6 \strokec6 ,\cf4 \strokec4  roster\cf6 \strokec6 :\cf4 \strokec4  roster \cf6 \strokec6 \}\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  t\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setTeams\cf6 \strokec6 (\cf4 \strokec4 updatedTeams\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_TEAMS\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 updatedTeams\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3     alert\cf6 \strokec6 (\cf7 \strokec7 `Roster saved as default for \cf6 \strokec6 $\{\cf4 \strokec4 teams\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  currentTeamId\cf6 \strokec6 )?.\cf4 \strokec4 name\cf6 \strokec6 \}\cf7 \strokec7 !`\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  clearAllData \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 confirm\cf6 \strokec6 (\cf7 \strokec7 "Are you sure? This will delete ALL teams and lineups on this device."\cf6 \strokec6 ))\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           localStorage\cf6 \strokec6 .\cf4 \strokec4 removeItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_TEAMS\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3           localStorage\cf6 \strokec6 .\cf4 \strokec4 removeItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_LINEUPS\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3           localStorage\cf6 \strokec6 .\cf4 \strokec4 removeItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_ACTIVE_TEAM\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3           localStorage\cf6 \strokec6 .\cf4 \strokec4 removeItem\cf6 \strokec6 (\cf5 \strokec5 STORAGE_KEY_ACTIVE_LINEUP\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3           window\cf6 \strokec6 .\cf4 \strokec4 location\cf6 \strokec6 .\cf4 \strokec4 reload\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // --- LOGIC ---\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  initRotationDefaults \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 rotNum\cf6 \strokec6 ,\cf4 \strokec4  currentRoster\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  positions \cf6 \strokec6 =\cf4 \strokec4  calculateDefaultPositions\cf6 \strokec6 (\cf4 \strokec4 rotNum\cf6 \strokec6 ,\cf4 \strokec4  currentRoster\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  newActiveIds \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 Object\cf6 \strokec6 .\cf4 \strokec4 keys\cf6 \strokec6 (\cf4 \strokec4 positions\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       setActivePlayerIds\cf6 \strokec6 (\cf4 \strokec4 newActiveIds\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setPlayerPositions\cf6 \strokec6 (\cf4 \strokec4 positions\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setPaths\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  handleViewChange \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 newRot\cf6 \strokec6 ,\cf4 \strokec4  newPhase\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     saveCurrentState\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  key \cf6 \strokec6 =\cf4 \strokec4  getStorageKey\cf6 \strokec6 (\cf4 \strokec4 newRot\cf6 \strokec6 ,\cf4 \strokec4  newPhase\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 savedRotations\cf6 \strokec6 [\cf4 \strokec4 key\cf6 \strokec6 ])\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  data \cf6 \strokec6 =\cf4 \strokec4  savedRotations\cf6 \strokec6 [\cf4 \strokec4 key\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3       setPlayerPositions\cf6 \strokec6 (\cf4 \strokec4 data\cf6 \strokec6 .\cf4 \strokec4 positions\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setPaths\cf6 \strokec6 (\cf4 \strokec4 data\cf6 \strokec6 .\cf4 \strokec4 paths\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setActivePlayerIds\cf6 \strokec6 (\cf4 \strokec4 data\cf6 \strokec6 .\cf4 \strokec4 activePlayers\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 newRot \cf6 \strokec6 ===\cf4 \strokec4  currentRotation \cf6 \strokec6 &&\cf4 \strokec4  savedRotations\cf6 \strokec6 [\cf4 \strokec4 getStorageKey\cf6 \strokec6 (\cf4 \strokec4 newRot\cf6 \strokec6 ,\cf4 \strokec4  currentPhase\cf6 \strokec6 )])\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           initRotationDefaults\cf6 \strokec6 (\cf4 \strokec4 newRot\cf6 \strokec6 ,\cf4 \strokec4  roster\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           initRotationDefaults\cf6 \strokec6 (\cf4 \strokec4 newRot\cf6 \strokec6 ,\cf4 \strokec4  roster\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     setCurrentRotation\cf6 \strokec6 (\cf4 \strokec4 newRot\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setCurrentPhase\cf6 \strokec6 (\cf4 \strokec4 newPhase\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setHistory\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  handleExport \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 elementId\cf6 \strokec6 ,\cf4 \strokec4  filename\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 window\cf6 \strokec6 .\cf4 \strokec4 html2canvas\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         setTimeout\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3             \cf2 \strokec2 const\cf4 \strokec4  element \cf6 \strokec6 =\cf4 \strokec4  document\cf6 \strokec6 .\cf4 \strokec4 getElementById\cf6 \strokec6 (\cf4 \strokec4 elementId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3             \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 element\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3             window\cf6 \strokec6 .\cf4 \strokec4 html2canvas\cf6 \strokec6 (\cf4 \strokec4 element\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  scale\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 1.5\cf6 \strokec6 ,\cf4 \strokec4  useCORS\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 true\cf6 \strokec6 ,\cf4 \strokec4  logging\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \}).\cf4 \strokec4 then\cf6 \strokec6 (\cf4 \strokec4 canvas \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                 \cf2 \strokec2 const\cf4 \strokec4  link \cf6 \strokec6 =\cf4 \strokec4  document\cf6 \strokec6 .\cf4 \strokec4 createElement\cf6 \strokec6 (\cf7 \strokec7 'a'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3                 link\cf6 \strokec6 .\cf4 \strokec4 download \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \strokec4 filename\cf6 \strokec6 \}\cf7 \strokec7 .png`\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                 link\cf6 \strokec6 .\cf4 \strokec4 href \cf6 \strokec6 =\cf4 \strokec4  canvas\cf6 \strokec6 .\cf4 \strokec4 toDataURL\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3                 link\cf6 \strokec6 .\cf4 \strokec4 click\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \},\cf4 \strokec4  \cf9 \strokec9 300\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         alert\cf6 \strokec6 (\cf7 \strokec7 "Export module loading..."\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  handleWindowMouseMove \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         setMousePos\cf6 \strokec6 (\{\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 clientX\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 clientY \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf4 \strokec4  rect \cf6 \strokec6 =\cf4 \strokec4  courtRef\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 ?.\cf4 \strokec4 getBoundingClientRect\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 rect\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 mode \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'move'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  draggedPlayer \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 draggedPlayer\cf6 \strokec6 .\cf4 \strokec4 isBench\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3              \cf2 \strokec2 let\cf4 \strokec4  newX \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ((\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 clientX \cf6 \strokec6 -\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 left\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 width\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3              \cf2 \strokec2 let\cf4 \strokec4  newY \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ((\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 clientY \cf6 \strokec6 -\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 top\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 height\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3              \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 enforceRules\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                 \cf8 \strokec8 // ... constraints logic\cf4 \cb1 \strokec4 \
\cb3              \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3              setPlayerPositions\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  \cf6 \strokec6 ...\cf4 \strokec4 prev\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 draggedPlayer\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ]:\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  newX\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  newY \cf6 \strokec6 \}\cf4 \strokec4  \cf6 \strokec6 \}));\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 mode \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'draw'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  isDrawing\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3              \cf2 \strokec2 const\cf4 \strokec4  x \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ((\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 clientX \cf6 \strokec6 -\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 left\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 width\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3              \cf2 \strokec2 const\cf4 \strokec4  y \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ((\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 clientY \cf6 \strokec6 -\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 top\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 height\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3              \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 x \cf6 \strokec6 >\cf4 \strokec4  \cf6 \strokec6 -\cf9 \strokec9 20\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  x \cf6 \strokec6 <\cf4 \strokec4  \cf9 \strokec9 120\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  y \cf6 \strokec6 >\cf4 \strokec4  \cf6 \strokec6 -\cf9 \strokec9 20\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  y \cf6 \strokec6 <\cf4 \strokec4  \cf9 \strokec9 120\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                 setCurrentPath\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  \cf6 \strokec6 ...\cf4 \strokec4 prev\cf6 \strokec6 ,\cf4 \strokec4  points\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [...\cf4 \strokec4 prev\cf6 \strokec6 .\cf4 \strokec4 points\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  x\cf6 \strokec6 ,\cf4 \strokec4  y \cf6 \strokec6 \}]\cf4 \strokec4  \cf6 \strokec6 \}));\cf4 \cb1 \strokec4 \
\cb3              \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 const\cf4 \strokec4  handleWindowMouseUp \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3        \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 mode \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'move'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  draggedPlayer\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3            \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 draggedPlayer\cf6 \strokec6 .\cf4 \strokec4 isBench\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                \cf2 \strokec2 const\cf4 \strokec4  rect \cf6 \strokec6 =\cf4 \strokec4  courtRef\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 ?.\cf4 \strokec4 getBoundingClientRect\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3                \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 rect\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                    \cf2 \strokec2 const\cf4 \strokec4  dropX \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ((\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 clientX \cf6 \strokec6 -\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 left\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 width\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                    \cf2 \strokec2 const\cf4 \strokec4  dropY \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ((\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 clientY \cf6 \strokec6 -\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 top\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 height\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                    \cf2 \strokec2 let\cf4 \strokec4  nearestId \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                    \cf2 \strokec2 let\cf4 \strokec4  minDist \cf6 \strokec6 =\cf4 \strokec4  \cf9 \strokec9 15\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                    \cf5 \strokec5 Object\cf6 \strokec6 .\cf4 \strokec4 entries\cf6 \strokec6 (\cf4 \strokec4 playerPositions\cf6 \strokec6 ).\cf4 \strokec4 forEach\cf6 \strokec6 (([\cf4 \strokec4 pid\cf6 \strokec6 ,\cf4 \strokec4  pos\cf6 \strokec6 ])\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                        \cf2 \strokec2 const\cf4 \strokec4  dist \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 Math\cf6 \strokec6 .\cf4 \strokec4 sqrt\cf6 \strokec6 (\cf5 \strokec5 Math\cf6 \strokec6 .\cf4 \strokec4 pow\cf6 \strokec6 (\cf4 \strokec4 pos\cf6 \strokec6 .\cf4 \strokec4 x \cf6 \strokec6 -\cf4 \strokec4  dropX\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 +\cf4 \strokec4  \cf5 \strokec5 Math\cf6 \strokec6 .\cf4 \strokec4 pow\cf6 \strokec6 (\cf4 \strokec4 pos\cf6 \strokec6 .\cf4 \strokec4 y \cf6 \strokec6 -\cf4 \strokec4  dropY\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3                        \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 dist \cf6 \strokec6 <\cf4 \strokec4  minDist\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  minDist \cf6 \strokec6 =\cf4 \strokec4  dist\cf6 \strokec6 ;\cf4 \strokec4  nearestId \cf6 \strokec6 =\cf4 \strokec4  pid\cf6 \strokec6 ;\cf4 \strokec4  \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                    \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3                    \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 nearestId\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                        \cf2 \strokec2 const\cf4 \strokec4  benchId \cf6 \strokec6 =\cf4 \strokec4  draggedPlayer\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                        \cf2 \strokec2 const\cf4 \strokec4  newActive \cf6 \strokec6 =\cf4 \strokec4  activePlayerIds\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 id \cf6 \strokec6 =>\cf4 \strokec4  id \cf6 \strokec6 ===\cf4 \strokec4  nearestId \cf6 \strokec6 ?\cf4 \strokec4  benchId \cf6 \strokec6 :\cf4 \strokec4  id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3                        setActivePlayerIds\cf6 \strokec6 (\cf4 \strokec4 newActive\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3                        setPlayerPositions\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                            \cf2 \strokec2 const\cf4 \strokec4  next \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{...\cf4 \strokec4 prev\cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3                            next\cf6 \strokec6 [\cf4 \strokec4 benchId\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  next\cf6 \strokec6 [\cf4 \strokec4 nearestId\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3                            \cf2 \strokec2 delete\cf4 \strokec4  next\cf6 \strokec6 [\cf4 \strokec4 nearestId\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3                            \cf2 \strokec2 return\cf4 \strokec4  next\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                        \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3                    \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3            \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3            setDraggedPlayer\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3        \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 mode \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'draw'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  isDrawing\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3            setIsDrawing\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3            \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 currentPath \cf6 \strokec6 &&\cf4 \strokec4  currentPath\cf6 \strokec6 .\cf4 \strokec4 points\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                setPaths\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 [...\cf4 \strokec4 prev\cf6 \strokec6 ,\cf4 \strokec4  currentPath\cf6 \strokec6 ]);\cf4 \cb1 \strokec4 \
\cb3            \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3            setCurrentPath\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3        \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3     window\cf6 \strokec6 .\cf4 \strokec4 addEventListener\cf6 \strokec6 (\cf7 \strokec7 'mousemove'\cf6 \strokec6 ,\cf4 \strokec4  handleWindowMouseMove\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     window\cf6 \strokec6 .\cf4 \strokec4 addEventListener\cf6 \strokec6 (\cf7 \strokec7 'mouseup'\cf6 \strokec6 ,\cf4 \strokec4  handleWindowMouseUp\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         window\cf6 \strokec6 .\cf4 \strokec4 removeEventListener\cf6 \strokec6 (\cf7 \strokec7 'mousemove'\cf6 \strokec6 ,\cf4 \strokec4  handleWindowMouseMove\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         window\cf6 \strokec6 .\cf4 \strokec4 removeEventListener\cf6 \strokec6 (\cf7 \strokec7 'mouseup'\cf6 \strokec6 ,\cf4 \strokec4  handleWindowMouseUp\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 mode\cf6 \strokec6 ,\cf4 \strokec4  draggedPlayer\cf6 \strokec6 ,\cf4 \strokec4  isDrawing\cf6 \strokec6 ,\cf4 \strokec4  enforceRules\cf6 \strokec6 ,\cf4 \strokec4  currentPath\cf6 \strokec6 ,\cf4 \strokec4  playerPositions\cf6 \strokec6 ,\cf4 \strokec4  activePlayerIds\cf6 \strokec6 ]);\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  handleTokenDown \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 ,\cf4 \strokec4  playerId\cf6 \strokec6 ,\cf4 \strokec4  isBench\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 mode \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'move'\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           saveToHistory\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3           setDraggedPlayer\cf6 \strokec6 (\{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  playerId\cf6 \strokec6 ,\cf4 \strokec4  isBench \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  handleCourtDown \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 mode \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'draw'\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           saveToHistory\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3           setIsDrawing\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 const\cf4 \strokec4  rect \cf6 \strokec6 =\cf4 \strokec4  courtRef\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 .\cf4 \strokec4 getBoundingClientRect\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 const\cf4 \strokec4  x \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ((\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 clientX \cf6 \strokec6 -\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 left\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 width\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 const\cf4 \strokec4  y \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ((\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 clientY \cf6 \strokec6 -\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 top\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  rect\cf6 \strokec6 .\cf4 \strokec4 height\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3           setCurrentPath\cf6 \strokec6 (\{\cf4 \strokec4  points\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\{\cf4 \strokec4 x\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 \}],\cf4 \strokec4  color\cf6 \strokec6 :\cf4 \strokec4  drawColor \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  saveToHistory \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     setHistory\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 [...\cf4 \strokec4 prev\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       playerPositions\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 parse\cf6 \strokec6 (\cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 playerPositions\cf6 \strokec6 )),\cf4 \cb1 \strokec4 \
\cb3       paths\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 parse\cf6 \strokec6 (\cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 paths\cf6 \strokec6 )),\cf4 \cb1 \strokec4 \
\cb3       activePlayers\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [...\cf4 \strokec4 activePlayerIds\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}]);\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 history\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 20\cf6 \strokec6 )\cf4 \strokec4  setHistory\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  prev\cf6 \strokec6 .\cf4 \strokec4 slice\cf6 \strokec6 (\cf9 \strokec9 1\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  undo \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 history\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  previousState \cf6 \strokec6 =\cf4 \strokec4  history\cf6 \strokec6 [\cf4 \strokec4 history\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 -\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3     setPlayerPositions\cf6 \strokec6 (\cf4 \strokec4 previousState\cf6 \strokec6 .\cf4 \strokec4 playerPositions\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setPaths\cf6 \strokec6 (\cf4 \strokec4 previousState\cf6 \strokec6 .\cf4 \strokec4 paths\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setActivePlayerIds\cf6 \strokec6 (\cf4 \strokec4 previousState\cf6 \strokec6 .\cf4 \strokec4 activePlayers\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setHistory\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  prev\cf6 \strokec6 .\cf4 \strokec4 slice\cf6 \strokec6 (\cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 -\cf9 \strokec9 1\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  updateRoster \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 index\cf6 \strokec6 ,\cf4 \strokec4  field\cf6 \strokec6 ,\cf4 \strokec4  value\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 field \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'number'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  value\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \strokec4  \cb1 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  newRoster \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [...\cf4 \strokec4 roster\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3     newRoster\cf6 \strokec6 [\cf4 \strokec4 index\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf6 \strokec6 ...\cf4 \strokec4 newRoster\cf6 \strokec6 [\cf4 \strokec4 index\cf6 \strokec6 ],\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 field\cf6 \strokec6 ]:\cf4 \strokec4  value \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3     setRoster\cf6 \strokec6 (\cf4 \strokec4 newRoster\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  phases \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'primary'\cf6 \strokec6 ,\cf4 \strokec4  label\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Serve Receive 1'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'secondary'\cf6 \strokec6 ,\cf4 \strokec4  label\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Serve Receive 2'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'transition'\cf6 \strokec6 ,\cf4 \strokec4  label\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Transition'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'defense'\cf6 \strokec6 ,\cf4 \strokec4  label\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Base Defense'\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "min-h-screen bg-slate-900 text-slate-100 font-sans select-none"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Ghost Token */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4 draggedPlayer \cf6 \strokec6 &&\cf4 \strokec4  draggedPlayer\cf6 \strokec6 .\cf4 \strokec4 isBench \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3            \cf6 \strokec6 <\cf5 \strokec5 PlayerToken\cf4 \strokec4  \cb1 \
\cb3               player\cf6 \strokec6 =\{\cf4 \strokec4 roster\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 p \cf6 \strokec6 =>\cf4 \strokec4  p\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  draggedPlayer\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 )\}\cf4 \strokec4  \cb1 \
\cb3               isDragging\cf6 \strokec6 =\{\cf2 \strokec2 true\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3               isBench\cf6 \strokec6 =\{\cf2 \strokec2 true\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               style\cf6 \strokec6 =\{\{\cf4 \strokec4  position\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'fixed'\cf6 \strokec6 ,\cf4 \strokec4  left\cf6 \strokec6 :\cf4 \strokec4  mousePos\cf6 \strokec6 .\cf4 \strokec4 x\cf6 \strokec6 ,\cf4 \strokec4  top\cf6 \strokec6 :\cf4 \strokec4  mousePos\cf6 \strokec6 .\cf4 \strokec4 y \cf6 \strokec6 \}\}\cf4 \cb1 \strokec4 \
\cb3            />\cb1 \
\cb3       \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Header */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 header className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-900 border-b border-slate-700 p-4 sticky top-0 z-50"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto flex items-center justify-between"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-red-600 p-2 rounded-lg text-white"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 ClubLogo\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 24\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 h1 className\cf6 \strokec6 =\cf7 \strokec7 "text-xl font-black tracking-tight text-white"\cf6 \strokec6 >\cf5 \strokec5 ACADEMYVB\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-red-500"\cf6 \strokec6 >\cf5 \strokec5 PRO\cf6 \strokec6 </\cf4 \strokec4 span></h1\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2 text-xs text-slate-400 mt-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "font-bold text-white"\cf6 \strokec6 >\{\cf4 \strokec4 teams\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  currentTeamId\cf6 \strokec6 )?.\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf5 \strokec5 ChevronRight\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 12\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "font-bold text-slate-300"\cf6 \strokec6 >\{\cf4 \strokec4 lineups\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  currentLineupId\cf6 \strokec6 )?.\cf4 \strokec4 name \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 'Untitled'\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3             \cf6 \strokec6 \{\cf8 \strokec8 /* NAV TABS */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex bg-slate-800 rounded-lg p-1 border border-slate-700"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setActiveTab\cf6 \strokec6 (\cf7 \strokec7 'roster'\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all \cf6 \strokec6 $\{\cf4 \strokec4 activeTab \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'roster'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-red-600 text-white shadow-lg'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-slate-400 hover:text-white hover:bg-slate-700'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 Users\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Roster\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setActiveTab\cf6 \strokec6 (\cf7 \strokec7 'board'\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all \cf6 \strokec6 $\{\cf4 \strokec4 activeTab \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'board'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-red-600 text-white shadow-lg'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-slate-400 hover:text-white hover:bg-slate-700'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 CourtIcon\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Court\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  setActiveTab\cf6 \strokec6 (\cf7 \strokec7 'export'\cf6 \strokec6 );\cf4 \strokec4  saveCurrentState\cf6 \strokec6 ();\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all \cf6 \strokec6 $\{\cf4 \strokec4 activeTab \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'export'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-red-600 text-white shadow-lg'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-slate-400 hover:text-white hover:bg-slate-700'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 ClipboardList\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Game\cf4 \strokec4  \cf5 \strokec5 Plan\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsTeamManagerOpen\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-medium hover:bg-slate-700 transition-colors"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 Briefcase\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-blue-400"\cf4 \strokec4  /> \cf5 \strokec5 Teams\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsLineupManagerOpen\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-medium hover:bg-slate-700 transition-colors"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 FolderOpen\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-red-400"\cf4 \strokec4  /> \cf5 \strokec5 Lineups\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 header\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* TEAM MANAGER MODAL */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4 isTeamManagerOpen \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-900 border border-slate-700 p-0 rounded-xl shadow-2xl w-[500px] overflow-hidden"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-xl font-bold text-white"\cf6 \strokec6 >\cf5 \strokec5 My\cf4 \strokec4  \cf5 \strokec5 Teams\cf6 \strokec6 </\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsTeamManagerOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-400 hover:text-white"\cf4 \strokec4 ><\cf5 \strokec5 X\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 20\cf6 \strokec6 \}\cf4 \strokec4  /></button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-4 max-h-[50vh] overflow-y-auto space-y-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 \{\cf4 \strokec4 teams\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 <\cf4 \strokec4 div key\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `flex items-center justify-between p-3 rounded-lg border transition-all \cf6 \strokec6 $\{\cf4 \strokec4 currentTeamId \cf6 \strokec6 ===\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-blue-900/20 border-blue-500/50'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-slate-800 border-slate-700 hover:border-slate-500'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 \{\cf4 \strokec4 editId \cf6 \strokec6 ===\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                                   \cf6 \strokec6 <\cf4 \strokec4 input \cb1 \
\cb3                                       className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-900 border border-blue-500 rounded px-2 py-1 text-sm text-white flex-1 mr-2"\cf4 \cb1 \strokec4 \
\cb3                                       value\cf6 \strokec6 =\{\cf4 \strokec4 editName\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                                       onChange\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setEditName\cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                                       onBlur\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  renameTeam\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  editName\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                                       onKeyDown\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 key \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'Enter'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  renameTeam\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  editName\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                                       autoFocus\cb1 \
\cb3                                   />\cb1 \
\cb3                               \cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                                   \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  switchTeam\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 text-left font-bold text-sm text-slate-200"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                   \cf6 \strokec6 \{\cf4 \strokec4 currentTeamId \cf6 \strokec6 ===\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] font-bold bg-blue-500 text-white px-2 py-0.5 rounded-full"\cf6 \strokec6 >\cf5 \strokec5 ACTIVE\cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\}\cf4 \cb1 \strokec4 \
\cb3                                   \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 stopPropagation\cf6 \strokec6 ();\cf4 \strokec4  setEditId\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \strokec4  setEditName\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 );\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "p-2 text-slate-500 hover:text-blue-400"\cf4 \strokec4 ><\cf5 \strokec5 Pencil\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 14\cf6 \strokec6 \}\cf4 \strokec4  /></button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                   \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 stopPropagation\cf6 \strokec6 ();\cf4 \strokec4  deleteTeam\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "p-2 text-slate-500 hover:text-red-500"\cf4 \strokec4 ><\cf5 \strokec5 Trash2\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 14\cf6 \strokec6 \}\cf4 \strokec4  /></button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-6 bg-slate-800 border-t border-slate-700"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex gap-2 mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 <\cf4 \strokec4 input \cb1 \
\cb3                             \cf2 \strokec2 type\cf6 \strokec6 =\cf7 \strokec7 "text"\cf4 \strokec4  \cb1 \
\cb3                             placeholder\cf6 \strokec6 =\cf7 \strokec7 "New Team Name (e.g. 17 National)"\cf4 \strokec4  \cb1 \
\cb3                             className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 p-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"\cf4 \cb1 \strokec4 \
\cb3                             value\cf6 \strokec6 =\{\cf4 \strokec4 newItemName\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                             onChange\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setNewItemName\cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                           />\cb1 \
\cb3                           \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{\cf4 \strokec4 createTeam\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm transition-colors flex items-center gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 <\cf5 \strokec5 Plus\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Create\cf4 \strokec4  \cf5 \strokec5 Team\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{\cf4 \strokec4 clearAllData\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-full p-2 bg-slate-800 hover:bg-red-900/30 text-red-400 rounded-lg font-medium text-xs flex items-center justify-center gap-2 border border-slate-700 hover:border-red-800"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 <\cf5 \strokec5 AlertTriangle\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 14\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Reset\cf4 \strokec4  \cf5 \strokec5 All\cf4 \strokec4  \cf5 \strokec5 Data\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* LINEUP MANAGER MODAL */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4 isLineupManagerOpen \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-900 border border-slate-700 p-0 rounded-xl shadow-2xl w-[500px] overflow-hidden flex flex-col max-h-[80vh]"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-xl font-bold text-white"\cf6 \strokec6 >\cf5 \strokec5 Lineups\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-500 text-sm ml-2"\cf6 \strokec6 >\cf2 \strokec2 for\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 teams\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 =>\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ===\cf4 \strokec4 currentTeamId\cf6 \strokec6 )?.\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 span></h2\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsLineupManagerOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-400 hover:text-white"\cf4 \strokec4 ><\cf5 \strokec5 X\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 20\cf6 \strokec6 \}\cf4 \strokec4  /></button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cb1 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-4 overflow-y-auto flex-1 space-y-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 \{\cf4 \strokec4 lineups\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 teamId \cf6 \strokec6 ===\cf4 \strokec4  currentTeamId\cf6 \strokec6 ).\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 <\cf4 \strokec4 div key\cf6 \strokec6 =\{\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `flex items-center justify-between p-3 rounded-lg border transition-all \cf6 \strokec6 $\{\cf4 \strokec4 currentLineupId \cf6 \strokec6 ===\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-red-900/20 border-red-500/50'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-slate-800 border-slate-700 hover:border-slate-500'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 \{\cf4 \strokec4 editId \cf6 \strokec6 ===\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                                   \cf6 \strokec6 <\cf4 \strokec4 input \cb1 \
\cb3                                       className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-900 border border-red-500 rounded px-2 py-1 text-sm text-white flex-1 mr-2"\cf4 \cb1 \strokec4 \
\cb3                                       value\cf6 \strokec6 =\{\cf4 \strokec4 editName\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                                       onChange\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setEditName\cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                                       onBlur\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  renameLineup\cf6 \strokec6 (\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  editName\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                                       onKeyDown\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 key \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'Enter'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  renameLineup\cf6 \strokec6 (\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  editName\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                                       autoFocus\cb1 \
\cb3                                   />\cb1 \
\cb3                               \cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                                   \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  loadLineup\cf6 \strokec6 (\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 text-left font-bold text-sm text-slate-200"\cf6 \strokec6 >\{\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                   \cf6 \strokec6 \{\cf4 \strokec4 currentLineupId \cf6 \strokec6 ===\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-full"\cf6 \strokec6 >\cf5 \strokec5 ACTIVE\cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\}\cf4 \cb1 \strokec4 \
\cb3                                   \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 stopPropagation\cf6 \strokec6 ();\cf4 \strokec4  setEditId\cf6 \strokec6 (\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \strokec4  setEditName\cf6 \strokec6 (\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 );\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "p-2 text-slate-500 hover:text-blue-400"\cf4 \strokec4 ><\cf5 \strokec5 Pencil\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 14\cf6 \strokec6 \}\cf4 \strokec4  /></button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                   \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 stopPropagation\cf6 \strokec6 ();\cf4 \strokec4  deleteLineup\cf6 \strokec6 (\cf4 \strokec4 l\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "p-2 text-slate-500 hover:text-red-500"\cf4 \strokec4 ><\cf5 \strokec5 Trash2\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 14\cf6 \strokec6 \}\cf4 \strokec4  /></button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-6 bg-slate-800 border-t border-slate-700"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-bold text-slate-500 uppercase tracking-widest mb-4"\cf6 \strokec6 >\cf5 \strokec5 Create\cf4 \strokec4  \cf5 \strokec5 New\cf4 \strokec4  \cf5 \strokec5 Lineup\cf6 \strokec6 </\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 input \cb1 \
\cb3                         \cf2 \strokec2 type\cf6 \strokec6 =\cf7 \strokec7 "text"\cf4 \strokec4  \cb1 \
\cb3                         placeholder\cf6 \strokec6 =\cf7 \strokec7 "Lineup Name (e.g. Regionals Day 1)"\cf4 \strokec4  \cb1 \
\cb3                         className\cf6 \strokec6 =\cf7 \strokec7 "w-full p-3 bg-slate-900 border border-slate-600 rounded-lg mb-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-red-500 outline-none"\cf4 \cb1 \strokec4 \
\cb3                         value\cf6 \strokec6 =\{\cf4 \strokec4 newItemName\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                         onChange\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setNewItemName\cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                       />\cb1 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid grid-cols-2 gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  createLineup\cf6 \strokec6 (\cf4 \strokec4 newItemName \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 'New Lineup'\cf6 \strokec6 ,\cf4 \strokec4  getMasterTeam\cf6 \strokec6 ())\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "p-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold text-sm transition-colors"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                               \cf5 \strokec5 Use\cf4 \strokec4  \cf5 \strokec5 Master\cf4 \strokec4  \cf5 \strokec5 Team\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  createLineup\cf6 \strokec6 (\cf4 \strokec4 newItemName \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 'New Lineup'\cf6 \strokec6 ,\cf4 \strokec4  roster\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "p-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-medium text-sm transition-colors"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                               \cf5 \strokec5 Clone\cf4 \strokec4  \cf5 \strokec5 Current\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 <\cf4 \strokec4 main className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto p-4 md:p-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cb1 \
\cb3         \cf6 \strokec6 \{\cf8 \strokec8 /* --- BOARD VIEW --- */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4 activeTab \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'board'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid grid-cols-1 lg:grid-cols-12 gap-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf8 \strokec8 /* Sidebar Controls */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "lg:col-span-3 space-y-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-xl"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-black text-slate-500 uppercase tracking-widest mb-4"\cf6 \strokec6 >\cf5 \strokec5 Select\cf4 \strokec4  \cf5 \strokec5 Rotation\cf6 \strokec6 </\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid grid-cols-3 gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 \{[\cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 5\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 6\cf6 \strokec6 ].\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 num \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 button\cb1 \
\cb3                       key\cf6 \strokec6 =\{\cf4 \strokec4 num\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                       onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  handleViewChange\cf6 \strokec6 (\cf4 \strokec4 num\cf6 \strokec6 ,\cf4 \strokec4  currentPhase\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                       className\cf6 \strokec6 =\{\cf7 \strokec7 `py-3 rounded-xl font-black text-lg transition-all \cf6 \strokec6 $\{\cf4 \strokec4 currentRotation \cf6 \strokec6 ===\cf4 \strokec4  num \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-red-600 text-white shadow-lg scale-105 ring-2 ring-red-400'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-slate-900 text-slate-400 hover:bg-slate-700'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 \{\cf4 \strokec4 num\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-xl"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-black text-slate-500 uppercase tracking-widest mb-4"\cf6 \strokec6 >\cf5 \strokec5 Game\cf4 \strokec4  \cf5 \strokec5 Phase\cf6 \strokec6 </\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                    \cf6 \strokec6 \{\cf4 \strokec4 phases\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 p \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                        \cf6 \strokec6 <\cf4 \strokec4 button\cb1 \
\cb3                          key\cf6 \strokec6 =\{\cf4 \strokec4 p\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                          onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  handleViewChange\cf6 \strokec6 (\cf4 \strokec4 currentRotation\cf6 \strokec6 ,\cf4 \strokec4  p\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                          className\cf6 \strokec6 =\{\cf7 \strokec7 `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold transition-all \cf6 \strokec6 $\{\cf4 \strokec4 currentPhase \cf6 \strokec6 ===\cf4 \strokec4  p\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-slate-100 text-slate-900'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-slate-900 text-slate-400 hover:bg-slate-700'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                        \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                            \cf6 \strokec6 \{\cf4 \strokec4 p\cf6 \strokec6 .\cf4 \strokec4 label\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                            \cf6 \strokec6 \{\cf4 \strokec4 currentPhase \cf6 \strokec6 ===\cf4 \strokec4  p\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-2 h-2 bg-red-500 rounded-full"\cf4 \strokec4  />\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                        \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                    \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-xl"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex justify-between items-center mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                      \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-black text-slate-500 uppercase tracking-widest"\cf6 \strokec6 >\cf5 \strokec5 Tools\cf6 \strokec6 </\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                      \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  saveToHistory\cf6 \strokec6 ();\cf4 \strokec4  setPaths\cf6 \strokec6 ([]);\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-xs text-rose-500 hover:text-rose-400 flex items-center gap-1 font-bold"\cf4 \strokec4 ><\cf5 \strokec5 Trash2\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 12\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Clear\cf4 \strokec4  \cf5 \strokec5 Ink\cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cb1 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex bg-slate-900 p-1 rounded-xl mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setMode\cf6 \strokec6 (\cf7 \strokec7 'move'\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all \cf6 \strokec6 $\{\cf4 \strokec4 mode \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'move'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-slate-700 text-white shadow'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-slate-500 hover:text-slate-300'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \strokec4 ><\cf5 \strokec5 Move\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Move\cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setMode\cf6 \strokec6 (\cf7 \strokec7 'draw'\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all \cf6 \strokec6 $\{\cf4 \strokec4 mode \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'draw'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-slate-700 text-white shadow'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-slate-500 hover:text-slate-300'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \strokec4 ><\cf5 \strokec5 Pencil\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Draw\cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 mode \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'draw'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex gap-3 justify-center mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 \{[\cf7 \strokec7 '#000000'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '#22c55e'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '#3b82f6'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '#ef4444'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '#facc15'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '#ffffff'\cf6 \strokec6 ].\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 c \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 <\cf4 \strokec4 button key\cf6 \strokec6 =\{\cf4 \strokec4 c\cf6 \strokec6 \}\cf4 \strokec4  onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setDrawColor\cf6 \strokec6 (\cf4 \strokec4 c\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `w-8 h-8 rounded-full border-2 border-slate-600 shadow-sm transition-transform hover:scale-110 \cf6 \strokec6 $\{\cf4 \strokec4 drawColor \cf6 \strokec6 ===\cf4 \strokec4  c \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'ring-2 ring-offset-2 ring-slate-400 scale-110 border-white'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 ''\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \strokec4  style\cf6 \strokec6 =\{\{\cf4 \strokec4  backgroundColor\cf6 \strokec6 :\cf4 \strokec4  c \cf6 \strokec6 \}\}\cf4 \strokec4  />\cb1 \
\cb3                       \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                 \cb1 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setEnforceRules\cf6 \strokec6 (!\cf4 \strokec4 enforceRules\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `w-full flex items-center justify-between px-4 py-3 rounded-lg border text-xs font-bold transition-colors \cf6 \strokec6 $\{\cf4 \strokec4 enforceRules \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-emerald-900/30 border-emerald-500/50 text-emerald-400'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-slate-900 border-slate-700 text-slate-500'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2"\cf6 \strokec6 >\{\cf4 \strokec4 enforceRules \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 ShieldCheck\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  /> \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 ShieldAlert\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  />\cf6 \strokec6 \}\cf4 \strokec4  \cf5 \strokec5 Overlap\cf4 \strokec4  \cf5 \strokec5 Rules\cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\{\cf7 \strokec7 `px-2 py-0.5 rounded \cf6 \strokec6 $\{\cf4 \strokec4 enforceRules \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-emerald-500 text-emerald-950'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-slate-700 text-slate-400'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\{\cf4 \strokec4 enforceRules \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'ON'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'OFF'\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3             \cf6 \strokec6 \{\cf8 \strokec8 /* MAIN COURT */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "lg:col-span-6 flex flex-col items-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                \cb1 \
\cb3                \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-full max-w-[500px] flex justify-between items-center mb-3 px-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3                       onClick\cf6 \strokec6 =\{\cf4 \strokec4 undo\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                       disabled\cf6 \strokec6 =\{\cf4 \strokec4 history\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                       className\cf6 \strokec6 =\{\cf7 \strokec7 `text-sm flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-colors \cf6 \strokec6 $\{\cf4 \strokec4 history\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'text-slate-600 bg-slate-800'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-slate-700 text-white hover:bg-slate-600'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf5 \strokec5 Undo\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 14\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Undo\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3                       onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  handleExport\cf6 \strokec6 (\cf7 \strokec7 'court-capture-area'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 `Rotation-\cf6 \strokec6 $\{\cf4 \strokec4 currentRotation\cf6 \strokec6 \}\cf7 \strokec7 -\cf6 \strokec6 $\{\cf4 \strokec4 currentPhase\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 )\}\cf4 \strokec4  \cb1 \
\cb3                       className\cf6 \strokec6 =\cf7 \strokec7 "text-sm flex items-center gap-2 px-4 py-2 rounded-full font-bold bg-slate-700 text-white hover:bg-slate-600 transition-colors"\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf5 \strokec5 Camera\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 14\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Download\cf4 \strokec4  \cf5 \strokec5 Image\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3                \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-full bg-slate-800 p-2 rounded-2xl shadow-2xl ring-1 ring-slate-700"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 Court\cf4 \strokec4  courtRef\cf6 \strokec6 =\{\cf4 \strokec4 courtRef\cf6 \strokec6 \}\cf4 \strokec4  paths\cf6 \strokec6 =\{\cf4 \strokec4 paths\cf6 \strokec6 \}\cf4 \strokec4  currentPath\cf6 \strokec6 =\{\cf4 \strokec4 currentPath\cf6 \strokec6 \}\cf4 \strokec4  onMouseDown\cf6 \strokec6 =\{\cf4 \strokec4 handleCourtDown\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 \{\cf5 \strokec5 Object\cf6 \strokec6 .\cf4 \strokec4 entries\cf6 \strokec6 (\cf4 \strokec4 playerPositions\cf6 \strokec6 ).\cf4 \strokec4 map\cf6 \strokec6 (([\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  pos\cf6 \strokec6 ])\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                         \cf2 \strokec2 const\cf4 \strokec4  player \cf6 \strokec6 =\cf4 \strokec4  roster\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 p \cf6 \strokec6 =>\cf4 \strokec4  p\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3                         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 player\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                         \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 PlayerToken\cf4 \strokec4  key\cf6 \strokec6 =\{\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  player\cf6 \strokec6 =\{\cf4 \strokec4 player\cf6 \strokec6 \}\cf4 \strokec4  x\cf6 \strokec6 =\{\cf4 \strokec4 pos\cf6 \strokec6 .\cf4 \strokec4 x\cf6 \strokec6 \}\cf4 \strokec4  y\cf6 \strokec6 =\{\cf4 \strokec4 pos\cf6 \strokec6 .\cf4 \strokec4 y\cf6 \strokec6 \}\cf4 \strokec4  isDragging\cf6 \strokec6 =\{\cf4 \strokec4 draggedPlayer\cf6 \strokec6 ?.\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  id \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 draggedPlayer\cf6 \strokec6 ?.\cf4 \strokec4 isBench\cf6 \strokec6 \}\cf4 \strokec4  isBench\cf6 \strokec6 =\{\cf2 \strokec2 false\cf6 \strokec6 \}\cf4 \strokec4  onMouseDown\cf6 \strokec6 =\{\cf4 \strokec4 handleTokenDown\cf6 \strokec6 \}\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 \})\}\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 \{\cf4 \strokec4 enforceRules \cf6 \strokec6 &&\cf4 \strokec4  mode \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'move'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm opacity-90 pointer-events-none z-40 uppercase tracking-wider"\cf6 \strokec6 >\cf5 \strokec5 Rules\cf4 \strokec4  \cf5 \strokec5 Active\cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf5 \strokec5 Court\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                \cb1 \
\cb3                \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "mt-6 flex justify-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  initRotationDefaults\cf6 \strokec6 (\cf4 \strokec4 currentRotation\cf6 \strokec6 ,\cf4 \strokec4  roster\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-500 hover:text-white text-xs font-bold flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                      \cf6 \strokec6 <\cf5 \strokec5 RefreshCw\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 12\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Reset\cf4 \strokec4  to \cf5 \strokec5 Default\cf4 \strokec4  \cf5 \strokec5 Positions\cf4 \cb1 \strokec4 \
\cb3                    \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3             \cf6 \strokec6 \{\cf8 \strokec8 /* BENCH */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "lg:col-span-3 space-y-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-800 p-5 rounded-2xl border border-slate-700 h-full"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-black text-slate-500 uppercase tracking-widest mb-4"\cf6 \strokec6 >\cf5 \strokec5 Bench\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  \cf5 \strokec5 Subs\cf6 \strokec6 </\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid grid-cols-2 gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 \{\cf4 \strokec4 roster\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 p \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 activePlayerIds\cf6 \strokec6 .\cf4 \strokec4 includes\cf6 \strokec6 (\cf4 \strokec4 p\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 )).\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 player \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 <\cf4 \strokec4 div \cb1 \
\cb3                                 key\cf6 \strokec6 =\{\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                                 className\cf6 \strokec6 =\cf7 \strokec7 "relative flex flex-col items-center p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-red-500 cursor-grab active:cursor-grabbing group transition-all"\cf4 \cb1 \strokec4 \
\cb3                                 onMouseDown\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  handleTokenDown\cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 ,\cf4 \strokec4  player\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 true\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 shadow-sm \cf6 \strokec6 $\{\cf4 \strokec4 getRoleColor\cf6 \strokec6 (\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 role\cf6 \strokec6 )\}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                                     \cf6 \strokec6 \{\cf4 \strokec4 player\cf6 \strokec6 .\cf2 \strokec2 number\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-bold text-slate-300"\cf6 \strokec6 >\{\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] font-bold text-slate-500 uppercase"\cf6 \strokec6 >\{\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 role\cf6 \strokec6 \}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 \{\cf4 \strokec4 roster\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 p \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 activePlayerIds\cf6 \strokec6 .\cf4 \strokec4 includes\cf6 \strokec6 (\cf4 \strokec4 p\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 )).\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                          \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-center text-slate-600 text-sm py-10 italic"\cf6 \strokec6 >\cf5 \strokec5 Empty\cf4 \strokec4  \cf5 \strokec5 Bench\cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 \{\cf8 \strokec8 /* --- EXPORT GRID VIEW (Fixed 8.5x11 Ratio) --- */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4 activeTab \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'export'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-100 min-h-screen flex justify-center py-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf8 \strokec8 /* FIXED DIMENSIONS: 1224px width, 1584px height (8.5x11 Scaled) */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div id\cf6 \strokec6 =\cf7 \strokec7 "full-report-grid"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "bg-white text-slate-900 w-[1224px] h-[1584px] shadow-2xl p-12 relative overflow-hidden flex flex-col box-border"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cb1 \
\cb3                     \cf6 \strokec6 \{\cf8 \strokec8 /* Page Header */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex justify-between items-end border-b-4 border-slate-900 pb-6 mb-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-4 mb-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-red-600"\cf4 \strokec4 ><\cf5 \strokec5 ClubLogo\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 56\cf6 \strokec6 \}\cf4 \strokec4  /></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 <\cf4 \strokec4 h1 className\cf6 \strokec6 =\cf7 \strokec7 "text-5xl font-black text-slate-900 tracking-tight"\cf6 \strokec6 >\cf5 \strokec5 GAME\cf4 \strokec4  \cf5 \strokec5 PLAN\cf6 \strokec6 </\cf4 \strokec4 h1\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-2xl font-bold text-slate-500 pl-2"\cf6 \strokec6 >\{\cf4 \strokec4 lineups\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 l \cf6 \strokec6 =>\cf4 \strokec4  l\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  currentLineupId\cf6 \strokec6 )?.\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-right"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-sm font-bold text-slate-400 uppercase tracking-widest mb-1"\cf6 \strokec6 >\cf5 \strokec5 Team\cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-3xl font-black text-slate-900"\cf6 \strokec6 >\{\cf4 \strokec4 teams\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 =>\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ===\cf4 \strokec4 currentTeamId\cf6 \strokec6 )?.\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3                     \cf6 \strokec6 \{\cf8 \strokec8 /* Grid */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid grid-cols-1 gap-6 flex-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 \{[\cf9 \strokec9 1\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 2\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 3\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 4\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 5\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 6\cf6 \strokec6 ].\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 rot \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 <\cf4 \strokec4 div key\cf6 \strokec6 =\{\cf4 \strokec4 rot\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "flex gap-6 h-[190px] border-b border-slate-200 pb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 \{\cf8 \strokec8 /* Left Col: Rotation Header & Square (Fixed Width) */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-32 flex-none flex flex-col items-center justify-center gap-2 border-r border-slate-200 pr-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm pb-[2px] leading-none pt-0.5"\cf6 \strokec6 >\cf5 \strokec5 R\cf6 \strokec6 \{\cf4 \strokec4 rot\cf6 \strokec6 \}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-20 h-20"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                         \cf6 \strokec6 <\cf5 \strokec5 RotationSquare\cf4 \strokec4  rotation\cf6 \strokec6 =\{\cf4 \strokec4 rot\cf6 \strokec6 \}\cf4 \strokec4  roster\cf6 \strokec6 =\{\cf4 \strokec4 roster\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3                                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3                                 \cf6 \strokec6 \{\cf8 \strokec8 /* Right Col: Phases (Fixed 4 Columns) */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 grid grid-cols-4 gap-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                     \cf6 \strokec6 \{\cf4 \strokec4 phases\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 phase \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                                         \cf2 \strokec2 const\cf4 \strokec4  key \cf6 \strokec6 =\cf4 \strokec4  getStorageKey\cf6 \strokec6 (\cf4 \strokec4 rot\cf6 \strokec6 ,\cf4 \strokec4  phase\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3                                         \cf8 \strokec8 // Auto-populate data if missing (Bug fix for empty cells)\cf4 \cb1 \strokec4 \
\cb3                                         \cf2 \strokec2 let\cf4 \strokec4  data \cf6 \strokec6 =\cf4 \strokec4  savedRotations\cf6 \strokec6 [\cf4 \strokec4 key\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3                                         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 data\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                                             data \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  positions\cf6 \strokec6 :\cf4 \strokec4  calculateDefaultPositions\cf6 \strokec6 (\cf4 \strokec4 rot\cf6 \strokec6 ,\cf4 \strokec4  roster\cf6 \strokec6 ),\cf4 \strokec4  paths\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 []\cf4 \strokec4  \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3                                         \cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                                         \cb1 \
\cb3                                         \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                                             \cf6 \strokec6 <\cf4 \strokec4 div key\cf6 \strokec6 =\{\cf4 \strokec4 phase\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col h-full"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 bg-white border border-slate-900 rounded-lg overflow-hidden relative"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute inset-0"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                                         \cf6 \strokec6 <\cf5 \strokec5 Court\cf4 \strokec4  \cb1 \
\cb3                                                             small\cf6 \strokec6 =\{\cf2 \strokec2 true\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                                                             paths\cf6 \strokec6 =\{\cf4 \strokec4 data\cf6 \strokec6 .\cf4 \strokec4 paths \cf6 \strokec6 ||\cf4 \strokec4  \cf6 \strokec6 []\}\cf4 \strokec4  \cb1 \
\cb3                                                             readOnly\cf6 \strokec6 =\{\cf2 \strokec2 true\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                                                         \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                                             \cf6 \strokec6 \{\cf5 \strokec5 Object\cf6 \strokec6 .\cf4 \strokec4 entries\cf6 \strokec6 (\cf4 \strokec4 data\cf6 \strokec6 .\cf4 \strokec4 positions \cf6 \strokec6 ||\cf4 \strokec4  \cf6 \strokec6 \{\}).\cf4 \strokec4 map\cf6 \strokec6 (([\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  pos\cf6 \strokec6 ])\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3                                                                 \cf2 \strokec2 const\cf4 \strokec4  player \cf6 \strokec6 =\cf4 \strokec4  roster\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 p \cf6 \strokec6 =>\cf4 \strokec4  p\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 ===\cf4 \strokec4  id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3                                                                 \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 player\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                                                                 \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 PlayerToken\cf4 \strokec4  key\cf6 \strokec6 =\{\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  player\cf6 \strokec6 =\{\cf4 \strokec4 player\cf6 \strokec6 \}\cf4 \strokec4  x\cf6 \strokec6 =\{\cf4 \strokec4 pos\cf6 \strokec6 .\cf4 \strokec4 x\cf6 \strokec6 \}\cf4 \strokec4  y\cf6 \strokec6 =\{\cf4 \strokec4 pos\cf6 \strokec6 .\cf4 \strokec4 y\cf6 \strokec6 \}\cf4 \strokec4  small\cf6 \strokec6 =\{\cf2 \strokec2 true\cf6 \strokec6 \}\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3                                                             \cf6 \strokec6 \})\}\cf4 \cb1 \strokec4 \
\cb3                                                         \cf6 \strokec6 </\cf5 \strokec5 Court\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-center font-bold text-[9px] uppercase text-slate-500 tracking-wider mt-1"\cf6 \strokec6 >\{\cf4 \strokec4 phase\cf6 \strokec6 .\cf4 \strokec4 label\cf6 \strokec6 \}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                                         \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3                                     \cf6 \strokec6 \})\}\cf4 \cb1 \strokec4 \
\cb3                                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3                     \cf6 \strokec6 \{\cf8 \strokec8 /* Footer */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "mt-4 pt-4 border-t border-slate-200 flex justify-between items-center text-xs font-bold text-slate-400 uppercase"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf5 \strokec5 Generated\cf4 \strokec4  by \cf5 \strokec5 ACADEMYVB\cf4 \strokec4  \cf5 \strokec5 PRO\cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\{\cf2 \strokec2 new\cf4 \strokec4  \cf5 \strokec5 Date\cf6 \strokec6 ().\cf4 \strokec4 toLocaleDateString\cf6 \strokec6 ()\}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3                 \cf6 \strokec6 \{\cf8 \strokec8 /* Floating Download Button (Outside capture area) */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "fixed bottom-8 right-8 z-[9999]"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3                         onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  handleExport\cf6 \strokec6 (\cf7 \strokec7 'full-report-grid'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'GamePlan-Full'\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                         className\cf6 \strokec6 =\cf7 \strokec7 "bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl hover:scale-105 transition-all"\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf5 \strokec5 Download\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 24\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Download\cf4 \strokec4  \cf5 \strokec5 Image\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 \{\cf8 \strokec8 /* --- ROSTER VIEW --- */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4 activeTab \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'roster'\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-4xl mx-auto bg-slate-800 rounded-2xl shadow-xl border border-slate-700 overflow-hidden"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3              \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-6 border-b border-slate-700 flex flex-col md:flex-row justify-between items-center bg-slate-900/50 gap-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-xl font-bold text-white"\cf6 \strokec6 >\cf5 \strokec5 Team\cf4 \strokec4  \cf5 \strokec5 Roster\cf6 \strokec6 </\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-xs text-slate-400 mt-1"\cf6 \strokec6 >\cf5 \strokec5 Editing\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 strong\cf6 \strokec6 >\{\cf4 \strokec4 teams\cf6 \strokec6 .\cf4 \strokec4 find\cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 =>\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ===\cf4 \strokec4 currentTeamId\cf6 \strokec6 )?.\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 strong></p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{\cf4 \strokec4 saveAsMasterTeam\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2 bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-600 transition-colors"\cf4 \strokec4 ><\cf5 \strokec5 Save\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Save\cf4 \strokec4  \cf5 \strokec5 Default\cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setRoster\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 [...\cf4 \strokec4 prev\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 `p\cf6 \strokec6 $\{\cf5 \strokec5 Date\cf6 \strokec6 .\cf4 \strokec4 now\cf6 \strokec6 ()\}\cf7 \strokec7 `\cf6 \strokec6 ,\cf4 \strokec4  role\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'DS'\cf6 \strokec6 ,\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'New'\cf6 \strokec6 ,\cf4 \strokec4  \cf2 \strokec2 number\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 ''\cf4 \strokec4  \cf6 \strokec6 \}])\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-500 transition-colors"\cf4 \strokec4 ><\cf5 \strokec5 UserPlus\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 16\cf6 \strokec6 \}\cf4 \strokec4  /> \cf5 \strokec5 Add\cf4 \strokec4  \cf5 \strokec5 Player\cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 \{\cf4 \strokec4 roster\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 player\cf6 \strokec6 ,\cf4 \strokec4  idx\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div key\cf6 \strokec6 =\{\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "p-4 border border-slate-700 bg-slate-900 rounded-xl relative group hover:border-red-500 transition-colors"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center justify-between mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] font-black text-slate-500 uppercase tracking-widest"\cf6 \strokec6 >\{\cf4 \strokec4 idx \cf6 \strokec6 <\cf4 \strokec4  \cf9 \strokec9 6\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 `Starter \cf6 \strokec6 $\{\cf4 \strokec4 idx \cf6 \strokec6 +\cf4 \strokec4  \cf9 \strokec9 1\cf6 \strokec6 \}\cf7 \strokec7 `\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Bench'\cf6 \strokec6 \}</\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 \{\cf4 \strokec4 roster\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 6\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setRoster\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  prev\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 p \cf6 \strokec6 =>\cf4 \strokec4  p\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 !==\cf4 \strokec4  player\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ))\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-500 hover:text-rose-500 transition-colors"\cf4 \strokec4 ><\cf5 \strokec5 Trash2\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 14\cf6 \strokec6 \}\cf4 \strokec4  /></button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-4 mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 \{\cf8 \strokec8 /* Fixed Color Logic Here */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `w-12 h-12 rounded-full flex items-center justify-center font-black text-lg \cf6 \strokec6 $\{\cf4 \strokec4 getRoleColor\cf6 \strokec6 (\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 role\cf6 \strokec6 )\}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 \{\cf4 \strokec4 player\cf6 \strokec6 .\cf2 \strokec2 number\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 '#'\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 input \cb1 \
\cb3                             \cf2 \strokec2 type\cf6 \strokec6 =\cf7 \strokec7 "text"\cf4 \strokec4  \cb1 \
\cb3                             value\cf6 \strokec6 =\{\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                             onChange\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  updateRoster\cf6 \strokec6 (\cf4 \strokec4 idx\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'name'\cf6 \strokec6 ,\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 )\}\cf4 \strokec4  \cb1 \
\cb3                             className\cf6 \strokec6 =\cf7 \strokec7 "w-full bg-transparent font-bold text-white border-b border-slate-700 focus:border-red-500 focus:outline-none py-1"\cf4 \cb1 \strokec4 \
\cb3                             placeholder\cf6 \strokec6 =\cf7 \strokec7 "Name"\cf4 \cb1 \strokec4 \
\cb3                         />\cb1 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid grid-cols-2 gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 label className\cf6 \strokec6 =\cf7 \strokec7 "block text-[10px] font-bold text-slate-500 uppercase mb-1"\cf6 \strokec6 >\cf5 \strokec5 Role\cf6 \strokec6 </\cf4 \strokec4 label\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 select value\cf6 \strokec6 =\{\cf4 \strokec4 player\cf6 \strokec6 .\cf4 \strokec4 role\cf6 \strokec6 \}\cf4 \strokec4  onChange\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  updateRoster\cf6 \strokec6 (\cf4 \strokec4 idx\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'role'\cf6 \strokec6 ,\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-full p-2 bg-slate-800 border border-slate-600 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-red-500"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 \{[\cf7 \strokec7 "S"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "OH1"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "OH2"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "M1"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "M2"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "OPP"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "L"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "DS"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "SS"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "OH"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "M"\cf6 \strokec6 ].\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 r \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 option key\cf6 \strokec6 =\{\cf4 \strokec4 r\cf6 \strokec6 \}\cf4 \strokec4  value\cf6 \strokec6 =\{\cf4 \strokec4 r\cf6 \strokec6 \}>\{\cf4 \strokec4 r\cf6 \strokec6 \}</\cf4 \strokec4 option\cf6 \strokec6 >)\}\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 </\cf4 \strokec4 select\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 label className\cf6 \strokec6 =\cf7 \strokec7 "block text-[10px] font-bold text-slate-500 uppercase mb-1"\cf6 \strokec6 >\cf5 \strokec5 Number\cf4 \strokec4  \cf6 \strokec6 /\cf4 \strokec4  \cf5 \strokec5 Initials\cf6 \strokec6 </\cf4 \strokec4 label\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 input \cb1 \
\cb3                             \cf2 \strokec2 type\cf6 \strokec6 =\cf7 \strokec7 "text"\cf4 \strokec4  \cb1 \
\cb3                             value\cf6 \strokec6 =\{\cf4 \strokec4 player\cf6 \strokec6 .\cf2 \strokec2 number\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                             onChange\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  updateRoster\cf6 \strokec6 (\cf4 \strokec4 idx\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'number'\cf6 \strokec6 ,\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 )\}\cf4 \strokec4  \cb1 \
\cb3                             className\cf6 \strokec6 =\cf7 \strokec7 "w-full p-2 bg-slate-800 border border-slate-600 rounded-lg text-xs text-center text-white focus:outline-none focus:ring-2 focus:ring-red-500"\cf4 \strokec4  \cb1 \
\cb3                             placeholder\cf6 \strokec6 =\cf7 \strokec7 "# / Init"\cf4 \cb1 \strokec4 \
\cb3                         />\cb1 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 main\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf5 \strokec5 App\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
}