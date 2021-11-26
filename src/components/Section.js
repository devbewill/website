import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  leftBtnText,

  rightBtnText,
  backgroundImage,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <TextBlock>
        <h1>CryptoPunks</h1>
        <p>
          50k collectible faces with <a href="#">proof </a> of ownership stored
          on the Ethereum blockchain. The project that inspired the modern
          CryptoArt movement. Selected press and appearances include Mashable,
          CNBC, The Financial Times, <a href="#">Bloomberg </a>, MarketWatch,
          The Paris Review, Salon, The Outline, BreakerMag, Christie's of
          London, Art|Basel, The PBS NewsHour, The New York Times in 2018 and
          again in 2021. The Cryptopunks are one of the earliest examples of a
          "Non-Fungible Token" on Ethereum, and were{" "}
          <a href="#">inspiration </a> for the ERC-721 standard that powers most
          digital art and collectibles.
        </p>
      </TextBlock>

      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const TextBlock = styled.div`
  max-width: 60vw;
  text-align: left;
`;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;
