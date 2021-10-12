import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'



import Carrito from '../home/Carrito'


const Stack = createStackNavigator()


export default function CarritoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="perfi"
                component={Carrito}
                options={{ title: "Productos seleccionados" }}
            />
        </Stack.Navigator>
    
    )
}

const styles = StyleSheet.create({})
