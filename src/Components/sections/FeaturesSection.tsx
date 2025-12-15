import ScrollStack, {
  ScrollStackItem,
} from "@/Components/react-bits/ScrollStack";
import { FeatureCard } from "@/Components/common";
import { FEATURE_CARDS, SCROLL_STACK_CONFIG } from "@/constants";

export const FeaturesSection = () => {
  return (
    <section id="features" className="w-full max-w-7xl mt-16 px-4">
      <ScrollStack
        useWindowScroll
        itemDistance={SCROLL_STACK_CONFIG.itemDistance}
        itemScale={SCROLL_STACK_CONFIG.itemScale}
        scaleDuration={SCROLL_STACK_CONFIG.scaleDuration}
        itemStackDistance={SCROLL_STACK_CONFIG.itemStackDistance}
      >
        {FEATURE_CARDS.map((card) => (
          <ScrollStackItem key={card.id} itemClassName={`bg-[${card.bgColor}]`}>
            <FeatureCard
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};
