import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Product, ProductsContext } from '@/contexts/ProductContext'
import ProductForm from '@/components/ProductForm'
import { ThemedText } from '@/components/ThemedText'

export default function EditProductScreen() {
    const { products, isLoadingProducts, updateProduct } = useContext(ProductsContext)
    const router = useRouter()
    const { id } = useLocalSearchParams<{ id: string }>()

    useEffect(() => {
        if (!id) router.push('/shop')
    }, [id])

    const product = isLoadingProducts ? undefined : products.find(p => p.id === Number(id))

    console.log('product', product)

    const handleSubmit = (updatedProduct: Product) => {
        updateProduct(updatedProduct)
        router.push('/shop')
    }

    const handleCancel = () => {
        router.push('/shop')
    }

    return (
        <View style={styles.container}>
            {isLoadingProducts && (
                <View>
                    <ThemedText>Loading...</ThemedText>
                </View>
            )}
            {!isLoadingProducts && !product && (
                <View>
                    <ThemedText>Product not found</ThemedText>
                </View>
            )}
            {product && (
                <ProductForm product={product} onSubmit={handleSubmit} onCancel={handleCancel} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 } })
