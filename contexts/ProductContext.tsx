import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const productsKey = 'products'

export interface Product {
    id: number
    name: string
    price: number
}

interface IProductsContext {
    products: Product[]
    isLoadingProducts: boolean
    addProduct: (product: Product) => void
    updateProduct: (product: Product) => void
    deleteProduct: (id: number) => void
}

export const ProductsContext = createContext<IProductsContext>({} as IProductsContext)

interface ProductsProviderProps {
    children: React.ReactNode
}

const storeData = async (products: Product[]) => {
    try {
        const jsonValue = JSON.stringify(products)
        await AsyncStorage.setItem(productsKey, jsonValue)
    } catch (e) {
        // saving error
        console.error('error storing data', e)
    }
}

const retrieveData = async (): Promise<Product[]> => {
    try {
        const products = await AsyncStorage.getItem(productsKey)
        return products !== null ? JSON.parse(products) : []
    } catch (e) {
        // error reading value
        console.error('error retrieving data', e)
        return []
    }
}

export const ProductsContextProvider = ({ children }: ProductsProviderProps) => {
    const [isLoadingProducts, setIsLoadingProducts] = useState(true)
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        retrieveData().then(products => {
            setProducts(products)
            setIsLoadingProducts(false)
            console.log('on-mount products', products)
        })
    }, [])

    const addProduct = (product: Product) => {
        const id = Date.now()
        const updatedPoducts = [...products, { ...product, id }]
        setProducts(updatedPoducts)
        storeData(updatedPoducts)
    }

    const updateProduct = (updatedProduct: Product) => {
        console.log('updatedProduct', updatedProduct)
        const updatedPoducts = products.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
        console.log('updatedPoducts', updatedPoducts)
        setProducts(updatedPoducts)
        storeData(updatedPoducts)
    }

    const deleteProduct = (id: number) => {
        const updatedPoducts = products.filter(p => p.id !== id)
        setProducts(updatedPoducts)
        storeData(updatedPoducts)
    }

    return (
        <ProductsContext.Provider
            value={{ products, isLoadingProducts, addProduct, updateProduct, deleteProduct }}
        >
            {children}
        </ProductsContext.Provider>
    )
}
