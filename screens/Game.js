import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import { Ionicons } from '@expo/vector-icons';
import GuessLoginItem from "../components/game/GuessLoginItem";

const generateRandomBetween = (min, max, exclude) => {
    const roundNumber = Math.floor(Math.random() * (max - min)) + min
    if(roundNumber)
    if (roundNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return roundNumber 
    }
}

let min = 1;
let max = 100

export default function Game({ userNumber, onGameOver, }) {
    
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRound, setGuessRound] = useState([])
    const { height, width } = useWindowDimensions()


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRound.length)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        min = 1; max = 100;
    }, [])
    
    const nextGuess = (direction) => { // direction => 'lowe', 'greater'
        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie", 'you know that this is wrong', [{text: 'Sorry', style: 'cancel'}] )
            }
        if (direction === 'lower') {
            max = currentGuess
        }else {
            min = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(min, max, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRound(prevGuess => [newRndNumber, ...prevGuess])
    }

    const guessRoundListLength = guessRound.length

    let content = (
        <>
        <NumberContainer>{currentGuess}</NumberContainer>
          <Card>
              <InstructionText style={{ marginBottom: 12 }}>Higher or lower</InstructionText>
              <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={nextGuess.bind(null, 'lower')}>
                          <Ionicons name="remove-outline" size={24} color="white" />
                      </PrimaryButton></View>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={nextGuess.bind(null, 'greater')}>
                          <Ionicons name="add-outline" size={24} color="white" />
                      </PrimaryButton>
                  </View>
              </View>
          </Card>
        </>
    )

    if (width > 500) {
        content = (
            <>
                {/* <InstructionText style={{ marginBottom: 12 }}>Higher or lower</InstructionText> */}
                <View style={styles.buttonContainerWide}>
                    <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={nextGuess.bind(null, 'lower')}>
                          <Ionicons name="remove-outline" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={nextGuess.bind(null, 'greater')}>
                          <Ionicons name="add-outline" size={24} color="white" />
                      </PrimaryButton>
                    </View>
                </View>
            </>
        )
    }
    
  return (
      <View style={styles.screen}>
          <Title>Opponent's Guess</Title>
          {content}
          <View style={styles.listContainer}>
              {/* {guessRound.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
              <FlatList data={guessRound} renderItem={(itemData) => <GuessLoginItem roundNumber={guessRoundListLength - itemData.index} gues={itemData.item} />} keyExtractor={(item) => item} s/>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: "#ddb52f",
        padding: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        // padding: 16
    },
    buttonContainerWide: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center"
    },
    listContainer: {
        // flex: 1,
        width: '100%',
        padding: 16,
    }
})