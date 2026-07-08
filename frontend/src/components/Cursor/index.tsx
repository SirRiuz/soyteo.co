import { JSX, useEffect, useState } from "react";
import { useRef } from "react";
import { Dot, Ring } from "./styled";

// Elements the cursor reacts to. Non-semantic clickables (divs with
// onClick) opt in through the data-cursor="pointer" attribute.
const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], [data-cursor='pointer']";

// Only devices with a real hover-capable, precise pointer (mouse or
// trackpad) get the custom cursor. Touch screens (phones, iPads) don't
// match, regardless of viewport size. Kept reactive so an iPad gains
// the cursor when a trackpad/mouse is attached, and vice versa.
const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

export default function Cursor(): JSX.Element | null {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState<boolean>(
    () => window.matchMedia(FINE_POINTER_QUERY).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(FINE_POINTER_QUERY);
    const handleChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let dotScale = 1;
    let ringScale = 1;
    let hovering = false;
    let pressing = false;
    let visible = false;
    let frame = 0;

    const setVisibility = (value: boolean) => {
      visible = value;
      const opacity = value ? "1" : "0";
      if (dotRef.current) dotRef.current.style.opacity = opacity;
      if (ringRef.current) ringRef.current.style.opacity = opacity;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        // First movement: snap the ring to the pointer so it doesn't
        // fly in from the top-left corner
        ringX = targetX;
        ringY = targetY;
        setVisibility(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      hovering = !!(e.target as Element).closest?.(INTERACTIVE_SELECTOR);
      if (ringRef.current)
        ringRef.current.dataset.hover = hovering ? "true" : "false";
    };

    const handleMouseDown = () => {
      pressing = true;
    };
    const handleMouseUp = () => {
      pressing = false;
    };
    const handleMouseLeave = () => setVisibility(false);
    const handleMouseEnter = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      ringX = targetX;
      ringY = targetY;
      setVisibility(true);
    };

    const animate = () => {
      // The dot sticks to the pointer; the ring trails behind and both
      // ease their scale towards the current interaction state
      const dotTarget = pressing ? 0.6 : hovering ? 0.45 : 1;
      const ringTarget = hovering
        ? pressing
          ? 1.3
          : 1.55
        : pressing
          ? 0.85
          : 1;
      dotScale += (dotTarget - dotScale) * 0.25;
      ringScale += (ringTarget - ringScale) * 0.18;
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;

      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <Dot ref={dotRef} />
      <Ring ref={ringRef} />
    </>
  );
}
