import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favourite";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";



export default function MealDetail({ route, navigation }) {
    // const favMealsCtx = useContext(FavoritesContext)
    const dispatch = useDispatch()
    const favMealsIds = useSelector((state) => state.favoriteMeals.ids)
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meals) => meals.id === mealId)

    // const mealIsFavorite = favMealsCtx.ids.includes(mealId)
    const mealIsFavorite = favMealsIds.includes(mealId)



    const headerbuttonPressed = () => {
        // console.log(mealIsFavorite)
        if (mealIsFavorite) {
            // favMealsCtx.removeFavorite(mealId)
            dispatch(removeFavorite({id: mealId}))
        } else {
            // favMealsCtx.addFavorite(mealId)
            dispatch(addFavorite({id: mealId}))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <View style={{marginRight: 10}}><IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color={'white'} onPress={headerbuttonPressed}/></View>
            },
        })
    }, [navigation, mealIsFavorite])
  return (
      <ScrollView style={styles.rootCOntainer}>  
          <View>
          <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{selectedMeal.title}</Text> 
          <MealDetails duration={selectedMeal.duration} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} textStyle={styles.detailText} />
          <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
                <Subtitle>ingredient</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
          </View>
          </View>
          </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    rootCOntainer: {
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%'
    }
})
