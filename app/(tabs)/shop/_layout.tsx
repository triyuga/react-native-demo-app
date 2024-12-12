import { ProductsContextProvider } from '@/contexts/ProductContext'
import { Stack } from 'expo-router'

interface ShopLayoutProps {
    children: React.ReactNode
}

export default function ShopLayout({ children }: ShopLayoutProps) {
    return (
        <ProductsContextProvider>
            <Stack key='ShopLayout'>
                <Stack.Screen
                    name='index'
                    options={{
                        title: 'Shop',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='products/index'
                    options={{
                        headerTitle: 'Products',
                    }}
                />
                <Stack.Screen
                    name='products/add'
                    options={{
                        headerTitle: 'Add Product',
                    }}
                />
                <Stack.Screen
                    name='products/[id]/edit'
                    options={{
                        headerTitle: 'Edit Product',
                    }}
                />
            </Stack>
        </ProductsContextProvider>
    )
}
