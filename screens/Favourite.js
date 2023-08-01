import { StyleSheet, Text, View } from "react-native"
import MealsList from "../components/MealList/MealsList"
import { useContext } from "react"
import { FavoritesContext } from "../store/context/favourite"
import { MEALS } from "../data/dummy-data"
import { useSelector } from "react-redux"

export default function Favourite() {
    const favMealsIds = useSelector((state) => state.favoriteMeals.ids)

    // const favMealsCtx = useContext(FavoritesContext)
    // const { ids } = favMealsCtx
    const favMeals = MEALS.filter(meal => favMealsIds.includes(meal.id))
    if (favMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favourite meals yet</Text>
        </View>
    }
    return <MealsList items={favMeals} />
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})