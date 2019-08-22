import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
} from 'react-native'

export class EventCard extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.header}>{this.props.activity}</Text>

                <Text style={styles.footer}> In {this.props.days} days </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        justifyContent: "space-between",
        marginHorizontal: 10,
        padding: 20,
        height: 120,
        width: 200,
        borderRadius: 25,
        backgroundColor: "grey",
    },
    header:{
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    footer:{
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
    },
});
export default EventCard
