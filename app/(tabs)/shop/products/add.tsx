import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { Product, ProductsContext } from '@/contexts/ProductContext'
import ProductForm from '@/components/ProductForm'

export default function AddProductScreen() {
    const { addProduct } = useContext(ProductsContext)
    const router = useRouter()

    const handleSubmit = (product: Product) => {
        addProduct(product)
        router.push('/shop')
    }

    const handleCancel = () => {
        router.push('/shop')
    }

    return (
        <View style={styles.container}>
            <ProductForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </View>
    )
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 } })
