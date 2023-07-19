import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGame from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Game from './screens/Game';
import Colors from './constants/colors';


export default function App() {

  const [userNumber, setUserNumber] = useState()

  const pickedNumber = (pikedNumber) => {
    setUserNumber(pikedNumber)
  }

  let screen = <StartGame onPickedNumber={pickedNumber} />

  if (userNumber) {
    screen = <Game />
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.container} imageStyle={styles.backgroundImage}> 
        <SafeAreaView style={styles.container}>
          {screen}
        </SafeAreaView>
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
