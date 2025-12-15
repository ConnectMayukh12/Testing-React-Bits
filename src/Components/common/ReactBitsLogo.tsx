interface ReactBitsLogoProps {
  className?: string;
  showText?: boolean;
}

export const ReactBitsLogo = ({
  className = "",
  showText = true,
}: ReactBitsLogoProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="20" fill="#5B2FFF" />
      <circle cx="35" cy="50" r="12" fill="white" />
      <circle cx="65" cy="50" r="12" fill="white" />
      <rect x="35" y="45" width="30" height="10" fill="white" />
    </svg>
    {showText && <span className="font-bold text-lg">React Bits</span>}
  </div>
);
