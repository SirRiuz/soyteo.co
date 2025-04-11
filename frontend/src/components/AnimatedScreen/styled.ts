import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0px);
`;
