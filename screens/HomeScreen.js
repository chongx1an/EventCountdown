import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import EventCard from './UI/EventCard';
import firebase from 'react-native-firebase';

class HomeScreen extends Component{
  constructor(props){
    super(props);

    this.state={
      events: [],
      loading: false,
    };

    this.ref = firebase.firestore().collection('events');
  }

  componentDidMount() {
    this.unsubsribe = this.ref.onSnapshot((querySnapshot) => {

      const events = [];
      
      querySnapshot.forEach((doc) => {
        events.push({
          title: doc.data().title,
          date: doc.data().date,
          participants: doc.data().participants
        });
      });

      this.setState({
        events: events,
        loading: false
      })
    });
  }

  render(){
    return (
        <View style={styles.root}>
          <Text style={styles.text}>Hello,{"\n"}Sunn413</Text>
    
          <View>
            <Text style={styles.smallerText}>You will have...</Text>
            
            <View style={{height: 120}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <EventCard activity="Hang Out" days="03"/>
                <EventCard activity="Kill People" days="05"/>
                <EventCard activity="Hang Out" days="03"/>
                <EventCard activity="Hang Out" days="03"/>
                <EventCard activity="Hang Out" days="03"/>
                <EventCard activity="Hang Out" days="03"/>
              </ScrollView>
            </View>
          </View>
    
          <View>
            <Text style={styles.smallerText}>With...</Text>
            
            <View style={{height: 80}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{width: 80, height: 80, backgroundColor: 'grey', borderRadius: 200, marginHorizontal: 10}} />
                <View style={{width: 80, height: 80, backgroundColor: 'grey', borderRadius: 200, marginHorizontal: 10}} />
                <View style={{width: 80, height: 80, backgroundColor: 'grey', borderRadius: 200, marginHorizontal: 10}} />
                <View style={{width: 80, height: 80, backgroundColor: 'grey', borderRadius: 200, marginHorizontal: 10}} />
              </ScrollView>
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
    justifyContent: "space-evenly",
  },
  text: {
    marginHorizontal: 30,
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  },
  smallerText: {
    marginHorizontal: 30,
    marginVertical: 20,
    color: "white",
    fontSize: 14,
    fontWeight: "bold"
  },
});

export default HomeScreen;