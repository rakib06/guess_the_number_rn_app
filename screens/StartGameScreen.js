import React from 'react'

import {View, Text, StyleSheet,TextInput,Button} from 'react-native'
import Card from '../components/Card'


const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> Start a New Game </Text>
            <View style={styles.inputContainer}>
                <Card style={styles.inputContainer}>
                <Text> Select a Number </Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                         <Button title="Reset" onPress={() => {}} color="#c717fc" /> 
                    </View>
                    
                    <View style={styles.button}> 
                        <Button title="Confirm" onPress={() => {}} color="#f7287b"/> 
                    </View>

                </View>
                </Card>
            </View>
           
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer:{
       
        width: 300,
        maxWidth: '80%', // if our device is too small, it will make sure that width won't be greater than 80%
        alignItems: 'center',

    },

    buttonContainer: {
        flexDirection: 'row', 
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button:{
        width: 85,
        paddingHorizontal: 3
    }
    
    
})

export default StartGameScreen




// import React from 'react'

// import {View, Text, StyleSheet} from 'react-native'

// const StartGameScreen = props => {
    
// }

// const styles = StyleSheet.create({})

// export default StartGameScreen