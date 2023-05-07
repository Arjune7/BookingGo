import TourDetailScreen from "./app/screens/TourDetailScreen";
import HomeScreen from "./app/screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./app/screens/WelcomeScreen";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={WelcomeScreen} options={{headerShown : false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TourPage" component={TourDetailScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name ="BookingPage" component={BookingScreen} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
