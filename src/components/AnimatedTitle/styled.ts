import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Title = styled.strong`
  color: #ff7e00;
  letter-spacing: -0.035em;
`;

export const Body = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubTitle = styled.strong`
  color: #2f2f2f;
  font-style: normal;
  font-weight: 700;
  line-height: 94.8%;
`;

export const TypewriterWrapper = styled.div`
  color: #2f2f2f;
  font-style: normal;
  font-weight: 700;
  line-height: 94.8%;
`;
