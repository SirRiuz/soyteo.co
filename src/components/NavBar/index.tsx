import { JSX } from "react";
import { useLocation, useNavigate } from "react-router";
import { TABS_LIST } from "./constants";
import { Container, Indicator, IndicatorWrapper, Item } from "./styled";

export default function NavBar(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      {TABS_LIST.map((item, key) => {
        const isActive = location.pathname === item.path;
        return (
          <Item key={key} onClick={() => navigate(item.path)}>
            <span style={{ color: "#2F2F2F" }}>{item.label}</span>
            {isActive && (
              <IndicatorWrapper
                layoutId="underline"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <Indicator />
              </IndicatorWrapper>
            )}
          </Item>
        );
      })}
    </Container>
  );
}
