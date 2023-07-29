import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CategoriesScreen from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverview from './screens/MealsOverview';

const Stack = createStackNavigator()

export default function App() {
  // const Home = <View><Text>Hisjd</Text></View>
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title: 'Category'}}/>
        <Stack.Screen name="MealsOverview" component={MealsOverview} options={{title: 'Overview'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="dark" />
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
