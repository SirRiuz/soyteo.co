import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Background = styled(Box)`
  position: fixed;
  width: 40px;
  height: 40px;
  background-color: #fc7e352a;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  visibility: hidden;
  transform: translate(-50%, -50%);
`;

export const Pointer = styled(Box)`
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: #fc7f35;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  visibility: hidden;
  transform: translate(-50%, -50%);
`;
