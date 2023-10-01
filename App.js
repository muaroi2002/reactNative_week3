import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstScreen from "./View/FirstScreen";
import Page1_a from "./View/Page1_a";
import Page1_b from "./View/Page1_b";
import Page1_c from "./View/Page1_c";
import Page1_d from "./View/Page1_d";
import Page1_e from "./View/Page1_e";
import Page2_a from "./View/Page2_a";
import XMEye from "./View/XMEye";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: true,
  tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#fff',
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        initialRouteName='FirstScreen'
      >
        {/* <Tab.Screen
          name="FirstScreen" component={FirstScreen} />
        <Tab.Screen
          name="Page1_a" component={Page1_a} />
        <Tab.Screen
          name="Page1_b" component={Page1_b} />
        <Tab.Screen 
          name="Page1_c" component={Page1_c} /> */}
        <Tab.Screen
          name="Page1_d" component={Page1_d} />
        {/* <Tab.Screen
          name="Page1_e" component={Page1_e} />
        <Tab.Screen
          name="Page2_a" component={Page2_a} />
        <Tab.Screen
          name="XMEye" component={XMEye} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}