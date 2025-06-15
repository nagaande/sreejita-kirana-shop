import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import CustomerListScreen from './screens/CustomerListScreen';
import AddCustomerScreen from './screens/AddCustomerScreen';
import AddDebtScreen from './screens/AddDebtScreen';
import DebtListScreen from './screens/DebtListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Customers" component={CustomerListScreen} />
        <Stack.Screen name="AddCustomer" component={AddCustomerScreen} />
        <Stack.Screen name="AddDebt" component={AddDebtScreen} />
        <Stack.Screen name="Debts" component={DebtListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}