import { fadeAnimation } from "@/src/styles/animation";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Keyframes for background animation
const moveBg = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
`;

const moveTextHorizontal = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled component for TopBarSpan
export const TopBarSpan = styled.span`
  align-items: center;
  justify-content: space-between;
  display: flex;
  font-size: 14px;
  white-space: nowrap;
  color: black;
  animation: ${moveTextHorizontal} 10s linear infinite;
`;

// Styled component for TopBar
export const TopBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(to right, #01c7eb, #02ddb2, #03f66f);
  background-size: 300% 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 6px;
  height: 28px;
  z-index: 1000;
  animation: ${moveBg} 4s linear infinite;

  nav ul {
    color: red !important;
  }
`;

export const HeaderContent = styled.header`
  ${() => fadeAnimation("down", 0.2)}
`;
