// Reusable floral corner decoration — place at all 4 corners

export default function FlowerCorner({
  top, right, bottom, left,
  petalColor = '#D4A0B8',
  leafColor = '#7A9050',
  size = 80,
}) {
  const style = {
    position: 'absolute',
    pointerEvents: 'none',
    ...(top !== undefined && { top }),
    ...(right !== undefined && { right }),
    ...(bottom !== undefined && { bottom }),
    ...(left !== undefined && { left }),
    ...(right !== undefined && left === undefined && { transform: 'scaleX(-1)' }),
    ...(bottom !== undefined && top === undefined && right === undefined && { transform: 'scaleY(-1)' }),
    ...(bottom !== undefined && right !== undefined && { transform: 'scale(-1,-1)' }),
  }

  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={style}>
      {/* main rose at corner */}
      <g transform="translate(15,15)">
        {[0,60,120,180,240,300].map(a => (
          <ellipse
            key={a}
            cx={Math.cos(a * Math.PI / 180) * 7}
            cy={Math.sin(a * Math.PI / 180) * 7}
            rx="6.5" ry="4"
            fill={petalColor}
            opacity="0.72"
            transform={`rotate(${a})`}
          />
        ))}
        <circle cx="0" cy="0" r="4.5" fill="#F5D478" opacity="0.9" />
        <circle cx="0" cy="0" r="2" fill="#E8B830" opacity="0.8" />
      </g>

      {/* stem going right */}
      <path d="M27,15 C36,11 50,13 64,14" stroke={leafColor} strokeWidth="1.3" opacity="0.5" fill="none" />
      {/* stem going down */}
      <path d="M15,27 C11,36 13,50 14,64" stroke={leafColor} strokeWidth="1.3" opacity="0.5" fill="none" />

      {/* leaf on horizontal */}
      <ellipse cx="44" cy="10" rx="7" ry="2.8" fill={leafColor} opacity="0.5" transform="rotate(-18,44,10)" />
      {/* small bud horizontal */}
      <g transform="translate(57,14)">
        {[0,90,180,270].map(a => (
          <ellipse key={a} cx={Math.cos(a*Math.PI/180)*3.5} cy={Math.sin(a*Math.PI/180)*3.5} rx="3" ry="2" fill={petalColor} opacity="0.55" transform={`rotate(${a})`} />
        ))}
        <circle cx="0" cy="0" r="2" fill="#F5D478" opacity="0.75" />
      </g>

      {/* leaf on vertical */}
      <ellipse cx="10" cy="44" rx="7" ry="2.8" fill={leafColor} opacity="0.5" transform="rotate(72,10,44)" />
      {/* small bud vertical */}
      <g transform="translate(14,57)">
        {[0,90,180,270].map(a => (
          <ellipse key={a} cx={Math.cos(a*Math.PI/180)*3.5} cy={Math.sin(a*Math.PI/180)*3.5} rx="3" ry="2" fill={petalColor} opacity="0.55" transform={`rotate(${a})`} />
        ))}
        <circle cx="0" cy="0" r="2" fill="#F5D478" opacity="0.75" />
      </g>

      {/* tiny leaves along stems */}
      <ellipse cx="33" cy="13" rx="4.5" ry="2" fill={leafColor} opacity="0.38" transform="rotate(-25,33,13)" />
      <ellipse cx="13" cy="33" rx="4.5" ry="2" fill={leafColor} opacity="0.38" transform="rotate(65,13,33)" />
    </svg>
  )
}
