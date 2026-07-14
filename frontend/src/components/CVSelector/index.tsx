import { JSX, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AnimatedScreen from "../AnimatedScreen";
import { CV_OPTIONS } from "./constants";
import {
  Arrow,
  Card,
  CloseBtn,
  Header,
  Hint,
  LangBadge,
  Modal,
  Option,
  OptionDetail,
  OptionLabel,
  OptionText,
  Options,
  Title,
  Trigger,
  TriggerDot,
} from "./styled";

export default function CVSelector(): JSX.Element {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Close with the Escape key, like the contact and projects modals
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const handleSelect = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <Trigger onClick={() => setOpen(true)} aria-haspopup="dialog">
        CV<TriggerDot>.</TriggerDot>
      </Trigger>
      {open && (
        <>
          <AnimatedScreen onClick={() => setOpen(false)} />
          <Modal onClick={() => setOpen(false)}>
            <Card
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 30,
              }}
              role="dialog"
              aria-label="Choose CV language"
            >
              <Header>
                <Title>
                  Grab my CV<span>.</span>
                </Title>
                <CloseBtn onClick={() => setOpen(false)} data-cursor="pointer">
                  ✕
                </CloseBtn>
              </Header>
              <Hint>Pick a language — the résumé opens right here.</Hint>
              <Options>
                {CV_OPTIONS.map((option) => (
                  <Option
                    key={option.badge}
                    onClick={() => handleSelect(option.path)}
                  >
                    <LangBadge>{option.badge}</LangBadge>
                    <OptionText>
                      <OptionLabel>{option.label}</OptionLabel>
                      <OptionDetail>{option.detail}</OptionDetail>
                    </OptionText>
                    <Arrow>→</Arrow>
                  </Option>
                ))}
              </Options>
            </Card>
          </Modal>
        </>
      )}
    </>
  );
}
