import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Event from './UI/Event';

class EventListScreen extends Component{
  render() {
    return (
        <View style={styles.root}>
            <View style={styles.form}>
            <Text style={styles.text}>List{"\n"}of Events</Text>

            <View style={{height: 300}}>
                <ScrollView>
                <Event activity="Hang Out" date="25 July 2019" days="3"/>
                <Event activity="Hang Out" date="25 July 2019" days="3"/>
                <Event activity="Hang Out" date="25 July 2019" days="3"/>
                <Event activity="Hang Out" date="25 July 2019" days="3"/>
                <Event activity="Hang Out" date="25 July 2019" days="3"/>
                <Event activity="Hang Out" date="25 July 2019" days="3"/>
                <Event activity="Hang Out" date="25 July 2019" days="3"/>
                <Event activity="Hang Out" date="25 July 2019" days="3"/>
                </ScrollView>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => {}}>
                <View style={styles.createButton}>
                    <Text style={styles.createText}>C R E A T E</Text>
                </View>
                </TouchableOpacity>
            </View>

            </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(19,15,64,1)",
  },
  form: {
    justifyContent: "space-between",
    margin: 30,
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  },
  buttons: {
    flexDirection: "column",
    alignItems: "center",
  },
  createButton: {
    borderWidth: 3,
    borderRadius: 100,
    borderColor: "rgba(249,127,81,1)",
  },
  createText: {
    paddingHorizontal: 30,
    paddingVertical: 10, 
    color: "rgba(249,127,81,1)",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default EventListScreen;

