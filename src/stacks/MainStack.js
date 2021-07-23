import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import CadastroAmbiente from '../screens/CadastroAmbiente';
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (    
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroAmbiente" component={CadastroAmbiente} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
);