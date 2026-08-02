import { useEffect, useMemo, useState } from 'react'
import PropertyCard from '@/components/ui/PropertyCard'
import { fetchProperties } from '@/services/propertyService'

const fallbackProperties = [
  {
    id: 'grd-001',
    title: 'Modern urban apartment',
    description: 'A bright and spacious two-bedroom apartment in the city center.',
    price: '$2,400 / month',
    image: 'https://images.unsplash.com/photo-1560185127-6dcafdf6bf3c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eco-021',
    title: 'Eco-friendly family home',
    description: 'A quiet neighborhood home with garden access and large windows.',
    price: '$4,100 / month',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
  }
]

export default function Home() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    fetchProperties()
      .then((data) => {
        if (active && data?.length) {
          setProperties(data)
        }
      })
      .catch((fetchError) => {
        if (active) {
          setError('Unable to load property listings. Showing curated recommendations.')
          console.error(fetchError)
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [])

  const visibleProperties = useMemo(
    () => (properties.length > 0 ? properties : fallbackProperties),
    [properties]
  )

  return (
    <div className="app-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Real estate listings for fast-growing teams</p>
          <h1>Scalable property discovery for ambitious applications.</h1>
          <p className="page-copy">
            This structure keeps shared UI, page composition, business logic, and platform
            integrations separated so the codebase scales with new domains and features.
          </p>
        </div>
      </header>

      {loading && <p className="status-message">Loading latest listings…</p>}
      {error && <p className="status-message status-error">{error}</p>}

      <section className="listing-grid">
        {visibleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </div>
  )
}
