import { FormEvent, JSX, useEffect, useRef, useState } from "react";
import {
  Captcha,
  Container,
  Counter,
  Description,
  Form,
  IconBadge,
  MessageField,
  Modal,
  Send,
  Spinner,
  StateHeading,
  StateText,
  StateView,
  Title,
} from "./styled";
import { ContactModalProps } from "./types";
import { Grid } from "@mui/material";
import AnimatedScreen from "../../../components/AnimatedScreen";

const FORMSPREE_FORM_ID = "xgorpeep";
const TURNSTILE_SITE_KEY = "0x4AAAAAADBQSdLNltk2VGM8";
const MESSAGE_MAX = 300;

type SubmitState = "idle" | "sending" | "success" | "error";

type TurnstileRenderOptions = {
  sitekey: string;
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
};

type TurnstileAPI = {
  render: (el: HTMLElement, opts: TurnstileRenderOptions) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
};

const getTurnstile = (): TurnstileAPI | undefined =>
  (window as unknown as { turnstile?: TurnstileAPI }).turnstile;

export default function ContactModal({
  onClose,
}: ContactModalProps): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");

  const canSubmit =
    subject.trim().length > 0 &&
    message.trim().length > 0 &&
    captchaToken.length > 0 &&
    status === "idle";

  useEffect(() => {
    if (status !== "idle") return;
    const node = captchaRef.current;
    if (!node) return;

    let pollId: number | null = null;
    let cancelled = false;

    const render = () => {
      if (cancelled) return;
      const turnstile = getTurnstile();
      if (!turnstile) return;
      node.innerHTML = "";
      widgetIdRef.current = turnstile.render(node, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setCaptchaToken(token),
        "expired-callback": () => setCaptchaToken(""),
        "error-callback": () => setCaptchaToken(""),
      });
    };

    if (getTurnstile()) {
      render();
    } else {
      pollId = window.setInterval(() => {
        if (getTurnstile()) {
          if (pollId !== null) window.clearInterval(pollId);
          pollId = null;
          render();
        }
      }, 100);
    }

    return () => {
      cancelled = true;
      if (pollId !== null) window.clearInterval(pollId);
      const turnstile = getTurnstile();
      if (turnstile && widgetIdRef.current !== null) {
        try {
          turnstile.remove(widgetIdRef.current);
        } catch {
          /* widget already gone */
        }
        widgetIdRef.current = null;
      }
    };
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || !canSubmit) return;
    setStatus("sending");
    const formData = new FormData(formRef.current);
    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        },
      );
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const resetToForm = () => {
    setSubject("");
    setMessage("");
    setCaptchaToken("");
    setStatus("idle");
  };

  return (
    <>
      <AnimatedScreen onClick={onClose} />
      <Modal onClick={onClose}>
        <Grid
          onClick={(e) => e.stopPropagation()}
          sx={{ zIndex: 99 }}
          container
          size={{
            lg: 4,
            md: 5,
            sm: 7,
            xs: 12,
          }}
        >
          <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {status === "sending" && (
              <StateView>
                <Spinner />
                <StateHeading>Sending your message</StateHeading>
                <StateText>Hang tight, this will only take a moment.</StateText>
              </StateView>
            )}

            {status === "success" && (
              <StateView>
                <IconBadge $variant="success">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </IconBadge>
                <StateHeading>Message sent!</StateHeading>
                <StateText>
                  Thanks for reaching out. I'll get back to you soon.
                </StateText>
                <Send type="button" onClick={onClose}>
                  Close
                </Send>
              </StateView>
            )}

            {status === "error" && (
              <StateView>
                <IconBadge $variant="error">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 7l10 10M17 7L7 17" />
                  </svg>
                </IconBadge>
                <StateHeading>Something went wrong</StateHeading>
                <StateText>
                  Your message couldn't be sent. Please try again in a moment.
                </StateText>
                <Send type="button" onClick={resetToForm}>
                  Try again
                </Send>
              </StateView>
            )}

            {status === "idle" && (
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Title
                  name="subject"
                  placeholder="Email subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                <MessageField>
                  <Description
                    name="message"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) =>
                      setMessage(e.target.value.slice(0, MESSAGE_MAX))
                    }
                    maxLength={MESSAGE_MAX}
                    required
                  />
                  <Counter $atLimit={message.length >= MESSAGE_MAX}>
                    {message.length}/{MESSAGE_MAX}
                  </Counter>
                </MessageField>
                <Send type="submit" disabled={!canSubmit} $block>
                  Send email
                </Send>
                <Captcha ref={captchaRef} />
              </Form>
            )}
          </Container>
        </Grid>
      </Modal>
    </>
  );
}
