import React from 'react';
import backgroundImage from './images/logo.png'; // Your image path

const About = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'blur(25px)',
          zIndex: -1, // Ensures the background stays behind the content
        }}
      ></div>

      {/* Content Layer */}
      <div className="about-container relative py-16 px-6 custom:px-16">
        <div className="overlay bg-black bg-opacity-40 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            À propos de SARL CFI
          </h1>
          <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-xl">
            <p className="text-lg bg-white p-10 text-gray-700 leading-relaxed mb-6">
              SARL CFI est un acteur reconnu dans le domaine de la fabrication de carrosseries industrielles,
              distingué par son expertise et son engagement envers la qualité. Nous proposons des solutions
              sur mesure, adaptées aux besoins spécifiques de nos clients, grâce à une équipe qualifiée et
              des produits exclusifs.
            </p>
            <p className="text-lg bg-white p-10 text-gray-700 leading-relaxed mb-6">
              Notre bureau d'études, dédié et compétent, collabore étroitement avec chaque client pour
              concevoir des projets personnalisés et élaborer des plans détaillés pour toutes les gammes
              de fabrication et d’aménagements, assurant ainsi des résultats fiables et performants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
