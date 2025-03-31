
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample gallery data - in a real application, this would come from a database
  const galleryImages = [
    { id: 1, src: '/placeholder.svg', alt: 'Classroom session', category: 'classroom' },
    { id: 2, src: '/placeholder.svg', alt: 'Science lab experiment', category: 'lab' },
    { id: 3, src: '/placeholder.svg', alt: 'Students in library', category: 'library' },
    { id: 4, src: '/placeholder.svg', alt: 'Award ceremony', category: 'events' },
    { id: 5, src: '/placeholder.svg', alt: 'Group study session', category: 'classroom' },
    { id: 6, src: '/placeholder.svg', alt: 'Computer lab', category: 'lab' },
    { id: 7, src: '/placeholder.svg', alt: 'Annual day celebration', category: 'events' },
    { id: 8, src: '/placeholder.svg', alt: 'Teacher explaining concept', category: 'classroom' },
    { id: 9, src: '/placeholder.svg', alt: 'Science exhibition', category: 'events' },
    { id: 10, src: '/placeholder.svg', alt: 'Students with faculty', category: 'classroom' },
    { id: 11, src: '/placeholder.svg', alt: 'Guest lecture', category: 'events' },
    { id: 12, src: '/placeholder.svg', alt: 'Exam preparation', category: 'classroom' },
  ];

  const openImageModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-academy-blue text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a visual journey through the life at Masters Academy - from classrooms to events and everything in between.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => openImageModal(image.src)}
              >
                <div className="relative h-full">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4 text-center">
                    <p>{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <div className="relative">
            <button 
              onClick={closeImageModal}
              className="absolute top-2 right-2 bg-black/70 text-white p-2 rounded-full"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6 text-academy-blue">Visit Us to Experience Masters Academy</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Pictures tell a story, but experiencing our vibrant learning environment firsthand is even better.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-academy-blue text-white font-bold py-3 px-8 rounded-md hover:bg-academy-light-blue transition-colors"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
