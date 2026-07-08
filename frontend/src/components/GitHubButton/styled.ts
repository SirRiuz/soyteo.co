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
  background-color: #fbf7f0;
  border: 1px solid rgba(47, 47, 47, 0.08);
  border-radius: 100px;
  box-shadow: 0 14px 30px rgba(47, 47, 47, 0.12);
  height: 58px;
  width: 58px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 36px rgba(47, 47, 47, 0.16);
  }
`;
