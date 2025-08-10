


// components/home/Testimonials.js
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Button from '../ui/Button.js';

const testimonials = [
  {
    quote: "Cut my energy bill by 30% with these gadgets. Worth every penny!",
    author: "Sarah K.",
    location: "Portland, OR",
    rating: 5,
    purchase: "Solar Home Kit"
  },
  {
    quote: "These products are a game changer for sustainable living!",
    author: "John D.",
    location: "San Francisco, CA",
    rating: 4,
    purchase: "Eco Starter Pack"
  },
  {
    quote: "I love my new solar charger. It's so convenient!",
    author: "Emily R.",
    location: "Austin, TX",
    rating: 5,
    purchase: "Portable Solar Charger"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading mb-12 text-center">
          Loved By Eco-Conscious Customers
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <FaQuoteLeft className="text-teal-200 text-2xl mb-4" />
              <p className="text-lg mb-4">{testimonial.quote}</p>
              
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location} • {testimonial.purchase}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            text="Read 500+ Reviews" 
            href="/reviews" 
            color="teal" 
            outline
          />
        </div>
      </div>
    </section>
  );
}