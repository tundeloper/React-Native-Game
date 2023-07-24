import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({children}) {
  return (
      <View style={styles.container}>
          <Text style={styles.numbeText}>{ children }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numbeText: {
        color: Colors.accent500,
        fontSize: 36,
        // fontWeight: "bold"
        fontFamily: 'open-sans-bold'
    }
})