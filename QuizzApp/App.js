import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Quiz/> */}
      {/* <Home/> */}
      <Result/>
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
});
