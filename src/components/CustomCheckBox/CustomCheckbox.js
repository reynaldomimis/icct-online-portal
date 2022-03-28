import React, { useState } from "react";
import { CheckBox, Text, View, StyleSheet } from "react-native";


const CustomCheckbox = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Same as Home Address</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20
    },
    checkboxContainer: {
        flexDirection: "row",
        alignSelf: "stretch"

    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        fontSize: 12

    },
});

export default CustomCheckbox;
