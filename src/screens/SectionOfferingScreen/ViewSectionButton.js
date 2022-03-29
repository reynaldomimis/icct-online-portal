import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const ViewSectionButton= () => {
    return (
    <TouchableOpacity style={styles.container}>
    <Icon name="search1" size={20} style={styles.button}> View Sections </Icon>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
  width: 250,
  paddingTop: 35,
  paddingBottom: 5,
  alignSelf:'center',

},
  button: {
    color: "white",
    backgroundColor: 'orange',
    borderRadius: 100,
    height:40,
    paddingTop: 10,
    paddingLeft: 40,
    
  }

});

export default ViewSectionButton;