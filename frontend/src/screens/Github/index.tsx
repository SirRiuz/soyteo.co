import { JSX, useEffect } from "react";
import { GITHUB_PROFILE_URL } from "../../components/GitHubButton/constants";
import Redirect from "../../components/Redirect";

export default function Github(): JSX.Element {
  useEffect(() => {
    location.href = GITHUB_PROFILE_URL;
  });
  return <Redirect />;
}
