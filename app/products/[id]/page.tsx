import Link from 'next/link'
import ProductDetail from '../../components/ProductDetail'

const products = [
    {
        id: '1',
        name: 'Premium Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 299.99,
        image: '🎧',
        features: ['Active Noise Cancellation', '30-hour battery life', 'Premium materials', 'Wireless charging case']
    },
    {
        id: '2',
        name: 'Smartphone Pro',
        description: 'Latest flagship smartphone with advanced camera system',
        price: 899.99,
        image: '📱',
        features: ['108MP camera', '5G connectivity', '120Hz display', 'All-day battery']
    },
    {
        id: '3',
        name: 'Laptop Ultra',
        description: 'Lightweight laptop perfect for professionals and creators',
        price: 1299.99,
        image: '💻',
        features: ['16GB RAM', '512GB SSD', '14-hour battery', 'Retina display']
    },
    {
        id: '4',
        name: 'Smart Watch',
        description: 'Feature-rich smartwatch with health monitoring',
        price: 399.99,
        image: '⌚',
        features: ['Heart rate monitoring', 'GPS tracking', 'Water resistant', '7-day battery']
    },
    {
        id: '5',
        name: 'Wireless Speaker',
        description: 'Portable Bluetooth speaker with premium sound quality',
        price: 149.99,
        image: '🔊',
        features: ['360° sound', '12-hour battery', 'Water resistant', 'Voice assistant']
    },
    {
        id: '6',
        name: 'Gaming Mouse',
        description: 'High-precision gaming mouse with customizable buttons',
        price: 79.99,
        image: '🖱️',
        features: ['16000 DPI sensor', 'RGB lighting', '8 programmable buttons', 'Ergonomic design']
    }
]

export default function ProductPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const product = products.find(p => p.id === id)

    if (!product) {
        return (
            <div className="container" style={{ padding: '2rem 1rem' }}>
                <h1>Product not found</h1>
                <Link href="/products" className="btn">
                    Back to Products
                </Link>
            </div>
        )
    }

    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <Link href="/products" className="btn btn-secondary">
                    ← Back to Products
                </Link>
            </div>

            <ProductDetail product={product} />
        </div>
    )
}