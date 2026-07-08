import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Container = styled.div`
  display: flex;
  height: 130px;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 900px) {
    height: 92px;
  }
`;

export const Dock = styled.nav`
  display: flex;
  gap: 4px;
  padding: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(47, 47, 47, 0.08);
  box-shadow: 0 10px 32px rgba(47, 47, 47, 0.07);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const Item = styled.div<{ $active: boolean }>`
  position: relative;
  padding: 9px 20px;
  cursor: pointer;

  ${(props) =>
    !props.$active &&
    `&:hover > span {
      color: #2f2f2f;
    }`}
`;

export const ActivePill = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: #2f2f2f;
`;

export const Label = styled.span<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: ${(props) => (props.$active ? "#f4ece1" : "rgba(47, 47, 47, 0.6)")};
  transition: color 0.25s ease;
`;

export const LabelDot = styled.span<{ $active: boolean }>`
  color: #e76f51;
  font-weight: 700;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 0.25s ease;
`;
