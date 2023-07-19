import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGame from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.container} imageStyle={styles.backgroundImage}> 
        <StartGame />
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ddb52f',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 0.15
  }
});
