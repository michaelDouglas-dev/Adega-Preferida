import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';

import TelaInicio from './components/TelaInicio';
import TelaCatalogo from './components/TelaCatalogo';
import TelaContato from './components/TelaContato';

const Tabs = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#400303',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ab887c',
          tabBarLabelStyle:{ 
            fontSize: 14, 
            fontWeight: 'bold'
          },

          headerStyle:{
            backgroundColor: '#400303'
          },
          headerTitleAlign: 'center',
          headerTitleStyle:{
            color: '#fff',
            fontWeight: 'bold'
          },
        }}
      >
        <Tabs.Screen 
          name="Início" 
          component={ TelaInicio }
          options={{
            tabBarIcon: ({ color }) => (<Entypo name="home" size={20} color={ color } />)
          }}
        />
        <Tabs.Screen 
          name="Catálogo" 
          component={ TelaCatalogo }
          options={{
            tabBarIcon: ({ color }) => (<FontAwesome5 name="wine-bottle" size={20} color={ color } />)
          }}
        />
        <Tabs.Screen 
          name="Contato" 
          component={ TelaContato }
          options={{
            tabBarIcon: ({ color }) => (<AntDesign name="contacts" size={20} color={ color } />)
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}