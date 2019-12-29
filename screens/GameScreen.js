import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude)
        return generateRandomNumber(min, max, exclude);

    return randomNumber;
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumber(1, 100, props.userChoice)
    );

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" color={Colors.accent} onPress={() => { }} />
                <Button title="GREATER" color={Colors.accent} onPress={() => { }} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;