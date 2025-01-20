import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

export default function App() {
  // Function to handle alert button click
  const showAlert = () => {
    Alert.alert("Alert button pressed!");
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image
        source={require("./assets/Instagram_icon.png")}
        style={styles.logo}
      />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>
        Connect with friends and the world around you on Instagram.
      </Text>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#444",
  },
  inputContainer: {
    width: "100%",
  },
  alertContainer: {
    width: "50%",
    position: "absolute",
    right: 120,
    bottom: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  loginButton: {
    backgroundColor: "#3897f0",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  alertButton: {
    backgroundColor: "#CC5801",
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: 10,
    color: "#888",
  },
  signupText: {
    color: "#3897f0",
    fontWeight: "bold",
  },
});
