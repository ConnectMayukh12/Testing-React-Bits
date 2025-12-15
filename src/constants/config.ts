// App Colors
export const COLORS = {
  primary: "#5B2FFF",
  secondary: "#FF3366",
  success: "#00C896",
  warning: "#FF9500",
  menuBg: "#1a1a2e",
  menuContent: "#ffffff",
} as const;

// Aurora Background Configuration
export const AURORA_CONFIG = {
  colorStops: ["#3A29FF", "#FF94B4", "#FF3232"] as [string, string, string],
  blend: 0.5,
  amplitude: 1.0,
  speed: 0.5,
} as const;

// Curved Loop Configuration
export const CURVED_LOOP_CONFIG = {
  marqueeText: "✦ Dukaan Dashboard ✦ Modern UI ✦ React Bits ✦ ",
  speed: 2,
  curveAmount: 50,
} as const;

// Scroll Stack Configuration
export const SCROLL_STACK_CONFIG = {
  itemDistance: 150,
  itemScale: 0.02,
  scaleDuration: 0.8,
  itemStackDistance: 20,
} as const;
