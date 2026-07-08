import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled.div``;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  gap: 30px;
`;

export const Subtitle = styled.span`
  color: #8a7a68;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
  width: 550px;
`;

export const Availability = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 7px 15px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(47, 47, 47, 0.08);
  font-size: 13px;
  color: #2f2f2f;
`;

export const PulsingDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  animation: availability-pulse 2s ease-out infinite;

  @keyframes availability-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
    }
    70% {
      box-shadow: 0 0 0 7px rgba(16, 185, 129, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
  }
`;

export const StackRow = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechChip = styled.span`
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(47, 47, 47, 0.07);
  font-size: 12.5px;
  color: rgba(47, 47, 47, 0.65);
`;
