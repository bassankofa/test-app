import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

const MyComponentFunction = ({ counters, index, onUpdate }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onUpdate) {
          onUpdate(counters.map((counter, indexBis) =>
            index === indexBis ? counter + 1 : counter - 2
          ));
        }
      }}
      style={[
        styles.counterContainer,
        { backgroundColor: (counters.length > index && counters[index] % 2 === 0) ? 'blue' : 'red' }
      ]}
    >
      <Text style={styles.counterText}>
        { counters.length > index ? counters[index] : 'undefined' }
      </Text>
    </TouchableOpacity>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [0, 0, 0, 0]
    };
  }

  render() {
    return (
      <View style={[styles.container, { flexDirection: "column" }]}>
        <StatusBar style="auto" />

        { this.state.counters.map((counter, index) => (
          <MyComponentFunction
            key={index}
            onUpdate={(counters) => this.setState({ counters })}
            counters={this.state.counters}
            index={index}
          />
        )) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
  },
  counterContainer: {
    width: '50%',
    height: '50%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterText: {
    fontSize: 30,
    color: "#fff",
  },
});
