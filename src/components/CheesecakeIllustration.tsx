import styles from './Pages.module.css'

export function CheesecakeIllustration() {
  return (
    <svg
      viewBox="0 0 280 250"
      fill="none"
      className={styles.cakeIllustration}
      aria-hidden="true"
    >
      <circle
        cx="142"
        cy="128"
        r="103"
        stroke="currentColor"
        strokeOpacity=".14"
      />
      <circle
        cx="142"
        cy="128"
        r="83"
        stroke="currentColor"
        strokeOpacity=".09"
        strokeDasharray="3 7"
      />
      <ellipse
        cx="147"
        cy="188"
        rx="87"
        ry="15"
        fill="#182234"
        stroke="#48505a"
      />
      <path
        d="M69 130 179 99l52 39-125 31Z"
        fill="#f2d9a8"
        stroke="#d9b97e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m69 130 37 39v28l-37-37Z"
        fill="#d5b781"
        stroke="#d9b97e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m106 169 125-31v28l-125 31Z"
        fill="#efce93"
        stroke="#d9b97e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m69 156 37 34 125-31v7l-125 31-37-37Z" fill="#a97e50" />
      <path d="m69 130 37 34 125-26-52-39Z" fill="#a86b40" />
      <path d="m74 132 104-28 46 33-116 24Z" fill="#be854e" />
      <path
        d="m97 136 72-20M123 144l58-15"
        stroke="#e3ad65"
        strokeOpacity=".5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m204 59 3 10 10 3-10 3-3 10-3-10-10-3 10-3ZM74 63l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z"
        fill="currentColor"
      />
      <path
        d="M125 79c-9-13 9-16 1-29m20 32c-9-13 9-16 1-29"
        stroke="currentColor"
        strokeOpacity=".45"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
