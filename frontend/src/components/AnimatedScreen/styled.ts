import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(244, 236, 225, 0.35);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  /* Above page content (transformed elements create stacking contexts
     that would otherwise paint over the overlay), below the cursor */
  z-index: 1200;
`;
