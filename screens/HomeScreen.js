import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList
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

  render(){
    return (
        <View style={styles.root}>
          <Text style={styles.text}>Hello,{"\n"}Sunn413</Text>
    
          <View>
            <Text style={styles.smallerText}>You will have...</Text>
            
            <View style={{height: 120}}>
              <FlatList
                horizontal={true}
                data={this.state.events}
                renderItem={({item, index}) =>
                  <EventCard
                    activity={item.title}
                    days={this.timeDifference(new Date(item.date * 1000), new Date())}
                  />
                }
                keyExtractor={(item, index) => item.title}
              >
              </FlatList>
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

//add doc to firestore
// onPressAdd = () => {
//   this.ref.add({
//     title: this.state.title,
//     date: this.state.date,
//     participants: this.state.participants
//   }).then((data) => {
//     this.setState({
//       loading: true
//     });
//   }).catch((error) => {
//     this.setState({
//       loading: true
//     });
//   });
// }