import { View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealDetail({ route }) {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meals) => meals.id === mealId)
  return (
      <View>
          <Image source={{uri: selectedMeal.imageUrl}} />
          <Text>{selectedMeal.title}</Text> 
          <View>
              
          </View>
          <Text>Ingredients</Text>
          <Text>Steps</Text>
      </View>
  )
}
