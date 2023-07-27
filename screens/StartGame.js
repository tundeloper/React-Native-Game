import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView, } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from "react"
import { Colors } from '../constants/colors'
import Title from "../components/ui/Title"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"

export default function StartGame({ onPickedNumber, }) {
    const [enteredNumber, setEnteredNumber] = useState('')
    const { height, width } = useWindowDimensions()

    const numberInput = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInput = () => {
        setEnteredNumber('')
    }

    const confirmInput = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert
            Alert.alert('Invalid number!', 'Number has to be a number 1 and 99', [{ text: 'Okay', style: 'cancel', onPress: resetInput }])
            
            return
        }
        onPickedNumber(chosenNumber)

    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={{flex:1}}>
        <KeyboardAvoidingView style={{flex: 1}} behavior='position'>
        <View style={[styles.rootContaier, {marginTop: marginTopDistance}]}>
          <Title>Guess my number</Title>
            
        <Card>
            <InstructionText>Enter a Number</InstructionText>
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
          
    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    rootContaier: {
        flex: 1,
        // marginTop: 80,
        alignItems: 'center'
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