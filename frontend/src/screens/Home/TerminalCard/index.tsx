import { JSX } from "react";
import { motion } from "framer-motion";
import {
  Badge,
  Caret,
  Code,
  FileName,
  Glow,
  Kw,
  Prop,
  Punct,
  Str,
  TitleBar,
  Val,
  Window,
  WindowDot,
  Wrapper,
} from "./styled";

export default function TerminalCard(): JSX.Element {
  return (
    <Wrapper>
      <Glow />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ position: "relative" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Window>
            <TitleBar>
              <WindowDot $color="#e76f51" />
              <WindowDot $color="#f4a261" />
              <WindowDot $color="#10b981" />
              <FileName>mateo.ts</FileName>
            </TitleBar>
            <Code>
              <Kw>const</Kw> mateo <Punct>= {"{"}</Punct>
              {"\n  "}
              <Prop>role</Prop>
              <Punct>:</Punct> <Str>"Full-Stack Engineer"</Str>
              <Punct>,</Punct>
              {"\n  "}
              <Prop>stack</Prop>
              <Punct>: [</Punct>
              <Str>"React"</Str>
              <Punct>,</Punct> <Str>"TypeScript"</Str>
              <Punct>,</Punct> <Str>"Python"</Str>
              <Punct>],</Punct>
              {"\n  "}
              <Prop>builds</Prop>
              <Punct>:</Punct> <Str>"scalable products, end to end"</Str>
              <Punct>,</Punct>
              {"\n  "}
              <Prop>coffee</Prop>
              <Punct>:</Punct> <Val>Infinity</Val>
              <Punct>,</Punct>
              {"\n"}
              <Punct>{"};"}</Punct>
              {"\n\n"}
              <Kw>export default</Kw> mateo<Punct>;</Punct>
              <Caret />
            </Code>
          </Window>
          <Badge src="/favicon.svg" alt="" />
        </motion.div>
      </motion.div>
    </Wrapper>
  );
}
