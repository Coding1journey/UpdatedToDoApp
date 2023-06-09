import React from 'react';
import { StylesSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global'

export default function ReviewDetails({ navigation }) {

    //const pressHandler = () => {
        //navigation.goBack();
    //}
    return (
        <View style= {globalStyles.container}>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('body') }</Text>
            <Text>{ navigation.getParam('rating') }</Text>
            {/* <Button title='back to home screen' onPress={pressHandler}/> */}
        </View>
    )
}