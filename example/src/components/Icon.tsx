import React from "react";
import { ScrollView } from "react-native";
import { Div, Icon } from "react-native-magnus";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

const IconComponent: React.FC = () => {
  return (
    <>
      <ExampleHeader name="icon" />

      <ScrollView>
        <ExampleSection name="default">
          <Div flexDir="row">
            <Icon name="star" fontSize="xl" color="yellow500" />
            <Icon
              name="star"
              fontSize="xl"
              bg="yellow500"
              ml="md"
              rounded="circle"
              p="lg"
              color="white"
            />
          </Div>
        </ExampleSection>
      </ScrollView>
    </>
  );
};

export default IconComponent;