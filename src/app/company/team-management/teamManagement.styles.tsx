import { fadeAnimation } from "@/src/styles/animation";
import styled from "@emotion/styled";

export const TeamWrapper = styled.section`
  .section-title {
    text-align: center;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 50px;
`;

export const TeamCard = styled.div`
  ${() => fadeAnimation("up", 0.5)}
  padding: 20px;
  background-color: #06506a;
  color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const TeamImage = styled.div`
  ${() => fadeAnimation("left", 0.7)}
  display: block;
  margin: auto;
  width: 180px;
  .img-content {
    border-radius: 20px;
    width: 100%;
    height: auto;
  }
`;

export const CardContent = styled.div`
  ${() => fadeAnimation("right", 0.9)}
`;

export const Paragraph = styled.div`
  min-height: 150px;
`;
