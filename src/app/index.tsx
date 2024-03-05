import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { useState } from "react";

export default function RootLayout() {

  const [username, setUsername] = useState('');

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.textTitle}>LUMI</Text>
      <View style={styleSheet.innerContainer}>
        <Text style={styleSheet.textMid}>Welcome back, Ayush</Text>
        <Text style={styleSheet.textRegular}>ayushupss@gmail.com</Text>
        <TextInput
          style={styleSheet.inputBox}
          placeholder="password"
          value={username}
          onChangeText={(name) => setUsername(name)}
        />
        <TouchableOpacity
          style={styleSheet.loginButton}
          onPress={() => router.navigate(`/andar/${username}`)}
        >
          <Text style={[styleSheet.textRegular, styleSheet.textWhite]}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styleSheet.textRegular}>Forgot password? </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 40,
    backgroundColor: "lightpink",
    textAlign: "center",
    paddingHorizontal: 40,
  },
  innerContainer: {
    width: "100%",
    gap: 4,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 2,
  },
  textMid: {
    fontSize: 21,
    textAlign: "center",
    fontWeight: "500",
  },
  textRegular: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  inputBox: {
    backgroundColor: "white",
    fontSize: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "auto",
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: "steelblue",
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 5,
    width: "auto",
    marginTop: 6,
  },
  textWhite: {
    color: "white",
  },
});
