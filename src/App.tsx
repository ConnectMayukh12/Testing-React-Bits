// Components
import { MainLayout, Header } from "@/Components/layout";
import {
  HeroSection,
  ButtonShowcase,
  FeaturesSection,
  FlowingMenuSection,
  MacbookSection,
} from "@/Components/sections";

/**
 * Main App Component
 *
 * A modern dashboard showcasing React Bits components including:
 * - Aurora animated background
 * - BubbleMenu navigation
 * - SplitText & Shuffle text animations
 * - CurvedLoop marquee
 * - ScrollStack feature cards
 * - FlowingMenu
 * - Macbook Scroll (Aceternity)
 */
const App = () => {
  return (
    <MainLayout>
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 p-8">
        {/* Hero Section with Text Animations */}
        <HeroSection />

        {/* Button Showcase */}
        <ButtonShowcase />

        {/* Macbook Scroll Section */}
        <MacbookSection />

        {/* Features Scroll Stack */}
        <FeaturesSection />

        {/* Flowing Menu Demo */}
        <FlowingMenuSection />
      </main>
    </MainLayout>
  );
};

export default App;
