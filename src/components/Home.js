import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Top"
        description="lorem ipsum top"
        leftBtnText="left btn"
        rightBtnText="right btn"
        // backgroundImage="bg1.png"
      ></Section>
      <Section
        title="Middle"
        description="lorem ipsum middle"
        leftBtnText="left btn"
        backgroundImage="bg2.png"
      ></Section>
      <Section
        title="Bottom"
        description="lorem ipsum bottom"
        leftBtnText="left btn"
        backgroundImage="bg3.png"
      ></Section>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
