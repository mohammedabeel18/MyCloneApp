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

      {/* Login Form */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Phone number, username, or email"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Sign Up */}
      <TouchableOpacity>
        <Text style={styles.signupText}>Sign up for Instagram</Text>
      </TouchableOpacity>

      {/* Alert Button */}
      <View style={styles.alertContainer}>
        <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
          <Text style={styles.buttonText}>Alert</Text>
        </TouchableOpacity>
      </View>
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
    borderRadius: 21,
    padding: 14,
    alignItems: "center",
    marginBottom: 21,
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
