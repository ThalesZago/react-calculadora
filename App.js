import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [primeiro, setPrimeiro] = useState(0);
  const [segundo, setSegundo] = useState(0);

  const x = parseFloat(primeiro);
  const y = parseFloat(segundo);

  const soma = x + y;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Calculadora</Text>
      <Text>
        {" "}
        Coloque os números que deseja somar e o app irá somar automaticamente{" "}
      </Text>

      <TextInput
        keyboardType="decimal-pad"
        style={styles.input}
        value={primeiro}
        onChangeText={setPrimeiro}
      />
      <TextInput
        keyboardType="decimal-pad"
        style={styles.input}
        value={segundo}
        onChangeText={setSegundo}
      />
      <Text style={styles.subtitle}> Resultado </Text>
      <Text> {soma} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "100",
  },
  input: {
    textAlign: "center",
    alignSelf: "stretch",
    height: 50,
    backgroundColor: "#DDD",
    marginTop: 20,
    marginHorizontal: 36,
    fontSize: 36,
    fontWeight: "100",
  },
  subtitle: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
  },
});
