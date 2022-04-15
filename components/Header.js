import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constant/colors';

const Header = props =>{
    return (
        <View style={styles.header}>
            <Text style={styles.HeaderTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height:90,
        paddingTop: 36,
        backgroundColor: colors.primary,
        alignItems: 'center'
    },
    HeaderTitle:{
        color: 'black',
        fontSize: 18,
    }
})

export default Header