import React from 'react';
import { FaBoxOpen, FaHandsHelping, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import heroImage from './images/logo.png'; 

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img src={heroImage} alt="Hero" className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-4">
          <h1 className="text-4xl custom:text-6xl font-bold tracking-wide text-center">Bienvenue à Notre Boutique</h1>
          <p className="text-lg custom:text-2xl text-center max-w-2xl">
            Découvrez les meilleurs produits et services, à portée de clic !
          </p>
          <NavLink
            to="/products"
            className="font-semibold shadow-lg px-6 py-3 bg-customColor3 text-customColor1 rounded-full hover:bg-customColor2 hover:text-customColor3 transition-colors duration-200"
          >
            Parcourir Nos Produits
          </NavLink>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 custom:px-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-customColor1 mb-8">Nos Services</h2>
        <div className="grid grid-cols-1 custom:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer">
            <FaBoxOpen className="text-customColor2 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-customColor1 mb-2">Produits de Qualité</h3>
            <p className="text-gray-600 text-center">
              Nous offrons une large gamme de produits de qualité supérieure, soigneusement sélectionnés pour répondre à vos besoins.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer">
            <FaHandsHelping className="text-customColor2 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-customColor1 mb-2">Assistance Clientèle</h3>
            <p className="text-gray-600 text-center">
              Notre équipe est disponible pour vous offrir une assistance de premier ordre à tout moment.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer">
            <FaUsers className="text-customColor2 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-customColor1 mb-2">Clients Satisfaits</h3>
            <p className="text-gray-600 text-center">
              Nous nous engageons à fournir un service exceptionnel à chaque client, avec un taux de satisfaction élevé.
            </p>
          </div>
        </div>
      </section>



      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-r from-customColor1 via-customColor1 to-customColor2 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à Explorer ?</h2>
        <p className="text-lg mb-8">
          Parcourez notre large gamme de produits et découvrez ce qui convient le mieux à vos besoins.
        </p>
        <NavLink
          to="/products"
          className="px-8 py-4 bg-white text-customColor1 rounded-full font-semibold shadow-lg hover:bg-customColor2 transition-colors hover:text-customColor3 duration-200"
        >
          Voir Tous Nos Produits
        </NavLink>
      </section>
    </div>
  );
}

export default Home;
