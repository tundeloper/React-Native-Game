import { View, Image, StyleSheet, Text, useWindowDimensions, Dimensions, ScrollView} from "react-native"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"
import PrimaryButton from "../components/ui/PrimaryButton"
export default function GameOver({ roundsNumber, userNumber, onRestart }) {
  const { width, height } = useWindowDimensions()
  
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  console.log(imageSize)

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    // borderRadius: imageSize / 2
  }
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Title>Game Over</Title>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/images/success.png')} style={[styles.img, {height: imageSize, width: imageSize,}]} />
      </View>
      <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
      </View>
      </ScrollView>
  )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // marginTop: -30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderRadius: '100%',
    marginTop: 20,
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