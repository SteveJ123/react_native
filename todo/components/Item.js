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
            <TouchableOpacity style={styles.listContainer}>
                <Text style={styles.itemList}>{this.props.item.text}                
                </Text>
                <TouchableOpacity onPress={()=>{this.props.updateTodo(this.props.item.key)}}>
                <Text style={styles.closeList}>X</Text>
                </TouchableOpacity>
                
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    listContainer:{
        flex: 1, flexDirection: 'row'
    },
    itemList: {        
        width: 240,
        marginTop: 10,        
        padding: 10,
        backgroundColor: 'yellow',
        textAlign: 'center',
    },
    closeList: {
        marginTop: 10,
        padding: 10,                
        backgroundColor: 'yellow',        
    }
    
});