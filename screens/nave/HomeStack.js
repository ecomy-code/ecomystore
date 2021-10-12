import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../home/Home'



const Stack = createStackNavigator()



export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="perfi"
                component={Home}
                options={{ title: "Tienda ecomy™" }}
            />
        </Stack.Navigator>
    
    )
}

const styles = StyleSheet.create({})
