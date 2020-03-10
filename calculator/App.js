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


  render(){

    let operators = ['%', 'X', '-', '+', '='];
    let ops =[];

    for(let i=0; i<5; i++){
      ops.push(<TouchableOpacity>
        <Text style={styles.opbtn}>{operators[i]}</Text>
              </TouchableOpacity>)
    }
    console.log('ops', ops);
    return(
      <View style={styles.container}>
        <View style={styles.result}><Text>result</Text></View>
        <View style={styles.calculation}><Text>calcuation</Text></View>
        <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.numberrow}>
          <TouchableOpacity>
          <Text style={styles.btn}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.btn}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.btn}>9</Text>
          </TouchableOpacity>           
            
          </View>
          <View style={styles.numberrow}>
          <TouchableOpacity>
          <Text style={styles.btn}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.btn}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.btn}>6</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.numberrow}>
          <TouchableOpacity>
          <Text style={styles.btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.btn}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.btn}>3</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.numberrow}>           
          <TouchableOpacity>
          <Text style={styles.btn}></Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.btn}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.btn}>.</Text>
          </TouchableOpacity>
            
          </View>

        </View>
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
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 40,
    fontWeight: '400',
      }
});

// export default App;
