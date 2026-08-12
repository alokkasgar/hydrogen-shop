import {useEffect, useState} from 'react';

const slides = [
  {
    id: 1,
    title: 'Discover Our Collection',
    description: 'Find products you will love.',
    image:
      'https://cdn.shopify.com/s/files/1/0360/9588/5356/files/john-caroro-Qohef9tIkSc-unsplash.png?v=1613727018',
    buttonText: 'Shop Now',
    buttonLink: '/collections',
  },
  {
    id: 2,
    title: 'New Arrivals',
    description: 'Explore our latest products.',
    image:
      'https://cdn.shopify.com/s/files/1/0360/9588/5356/files/f9986580488823.5ce2f48bcc369.png?v=1613722219',
    buttonText: 'View Products',
    buttonLink: '/collections',
  },
  {
    id: 3,
    title: 'Shop With Confidence',
    description: 'Quality products, simple checkout.',
    image:
      'https://cdn.shopify.com/s/files/1/0360/9588/5356/files/photo-1445205170230-053b83016050.avif?v=1786514594',
    buttonText: 'Start Shopping',
    buttonLink: '/collections',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="hero-slider">
      <div
        className="hero-slide"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>

            <a href={slide.buttonLink} className="hero-button">
              {slide.buttonText}
            </a>
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={index === currentSlide ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}