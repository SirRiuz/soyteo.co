import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Trigger = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 20px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(47, 47, 47, 0.08);
  box-shadow: 0 10px 32px rgba(47, 47, 47, 0.07);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #2f2f2f;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    transform: translateY(calc(-50% - 2px));
    box-shadow: 0 14px 36px rgba(47, 47, 47, 0.12);
  }
  &:active {
    transform: translateY(-50%);
  }

  @media (max-width: 900px) {
    padding: 8px 15px;
    font-size: 13.5px;
  }
`;

export const TriggerDot = styled.span`
  color: #e76f51;
  font-weight: 700;
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1210;
`;

export const Card = styled(motion.div)`
  width: 100%;
  max-width: 380px;
  border-radius: 16px;
  background: #fbf7f0;
  border: 1px solid rgba(47, 47, 47, 0.06);
  box-shadow: 0 30px 80px rgba(47, 47, 47, 0.18);
  padding: 28px 30px 30px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Title = styled.h3`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #2f2f2f;

  span {
    color: #e76f51;
  }
`;

export const CloseBtn = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(47, 47, 47, 0.12);
  background: rgba(255, 255, 255, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #2f2f2f;
  flex-shrink: 0;
`;

export const Hint = styled.p`
  margin: 0 0 22px;
  font-family: "Poppins", sans-serif;
  font-size: 13.5px;
  color: #8a7a68;
  line-height: 1.6;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Option = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(47, 47, 47, 0.1);
  font-family: "Poppins", sans-serif;
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(231, 111, 81, 0.65);
    box-shadow: 0 12px 26px rgba(47, 47, 47, 0.1);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const LangBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f2f2f;
  color: #f4ece1;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  flex-shrink: 0;
`;

export const OptionText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
`;

export const OptionLabel = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #2f2f2f;
`;

export const OptionDetail = styled.span`
  font-size: 12.5px;
  font-weight: 500;
  color: #8a7a68;
`;

export const Arrow = styled.span`
  font-size: 16px;
  color: #8a7a68;
  flex-shrink: 0;
`;
