import { ActivityIndicator, Button, SafeAreaView, StyleSheet, View, Text } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function ProductsScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={
                <IconSymbol size={310} color='#808080' name='tag.fill' style={styles.headerImage} />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>React Native Components</ThemedText>
            </ThemedView>

            <Link href='/safeAreaView'>SafeAreaView</Link>

            {/* ActivityIndicator */}
            <ThemedText type='subtitle'>ActivityIndicator</ThemedText>
            <ThemedText>Displays a circular loading indicator.</ThemedText>
            <SafeAreaProvider id='safeAreaProvider'>
                <SafeAreaView id='safeAreaView' style={styles.horizontalContainer}>
                    <ActivityIndicator />
                    <ActivityIndicator size='large' />
                    <ActivityIndicator size='small' color='#0000ff' />
                    <ActivityIndicator size='large' color='#00ff00' />
                </SafeAreaView>
            </SafeAreaProvider>

            <Button
                onPress={() => {}}
                title='Add Product'
                accessibilityLabel='Learn more about this purple button'
            />
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    json: {
        color: 'grey', // TODO theme it
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})
