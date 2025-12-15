import SplitText from "@/Components/react-bits/SplitText";
import Shuffle from "@/Components/react-bits/Shuffle";
import CurvedLoop from "@/Components/react-bits/CurvedLoop";
import { CURVED_LOOP_CONFIG } from "@/constants";

export const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col items-center gap-8 pt-24 pb-8">
      <SplitText
        text="Welcome to Dukaan"
        className="text-5xl font-bold text-white"
        delay={50}
      />

      <Shuffle
        text="Your Ultimate Dashboard"
        className="text-2xl text-black/80"
      />

      <div className="w-full h-32 my-4 overflow-visible">
        <CurvedLoop
          marqueeText={CURVED_LOOP_CONFIG.marqueeText}
          speed={CURVED_LOOP_CONFIG.speed}
          curveAmount={CURVED_LOOP_CONFIG.curveAmount}
          className="fill-white"
        />
      </div>
    </section>
  );
};
