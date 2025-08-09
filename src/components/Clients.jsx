import React from "react";
import QoverLogo from "../assets/logo-qover.png";
import AiverseLogo from "../assets/ai-verse.png";
import SafeHarbour from "../assets/safe-harbour.png";
import DarkHarbour from "../assets/darkHarbour.png";
import IconMeals from "../assets/iconmeals.png";
import Studio from "../assets/studioancarola.png";
import Imagine from "../assets/imagineapps.png";


// Array of client logos //

const clients = [
    {name: "Qover", logo: QoverLogo },
    {name: "AI Verse", logo: AiverseLogo},
    {name: "Safe Harbour Solutions", logo: SafeHarbour},
    {name: "Dark Harbour Studios", logo: DarkHarbour},
    {name: "Icon Meals", logo: IconMeals},
    {name: "Studio Ancarola", logo: Studio},
    {name: "Imagine Apps", logo: Imagine},
]

const Clients = () => {
  return (
    <section id="clientWork" className="py-20 px-6 md:px-10">
       <div className="clients w-full mb-8 flex justify-center"> 
              <span className="font-bold text-4xl">These Companies Use Fast Folders</span>
            </div>
        <div className="max-w-6xl mx-auto px-6 ">
            <div className="grid grid-cols-2 justify-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-8">
            {clients.map((client, index) => (
                <div key={client.name} className="flex items-center">
                <div className=" px-4 py-2 w-full text-center">
                    <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 rounded-lg w-auto mx-auto mb-2 filter grayscale hover:grayscale-0 transition-all"
                    />
                    <p className="text-xs text-gray-500 ">{client.name}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default Clients;