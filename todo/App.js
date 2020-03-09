import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  YellowBox,
  Button,
  ScrollView,
  FlatList,
  Modal,
  TextInput
} from 'react-native';

import Main from './components/Main';
import Header from './components/Header';
import Item from './components/Item';
import Textfield from './components/Textfield';

export default class App extends React.Component {

  // state = {  
  //   isVisible: false, //state of modal default false  
  // }

  state = {
    value: '',
    todos: [
      { text: 'buy coffe', key: '1' },
      { text: 'buy mug', key: '2' },
      { text: 'buy table', key: '3' },
      { text: 'buy cup', key: '4' }
    ],
    username: '',
    password: '',
  };

  _handlePress() {
    console.log(this.state.username);
    console.log(this.state.password);
 }

updateTodo = (key) => {
  const prev = this.state.todos;
  const update = prev.filter(todo => todo.key != key);
  this.setState({ todos: update });
}

addText = () =>{
  console.log("texting", typeof this.state.todos);
  const additem = this.state.todos;
  console.log("typeof", typeof additem);
  additem.push({text: this.state.value, key: '6'})
  this.setState({todos: additem})
}

updateValue = (text) =>{
  this.setState({value: text});
}

  render() {
       
    return (
      <View style={styles.container}>
        <Header />
        <Textfield updateValue={this.updateValue} addText={this.addText} />
        <FlatList
          data={this.state.todos}
          renderItem={({ item }) => (
            <View>
              {console.log(item)}
              <Item item={item} updateTodo={this.updateTodo} />
            </View>
          )}
        />

<ScrollView style={styles.content}>
      <View style={styles.content}>

        <Text >
          Create Account
        </Text>

        <Text >
          Name
        </Text>

        <TextInput
          
          placeholder="Enter Name"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({username:text})}
        />

        <Text >
          Name
        </Text>

        <TextInput          
          placeholder="Enter Name"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({password:text})}
        />

        <Button 
          onPress={() => this._handlePress()}
          title="Submit"
          >
           
        </Button>

        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
});  
