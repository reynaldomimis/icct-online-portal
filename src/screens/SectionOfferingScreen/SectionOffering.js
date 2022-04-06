import { View, Text, ScrollView } from "react-native";
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
    <ScrollView>
    <View style={styles.background}>
      <Text style={styles.texthead}>Section Offering</Text>
    <View style={styles.container}>
      <ScrollView horizontal={true}>
      <SchoolYear />
      <Term />
      </ScrollView>
      <ScrollView horizontal={true}>
      <YearLevel />
      <ParentSection />
      </ScrollView>
      <Program />
      <ScrollView horizontal={true}>
      <ViewSectionButton />
      <ViewOpenSubjectButton />
      </ScrollView>
      <ViewSection />
    </View>
    </View>
    </ScrollView>
  );
};


export default SectionOffering;
