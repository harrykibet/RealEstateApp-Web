export default function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="card-content">
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        <div className="price">{property.price}</div>
      </div>
    </article>
  )
}
