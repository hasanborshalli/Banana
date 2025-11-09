import React from 'react';
export function BananaTypes() {
  const types = [{
    name: 'Cavendish',
    description: 'The most common banana worldwide. Sweet, soft, and what you probably had for breakfast.',
    image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e'
  }, {
    name: 'Red Banana',
    description: 'Sweeter than yellow bananas with a hint of raspberry flavor. Also looks cooler at parties.',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224'
  }, {
    name: 'Plantain',
    description: 'The responsible adult of the banana world. Less sweet, more starchy, and usually cooked before eating.',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224'
  }];
  return <div className="w-full py-16 px-4 md:px-8 bg-yellow-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-12 text-center">
          Not All Bananas Are Created Equal
        </h2>
        {types.map((type, index) => <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-12`}>
            <div className="md:w-1/3">
              <img src={type.image} alt={type.name} className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
                {type.name}
              </h3>
              <p className="text-gray-700">{type.description}</p>
            </div>
          </div>)}
        <div className="bg-yellow-200 p-6 rounded-lg text-center">
          <p className="text-lg font-medium text-yellow-800">
            Did you know? There are over 1,000 varieties of bananas grown in
            more than 150 countries!
          </p>
        </div>
      </div>
    </div>;
}