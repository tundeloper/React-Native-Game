import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CategoriesScreen from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverview from './screens/MealsOverview';
import { CATEGORIES } from './data/dummy-data';
import MealDetail from './screens/MealDetail';

const Stack = createStackNavigator()

export default function App() {
  // const Home = <View><Text>Hisjd</Text></View>
  return (
    <>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          cardStyle: { backgroundColor: '#3f2f25' },
          cardOverlayEnabled: false
        }}
        >
          <Stack.Screen name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Category',
            }} />
          <Stack.Screen name="MealsOverview" component={MealsOverview} options={({ route, navigation }) => {
            const catId = route.params.categoryId
            const meals = CATEGORIES.find((category) => category.id === catId)
            return {
              title: meals.title,
              headerStyle: { backgroundColor: meals.color },
              cardStyle: { backgroundColor: meals.color },
            }
        }}/>
        <Stack.Screen name='MealsDetail' component={MealDetail} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
