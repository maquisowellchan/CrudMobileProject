import * as React from 'react';
import { View, Text, StyleSheet, Image, Keyboard, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import UserView from './components/UserView/UserView';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen() {
  const dismissKeyboardOnTabPress = () => {
    Keyboard.dismiss();
  };

  return (
    
  
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'transparent',
          borderRadius: 15,
          height: 90,
          borderTopWidth: 0,
          // ...styles.shadow,
        },
        
      }}
      tabBarOptions={{
        keyboardHidesTabBar: true
     }}  
      screenListeners={{ tabPress: dismissKeyboardOnTabPress }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('./assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#22D1EE' : '#FFFFFF',
                }}
              />
              <Text style={{ color: focused ? '#22D1EE' : '#FFFFFF', fontSize: 12 }}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('./assets/icons/register.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#22D1EE' : '#FFFFFF',
                }}
              />
              <Text style={{ color: focused ? '#22D1EE' : '#FFFFFF', fontSize: 12 }}>REGISTER</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
    
   
  
  );
}

function App() {
  return (
    <>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={StackScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="UserView" component={UserView} />
        </Stack.Navigator>
      </NavigationContainer>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity:
    0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default App;

