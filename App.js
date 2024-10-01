import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import * as Speech from 'expo-speech';

export default function App() {

  const [txt, setTxt] = useState('');

  const speak = () => {
    Speech.speak(txt);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        placeholder='Text to speech' 
        value={txt}
        onChangeText={text => setTxt(text)} 
      />
      <Button style={styles.button} title="Press to hear text" onPress={speak} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: 5,
  },
  input: {
    height: 40,
    width: "60%",
    borderColor: 'gray', 
    borderWidth: 1,
  }
});
