import { Product } from '@/contexts/ProductContext'
import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

interface ProductFormProps {
    product?: Product
    onSubmit: (product: Product) => void
    onCancel: () => void
}

const newProduct = (): Product => ({ id: 0, name: '', price: 0 })

export default function ProductForm({
    product = newProduct(),
    onSubmit,
    onCancel,
}: ProductFormProps) {
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Product Name'
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder='Price'
                value={price?.toString() || '0'}
                onChangeText={price => setPrice(price ? parseFloat(price) : 0)}
                keyboardType='numeric'
            />

            <View style={styles.actions}>
                <Button title='Cancel' onPress={onCancel} color={'grey'} />
                <Button title='Save' onPress={() => onSubmit({ ...product, name, price })} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        marginTop: 10,
    },
})
