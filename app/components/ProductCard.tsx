import Link from 'next/link'

interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
}

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="card">
            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>
                {product.image}
            </div>
            <h2>{product.name}</h2>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
                {product.description}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="price">${product.price}</span>
                <Link href={`/products/${product.id}`} className="btn">
                    View Details
                </Link>
            </div>
        </div>
    )
}