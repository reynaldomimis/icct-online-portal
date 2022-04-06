import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const ViewOpenSubjectButton = () => {
    return (
    <View style={styles.container}> 
    <TouchableOpacity>
    <Icon name="search1" size={14} style={styles.button}>  View Open Subjects </Icon>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    alignSelf:'center',
},
  button: {
    color: "#FFFFFF",
    backgroundColor: '#1E90FF',
    height: 45,
    width: 160,
    paddingLeft: 7,
    paddingTop:15,
    borderRadius: 10,
    borderWidth:1,
  }

});

export default ViewOpenSubjectButton;