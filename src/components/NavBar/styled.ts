import styled from "@emotion/styled";
import { motion } from "motion/react";

export const IndicatorWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Indicator = styled.div`
  width: 22px;
  height: 4px;
  background: #2f2f2f;
  border-radius: 2px;
`;

export const Item = styled.div`
  position: relative;
  padding: 8px 16px;
  cursor: pointer;
  color: white;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  height: 130px;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
