export const Warning = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    fill="none"
    className="h-8 w-8 flex-none [--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]"
  >
    <defs>
      <radialGradient
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        id=":R15pn6:-gradient"
        gradientTransform="rotate(65.924 1.519 20.92) scale(25.7391)"
      >
        <stop stopColor="#FDE68A" offset=".08"></stop>
        <stop stopColor="#F59E0B" offset=".837"></stop>
      </radialGradient>
      <radialGradient
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        id=":R15pn6:-gradient-dark"
        gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
      >
        <stop stopColor="#FDE68A" offset=".08"></stop>
        <stop stopColor="#F59E0B" offset=".837"></stop>
      </radialGradient>
    </defs>
    <g className="dark:hidden">
      <circle cx="20" cy="20" r="12" fill="url(#:R15pn6:-gradient)"></circle>
      <path
        d="M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z"
        fillOpacity="0.5"
        className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="m15.408 16.509-1.04-5.543a1.66 1.66 0 1 1 3.263 0l-1.039 5.543a.602.602 0 0 1-1.184 0Z"
        className="fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fillOpacity="0.5"
        stroke="currentColor"
        className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
    <g className="hidden dark:inline">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm11.386-4.85a2.66 2.66 0 1 1 5.228 0l-1.039 5.543a1.602 1.602 0 0 1-3.15 0l-1.04-5.543ZM16 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill="url(#:R15pn6:-gradient-dark)"
      ></path>
    </g>
  </svg>
)
