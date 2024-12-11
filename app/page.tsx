import React from 'react';

const MaintenanceMode: React.FC = () => {
  return (
    <div style={{ backgroundImage: 'url(/maint.jpg)', backgroundSize: 'cover' }} className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg text-center border border-gray-200 bg-opacity-65">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Avrupa Göz Estetik
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Şu anda sitemizde bakım çalışmaları yapılıyor.
          <br />
          Yeni sitemizle mükemmel bir şekilde karşınızdayız.
          <br />
          <span className="font-semibold text-blue-500">Çok yakında!</span>
        </p>

      </div>
    </div>
  );
};

export default MaintenanceMode;
