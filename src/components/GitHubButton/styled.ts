import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 15px;
`;

export const Label = styled.strong`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 94.8%;
`;

export const GhButton = styled.button`
  background-color: #fff8f0;
  border: none;
  border-radius: 100px;
  box-shadow: 0 20px 36px rgba(0, 0, 0, 0.1);
  cursor: none;
  height: 58px;
  width: 58px;
`;
