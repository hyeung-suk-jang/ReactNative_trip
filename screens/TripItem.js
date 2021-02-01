import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const TripItem = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.title}>홍천</Text>
                <Text style={styles.period}> 7/9 - AM : 10:00</Text>
            </View>
            <View
                style={{width: 400, height: 120,}}>
                <Image
                    source={require('../assets/image/image1.png')}
                    style={{width: 400, height: 120, resizeMode:'stretch'}}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10
    },
    title : {
        fontSize: 25,
        marginLeft: 10,
    },
    period : {
        marginTop: 10,
        marginLeft: 20,
    }
})

export default TripItem;