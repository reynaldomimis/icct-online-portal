import { View, Text } from "react-native";
import React from "react";
import styles from "./styles"
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
      <Text>12323</Text>
      <Text>12323</Text>
      <Text>12323</Text>
      <Text>12323</Text>
      <Text>12323</Text>
      <Text>12323</Text>
    <View style={styles.container}>
     <SchoolYear />
      <Term />
      <Program />
      <YearLevel />
      <ParentSection />
      <ViewSectionButton />
      <ViewOpenSubjectButton />
      <ViewSection />
     
    </View>
    </View>
  );
};


export default SectionOffering;
