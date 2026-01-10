// src/components/organisms/VisualGallery.js
import Image from 'next/image';

// Lista de las nuevas imágenes (Ajusta los nombres según cómo los renombraste)
const galleryImages = [
  { src: '/hotdog.png', alt: 'Hot Dog Antojo' },
  { src: '/hamburguesaAntojo.png', alt: 'Hamburguesa Antojo' },
  { src: '/clasicaburger.png', alt: 'Burger Clasica' },
  { src: '/churros.png', alt: 'Fresas con crema deluxe' },
  { src: '/malteada.png', alt: 'Snack especial' },
  { src: '/waffles.png', alt: 'Postre de chocolate' },
];

const VisualGallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Favoritos</h2>
          <p className="text-gray-600 text-lg">Una mirada a lo que te espera</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg h-80 w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay al pasar el mouse */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualGallery;