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

export const StrengthsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Two columns: 1/3 for title, 2/3 for content */
  gap: 20px;
  padding: 40px;
  color: white;
`;

// Left side (for title and design elements)
export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 4rem;
    margin-bottom: 10px;
    color: white;
  }

  &::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #02ddb2; /* Light green/blue for circular design */
    opacity: 0.1;
  }
`;

// Right side (for key points)
export const KeyPointsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const KeyPoint = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: #06506a;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 70px;
  border-bottom-right-radius: 70px;
  box-shadow: 5px 7px 30px -10px white;
  min-height: 130px;

  .icon {
    width: 60px;
    background-color: #01c7eb; /* Blue for icon background */
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }

  .content {
    margin-top: -5px;
    h3 {
      font-size: 1.5rem;
      margin-bottom: 5px;
      color: white;
    }

    p {
      color: #ccc; /* Light gray for descriptions */
    }
  }
`;
