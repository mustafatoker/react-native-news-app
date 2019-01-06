import React from 'react';
import { Text, View } from 'react-native';

class Footer extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Footer!</Text>
            </View>
        );
    }
}

export default Footer