import { GOLD } from '../theme'

export function OrnamentalDivider({ color = GOLD, style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', ...style }}>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, transparent, ${color}80)` }} />
      <span style={{ color, fontSize: '10px', opacity: 0.7 }}>✦</span>
      <span style={{ color, fontSize: '15px', opacity: 0.85 }}>❋</span>
      <span style={{ color, fontSize: '10px', opacity: 0.7 }}>✦</span>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(270deg, transparent, ${color}80)` }} />
    </div>
  )
}

export function GoldBorder({ inset = 14 }) {
  return (
    <div style={{
      position: 'absolute',
      top: inset, left: inset, right: inset, bottom: inset,
      border: `1px solid rgba(196,146,26,0.30)`,
      pointerEvents: 'none', zIndex: 0,
    }} />
  )
}

export function TripleDot({ color = GOLD, style = {} }) {
  return (
    <p style={{
      color,
      fontSize: '10px', letterSpacing: '8px',
      opacity: 0.55, ...style,
    }}>✦ ✦ ✦</p>
  )
}

export function MandapSVG({ size = 180 }) {
  return (
    <svg viewBox="0 0 200 155" width={size} height={size * 155 / 200} style={{ overflow: 'visible' }}>
      {/* shadow */}
      <ellipse cx="100" cy="150" rx="72" ry="6" fill="rgba(196,146,26,0.12)" />
      {/* left pillar */}
      <rect x="26" y="48" width="11" height="95" rx="3" fill="rgba(196,146,26,0.50)" />
      {/* right pillar */}
      <rect x="163" y="48" width="11" height="95" rx="3" fill="rgba(196,146,26,0.50)" />
      {/* arch */}
      <path d="M26,52 Q100,4 174,52" stroke="rgba(196,146,26,0.65)" strokeWidth="3" fill="none" />
      {/* garland */}
      <path d="M30,55 Q55,75 80,68 Q100,62 120,68 Q145,75 170,55"
        stroke="rgba(200,80,80,0.55)" strokeWidth="2.5" fill="none" />
      {/* pillar flowers */}
      {[68, 88, 108, 128].map(y => (
        <circle key={`l${y}`} cx="31" cy={y} r="4.5" fill="rgba(220,90,90,0.42)" />
      ))}
      {[68, 88, 108, 128].map(y => (
        <circle key={`r${y}`} cx="169" cy={y} r="4.5" fill="rgba(220,90,90,0.42)" />
      ))}
      {/* top arch decoration */}
      <circle cx="100" cy="4" r="6" fill="rgba(196,146,26,0.55)" />
      {/* fire base */}
      <ellipse cx="100" cy="144" rx="20" ry="5" fill="rgba(196,146,26,0.18)" />
      {/* fire */}
      <path d="M100,143 Q93,128 97,116 Q100,108 103,116 Q107,128 100,143"
        fill="rgba(255,140,30,0.72)" />
      <path d="M100,143 Q96,130 98,120 Q100,114 102,120 Q104,130 100,143"
        fill="rgba(255,210,60,0.55)" />
    </svg>
  )
}

export function HaldiSVG({ size = 150 }) {
  return (
    <svg viewBox="0 0 160 140" width={size} height={size * 140 / 160}>
      {/* marigolds */}
      {[30, 130].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="50" r="18" fill={i === 0 ? 'rgba(255,160,20,0.50)' : 'rgba(255,140,10,0.50)'} />
          <circle cx={cx} cy="50" r="10" fill={i === 0 ? 'rgba(255,200,60,0.70)' : 'rgba(255,180,40,0.70)'} />
        </g>
      ))}
      {/* bowl */}
      <path d="M40,80 Q40,120 80,122 Q120,122 120,80 Z"
        fill="rgba(196,146,26,0.38)" stroke="rgba(196,146,26,0.55)" strokeWidth="1.5" />
      <path d="M35,82 Q35,78 80,75 Q125,78 125,82"
        fill="none" stroke="rgba(196,146,26,0.55)" strokeWidth="1.5" />
      {/* turmeric mound */}
      <ellipse cx="80" cy="78" rx="30" ry="8" fill="rgba(255,200,40,0.72)" />
      {/* powder */}
      <ellipse cx="80" cy="76" rx="22" ry="5" fill="rgba(255,220,70,0.85)" />
      {/* diya */}
      <ellipse cx="80" cy="130" rx="14" ry="4" fill="rgba(196,146,26,0.20)" />
      <path d="M70,130 Q72,122 80,120 Q88,122 90,130"
        fill="rgba(196,146,26,0.35)" stroke="rgba(196,146,26,0.45)" strokeWidth="1" />
      <path d="M80,128 Q79,122 80,118 Q81,122 80,128"
        fill="rgba(255,170,30,0.80)" />
    </svg>
  )
}

export function MehendiSVG({ size = 150 }) {
  return (
    <svg viewBox="0 0 160 150" width={size} height={size * 150 / 160}>
      {/* background hand outline */}
      <path d="M60,140 Q55,110 55,90 Q55,70 65,60 Q70,55 75,60 L75,90"
        fill="none" stroke="rgba(100,60,20,0.22)" strokeWidth="2" />
      {/* fingers */}
      <path d="M75,60 Q76,40 80,38 Q84,40 85,60"
        fill="rgba(230,210,180,0.35)" stroke="rgba(100,60,20,0.20)" strokeWidth="1.5" />
      <path d="M85,62 Q87,42 91,40 Q95,42 96,62"
        fill="rgba(230,210,180,0.35)" stroke="rgba(100,60,20,0.20)" strokeWidth="1.5" />
      <path d="M96,65 Q98,48 102,46 Q106,48 107,65"
        fill="rgba(230,210,180,0.35)" stroke="rgba(100,60,20,0.20)" strokeWidth="1.5" />
      {/* mehendi cone */}
      <path d="M50,35 L100,35 L80,100 Z"
        fill="rgba(80,45,15,0.72)" />
      <path d="M65,35 L85,35 L80,52 Z"
        fill="rgba(60,35,10,0.55)" />
      {/* cone tip drip */}
      <path d="M80,100 Q79,108 80,112 Q81,108 80,100"
        fill="rgba(80,45,15,0.85)" strokeWidth="1" />
      {/* flowers decorative */}
      {[{cx:30,cy:120},{cx:130,cy:115},{cx:20,cy:70},{cx:140,cy:80}].map((p,i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="8" fill="rgba(255,180,100,0.40)" />
      ))}
    </svg>
  )
}

export function PalanquinSVG({ size = 180 }) {
  return (
    <svg viewBox="0 0 200 140" width={size} height={size * 140 / 200}>
      {/* pole */}
      <line x1="5" y1="98" x2="195" y2="98" stroke="rgba(139,100,30,0.60)" strokeWidth="3.5" />
      {/* body */}
      <rect x="42" y="42" width="116" height="68" rx="6"
        fill="rgba(180,50,50,0.22)" stroke="rgba(196,146,26,0.55)" strokeWidth="1.5" />
      {/* roof */}
      <path d="M42,42 Q100,18 158,42" fill="rgba(180,50,50,0.28)" stroke="rgba(196,146,26,0.50)" strokeWidth="1.5" />
      {/* curtain */}
      <path d="M82,42 Q87,58 84,110 M118,42 Q113,58 116,110"
        stroke="rgba(210,100,100,0.50)" strokeWidth="1.5" fill="none" />
      {/* tassels */}
      {[42, 68, 100, 132, 158].map(x => (
        <g key={x}>
          <line x1={x} y1="42" x2={x} y2="55" stroke="rgba(196,146,26,0.55)" strokeWidth="1" />
          <circle cx={x} cy="57" r="3" fill="rgba(196,146,26,0.55)" />
        </g>
      ))}
      {/* flower top */}
      <circle cx="100" cy="26" r="7" fill="rgba(255,180,100,0.55)" />
      <circle cx="100" cy="26" r="3" fill="rgba(255,210,140,0.75)" />
      {/* shadow */}
      <ellipse cx="100" cy="135" rx="60" ry="5" fill="rgba(196,146,26,0.12)" />
    </svg>
  )
}
