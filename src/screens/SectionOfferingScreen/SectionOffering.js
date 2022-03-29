import { View, Text } from "react-native";
import React from "react";
import SchoolYear from "./SchoolYear";
import Term from "./Term"
import Program from "./Program"
import YearLevel from "./YearLevel"
import ParentSection from "./ParentSection"
import ViewSection from "./ViewSection";
import ViewSectionButton from "./ViewSectionButton"
import ViewOpenSubjectButton from "./ViewOpenSubjectsButton";



const SectionOffering = () => {
  return (
    <View>
      <Text>SectionOffering</Text>
     <SchoolYear />
      <Term />
      <Program />
      <YearLevel />
      <ParentSection />
      <ViewSectionButton />
      <ViewOpenSubjectButton />
      <ViewSection />
     
    </View>

  );
};


export default SectionOffering;
