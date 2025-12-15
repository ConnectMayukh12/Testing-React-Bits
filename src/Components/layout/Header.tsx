import { useState, useRef, useCallback } from "react";
import BubbleMenu from "@/Components/react-bits/BubbleMenu";
import { ReactBitsLogo } from "@/Components/common";
import { useScrollLock, useClickOutside } from "@/hooks";
import { NAV_MENU_ITEMS, COLORS } from "@/constants";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock scroll when menu is open
  useScrollLock(menuOpen);

  // Close menu when clicking outside
  const handleCloseMenu = useCallback(() => {
    if (menuRef.current) {
      const menuButton = menuRef.current.querySelector("button");
      if (menuButton) {
        menuButton.click();
      }
    }
  }, []);

  useClickOutside(menuRef, menuOpen, handleCloseMenu);

  return (
    <>
      {/* Blur Overlay when menu is open */}
      <div
        className={`fixed inset-0 z-[999] bg-black/50 backdrop-blur-md transition-opacity duration-300 pointer-events-none ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bubble Menu */}
      <div ref={menuRef}>
        <BubbleMenu
          logo={<ReactBitsLogo />}
          useFixedPosition
          menuBg={COLORS.menuBg}
          menuContentColor={COLORS.menuContent}
          onMenuClick={(open) => setMenuOpen(open)}
          items={[...NAV_MENU_ITEMS]}
        />
      </div>
    </>
  );
};
