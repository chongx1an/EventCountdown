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
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <View style={{flexDirection: "column", flex: 1}}>
                        <Text style={styles.header}>{this.props.activity}</Text>
                        <Text style={styles.subheader}>at {this.props.date}</Text>
                    </View>

                    <Text style={styles.days}>{this.props.days} days</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    subheader: {
        fontSize: 14,
        fontWeight: "bold",
        color: "grey",
    },
    days: {
        fontSize: 20,
        fontWeight: "bold",
        color: "grey",
    },
});
export default EventCard
