import type { SVGProps } from 'react'

type IconName = 'github' | 'linkedin' | 'email' | 'arrow' | 'pin' | 'up'

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {name === 'github' && (
        <path
          d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7s-1.1-.3-3.8 1.4a13 13 0 0 0-6.9 0C5.3.2 4.2.5 4.2.5a4.9 4.9 0 0 0-.1 3.7 5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.1 6.5 6.1 6.8a3.4 3.4 0 0 0-.9 2.6v4"
          transform="translate(1 1) scale(.9)"
        />
      )}
      {name === 'linkedin' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7.5 10v7M11.5 17v-7m0 3a3 3 0 0 1 6 0v4" />
          <circle cx="7.5" cy="7" r=".8" fill="currentColor" stroke="none" />
        </>
      )}
      {name === 'email' && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </>
      )}
      {name === 'arrow' && <path d="M6 18 18 6M6 6h12v12" />}
      {name === 'pin' && (
        <>
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.3" />
        </>
      )}
      {name === 'up' && <path d="M12 19V5m-6 6 6-6 6 6" />}
    </svg>
  )
}
