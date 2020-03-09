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

export default class Item extends React.Component {
   

    render() {
        console.log("props test", this.props );
        return (
            <TouchableOpacity style={styles.itemList} onPress={()=>{this.props.updateTodo(this.props.item.key)}}>
                <Text>{this.props.item.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    itemList: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'yellow',
    },
    
});