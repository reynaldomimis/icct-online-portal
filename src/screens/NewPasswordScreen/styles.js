import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  baseContainer: {
    flex: 1,
  },
  forgotContainer: {
    flexDirection: "column",
    marginBottom: "1%",
    marginTop: "3%",
    paddingLeft: 25,
  },
  forgotPass: {
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 5,
  },
  enter: {
    fontSize: 17,
    fontWeight: "normal",
  },
  inputContainer: {
    paddingHorizontal: 30,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
  userContainer: {
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F6F5F3",
    borderRadius: 8,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  inputField: {
    fontSize: 18,
    fontWeight: "400",
    height: 45,
    width: "100%",
    marginLeft: 10,
    outlineStyle: "none",
  },
  forgot: {
    fontSize: 14,
    fontWeight: 600,
    color: "#003CD6",
    textAlign: "right",
  },
  button: {
    width: "100%",
    backgroundColor: "#003CD6",
    justifyContentL: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    paddingVertical: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  backIcon: {
    margin: 10,
  },
});
export default styles;
