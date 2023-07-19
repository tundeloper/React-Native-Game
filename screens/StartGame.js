import { TextInput, View, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react"
import { Colors } from '../constants/colors'

export default function StartGame({onPickedNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInput = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInput = () => {
        setEnteredNumber('')
    }

    const generateRandomBetween = (min, max, exclude) => {
        const rnNum = Math.floor(Math.random() * (max - min)) + min
        if (rnNum === exclude) {
            return generateRandomBetween(min, max, exclude)
        } else {
            return rnNum 
        }
    }

    const confirmInput = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert
            Alert.alert('Invalid number!', 'Number has to be a number 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInput }])
            
            return
        }
        onPickedNumber(chosenNumber)

    }


  return (
      <View style={styles.inputContainer}>
          <View style={{alignItems: 'center'}}>
              <TextInput
                  style={styles.numberInput}
                  maxLength={2} keyboardType="number-pad"
                  autoCapitalize="none"
                  value={enteredNumber}
                  onChangeText={numberInput}
              />
          </View>
          <View style={styles.buttonsContainer}>  
              <View style={styles.buttonContainer}><PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton></View>
               <View style={styles.buttonContainer}><PrimaryButton onPress={resetInput}>Reset</PrimaryButton></View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: { 
        // alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: "center",
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        borderBottomWidth: 2,
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    buttonContainer: {
        flex: 1
    }
})