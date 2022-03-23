import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    marginTop: 50,
    fontWeight: "700",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  phoneNumberText: {
    fontSize: 18,
    fontWeight: "600",
    color: "red",
  },
  otpContainer: {
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 5,
    borderColor: "green",
    borderWidth: 0.5,
    width: 70,
    marginHorizontal: 10,
  },
  otpText: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
    paddingVertical: 8,
  },
  signinButton: {
    width: "100%",
    backgroundColor: "#003CD6",
    justifyContentL: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 10,
    marginHorizontal: 40,
  },
  signinButtonText: {
    fontSize: 16,
    paddingVertical: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
export default styles;
