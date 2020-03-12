/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      operand: '',
    }
  }

  buttonPressed(text){
    console.log('text', text);

    let value= this.state.operand + text;
    this.setState({
      operand: value,
    })
    console.log('texting', typeof this.state.operand);

  }

  operate(operation){
    switch(operation){
      case 'D':
        let text = this.state.operand.split('');
        text.pop();
        let value = text.join('');
        this.setState({
          operand: value,
        })

    }


  }

  render(){

    let num=[];
    let numbers=[[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']];

    for(let i=0; i<4; i++){
      let row=[];
      for(let j=0; j<3; j++){
        row.push(<TouchableOpacity onPress={()=>this.buttonPressed(numbers[i][j])}>
          <Text style={styles.btn}>{ numbers[i][j]}</Text>
          </TouchableOpacity>)

      }
    num.push(<View style={styles.numberrow}>{row}</View>);
    }

    console.log('num', num);

    let operators = ['D', '/', 'X', '-', '+'];
    let ops =[];

    for(let i=0; i<5; i++){
      ops.push(<TouchableOpacity onPress={()=>this.operate(operators[i])}>
        <Text style={styles.opbtn}>{operators[i]}</Text>
              </TouchableOpacity>)
    }
    console.log('ops', ops);
    return(
      <View style={styles.container}>
        <View style={styles.result}><Text style={styles.resultvalue}>{this.state.operand}</Text></View>
        <View style={styles.calculation}><Text>calcuation</Text></View>
        <View style={styles.buttons}>
        <View style={styles.numbers}>{num}</View>        
        <View style={styles.operations}>{ops}</View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: 'blue',
  },
  numberrow:{    
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },
  btn:{
    width: 20,
    height: 50,
    margin: 20,
    fontSize: 40,
    fontWeight: '400',
    color: "#000",
  },  
  result:{
    flex: 2,
    backgroundColor: 'red',    
  },
  resultvalue:{
    padding: 20,
    textAlign: 'right',
    fontSize: 40,
    fontWeight: '400',
    color: "#000",
  },
  calculation:{
    flex: 1,
    backgroundColor: 'green',
  },
  buttons:{
    flex: 7,
    flexDirection: 'row',
  },
  numbers:{
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations:{
    flex: 1,    
    backgroundColor: 'black',
    flexDirection: 'column',
    color: 'white',
  },
  opbtn:{
    color: 'white',
    width: 40,
    height: 50,
    marginTop: 20,
    marginLeft: 30,
    fontSize: 40,
    fontWeight: '400',
      }
});

// export default App;
