import { COLORS } from "./config";

// Navigation Menu Items for BubbleMenu
export const NAV_MENU_ITEMS = [
  {
    label: "Home",
    href: "#home",
    rotation: -5,
    hoverStyles: { bgColor: COLORS.primary, textColor: "#fff" },
  },
  {
    label: "Features",
    href: "#features",
    rotation: 5,
    hoverStyles: { bgColor: COLORS.secondary, textColor: "#fff" },
  },
  {
    label: "Pricing",
    href: "#pricing",
    rotation: -3,
    hoverStyles: { bgColor: COLORS.success, textColor: "#fff" },
  },
  {
    label: "Contact",
    href: "#contact",
    rotation: 4,
    hoverStyles: { bgColor: COLORS.warning, textColor: "#fff" },
  },
] as const;

// Flowing Menu Items
export const FLOWING_MENU_ITEMS = [
  {
    link: "#home",
    text: "Home",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop",
  },
  {
    link: "#about",
    text: "About",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
  },
  {
    link: "#projects",
    text: "Projects",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    link: "#contact",
    text: "Contact",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
] as const;
