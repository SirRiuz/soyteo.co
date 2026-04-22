import { JSX } from "react";
import cvPdf from "../../assets/CV/en.pdf?url";
import { Fallback, Viewer, Wrapper } from "./styled";

export default function CV(): JSX.Element {
  return (
    <Wrapper>
      <Viewer
        src={`${cvPdf}#view=FitH`}
        title="Mateo Jiménez — CV"
      >
        <Fallback>
          <p>Your browser can't preview PDFs inline.</p>
          <a href={cvPdf} target="_blank" rel="noreferrer">
            Open CV
          </a>
        </Fallback>
      </Viewer>
    </Wrapper>
  );
}
