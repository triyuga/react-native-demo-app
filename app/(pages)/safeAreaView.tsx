import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

const SafeAreaExample = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <Text style={styles.text}>This is inside the SafeAreaView</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'lightblue', // Background color to make SafeAreaView visible
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightcoral', // Visible background color for inner content
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
})

export default SafeAreaExample
