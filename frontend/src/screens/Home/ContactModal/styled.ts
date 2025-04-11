import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 35vh;
  border-radius: 10px;
  background: linear-gradient(
    304.58deg,
    #f4ece1 57.1%,
    #faf8f3 127.55%,
    #faf8f3 145.5%,
    #fcfbf7 0
  );
  padding: 54px;
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
`;

export const Description = styled.textarea`
  background-color: #f0e1cc;
  border: none;
  border-radius: 10px;
  color: #2f2f2f;
  font-weight: 600;
  outline: none;
  padding: 15px;
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  resize: none;
  &::placeholder {
    color: #2f2f2fa9;
    font-family: "Poppins";
    font-weight: 600;
  }
`;

export const Title = styled.input`
  background-color: #f0e1cc;
  border: none;
  border-radius: 10px;
  color: #2f2f2f;
  font-weight: 600;
  height: 25px;
  margin-bottom: 10px;
  outline: none;
  padding: 15px;
  width: 100%;
  &::placeholder {
    color: #2f2f2fa9;
    font-family: "Poppins";
    font-weight: 600;
  }
`;

export const Send = styled.button`
  background-color: #2f2f2f;
  border: none;
  border-radius: 10px;
  box-shadow: 0 20px 32px hwb(0 0% 100% / 0.2);
  color: #fff;
  height: 60px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 17.5px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
`;
