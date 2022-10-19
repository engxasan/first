import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldtext}>How Are you Hassan!!</Text>
      <Text style={styles.boldtext}>I am Good</Text>

</View>  
 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'white',
    padding:20,
    borderRadius:20,
  },
  boldtext: {
   fontWeight:'bold',
  }
});
