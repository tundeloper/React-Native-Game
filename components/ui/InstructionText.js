import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

export default function InstructionText({children, style}) {
    return <Text style={[styles.instruction, style]}>{ children }</Text>
}

const styles = StyleSheet.create({
    instruction: {
        color: Colors.accent500,
        fontSize: 24,
        textAlign: 'center'
    },
})