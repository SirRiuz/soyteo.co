import { JSX, useEffect, useRef } from "react";
import { Background, Pointer } from "./styled";

export default function Cursor(): JSX.Element {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${targetX}px`;
        cursorRef.current.style.top = `${targetY}px`;
        cursorRef.current.style.visibility = "visible";
      }
    };

    const animate = () => {
      pointerX += (targetX - pointerX) * 0.1;
      pointerY += (targetY - pointerY) * 0.1;
      if (pointerRef.current) {
        pointerRef.current.style.left = `${pointerX}px`;
        pointerRef.current.style.top = `${pointerY}px`;
        pointerRef.current.style.visibility = "visible";
      }
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", handleMouseMove);
    animate();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Pointer
        ref={cursorRef}
        sx={{
          display: {
            lg: "block",
            md: "block",
            sm: "block",
            xs: "none",
          },
        }}
      />
      <Background
        ref={pointerRef}
        sx={{
          display: {
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      />
    </>
  );
}
