import React, { useContext } from 'react'
import { View, FlatList, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { ProductsContext } from '@/contexts/ProductContext'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { IconSymbol } from '@/components/ui/IconSymbol'

export default function ShopScreen() {
    const { products, deleteProduct } = useContext(ProductsContext)
    const router = useRouter()

    // return (
    //     <FlatList
    //         data={products}
    //         keyExtractor={item => item.id.toString()}
    //         renderItem={({ item }) => (
    //             <View style={styles.product}>
    //                 <Text>{item.name}</Text>
    //                 <Text>{item.price}</Text>
    //                 <View style={styles.actions}>
    //                     <Button
    //                         title='Edit'
    //                         onPress={() => router.push(`/shop/products/${item.id}/edit`)}
    //                     />
    //                     <Button title='Delete' onPress={() => deleteProduct(item.id)} color='red' />
    //                 </View>
    //             </View>
    //         )}
    //         ListFooterComponent={() => (
    //             <Button title='Add Product' onPress={() => router.push('/shop/products/add')} />
    //         )}
    //     />
    // )

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<IconSymbol size={310} color='#808080' name='tag.fill' />}
        >
            <ThemedView>
                <ThemedText type='title'>Shop</ThemedText>
            </ThemedView>

            {/* Not using  <FlatList /> here to avoid iOS warning "(NOBRIDGE) ERROR VirtualizedLists should never be nested inside plain ScrollViews..."*/}
            {products.map(product => (
                <View style={styles.product} key={product.id}>
                    <Text>{product.name}</Text>
                    <Text>{product.price}</Text>
                    <View style={styles.actions}>
                        <Button
                            title='Edit'
                            onPress={() => router.push(`/shop/products/${product.id}/edit`)}
                        />
                        <Button
                            title='Delete'
                            onPress={() => deleteProduct(product.id)}
                            color='red'
                        />
                    </View>
                </View>
            ))}
            <Button title='Add Product' onPress={() => router.push('/shop/products/add')} />
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    product: {
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        marginTop: 10,
    },
})
