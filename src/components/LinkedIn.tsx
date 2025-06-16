// src/components/LinkedIn.tsx
export default function LinkedIn() {
  return (
    <a
      href="https://www.linkedin.com/in/ethan-frost-/"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 text-neutral-400 hover:text-neutral-50 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 stroke-current fill-none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>
  );
}
