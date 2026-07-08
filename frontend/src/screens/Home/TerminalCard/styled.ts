import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Side padding reserves room for the badge overhang so the card
     can shrink fluidly without causing horizontal overflow */
  padding: 40px 34px 20px;
`;

export const Glow = styled.div`
  position: absolute;
  width: min(420px, 100%);
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(231, 111, 81, 0.16) 0%,
    rgba(231, 111, 81, 0) 65%
  );
  pointer-events: none;
`;

export const Window = styled.div`
  position: relative;
  width: min(480px, 100%);
  border-radius: 16px;
  background: #fbf7f0;
  border: 1px solid rgba(47, 47, 47, 0.08);
  box-shadow: 0 30px 80px rgba(47, 47, 47, 0.16);
  overflow: hidden;
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(47, 47, 47, 0.07);
  background: rgba(255, 255, 255, 0.45);
`;

export const WindowDot = styled.span<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.$color};
`;

export const FileName = styled.span`
  margin-left: auto;
  margin-right: auto;
  transform: translateX(-26px);
  font-size: 12.5px;
  color: rgba(47, 47, 47, 0.45);
  letter-spacing: 0.02em;
`;

export const Code = styled.pre`
  margin: 0;
  padding: 26px 28px 30px;
  font-family: "SF Mono", "Menlo", "Monaco", "Cascadia Code", monospace;
  font-size: 13.5px;
  line-height: 2;
  color: #2f2f2f;
  white-space: pre-wrap;
  word-break: break-word;

  @media (max-width: 1250px) {
    padding: 20px 22px 24px;
    font-size: 12px;
    line-height: 1.9;
  }
`;

/* Syntax palette — same family as the brand */
export const Kw = styled.span`
  color: #e76f51;
`;

export const Prop = styled.span`
  color: #8a7a68;
`;

export const Str = styled.span`
  color: #a85432;
`;

export const Val = styled.span`
  color: #10b981;
`;

export const Punct = styled.span`
  color: rgba(47, 47, 47, 0.45);
`;

export const Caret = styled.span`
  display: inline-block;
  width: 8px;
  height: 17px;
  margin-left: 6px;
  vertical-align: text-bottom;
  background: #e76f51;
  animation: blink 1.1s steps(2, start) infinite;

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
`;

export const Badge = styled.img`
  position: absolute;
  top: 18px;
  right: -26px;
  width: 58px;
  height: 58px;
  transform: rotate(8deg);
  filter: drop-shadow(0 14px 24px rgba(47, 47, 47, 0.25));

  @media (max-width: 1250px) {
    width: 48px;
    height: 48px;
    right: -18px;
  }
`;
