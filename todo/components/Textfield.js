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

export default class Textfield extends React.Component {



    render() {
        return (
            <View style={styles.textField}>
                <TextInput
                    placeholder="Todos here"
                    placeholderTextColor="blue"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textField: {
        width: 140,
        height: 40,
        textAlign: 'center',
        paddingLeft: 40,
        borderStyle: 'dashed',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'red',
        borderTopColor: 'white'        
    }
});