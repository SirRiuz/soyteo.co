import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Dot = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 9px;
  height: 9px;
  background-color: #e76f51;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  will-change: transform;
  transition: opacity 0.2s ease;
`;

export const Ring = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 38px;
  height: 38px;
  border: 1.5px solid rgba(231, 111, 81, 0.5);
  background-color: rgba(231, 111, 81, 0);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  opacity: 0;
  will-change: transform;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    opacity 0.2s ease;

  &[data-hover="true"] {
    background-color: rgba(231, 111, 81, 0.12);
    border-color: rgba(231, 111, 81, 0.85);
  }
`;
