import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #2f2f2f;
  z-index: 100;
`;

export const Viewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: #faf8f3;
  display: block;
`;

export const Fallback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 60px 24px;
  font-family: "Poppins", sans-serif;
  color: #2f2f2f;
  text-align: center;

  a {
    background: #1a1a1a;
    color: #fff;
    text-decoration: none;
    padding: 12px 22px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 14px;
  }
`;
