import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function Input() {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder=""
        value={text}
        onChangeText={setText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '93AE9F',
    borderWidth: 1,
    padding: 5,
    width: 250,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  inputFocused: {
    borderColor: 'black',
  },
});