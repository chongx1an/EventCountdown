
import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';


class RegisterScreen extends Component{
    render(){
        return (
            <View style={styles.root}>
            <View style={styles.form}>
                <Text style={styles.text}>Register{"\n"}an Account</Text>

                <View style={styles.inputs}>
                <View style={styles.textInput}>
                    <View style={{width: 40, height: 40, backgroundColor: 'grey'}} />

                    <TextInput
                    label='Username'
                    placeholder="Username"
                    placeholderTextColor="grey" 
                    style={styles.inputStyle}
                    />
                </View>
                
                <View style={styles.textInput}>
                    <View style={{width: 40, height: 40, backgroundColor: 'grey'}} />

                    <TextInput
                    label='Email'
                    placeholder="Email"
                    placeholderTextColor="grey" 
                    style={styles.inputStyle}
                    />
                </View>

                <View style={styles.textInput}>
                    <View style={{width: 40, height: 40, backgroundColor: 'grey'}} />

                    <TextInput
                    label='Password'
                    placeholder="Password"
                    placeholderTextColor="grey" 
                    secureTextEntry={true}
                    style={styles.inputStyle}
                    />
                </View>
                </View>

                <View style={styles.buttons}>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.loginButton}>
                    <Text style={styles.loginText}>R E G I S T E R</Text>
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
    justifyContent: "space-evenly",
    margin: 30,
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  },
  loginButton: {
    borderWidth: 3,
    borderRadius: 100,
    borderColor: "rgba(249,127,81,1)",
  },
  loginText: {
    paddingHorizontal: 30,
    paddingVertical: 10, 
    color: "rgba(249,127,81,1)",
    fontWeight: "bold",
    fontSize: 14,
  },
  registerText: {
    color: "grey",
    fontSize: 14,
  },
  buttons: {
    height: 100,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    justifyContent: "space-between",
  },
  textInput: {
    flexDirection: "row",
    marginVertical: 5,
  },
  inputStyle: {
    color: "grey",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: "grey",
    borderBottomWidth: 1,
    flex: 1
  }
});

export default RegisterScreen;
