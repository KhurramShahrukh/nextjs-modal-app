import Link from 'next/link'
import ProductCard from '../components/ProductCard'

// Mock data
const products = [
    {
        id: '1',
        name: 'Premium Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 299.99,
        image: '🎧'
    },
    {
        id: '2',
        name: 'Smartphone Pro',
        description: 'Latest flagship smartphone with advanced camera system',
        price: 899.99,
        image: '📱'
    },
    {
        id: '3',
        name: 'Laptop Ultra',
        description: 'Lightweight laptop perfect for professionals and creators',
        price: 1299.99,
        image: '💻'
    },
    {
        id: '4',
        name: 'Smart Watch',
        description: 'Feature-rich smartwatch with health monitoring',
        price: 399.99,
        image: '⌚'
    },
    {
        id: '5',
        name: 'Wireless Speaker',
        description: 'Portable Bluetooth speaker with premium sound quality',
        price: 149.99,
        image: '🔊'
    },
    {
        id: '6',
        name: 'Gaming Mouse',
        description: 'High-precision gaming mouse with customizable buttons',
        price: 79.99,
        image: '🖱️'
    }
]

export default function ProductsPage() {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <Link href="/" className="btn btn-secondary">
                    ← Back Home
                </Link>
                <h1>Products</h1>
            </div>

            <div className="grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}