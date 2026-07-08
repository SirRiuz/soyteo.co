import { JSX } from "react";
import { useLocation, useNavigate } from "react-router";
import { TABS_LIST } from "./constants";
import { ActivePill, Container, Dock, Item, Label, LabelDot } from "./styled";

export default function NavBar(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <Dock>
        {TABS_LIST.map((item, key) => {
          const isActive = location.pathname === item.path;
          return (
            <Item
              key={key}
              $active={isActive}
              onClick={() => navigate(item.path)}
              data-cursor="pointer"
            >
              {isActive && (
                <ActivePill
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <Label $active={isActive}>
                {item.label}
                <LabelDot $active={isActive}>.</LabelDot>
              </Label>
            </Item>
          );
        })}
      </Dock>
    </Container>
  );
}
