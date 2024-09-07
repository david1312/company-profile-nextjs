import { fadeAnimation } from "@/src/styles/animation";
import styled from "@emotion/styled";
import bg from "@/src/assets/gifs/home.gif";

export const HomeContainer = styled.div`
  background-size: initial;
  background-image: url(${bg.src});
`;

export const HomeLogo = styled.div`
  ${() => fadeAnimation("right", 0.4)}
`;

export const HomeParagraph = styled.div`
  ${() => fadeAnimation("right", 0.6)}
`;

export const HomeHighlight = styled.div`
  ${() => fadeAnimation("right", 0.8)}
`;
