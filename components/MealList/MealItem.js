import React from 'react'
import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MealDetails from '../MealDetails';

export default function MealItem({ title, imageUrl, duration, complexity, affordability, id}) {
    const navigation = useNavigation()

    const pressHandler = () => {
        navigation.navigate('MealsDetail', {mealId: id})
    }

  return (
      <View style={styles.mealItem}>
          <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => [pressed ? styles.buttonPressed : null]} onPress={pressHandler}>
            <View style={styles.innerContainer}>
              <View>
                  <Image source={({ uri: imageUrl })} style={styles.image} />
                  <Text style={styles.title}>{title}</Text>
              </View>
              <MealDetails complexity={complexity} affordability={affordability} duration={duration}/>
            </View>
          </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        // backgroundColor: '#e6c6b3',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8, 
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    },
    buttonPressed: {
        opacity: Platform.OS === 'ios' ? 1 : 0.8
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 16,
        padding: 8
    },
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