import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CarritoStack from './CarritoStack'
import HomeStack from './HomeStack'
import PerfilStack from './PerfilStack'

const Tab = createBottomTabNavigator()


export default function MadreNave() {
    return (
        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen
                    name="carrito"
                    component= {CarritoStack}
                    options={{ title: "Mi Carrito" }}
                />
              <Tab.Screen
                    name="home"
                    component= {HomeStack}
                    options={{ title: "Home" }}
                />
              <Tab.Screen
                    name="perfil"
                    component= {PerfilStack}
                    options={{ title: "Perfil" }}
                />
               
            </Tab.Navigator>
        </NavigationContainer>

    )
}

