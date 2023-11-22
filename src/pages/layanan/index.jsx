import React, { useState } from 'react';
import LayananCard from '../../components/layananCard';
import layananData from '../../data/layananData';

const Layanan = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleServices, setVisibleServices] = useState(8);

  const handleCardClick = () => {
    setShowAll(!showAll);
    setVisibleServices(showAll ? 8 : layananData.length);
  };

  const showAllText = showAll ? 'Urung Layanan \u2190' : 'Layanan Lainnya \u2192';

  return (
    <div id='layanan' className=''>
      <div className="text-center mx-28 mb-20">
        <h1 className="text-4xl font-sans font-bold pt-10">Layanan Kami</h1>
        <p className="text-xl font-sans pt-5 px-32 text-gray-500">
          Klinik kami menawarkan beragam layanan, mulai dari perawatan umum seperti pembersihan, penambalan, dan pemeriksaan rutin hingga perawatan khusus.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-28 h-screen">
        {layananData.slice(0, visibleServices).map((layanan) => (
          <LayananCard
            key={layanan.id}
            url={layanan.url}
            title={layanan.title}
            description={layanan.description}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <div className="flex justify-end mt-10 pr-12 mb-20">
        <button className="text-gray-500" onClick={handleCardClick}>
          {showAllText}
        </button>
      </div>
    </div>
  );
};

export default Layanan;
