import { CSSProperties } from 'react'

interface LogoProps {
  text: string
  color?: string
  backgroundColor?: string
  style?: CSSProperties
}

export default function Logo({ text, color = 'white', backgroundColor = 'orange', style }: LogoProps) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100" style={style}>
      <rect width="100" height="100" rx="10" fill={backgroundColor} />
      <text
        x="50"
        y="50"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="bold"
        fill={color}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {text}
      </text>
    </svg>
  )
}

