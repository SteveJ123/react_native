import React, {  } from 'react';
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

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>My Todos</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        padding: 20,
        alignSelf: 'stretch',        
        backgroundColor: 'blue',
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
});