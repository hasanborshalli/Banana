export function Gallery() {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1528825871115-3581a5387919",
            caption: "The Classic Yellow",
        },
        {
            url: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
            caption: "Banana Bunch",
        },
        {
            url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24",
            caption: "Banana Art",
        },
        {
            url: "https://images.unsplash.com/photo-1566393028639-d108a42c46a7",
            caption: "Banana Split",
        },
        {
            url: "https://images.unsplash.com/photo-1553279768-865429fa0078",
            caption: "Banana Bread",
        },
        {
            url: "https://images.unsplash.com/photo-1603052875302-d376b7c0638a",
            caption: "Banana Smoothie",
        },
    ];
    return (
        <div className="w-full py-16 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-12 text-center">
                    Banana Photo Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={image.url}
                                alt={image.caption}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {image.caption}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
