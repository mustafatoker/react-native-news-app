import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Activity</Text>
            </View>
        );
    }
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});