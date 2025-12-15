import type { ReactNode } from "react";
import Aurora from "@/Components/react-bits/Aurora";
import { AURORA_CONFIG } from "@/constants";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={AURORA_CONFIG.colorStops}
          blend={AURORA_CONFIG.blend}
          amplitude={AURORA_CONFIG.amplitude}
          speed={AURORA_CONFIG.speed}
        />
      </div>

      {/* Main Content */}
      {children}
    </div>
  );
};
