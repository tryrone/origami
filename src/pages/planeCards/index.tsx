import { ScrollView } from "react-native";
import React from "react";
import styled from "styled-components/native";
import colors from "../../constants/colors";
import Grid from "./grid";

const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: ${colors.bg_black};
`;

const Pills = styled.View<{
  index: number;
}>`
  height: 35px;
  width: 70px;
  border-radius: 20px;
  margin-left: ${({ index }) => (index === 0 ? 20 : 0)}px;
  margin-right: 16px;
  background-color: ${colors.light_grey};
`;

const SpacedRow = styled.View<{
  mt?: number;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ mt }) => mt || 0}px;
`;

const PlaneGrid = () => {
  return (
    <Container>
      <SpacedRow mt={20}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(6)].map((item, index: number) => (
            <Pills key={index} index={index} />
          ))}
        </ScrollView>
      </SpacedRow>
      <Grid />
    </Container>
  );
};

export default PlaneGrid;
