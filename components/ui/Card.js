import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

  
export default function Card({children}) {
    return <View style={styles.card}>
      {children}
  </View>
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: { 
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        width: '90%',
    },
})