import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
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

export const Title = styled(motion.h2)`
  margin: 26px 0 0;
  font-size: 26px;
  font-weight: 600;
  color: #2f2f2f;
  letter-spacing: -0.01em;
`;

export const FadeIn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  max-width: 420px;
  padding: 0 24px;
  text-align: center;
  margin-top: 14px;
  color: #85796a;
  font-size: 14.5px;
  line-height: 1.7;
`;

export const Actions = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PrimaryLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 9px;
  background: #2f2f2f;
  color: #f4ece1;
  text-decoration: none;
  font-size: 14.5px;
  font-weight: 600;
  padding: 13px 26px;
  border-radius: 999px;
`;

export const SecondaryLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 9px;
  background: transparent;
  color: #2f2f2f;
  text-decoration: none;
  font-size: 14.5px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 999px;
  border: 1.5px solid rgba(47, 47, 47, 0.25);
`;

export const CloseButton = styled.div`
  margin-left: auto;
  margin-right: 20px;
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
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const Header = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

export const Icon = styled(motion.img)`
  width: 170px;
  height: 170px;
  border-radius: 22.5%;
`;

export const Body = styled(motion.div)`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: #fbf7f0;
  border: 1px solid rgba(47, 47, 47, 0.06);
  box-shadow: 0 30px 80px rgba(47, 47, 47, 0.18);

  @media (max-width: 600px) {
    height: auto;
    min-height: 0;
    padding: 88px 0 48px;
  }
`;
