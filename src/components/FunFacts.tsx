import { AlertCircleIcon, HeartIcon, BrainIcon } from "lucide-react";
export function FunFacts() {
    const facts = [
        {
            icon: <AlertCircleIcon className="text-yellow-600 w-8 h-8" />,
            title: "Bananas Are Berries",
            description:
                "Botanically speaking, bananas are actually berries, while strawberries are not. Mind blown yet?",
        },
        {
            icon: <HeartIcon className="text-yellow-600 w-8 h-8" />,
            title: "Mood Boosters",
            description:
                "Bananas contain tryptophan which helps your body produce serotonin - the happy hormone!",
        },
        {
            icon: <BrainIcon className="text-yellow-600 w-8 h-8" />,
            title: "Banana Physics",
            description:
                "Bananas are slightly radioactive due to their potassium content. Don't worry, you'd need to eat 10 million bananas at once to get sick!",
        },
    ];
    return (
        <div className="w-full py-16 px-4 md:px-8 bg-yellow-100">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-12 text-center">
                    Banana Facts That Will Make You Go Bananas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {facts.map((fact, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                {fact.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-700 mb-3 text-center">
                                {fact.title}
                            </h3>
                            <p className="text-gray-700 text-center">
                                {fact.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 p-6 bg-yellow-200 rounded-lg border-2 border-dashed border-yellow-400">
                    <p className="text-center text-yellow-800 font-bold italic">
                        "Time flies like an arrow; fruit flies like a banana." —
                        Groucho Marx
                    </p>
                </div>
            </div>
        </div>
    );
}
