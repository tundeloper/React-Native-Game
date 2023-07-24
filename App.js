import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGame from './screens/StartGame';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Game from './screens/Game';
import Colors from './constants/colors';
import GameOver from './screens/GameOver';

export default function App() {

  const [userNumber, setUserNumber] = useState() 
  const [gameISOver, setGameIsOver] = useState(true)

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if (!fontLoaded) {
    return <AppLoading />
  }

  const pickedNumber = (pikedNumber) => {
    setUserNumber(pikedNumber)
    setGameIsOver(false)
  }

  const gameOver = () => {
    setGameIsOver(true) 
  }

  const restartGame = () => {
    setGameIsOver(false)
    setUserNumber('')
  }

  let screen = <StartGame onPickedNumber={pickedNumber} />

  if (userNumber) {
    screen = <Game userNumber={userNumber} onGameOver={gameOver} />
  }

  if (gameISOver && userNumber) {
    screen = <GameOver onPress={restartGame}/>
  }

  // if (gameISOver) {
  //   screen = <GameOver onPress={restartGame}/>
  // }

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
