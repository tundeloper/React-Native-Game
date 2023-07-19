import { Text, View, Pressable, StyleSheet } from "react-native"

export default function PrimaryButton({ children, onPress }) {
    const pressHandler = () => {
        console.log('pressed');
        onPress()
    }
    return (
        <View style={styles.buttonOuterContainer}>
        <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color: '#640233'}}>
          <Text style={styles.buttonText}>{ children }</Text>
        </Pressable>
     </View>
  )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#4e0329',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})