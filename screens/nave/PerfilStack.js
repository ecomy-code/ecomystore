import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Perfil from '../home/Perfil'

import { createStackNavigator } from '@react-navigation/stack'





const Stack = createStackNavigator()

export default function PerfilStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="perfi"
                component={Perfil}
                options={{ title: "Cuenta de usuario" }}
            />
        </Stack.Navigator>
    
    )
}

const styles = StyleSheet.create({})
