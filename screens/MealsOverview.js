import { View, FlatList, StyleSheet } from "react-native"
// import { useRoute } from '@react-navigation/native';
import { MEALS, CATEGORIES } from "../data/dummy-data"
import MealItem from "../components/MealItem"

export default function MealsOverview({ route }) {

    const catId = (route.params.categoryId)

    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(catId) >= 0)

    // const categoryTitle = CATEGORIES.find(category => category.id === catId)

    const renderMealItem = (itemData) => {
        const { item } = itemData
        const mealItemProp = {
            title: item.title,
            id: item.id,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }
        return <MealItem {...mealItemProp}/>
    }

  return (
      <View>
          <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})