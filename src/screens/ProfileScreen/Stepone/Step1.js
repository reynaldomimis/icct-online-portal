import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import CustomPicker from '../../../components/CustomItemPicker/CustomPicker';
import CheckBox from '../../../components/CustomCheckBox/CustomCheckbox';

export default function Step1() {
    return (

        <SafeAreaView style={styles.safe}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.container}>
                    <Text style={styles.profileText}>Profile</Text>
                    <StatusBar style="auto" />
                    <View style={styles.box1}>
                        <Text style={styles.number}>20190512</Text>
                        <Text style={styles.name}>BITOS, FORTUNE JR.</Text>

                    </View>
                    <View style={styles.firstContainer}>
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
                    <View style={styles.secondContainer}>
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
                            <Text style={styles.class}>Age</Text>
                            <TextInput style={styles.inputField}
                                placeholder=""
                                underlineColorAndroid='transparent'
                                keyboardType='number'
                                autoCorrect={false} />
                            <Text style={styles.class}>Suffix</Text>
                            <TextInput style={styles.inputField}
                                placeholder=""
                                underlineColorAndroid='transparent'
                                keyboardType='number'
                                autoCorrect={false} />

                        </View>

                    </View>

                    <View>
                        <View style={styles.thirdContainer}>
                            <Text style={styles.personalText}>HOME ADDRESS</Text>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Province</Text>
                            </View>
                            <View>
                                <CustomPicker />
                            </View>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>City/Municipality</Text>
                            </View>
                            <View>
                                <CustomPicker />
                            </View>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Barangay</Text>
                            </View>
                            <View>
                                <CustomPicker />
                            </View>
                            <View>
                                <TextInput style={[styles.input,
                                {
                                    paddingVertical: 10,
                                    textAlginVertical: 'top'
                                },
                                ]}
                                    multiline={true}
                                    placeholder={'Your complete adress'}
                                />
                            </View>
                            <View>
                                <Text style={styles.house}>House Number, Building and Street Name</Text>
                            </View>
                        </View>
                        <View style={styles.fourthContainer}>
                            <Text style={styles.personalText}>PROVINCIAL ADDRESS</Text>
                            <CheckBox />
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Province</Text>
                            </View>
                            <CustomPicker />
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>City/Municipality</Text>
                            </View>
                            <CustomPicker />
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Barangay</Text>
                            </View>
                            <CustomPicker />
                            <TextInput style={[styles.input,
                            {
                                paddingVertical: 10,
                                textAlginVertical: 'top'
                            },
                            ]}
                                multiline={true}
                                placeholder={'Your complete adress'}
                            />
                            <View>
                                <Text style={styles.house}>House Number, Building and Street Name</Text>
                            </View>
                        </View>

                        <View style={styles.fifthContainer}>
                            <Text style={styles.personalText}>OTHER DATA</Text>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Date of Birth</Text>
                                <CustomPicker />
                                <CustomPicker />
                                <CustomPicker />
                            </View>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Place of Birth</Text>
                                <CustomPicker />
                            </View>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Countryy</Text>
                                <CustomPicker />
                            </View>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Province</Text>
                                <CustomPicker />
                            </View>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>City/Municipality</Text>
                                <CustomPicker />
                            </View>
                            <Text style={styles.class}>Age</Text>
                            <TextInput style={styles.inputField}
                                placeholder=""
                                underlineColorAndroid='transparent'
                                keyboardType='number'
                                autoCorrect={false} />
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Sex</Text>
                                <CustomPicker />
                            </View>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Martial Status</Text>
                                <CustomPicker />
                            </View>
                            <View style={styles.secondClass}>
                                <Text style={styles.class}>Religion</Text>
                                <CustomPicker />
                            </View>
                            <TouchableOpacity style={styles.nextButton}>
                                <Text style={styles.stepText}>Next Step</Text>
                                <Text style={styles.edu}>Educational Information</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView >
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    safe: {

        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',


    },

    profileText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 200,
        marginTop: 10

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
    firstContainer: {
        width: "95%",
        backgroundColor: "white",
        marginTop: 30,
        elevation: 10,
        borderRadius: 10,
        marginBottom: 3,
        paddingHorizontal: 30,
        paddingBottom: 50

    },
    secondContainer: {
        width: "95%",
        backgroundColor: "white",
        marginTop: 20,
        elevation: 10,
        borderRadius: 10,
        marginBottom: 3,
        paddingHorizontal: 30,
        paddingBottom: 40

    },
    thirdContainer: {
        width: "95%",
        backgroundColor: "white",
        marginTop: 20,
        elevation: 10,
        borderRadius: 10,
        marginBottom: 3,
        paddingHorizontal: 10,
        paddingBottom: 80


    },
    fourthContainer: {
        width: "95%",
        backgroundColor: "white",
        marginTop: 30,
        elevation: 10,
        borderRadius: 10,
        marginBottom: 3,
        paddingHorizontal: 30,
        paddingBottom: 70
    },
    fifthContainer: {
        width: "95%",
        backgroundColor: "white",
        marginTop: 30,
        elevation: 10,
        borderRadius: 10,
        marginBottom: 3,
        paddingHorizontal: 30,
        paddingBottom: 100
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
        marginTop: 15,
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
        paddingHorizontal: 20,
        marginTop: 5

    },
    input: {
        width: "95%",
        height: 44,
        backgroundColor: "#f1f3f6",
        borderRadius: 6,
        marginTop: 40,
        height: 60,
        paddingHorizontal: 10
    },
    house: {
        alignSelf: "center",
        marginTop: 20

    },
    nextButton: {
        width: "95%",
        height: "6%",
        backgroundColor: "blue",
        borderRadius: 28,
        marginBottom: 3,
        marginTop: 40,
        alignSelf: "center"
    },
    stepText: {
        alignSelf: "center",
        color: "white",
        marginTop: 10

    },
    edu: {
        alignSelf: "center",
        color: "white"
    }


});
