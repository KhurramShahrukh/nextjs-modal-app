interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    features?: string[]
}

interface ProductDetailProps {
    product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>
                    {product.image}
                </div>
                <h1 style={{ marginBottom: '0.5rem' }}>{product.name}</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>
                    {product.description}
                </p>
                <div className="price" style={{ fontSize: '2rem' }}>
                    ${product.price}
                </div>
            </div>

            {product.features && (
                <div style={{ marginBottom: '2rem' }}>
                    <h2>Features:</h2>
                    <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    Add to Cart
                </button>
                <button className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    Add to Wishlist
                </button>
            </div>
        </div>
    )
}