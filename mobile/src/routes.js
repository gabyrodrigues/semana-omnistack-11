import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //sempre fica em volta de toda a rota
import { createStackNavigator } from '@react-navigation/stack'; //navegação entre telas apenas interagindo com botões

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Details from './pages/Details';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}> 
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Details" component={Details} />
            </AppStack.Navigator>
            
        </NavigationContainer>
    );
}