import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";



export default function MealDetail({ route, navigation }) {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meals) => meals.id === mealId)
    const headerbuttonPressed = () => {
        console.log('preesed')
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton />
            }
        })
    }, [navigation,])
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
        width: '80% '
    }
})
