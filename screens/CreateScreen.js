import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default class CreateScreen extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Text> Create Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "rgba(19,15,64,1)",
        justifyContent: "center",
        alignItems: "center",
    },
});