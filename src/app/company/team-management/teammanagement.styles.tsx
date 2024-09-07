import { fadeAnimation } from "@/src/styles/animation";
import styled from "@emotion/styled";

export const TeamWrapper = styled.section`
  min-height: 100vh;
  .section-title {
    ${() => fadeAnimation("down", 0.2)}
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 3fr));
  gap: 50px;
`;

export const TeamCard = styled.div`
  padding: 20px;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const TeamImage = styled.div`
  display: block;
  margin: auto;

  width: 180px;
  .img-content {
    border-radius: 20px;
  }
`;
