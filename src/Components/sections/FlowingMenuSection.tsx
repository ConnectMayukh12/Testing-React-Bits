import FlowingMenu from "@/Components/react-bits/FlowingMenu";
import { FLOWING_MENU_ITEMS } from "@/constants";

export const FlowingMenuSection = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-4xl mt-24 mb-16 h-[500px] rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm"
    >
      <FlowingMenu items={[...FLOWING_MENU_ITEMS]} />
    </section>
  );
};
