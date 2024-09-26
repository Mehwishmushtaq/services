import React from "react";

const AboutCard = () => {
  const cards = [
    {
      icon: "♻️", 
      title: "Core Values",
      description: `Delivering quality work efficiently. Collaboration and realism are at our core. 
                    Keep it free, honest, and transparent. Be Empathetic.`,
      bgColor: "bg-gray-100", 
    },
    {
      icon: "🌍", 
      title: "Eco-friendly Environment",
      description: `60% of our electricity is generated through solar panels because we aim 
                    to promote a pollution-free environment for a better future.`,
      bgColor: "bg-blue-900", 
      textColor: "text-white",
    },
    {
      icon: "⏳", 
      title: "Our Story",
      description: `Our company was established in March 2018. We use all of our experience 
                    acquired over the past 15 years to provide you the solutions.`,
      bgColor: "bg-gray-100", 
    },
  ];

  return (
    <div className="flex justify-center items-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 ${card.bgColor} ${
              card.textColor ? card.textColor : "text-gray-800"
            } shadow-md`}
          >
            <div className="flex justify-center text-5xl mb-4">{card.icon}</div>
            <h2 className="text-center font-bold text-xl mb-4">{card.title}</h2>
            <p className="text-center text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
