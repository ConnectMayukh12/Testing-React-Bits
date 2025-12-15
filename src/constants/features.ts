import { COLORS } from "./config";

export interface FeatureCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

export const FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "text-animations",
    title: "Text Animations",
    description:
      "Beautiful text animations that bring your content to life. Split text, shuffle effects, and more to create engaging user experiences.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    bgColor: COLORS.primary,
  },
  {
    id: "backgrounds",
    title: "Backgrounds",
    description:
      "Stunning animated backgrounds including Aurora, gradients, and particle effects. Make your pages stand out with immersive visuals.",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop",
    bgColor: COLORS.secondary,
  },
  {
    id: "components",
    title: "Components",
    description:
      "Ready-to-use UI components built with React and Tailwind CSS. Buttons, cards, modals and more with beautiful styling.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    bgColor: COLORS.success,
  },
  {
    id: "interactions",
    title: "Interactions",
    description:
      "Smooth scroll animations, hover effects, and micro-interactions. Create delightful experiences that users will remember.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    bgColor: COLORS.warning,
  },
];
