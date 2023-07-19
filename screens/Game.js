import { View, StyleSheet,Text } from "react-native";
import Title from "../components/title";

export default function Game() {
  return (
      <View style={styles.screen}>
          <Title>Opponent's Guess</Title>
          <View>
              <Text>higher or lower</Text>  
          </View>
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
    }
})