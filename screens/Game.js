import { View, StyleSheet,Text, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import { Ionicons } from '@expo/vector-icons';

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

export default function Game({ userNumber, onGameOver, onRounds }) {
    
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        min = 1; max = 100;
    }, [])
    
    const nextGuess = (direction) => { // direction => 'lowe', 'greater'
        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'lower' && currentGuess < userNumber)) {
            Alert.alert("Don't lie", 'you know that this is wrong', [{text: 'Sorry', style: 'cancel'}] )
            }
        if (direction === 'lower') {
            max = currentGuess
        }else {
            min = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(min, max, currentGuess)
        setCurrentGuess(newRndNumber)
    }
    
  return (
      <View style={styles.screen}>
          <Title>Opponent's Guess</Title>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card>
              <InstructionText style={{ marginBottom: 12 }}>Higher or lower</InstructionText>
              <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={nextGuess.bind(null, 'lower')}>
                          <Ionicons name="remove-outline" size={24} color="white" />
                      </PrimaryButton></View>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={nextGuess.bind(null, 'higher')}>
                          <Ionicons name="add-outline" size={24} color="white" />
                      </PrimaryButton>
                  </View>
              </View>
          </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
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
        flex: 1
    }
})