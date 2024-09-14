"use client";
import styled from "@emotion/styled";
import bgImage from "@/src/assets/images/bg/background.webp";

export const ComingSoonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
`;

export const Background = styled.div`
  background-image: url(${bgImage.src});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5;
`;

export const Title = styled.div`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 40px;
  color: #f1f1f1;
  font-weight: 300;
`;
