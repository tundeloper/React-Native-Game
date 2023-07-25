import { View, Image, StyleSheet, Text} from "react-native"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"
import PrimaryButton from "../components/ui/PrimaryButton"
export default function GameOver({ roundsNumber, userNumber, onRestart }) {
  
  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/images/success.png')} style={styles.img} />
      </View>
      <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: -30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    alignItems: 'center',
    overflow: 'hidden'
    // flex: 1
  },
  img: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  }
})