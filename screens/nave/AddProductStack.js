import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import AddProduct from '../home/productos/AddProduct'




const Stack = createStackNavigator()


export default function AddProductStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
            name="perfi"
            component={AddProduct}
            options={{ title: "Mi Perfil" }}
        />
    </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
