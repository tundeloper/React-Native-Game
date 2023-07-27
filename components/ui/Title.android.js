import { Text, StyleSheet, Platform } from "react-native"
import Colors from "../../constants/colors"

export default function Title({children}) {
    return (
        <Text style={styles.title}>{ children }</Text>
  )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        border: 2,
        // borderWidth: Platform.OS === 'android' ? 2 : 0 ,
        // borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: Colors.accent500,
        padding: 12,
        maxWidth: '80%',
        width: 300,
    }
})