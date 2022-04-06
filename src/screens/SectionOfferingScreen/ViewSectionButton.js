import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const ViewSectionButton= () => {
    return (
      <View style={styles.container}>
    <TouchableOpacity>
    <Icon name="search1" size={14} style={styles.button}> View Sections </Icon>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 30,

},
  button: {
    color: "#FFFFFF",
    backgroundColor: '#1E90FF',
    height:45,
    width: 150,
    paddingLeft: 20,
    paddingTop: 15,
    borderRadius: 10,
    borderWidth:1,
  }

});

export default ViewSectionButton;