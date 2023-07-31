import { View, Text, StyleSheet } from "react-native"
export default function MealDetails() {
  return (
    <View style={styles.details}>
        <Text style={styles.detailsItem}>{duration}m</Text>
        <Text style={styles.detailsItem} >{complexity.toUpperCase()}</Text>
        <Text style={styles.detailsItem} >{affordability.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    detailsItem: {
        marginHorizontal: 4
    },
})