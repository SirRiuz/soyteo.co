import styled from "@emotion/styled";

export const Container = styled.div``;

export const CtButton = styled.button`
  background-color: #2f2f2f;
  border: none;
  border-radius: 100px;
  box-shadow: 0 14px 30px rgba(47, 47, 47, 0.22);
  color: #f4ece1;
  height: 60px;
  padding-left: 30px;
  padding-right: 30px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 36px rgba(47, 47, 47, 0.26);
  }
`;

export const Label = styled.strong`
  font-family: "Poppins", sans-serif;
  font-size: 17.5px;
  font-weight: 700;
`;
