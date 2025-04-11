import { JSX, useEffect } from "react";
import { LINKEDIN_PROFILE_URL } from "./constants";
import Redirect from "../../components/Redirect";

export default function Linkedin(): JSX.Element {
  useEffect(() => {
    location.href = LINKEDIN_PROFILE_URL;
  });
  return <Redirect />;
}
