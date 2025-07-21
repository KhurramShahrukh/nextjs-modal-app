import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1>Modal Demo App</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        This app demonstrates Next.js 15 parallel and intercepting routes for modals.
        Click on any product to see it open in a modal that can be closed or navigated to directly.
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <Link href="/products" className="btn">
          Browse Products
        </Link>
      </div>

      <div style={{ background: '#f5f5f5', padding: '1.5rem', borderRadius: '8px' }}>
        <h2>How it works:</h2>
        <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
          <li><strong>Parallel Routes:</strong> The @modal folder creates a parallel route slot</li>
          <li><strong>Intercepting Routes:</strong> (.) prefix intercepts navigation to show modals</li>
          <li><strong>Fallback:</strong> Direct URL access shows full pages instead of modals</li>
          <li><strong>Navigation:</strong> Browser back/forward buttons work naturally</li>
        </ul>
      </div>
    </div>
  )
}