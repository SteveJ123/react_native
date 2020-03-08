import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    YellowBox,
    Button,
    ScrollView,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Main extends React.Component {

    

    render() {
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addContent: {
        position: 'absolute',
        right: -140,
        bottom: 40,
        paddingTop: 35,
        textAlign: 'center',
        width: 90,
        height: 90,
        backgroundColor: 'blue',
        borderRadius: 50,        
    },
    second: {
        fontWeight: 'bold',
        color: 'blue',
    },
    third: {
        color: 'black',
        fontWeight: "bold",
    },
    itemlist: {
        marginTop: 20,
        padding: 40,
        backgroundColor: 'blue'
    }
});
