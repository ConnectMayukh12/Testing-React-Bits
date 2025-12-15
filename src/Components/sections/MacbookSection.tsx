import { MacbookScroll } from "@/Components/ui/macbook-scroll";

export const MacbookSection = () => {
  return (
    <section className="w-full overflow-hidden dark:bg-[#0B0B0F] bg-white">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br />{" "}
            <span className="text-violet-500">No kidding.</span>
          </span>
        }
        badge={
          <a
            href="https://github.com/ConnectMayukh12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge className="h-10 w-10 transform -rotate-12" />
          </a>
        }
        src="https://ui.aceternity.com/linear.webp"
        showGradient={false}
      />
    </section>
  );
};

// Custom badge component
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#5B2FFF"
      />
      <circle cx="20" cy="28" r="8" fill="white" />
      <circle cx="36" cy="28" r="8" fill="white" />
      <rect x="20" y="24" width="16" height="8" fill="white" />
    </svg>
  );
};
