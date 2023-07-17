import { TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
export default function StartGame() {
  return (
      <View style={styles.inputContainer}>
          <View style={{alignItems: 'center'}}>
              <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" />
          </View>
          <View style={styles.buttonsContainer}>  
               <View style={styles.buttonContainer}><PrimaryButton>Reset</PrimaryButton></View>
              <View style={styles.buttonContainer}><PrimaryButton>Confirm</PrimaryButton></View>
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
        backgroundColor: '#72063c',
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
        borderBottomColor: '#ddb52f',
        color: '#ddb52f',
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