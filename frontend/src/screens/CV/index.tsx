import { JSX } from "react";
import cvEn from "../../assets/cv/Mateo_Jimenez_Software_Engineer.pdf?url";
import cvEs from "../../assets/cv/Mateo_Jimenez_Ingeniero_Software.pdf?url";
import { Fallback, Viewer, Wrapper } from "./styled";

const CV_BY_LANG = {
  en: {
    pdf: cvEn,
    title: "Mateo Jiménez — CV",
    fallbackText: "Your browser can't preview PDFs inline.",
    fallbackCta: "Open CV",
  },
  es: {
    pdf: cvEs,
    title: "Mateo Jiménez — CV (Español)",
    fallbackText: "Tu navegador no puede previsualizar PDFs.",
    fallbackCta: "Abrir CV",
  },
} as const;

type Props = {
  lang: keyof typeof CV_BY_LANG;
};

export default function CV({ lang }: Props): JSX.Element {
  const { pdf, title, fallbackText, fallbackCta } = CV_BY_LANG[lang];

  return (
    <Wrapper>
      <Viewer src={`${pdf}#view=FitH`} title={title}>
        <Fallback>
          <p>{fallbackText}</p>
          <a href={pdf} target="_blank" rel="noreferrer">
            {fallbackCta}
          </a>
        </Fallback>
      </Viewer>
    </Wrapper>
  );
}
