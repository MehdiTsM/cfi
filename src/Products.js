import React from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import p1i1 from './images/produit1/p1i1.jpg'; 
import p1i2 from './images/produit1/p1i2.jpg'; 
import p1i3 from './images/produit1/p1i3.jpg'; 
import p1i4 from './images/produit1/p1i4.jpg'; 
import p1i5 from './images/produit1/p1i5.jpg'; 
import p1i6 from './images/produit1/p1i6.jpg'; 
import p1i7 from './images/produit1/p1i7.jpg'; 
import p1i8 from './images/produit1/p1i8.jpg';

import p2i1 from './images/produit2/p2i1.jpg'; 
import p2i2 from './images/produit2/p2i2.jpg'; 
import p2i3 from './images/produit2/p2i3.jpg'; 
import p2i4 from './images/produit2/p2i4.jpg'; 

import p3i1 from './images/produit3/p3i1.jpg'; 
import p3i2 from './images/produit3/p3i2.jpg'; 
import p3i3 from './images/produit3/p3i3.jpg'; 

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Plateau bâché équipées de :",
      images: [
        p1i1,
        p1i2,
        p1i3,
        p1i4,
        p1i5,
        p1i6,
        p1i7,
        p1i8,
      ],
      details: [
        "Bâche en PVC 900G.",
        "Lattes en aluminium - bois.",
        "Une impression numérique UV constante.",
      ],
    },
    {
      id: 2,
      title: "Citerne a eau potable équipée de :",
      images: [
        p2i1,
        p2i2,
        p2i3,
        p2i4,
      ],
      details: [
        "Système d’arrosage solide (avant arrière)",
        "Des motos pompes puissantes. ",
        "Des par cycles présentables.",
      ],
    },
    {
      id: 3,
      title: "Conteneur en panneaux sandwich équipée de :",
      images: [
        p3i1,
        p3i2,
        p3i3,
      ],
      details: [
        "Des panneaux sandwich robustes.",
        "Des planchéies renforcées",
        "Un maximum de stockage gagné",
      ],
    },
  ];

  return (
    <div className="products-container py-16 px-6 custom:px-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-customColor1 mb-12">
        Nos Produits
      </h1>
      <div className="grid grid-cols-1 custom:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 bg-white shadow-lg rounded-lg flex flex-col transform transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            style={{ minHeight: '500px' }} 
          >
            <Carousel
              showThumbs={false}
              infiniteLoop
              showStatus={false}
              dynamicHeight={false}
              className="rounded-lg mb-4 carousel-custom"
            >
              {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={product.title}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
            <h3 className="text-2xl font-semibold text-customColor1 mb-2 flex-grow">
              {product.title}
            </h3>
            <ul className="text-gray-600 text-sm space-y-2 mb-4 list-disc pl-5">
              {product.details.map((detail, index) => (
                <li key={index} className="hover:text-customColor1">
                  {detail}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex justify-center">
              <NavLink
                to={`/products/${product.id}`}
                className="px-6 py-2 bg-customColor2 text-white rounded-full text-center font-medium shadow-lg hover:bg-customColor1 hover:text-white transition-colors duration-200"
              >
                Voir les Détails
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
