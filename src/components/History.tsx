import React from 'react';
export function History() {
  return <div id="history" className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-8 text-center">
          The Slippery History of Bananas
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e" alt="Ancient banana cultivation" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-yellow-700 mb-3">
              Ancient Origins
            </h3>
            <p className="text-gray-700 mb-4">
              Bananas have been around for thousands of years! The earliest
              evidence of banana cultivation dates back to 8000 BCE in Papua New
              Guinea. That's right - our yellow friends are prehistoric!
            </p>
            <p className="text-gray-700">
              The word "banana" is thought to come from the Arabic word "banan,"
              which means "finger" - a pretty accurate description if you ask
              us!
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-yellow-700 mb-3">
              Going Global
            </h3>
            <p className="text-gray-700 mb-4">
              Bananas didn't make their way to the Americas until the 1500s,
              when Portuguese sailors brought them over. Talk about being
              fashionably late to the party!
            </p>
            <p className="text-gray-700">
              By the late 1800s, bananas became a popular treat in the United
              States, leading to the formation of the United Fruit Company,
              which would later become the infamous Chiquita Brands
              International. Yes, bananas have corporate drama too!
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1603833665858-e61d17a86224" alt="Banana plantation" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </div>;
}