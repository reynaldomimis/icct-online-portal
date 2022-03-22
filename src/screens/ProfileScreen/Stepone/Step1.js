import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';
import CustomPicker from '../../../components/CustomItemPicker/CustomPicker';


export default function Step1() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>

                <Text style={styles.profileText}>Profile</Text>
                <StatusBar style="auto" />
                <View style={styles.box1}>
                    <Text style={styles.number}>20190512</Text>
                    <Text style={styles.name}>BITOS, FORTUNE JR.</Text>

                </View>
                <View style={styles.secondContainer}>
                    <Text style={styles.personalText}>PERSONAL INFORMATION</Text>
                    <Text style={styles.program}>PROGRAM INFORMATION</Text>
                    <Text style={styles.classification}>Classification</Text>
                    <View>
                        <CustomPicker />
                    </View>
                    <View style={styles.secondClass}>
                        <Text style={styles.class}>Accademic Program</Text>
                        <View>
                            <CustomPicker />
                        </View>
                        <View style={styles.secondClass}>
                            <Text style={styles.class}>BSIT-BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</Text>
                            <View>
                                <CustomPicker />
                            </View>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Second Choice</Text>
                                <View>
                                    <CustomPicker />
                                </View>
                                <View style={styles.secondClass}>
                                    <Text style={styles.class}>Third Choice</Text>
                                </View>
                                <View>
                                    <CustomPicker />
                                </View>
                                <View style={styles.secondClass}>
                                    <Text style={styles.class}>Your Level</Text>
                                </View>
                                <View>
                                    <CustomPicker />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.thirdContainer}>
                    <Text style={styles.personalText}>PERSONAL Data</Text>
                    <View style={styles.secondClass}>
                        <Text style={styles.class}>First Name</Text>
                        <TextInput style={styles.inputField}
                            placeholder=""
                            underlineColorAndroid='transparent'
                            keyboardType='Firstname'
                            autoCorrect={false} />
                        <Text style={styles.class}>Last Name</Text>
                        <TextInput style={styles.inputField}
                            placeholder=""
                            underlineColorAndroid='transparent'
                            keyboardType='Firstname'
                            autoCorrect={false} />
                        <Text style={styles.class}>Middle Name</Text>
                        <TextInput style={styles.inputField}
                            placeholder=""
                            underlineColorAndroid='transparent'
                            keyboardType='Firstname'
                            autoCorrect={false} />
                    </View>
                </View>
                <View>
                </View>
            </ScrollView >
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        marginHorizontal: -20
    },
    profileText: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"

    },
    box1: {
        width: "90%",
        height: 60,
        backgroundColor: "gray",
        paddingHorizontal: 30,
        marginTop: 20,


    },
    number: {
        fontSize: 15,
        color: "black",
        marginTop: 5
    },
    name: {
        fontSize: 20,
        color: "black"
    },
    secondContainer: {
        width: "90%",
        height: "60%",
        backgroundColor: "white",
        marginTop: 20,
        elevation: 10,
        borderRadius: 28,
        marginBottom: 3,
        backgroundColor: 'white'

    },
    thirdContainer: {
        width: "90%",
        height: "70%",
        backgroundColor: "white",
        marginTop: 30,
        elevation: 10,
        borderRadius: 28,
        marginBottom: 3,
        backgroundColor: 'white'
    },
    personalText: {
        fontSize: 15,
        marginTop: 20,
        paddingHorizontal: 20,
        fontWeight: "bold"
    },
    program: {
        fontSize: 14,
        marginTop: 30,
        paddingHorizontal: 20,
        fontWeight: "bold"

    },
    classification: {
        fontSize: 15,
        marginTop: 10,
        paddingHorizontal: 20,
    },
    class: {
        fontSize: 15,
        marginTop: 4,
        paddingHorizontal: 20,
    },
    secondClass: {
        marginTop: 15,
    },
    inputField: {
        width: 190,
        height: 25,
        backgroundColor: "#f1f3f6",
        borderRadius: 10,
        paddingHorizontal: 10,

    },

});


