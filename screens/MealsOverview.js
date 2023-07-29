import { View, Text, StyleSheet } from "react-native"
import { useRoute } from '@react-navigation/native';
import Meal from "../models/meal"

export default function MealsOverview({ route }) {
    const catId = (route.params.categoryId)
  return (
      <View>
          <Text>Meal Over View screen - {catId} </Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})