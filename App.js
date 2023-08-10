import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CategoriesScreen from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverview from './screens/MealsOverview';
import { CATEGORIES } from './data/dummy-data';
import MealDetail from './screens/MealDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Favourite from './screens/Favourite';
import FavoriteContextProvider from './store/context/favourite';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    drawerContentStyle: {backgroundColor: '#351401'},
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#e4baa1',
    drawerActiveBackgroundColor: '#3f2f25'
  }}>
    <Drawer.Screen name='MealCategories' component={CategoriesScreen} options={{
      title: 'All Category',
      drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name='list'/>
    }}/>
    <Drawer.Screen name='Favorite' component={Favourite} options={{
      drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>
    }}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    // <FavoriteContextProvider>
      <Provider store={store }>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          cardStyle: { backgroundColor: '#3f2f25' },
          cardOverlayEnabled: false
        }}
        >
          <Stack.Screen name="Drawer"
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
          <Stack.Screen name='MealsDetail' component={MealDetail} options={{}}/>
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="light" />
    </Provider>
    // </FavoriteContextProvider> 
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
