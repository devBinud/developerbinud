import React from 'react';
import { CheckCircle, Phone, ExternalLink, Target, ShoppingCart, Headphones } from 'lucide-react';
import productImage1 from "../../../src/assets/images/zapx.png";
import productImage2 from "../../../src/assets/images/quickchat.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'ZapX ERP for Mobile Stores',
      description: 'Simplify mobile store operations with quick sales, CRM, and daily analytics.',
      image: productImage1,
      features: [
        'Quick Sale Mode',
        'Product Sharing via WhatsApp',
        'Daily Sales Dashboard',
        'Product Management System',
        'Instant Stock Lookup',
      ],
    },
    {
      id: 2,
      name: 'Quickchat - Quick Messaging App',
      description: 'Experience fast and secure messaging with PWA support and audio messaging.',
      image: productImage2,
      features: [
        'Responsive Layout',
        'PWA Support',
        'Realtime Messaging',
        'Audio implementation',
        'Desktop Friendly',
      ],
    },
  ];

  return (
    <section className="bg-gray-950 text-white pb-24 pt-30 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col items-center text-center"
          >
            {/* Product Image */}
            <div className="bg-white w-full flex justify-center py-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-[320px] h-[520px] object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="px-6 py-8 space-y-4 w-full">
              <h2 className="text-2xl font-bold text-orange-300">{product.name}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="space-y-3 pt-4 text-left">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                {/* View Product Button */}
                <a 
                  href={product.id === 1 ? "https://zapx-og.vercel.app/" : "https://quickchat-db.vercel.app/"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-6 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Product
                </a>

                {/* Get Free Demo Button */}
                <a 
                  href="tel:+919706393924" 
                  className="flex items-center justify-center gap-2 px-6 py-2 border border-green-500 text-green-400 font-semibold rounded-md hover:bg-green-600 hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Get Free Demo
                </a>
              </div>
            </div>

            {/* Business Value Section */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-xl px-6 py-6 text-left space-y-4">
              <h3 className="text-lg font-semibold text-orange-200">Why This Product is Great for Your Business</h3>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
                {product.id === 1 ? (
                  // ZapX Business Value
                  <>
                    <li className="flex items-start gap-2">
                      <Target className="text-orange-400 w-5 h-5 mt-1" />
                      Automates daily retail tasks, saving time and reducing errors.
                    </li>
                    <li className="flex items-start gap-2">
                      <ShoppingCart className="text-orange-400 w-5 h-5 mt-1" />
                      Boosts customer engagement with WhatsApp-based invoicing and updates.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-orange-400 w-5 h-5 mt-1" />
                      Real-time stock tracking improves customer service.
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="text-orange-400 w-5 h-5 mt-1" />
                      Ideal for small to medium-sized mobile stores looking to digitize operations.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-orange-400 w-5 h-5 mt-1" />
                      Easy to use — no technical background required for store staff.
                    </li>
                  </>
                ) : (
                  // Quickchat Business Value
                  <>
                    <li className="flex items-start gap-2">
                      <Headphones className="text-orange-400 w-5 h-5 mt-1" />
                      Perfect for businesses to provide real-time customer support via chat.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-orange-400 w-5 h-5 mt-1" />
                      Auto-reply and pre-written text features improve response speed.
                    </li>
                    <li className="flex items-start gap-2">
                      <ExternalLink className="text-orange-400 w-5 h-5 mt-1" />
                      Can be integrated into e-commerce or CRM platforms as a live chat tool.
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="text-orange-400 w-5 h-5 mt-1" />
                      Progressive Web App (PWA) ready — accessible on desktop and mobile alike.
                    </li>
                    <li className="flex items-start gap-2">
                      <Headphones className="text-orange-400 w-5 h-5 mt-1" />
                      Audio message support helps teams communicate effectively and quickly.
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
