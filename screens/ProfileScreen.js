import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class ProfileScreen extends Component{
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.form}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                    <View style={styles.avatar} >
                      <Text style={{fontSize: 30, fontWeight: "bold", color: "rgba(249,127,81,1)", }}>S</Text>
                    </View>

                    <View>
                        <Text style={styles.username}>Sunn413</Text>
                        <Text style={styles.email}>yeomingsern@gmail.com</Text>
                    </View>
                    </View>

                    <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => {}}>
                        <View style={styles.logoutButton}>
                        <Text style={styles.logoutText}>Log Out</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}}>
                        <View style={styles.deleteButton}>
                        <Text style={styles.deleteText}>Delete Account</Text>
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
    backgroundColor: "rgba(19,15,64,1)"
  },
  form: {
    margin: 20,
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-evenly"
  },
  username: {
    fontSize: 30,
    color: "white",
    
  },
  email: {
    color: "grey",
  },
  buttons: {
    flexDirection: "column",
    alignItems: "center",
  },
  logoutButton: {
    margin: 10,
  },
  logoutText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  deleteButton: {
    margin: 10,
  },
  deleteText: {
    fontSize: 20,
    color: "rgba(249,127,81,1)",
    fontWeight: "bold",
  },
  avatar: {
    width: 80, 
    height: 80,
    borderWidth: 3, 
    borderRadius: 200, 
    borderColor: "rgba(249,127,81,1)", 
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;