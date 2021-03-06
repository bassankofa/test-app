import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { render } from "react-dom";

class MyComponentHoc extends React.Component {}
class MyComponentClass extends React.Component {
  constructor(props) {
    super(props);

    //this.onPress=this.onPress.bind(this);

    /* this.state = {
      count:this.props.count ,
      string: "toto",
    };*/
  }

  render() {
    return <Text style={styles.mySuperText}>{this.props.count}</Text>;
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      string: "toto",
    };
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column",
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 - 2,
              count3: this.state.count3 - 2,
              count4: this.state.count4 - 2,

              /*  theme1: this.state.count1 + 1,
              theme2: 2 - this.state.count2,
              theme3: 2 - this.state.count3,
              theme4: 2 - this.state.count4,*/
            });
          }}
          style={this.theme(this.state.count1)}
        >
          <MyComponentClass count={this.state.count1} key={1} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.setState({
              count1: this.state.count1 - 2,
              count2: this.state.count2 + 1,
              count3: this.state.count3 - 2,
              count4: this.state.count4 - 2,

              /* theme1: 2 - this.state.count1,
              theme2: this.state.count2 + 1,
              theme3: 2 - this.state.count3,
              theme4: 2 - this.state.count4,*/
            });
          }}
          style={this.theme(this.state.count2)}
          key={2}
        >
          <MyComponentClass count={this.state.count2} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              count1: this.state.count1 - 2,
              count2: this.state.count2 - 2,
              count3: this.state.count3 + 1,
              count4: this.state.count4 - 2,

              /*theme1: this.state.count1 - 2,
              theme2: this.state.count2 - 2,
              theme3: this.state.count3 + 1,
              theme4: this.state.count4 - 2,*/
            });
          }}
          style={this.theme(this.state.count3)}
          key={3}
        >
          <MyComponentClass count={this.state.count3} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              count1: this.state.count1 - 2,
              count2: this.state.count2 - 2,
              count3: this.state.count3 - 2,
              count4: this.state.count4 + 1,

              /*  theme1: this.state.count1 - 2,
              theme2: this.state.count2 - 2,
              theme3: this.state.count3 - 2,
              theme4: this.state.count4 + 1,*/
            });
          }}
          style={this.theme(this.state.count4)}
        >
          <MyComponentClass count={this.state.count4} key={4} />
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }
  theme(count) {
    console.log(count);
    console.log(count % 2);
    console.log(count % 2 === 0);
    return [
      count % 2 === 0 ? styles.mySuperTouchePair : styles.mySuperToucheImpair,
    ];
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexWrap: "wrap",
  },
  mySuperTouchePair: {
    backgroundColor: "red",
    fontSize: 30,
    width: "50%",
    height: "50%",
    alignContent: "center",
    justifyContent: "center",
  },
  mySuperToucheImpair: {
    backgroundColor: "blue",
    fontSize: 30,
    width: "50%",
    height: "50%",
    alignContent: "center",
    justifyContent: "center",
  },
  mySuperText: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
  },
  imageBack: {
    flex: 1,
    justifyContent: "center",
  },
});
