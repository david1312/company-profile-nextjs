import styled from "@emotion/styled";
import network from "@/src/assets/gifs/network.gif";

export const OverviewWrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 100px;
`;

export const SummaryCard = styled.div`
  padding-top: 50px;
`;

export const HowBitcoinWork = styled.section`
  background-size: cover;
  background-image: url(${network.src});
  color: white;
  padding: 50px 200px;
  h2 {
    font-size: 30px;
    text-align: center;
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const ParagraphContainerColumn = styled.div`
  display: flex;
  width: 50%;
`;

export const ParagraphTitleWrapper = styled.div`
  padding-bottom: 8px;
  width: 100%;
`;

export const ParagraphTitle = styled.div`
  background-color: #1985ab;
  color: white;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  padding: 1px 5px;
`;

export const ParagraphContentWrapper = styled.div`
  width: 100%;
  padding-bottom: 16px;
`;
export const ParagraphContent = styled.div`
  background-color: #283946;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 5px;
  padding: 10px 50px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 20px; /* Gap between the two columns */
  padding: 20px;
`;

export const Column = styled.div`
  background-color: #2c3e50;
  border-radius: 8px;
  padding: 20px;
  color: white;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  background-color: #1985ab;
  border-radius: 8px;
  text-align: center;
  padding: 0;
`;

export const Content = styled.p`
  font-size: 16px;
`;
