import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  welcomeContainer: {
    paddingLeft: 35,
    paddingTop: 30,
    paddingBottom: 20,
  },
  welcome: {
    fontSize: 30,
    fontWeight: "700",
  },
  please: {
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
    marginTop: 12,
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
  registerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  dontText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#090909",
    marginRight: 6,
  },
  registerText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#003CD6",
  },
});
export default styles;
