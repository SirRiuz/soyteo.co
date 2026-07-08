import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const popIn = keyframes`
  0% { transform: scale(0.6); opacity: 0; }
  60% { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  min-height: 480px;
  border-radius: 16px;
  background: #fbf7f0;
  border: 1px solid rgba(47, 47, 47, 0.06);
  box-shadow: 0 30px 80px rgba(47, 47, 47, 0.18);
  padding: 40px 44px;
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4px;
`;

export const FormTitle = styled.h3`
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

export const FormHint = styled.p`
  margin: 0 0 24px;
  font-family: "Poppins", sans-serif;
  font-size: 13.5px;
  color: #8a7a68;
  line-height: 1.6;
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

export const Captcha = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 18px;
  min-height: 65px;
`;

export const Modal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 100%;
  justify-content: center;
  justify-self: center;
  align-content: center;
  z-index: 1210;
`;

export const MessageField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;

export const Description = styled.textarea`
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(47, 47, 47, 0.1);
  border-radius: 12px;
  color: #2f2f2f;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  outline: none;
  padding: 15px 15px 28px 15px;
  width: 100%;
  height: 150px;
  resize: none;
  display: block;
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: rgba(47, 47, 47, 0.4);
    font-family: "Poppins";
    font-weight: 500;
  }

  &:focus {
    border-color: rgba(231, 111, 81, 0.65);
    box-shadow: 0 0 0 3px rgba(231, 111, 81, 0.12);
  }
`;

export const Counter = styled.span<{ $atLimit?: boolean }>`
  position: absolute;
  right: 10px;
  bottom: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: ${(p) => (p.$atLimit ? "#b42318" : "#2f2f2f80")};
  pointer-events: none;
  transition: color 0.15s ease;
`;

export const Title = styled.input`
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(47, 47, 47, 0.1);
  border-radius: 12px;
  color: #2f2f2f;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  height: 55px;
  margin: 0 0 12px 0;
  outline: none;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: rgba(47, 47, 47, 0.4);
    font-family: "Poppins";
    font-weight: 500;
  }

  &:focus {
    border-color: rgba(231, 111, 81, 0.65);
    box-shadow: 0 0 0 3px rgba(231, 111, 81, 0.12);
  }
`;

export const Send = styled.button<{ $block?: boolean }>`
  align-self: center;
  background: #2f2f2f;
  border: none;
  border-radius: 999px;
  box-shadow: 0 14px 30px rgba(47, 47, 47, 0.22);
  color: #f4ece1;
  width: ${(p) => (p.$block ? "100%" : "auto")};
  height: ${(p) => (p.$block ? "52px" : "42px")};
  padding: 0 ${(p) => (p.$block ? "28px" : "22px")};
  font-size: ${(p) => (p.$block ? "15px" : "13.5px")};
  font-weight: ${(p) => (p.$block ? "700" : "600")};
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 18px 36px rgba(47, 47, 47, 0.26);
  }
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  &:disabled {
    background: rgba(47, 47, 47, 0.16);
    box-shadow: none;
    color: rgba(47, 47, 47, 0.45);
    cursor: not-allowed;
  }
`;

export const StateView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;
  min-height: 360px;
  animation: ${fadeIn} 0.25s ease-out;
`;

export const Spinner = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 3px solid rgba(47, 47, 47, 0.12);
  border-top-color: #e76f51;
  animation: ${spin} 0.8s linear infinite;
`;

export const IconBadge = styled.div<{ $variant: "success" | "error" }>`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => (p.$variant === "success" ? "#0f7a3b" : "#b42318")};
  background: ${(p) =>
    p.$variant === "success"
      ? "radial-gradient(circle at 30% 25%, #dff5e3 0%, #c3ecce 100%)"
      : "radial-gradient(circle at 30% 25%, #fde2e1 0%, #f8c9c6 100%)"};
  box-shadow:
    0 0 0 6px
      ${(p) =>
        p.$variant === "success"
          ? "rgba(15, 122, 59, 0.08)"
          : "rgba(180, 35, 24, 0.08)"},
    0 10px 22px
      ${(p) =>
        p.$variant === "success"
          ? "rgba(15, 122, 59, 0.18)"
          : "rgba(180, 35, 24, 0.18)"};
  animation: ${popIn} 0.35s cubic-bezier(0.18, 1.2, 0.6, 1);
  svg {
    width: 36px;
    height: 36px;
    stroke: currentColor;
    stroke-width: 2.4;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`;

export const StateHeading = styled.h3`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #2f2f2f;
  text-align: center;
`;

export const StateText = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #2f2f2fb0;
  text-align: center;
  max-width: 280px;
  line-height: 1.5;
`;
