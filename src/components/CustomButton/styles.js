import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: "#000",
  },

  container_SECONDARY: {
    borderColor: "#000",
    borderWidth: 2,
  },
  container_TERTIARY: {},
  Text: {
    fontWeight: "bold",
    color: "#fff",
  },

  Text_TERTIARY: {
    color: "gray",
  },
  Text_SECONDARY: {
    color: "#000",
  },
});
export default styles;
