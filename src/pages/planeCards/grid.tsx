import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import colors from "../../constants/colors";
import Card from "./card";

const Container = styled.View`
  margin-top: 20px;
  padding-horizontal: 16px;
  flex: 1;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  column-gap: 16px;
  height: 100%;
  width: 100%;
`;

const Column = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  row-gap: 16px;
`;

const Grid = () => {
  const leftArray = [
    {
      height: 27,
    },
    {
      height: 27,
    },
    {
      height: 27,
    },
    {
      height: 30,
    },
  ];
  const rightArray = [
    {
      height: 25,
    },
    {
      height: 18,
    },
    {
      height: 25,
    },
    {
      height: 30,
    },
  ];

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Row>
          <Column>
            {leftArray.map((item, index) => (
              <Card
                key={index}
                height={item.height}
                color={index === 1 ? colors.light_blue : null}
              />
            ))}
          </Column>
          <Column>
            {rightArray.map((item, index) => (
              <Card key={index} height={item.height} color={null} />
            ))}
          </Column>
        </Row>
      </ScrollView>
    </Container>
  );
};

export default Grid;
