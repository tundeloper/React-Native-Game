import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem'

export default function MealsList({items}) {

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
    <View style={style.container}> 
          <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})