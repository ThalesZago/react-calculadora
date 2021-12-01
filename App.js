import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [primeiro, setPrimeiro] = useState(0);
  const [segundo, setSegundo] = useState(0);

  const x = parseFloat(primeiro);
  const y = parseFloat(segundo);

  const subtracao = x - y;
  const multiplicacao = x * y;
  const divisao = x / y;
  const soma = x + y;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}> Calculadora</Text>
        <Text style={styles.helper}>
          Coloque os números que deseja somar e o app irá somar automaticamente
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
        <Button onClick={somar()}> clique me</Button>
        <Text style={styles.subtitle}> Resultado </Text>
        <Text style={styles.result}> Soma: {soma} </Text>;
        <Text style={styles.result}> Subtração: {subtracao} </Text>
        <Text style={styles.result}> Multiplicação: {multiplicacao} </Text>
        <Text style={styles.result}> Divisão: {divisao} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 400,
    height: 700,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: '100',
    color: '#ddd',
  },
  helper: {
    fontSize: 16,
    fontWeight: '100',
    color: '#ddd',
    textAlign: 'center',
    alignSelf: 'center',
  },
  input: {
    textAlign: 'center',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#DDD',
    marginTop: 20,
    marginHorizontal: 36,
    fontSize: 36,
    fontWeight: '100',
  },
  subtitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 36,
    color: '#ddd',
  },
  result: {
    textAlign: 'start',
    alignSelf: 'start',
    marginTop: 20,
    fontWeight: '100',
    fontSize: 30,
    color: '#ddd',
  },
});
