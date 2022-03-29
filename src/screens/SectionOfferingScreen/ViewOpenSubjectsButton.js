import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const ViewOpenSubjectButton = () => {
    return (
    <TouchableOpacity style={styles.container}>
    <Icon name="search1" size={20} style={styles.button}>  View Open Subjects </Icon>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {

  paddingTop: 5,
  paddingBottom: 20,
  alignSelf:'center',

},
  button: {
    color: "white",
    backgroundColor: 'orange',
    borderRadius: 100,
    height:40,
    paddingTop: 10,
    paddingLeft: 15,
    width: 250,
    
  }

});

export default ViewOpenSubjectButton;