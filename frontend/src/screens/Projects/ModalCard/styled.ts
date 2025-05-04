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
`;

export const Description = styled.div`
  width: 80%;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  margin-top: 20px;
  opacity: 0.7;
  font-size: 13.5px;
  background: #efe0cc;
  padding: 10px;
  border-radius: 5px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const Header = styled.div`
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

export const Icon = styled.img`
  width: 230px;
  height: 230px;
`;

export const Body = styled(motion.div)`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    304.58deg,
    #f4ece1 57.1%,
    #faf8f3 127.55%,
    #faf8f3 145.5%,
    #fcfbf7 0
  );
`;
