import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import CadastroAmbiente from '../screens/CadastroAmbiente';
import MainTab from './MainTab';
import Ambiente from '../screens/Ambiente';
import Home from '../screens/Home';
import Appointments from '../screens/Appointments';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';

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
        <Stack.Screen name="Ambiente" component={Ambiente} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Profile" component={Profile} />


    </Stack.Navigator>
);