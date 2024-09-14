"use client";
import React from "react";
import {
  ComingSoonWrapper,
  Title,
  Subtitle,
  Background,
} from "./comingSoon.styles";

const ComingSoon: React.FC = () => {
  return (
    <ComingSoonWrapper className="cool-text">
      <Background />
      <Title>Coming Soon</Title>
      <Subtitle>We are launching something awesome. Stay tuned!</Subtitle>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;
