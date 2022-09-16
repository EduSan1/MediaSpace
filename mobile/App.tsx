import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartHome from './src/layers/startHome';
export default function App() {
  return (
    <StartHome/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75A5FF',
    
  },
});
