import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Event from './UI/Event';
import firebase from 'react-native-firebase';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class EventListScreen extends Component{

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

      const eventsData = [];
      
      querySnapshot.forEach((doc) => {
        eventsData.push({
          title: doc.data().title,
          date: doc.data().date,
          participants: doc.data().participants
        });
      });

      this.setState({
        events: eventsData.sort((a, b) => {
          return (a.date > b.date);
        }),
        loading: false
      })
    });
  }

  timeDifference(date1, date2) {
      var difference = date1.getTime() - date2.getTime();

      var daysDifference = Math.floor(difference/1000/60/60/24);
      difference -= daysDifference*1000*60*60*24

      var hoursDifference = Math.floor(difference/1000/60/60);
      difference -= hoursDifference*1000*60*60

      var minutesDifference = Math.floor(difference/1000/60);
      difference -= minutesDifference*1000*60

      var secondsDifference = Math.floor(difference/1000);

    //return 'difference = ' + daysDifference + ' day/s ' + hoursDifference + ' hour/s ' + minutesDifference + ' minute/s ' + secondsDifference + ' second/s ';
    return daysDifference; 
  }

  toDate(timestamp) {
    var toDate = new Date(timestamp * 1000);
    var date = toDate.getDate();
    var month = toDate.getMonth() + 1;
    var year = toDate.getFullYear();

    return date + ' ' + months[month] + ' ' + year;
  }

  render() {
    return (
        <View style={styles.root}>
            <View style={styles.form}>
            <Text style={styles.text}>List{"\n"}of Events</Text>

            <View style={{height: 300}}>
              <FlatList
                data={this.state.events}
                renderItem={({item, index}) =>
                  <Event activity={item.title}
                  date={this.toDate(item.date)}
                  days={this.timeDifference(new Date(item.date * 1000), new Date())}/>
                }
                keyExtractor={(item, index) => item.title}
              >
              </FlatList>
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

