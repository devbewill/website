import React from "react";
import styled from "styled-components";

function Post() {
  return (
    <TextBlock>
      <h1>CryptoPunks</h1>
      <p>
        50k collectible faces with <a href="#">proof </a> of ownership stored on
        the Ethereum blockchain. The project that inspired the modern CryptoArt
        movement. Selected press and appearances include Mashable, CNBC, The
        Financial Times, <a href="#">Bloomberg </a>, MarketWatch, The Paris
        Review, Salon, The Outline, BreakerMag, Christie's of London, Art|Basel,
        The PBS NewsHour, The New York Times in 2018 and again in 2021. The
        Cryptopunks are one of the earliest examples of a "Non-Fungible Token"
        on Ethereum, and were <a href="#">inspiration </a> for the ERC-721
        standard that powers most digital art and collectibles.
      </p>
    </TextBlock>
  );
}

export default Post;

const TextBlock = styled.div`
  max-width: 60vw;
  text-align: left;
`;
