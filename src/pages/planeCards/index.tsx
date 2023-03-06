import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import colors from "../../constants/colors";

const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.bg_black};
`;

const PlaneGrid = () => {
  return (
    <Container>
      <Text>PlaneGrid</Text>
    </Container>
  );
};

export default PlaneGrid;
