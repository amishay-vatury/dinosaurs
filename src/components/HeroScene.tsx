export function HeroScene() {
  return (
    <svg
      viewBox="0 0 1200 480"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0e1a" />
          <stop offset="45%" stopColor="#1a2a3a" />
          <stop offset="75%" stopColor="#2d4a2a" />
          <stop offset="100%" stopColor="#1a2e10" />
        </linearGradient>
        <linearGradient id="glow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#e8901a" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#e8901a" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#ffe080" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff9900" stopOpacity="0" />
        </radialGradient>
        <filter id="blur2">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="blur6">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1200" height="480" fill="url(#sky)" />

      {/* Stars */}
      {[
        [80,30],[150,55],[230,20],[310,45],[420,15],[500,40],[580,22],[660,50],
        [740,18],[820,38],[900,28],[980,52],[1060,16],[1130,42],[1180,30],
        [120,80],[270,70],[450,65],[620,85],[790,72],[960,68],[1100,75],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.5 : 1} fill="#fff" opacity={0.5 + (i % 4) * 0.1} />
      ))}

      {/* Moon / setting sun glow */}
      <circle cx="950" cy="90" r="55" fill="url(#moonGlow)" filter="url(#blur6)" />
      <circle cx="950" cy="90" r="28" fill="#ffe8a0" opacity="0.85" />
      <circle cx="950" cy="90" r="22" fill="#fff5c0" opacity="0.95" />

      {/* Horizon glow */}
      <ellipse cx="600" cy="310" rx="700" ry="80" fill="#3a6020" opacity="0.25" />

      {/* Far mountains – darkest */}
      <path d="M0 300 L100 220 L200 260 L300 190 L400 240 L500 200 L600 230 L700 185 L800 215 L900 180 L1000 210 L1100 175 L1200 200 L1200 480 L0 480 Z"
        fill="#0e1e0e" opacity="0.9" />

      {/* Mid mountains */}
      <path d="M0 340 L80 280 L180 310 L280 265 L380 295 L480 260 L580 285 L680 255 L780 278 L880 252 L980 272 L1080 248 L1180 265 L1200 270 L1200 480 L0 480 Z"
        fill="#111e0e" />

      {/* Ground layer */}
      <path d="M0 370 Q200 355 400 365 Q600 375 800 360 Q1000 350 1200 362 L1200 480 L0 480 Z"
        fill="#0d1a08" />

      {/* Background trees (left cluster) */}
      {[60,100,140,180].map((x, i) => (
        <g key={`btl${i}`} transform={`translate(${x},0)`}>
          <rect x="-4" y={280 - i * 8} width="8" height={100 + i * 8} fill="#0a1408" />
          <polygon points={`0,${240 - i*10} -28,${295 - i*8} 28,${295 - i*8}`} fill="#0c1a08" />
          <polygon points={`0,${260 - i*10} -22,${300 - i*8} 22,${300 - i*8}`} fill="#0e1e0a" />
        </g>
      ))}

      {/* Background trees (right cluster) */}
      {[1020,1060,1100,1140].map((x, i) => (
        <g key={`btr${i}`} transform={`translate(${x},0)`}>
          <rect x="-4" y={285 - i * 6} width="8" height={95 + i * 6} fill="#0a1408" />
          <polygon points={`0,${245 - i*8} -25,${295 - i*6} 25,${295 - i*6}`} fill="#0c1a08" />
          <polygon points={`0,${262 - i*8} -20,${298 - i*6} 20,${298 - i*6}`} fill="#0e1e0a" />
        </g>
      ))}

      {/* === DINOSAURS === */}

      {/* Brachiosaurus silhouette (centre-right, iconic long neck) */}
      <g transform="translate(680, 110)">
        {/* Neck */}
        <path d="M30 330 Q28 250 20 190 Q15 140 5 80" stroke="#1a3010" strokeWidth="32" fill="none" strokeLinecap="round" />
        <path d="M30 330 Q28 250 20 190 Q15 140 5 80" stroke="#1e3814" strokeWidth="28" fill="none" strokeLinecap="round" />
        {/* Head */}
        <ellipse cx="2" cy="68" rx="22" ry="14" fill="#1e3814" transform="rotate(-20, 2, 68)" />
        {/* Body */}
        <ellipse cx="60" cy="340" rx="80" ry="45" fill="#1a3010" />
        <ellipse cx="60" cy="340" rx="75" ry="40" fill="#1e3814" />
        {/* Tail */}
        <path d="M130 350 Q200 360 250 380 Q280 390 300 385" stroke="#1e3814" strokeWidth="22" fill="none" strokeLinecap="round" />
        {/* Legs */}
        <rect x="20" y="370" width="22" height="90" rx="8" fill="#182e10" />
        <rect x="55" y="372" width="22" height="88" rx="8" fill="#182e10" />
        <rect x="90" y="370" width="20" height="86" rx="8" fill="#182e10" />
      </g>

      {/* T-Rex silhouette (left, mid-ground) */}
      <g transform="translate(160, 230)">
        {/* Body */}
        <ellipse cx="50" cy="100" rx="55" ry="35" fill="#1a2808" />
        {/* Head */}
        <ellipse cx="-10" cy="55" rx="42" ry="22" fill="#1a2808" transform="rotate(-15,-10,55)" />
        {/* Jaw */}
        <path d="M-45 60 Q-30 75 -5 65" stroke="#1a2808" strokeWidth="10" fill="none" strokeLinecap="round" />
        {/* Neck */}
        <path d="M-10 70 Q10 80 20 90" stroke="#1a2808" strokeWidth="25" fill="none" strokeLinecap="round" />
        {/* Tail */}
        <path d="M100 110 Q160 120 200 140 Q230 155 250 148" stroke="#1a2808" strokeWidth="20" fill="none" strokeLinecap="round" />
        {/* Legs */}
        <rect x="25" y="125" width="20" height="75" rx="8" fill="#162206" />
        <rect x="55" y="128" width="18" height="72" rx="8" fill="#162206" />
        {/* Tiny arms */}
        <path d="M5 85 Q-8 95 -12 105" stroke="#1a2808" strokeWidth="8" fill="none" strokeLinecap="round" />
      </g>

      {/* Stegosaurus silhouette */}
      <g transform="translate(380, 310)">
        {/* Body */}
        <ellipse cx="70" cy="60" rx="90" ry="42" fill="#142408" />
        {/* Head */}
        <ellipse cx="-25" cy="55" rx="28" ry="16" fill="#142408" />
        {/* Tail */}
        <path d="M155 68 Q200 72 230 85 Q250 92 255 88" stroke="#142408" strokeWidth="18" fill="none" strokeLinecap="round" />
        {/* Legs */}
        <rect x="20" y="90" width="18" height="55" rx="6" fill="#111e06" />
        <rect x="50" y="92" width="16" height="52" rx="6" fill="#111e06" />
        <rect x="100" y="90" width="16" height="54" rx="6" fill="#111e06" />
        <rect x="125" y="92" width="16" height="52" rx="6" fill="#111e06" />
        {/* Plates */}
        {[20,40,60,80,100,120,135].map((x, i) => (
          <ellipse key={i} cx={x} cy={20 - Math.abs(i - 3) * 3} rx={6 - Math.abs(i-3)} ry={22 - Math.abs(i-3)*3} fill="#1a2e0a" transform={`rotate(${(i-3)*5}, ${x}, 20)`} />
        ))}
      </g>

      {/* Velociraptors (small group, foreground right) */}
      {[980, 1020, 1055].map((x, i) => (
        <g key={`vr${i}`} transform={`translate(${x}, ${350 + i * 5})`}>
          <ellipse cx="0" cy="0" rx="16" ry="9" fill="#111e08" />
          <path d="M-18 -8 Q-28 -20 -32 -22" stroke="#111e08" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M14 0 Q28 5 38 10" stroke="#111e08" strokeWidth="7" fill="none" strokeLinecap="round" />
          <rect x="-10" y="7" width="7" height="22" rx="3" fill="#0e1806" />
          <rect x="2" y="8" width="6" height="20" rx="3" fill="#0e1806" />
        </g>
      ))}

      {/* Foreground ferns / vegetation */}
      {[0, 120, 280, 450, 700, 870, 1050, 1180].map((x, i) => (
        <g key={`fern${i}`} transform={`translate(${x}, 390)`}>
          {[-40,-20,0,20,40].map((angle, j) => (
            <path
              key={j}
              d={`M0 0 Q${Math.cos((angle * Math.PI) / 180) * 35} ${-50 - j * 5} ${Math.cos((angle * Math.PI) / 180) * 55} ${-70 - j * 5}`}
              stroke={i % 2 === 0 ? '#0e1e08' : '#0c1806'}
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          ))}
        </g>
      ))}

      {/* Ground mist */}
      <rect x="0" y="440" width="1200" height="40" fill="#0d1a08" opacity="0.7" />
      <ellipse cx="600" cy="470" rx="900" ry="30" fill="#0a1406" opacity="0.5" />
    </svg>
  );
}
