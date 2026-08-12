const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Amazing products and a very smooth shopping experience. I will definitely order again!',
  },
  {
    id: 2,
    name: 'Michael Smith',
    rating: 5,
    text: 'Great quality and fast delivery. The whole experience was excellent.',
  },
  {
    id: 3,
    name: 'Emily Brown',
    rating: 4,
    text: 'Really happy with my purchase. The product was exactly as described.',
  },
];

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>What Our Customers Say</h2>

        <p className="testimonials-subtitle">
          See what our customers think about their shopping experience.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                {'★'.repeat(testimonial.rating)}
              </div>

              <p className="testimonial-text">
                "{testimonial.text}"
              </p>

              <h3>{testimonial.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}