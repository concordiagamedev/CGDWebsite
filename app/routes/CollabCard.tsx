import React from "react";
import rawSponsors from "app/siteSettings/CollabShrek.json";

interface Sponsor {
    name: string;
    logo: string;

}


const sponsors: Sponsor[] = rawSponsors as unknown as Sponsor[];

const CollabSection: React.FC = () => {
    return (
        <section className="max-w-6xl mx-auto mb-24 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-8">
                Collaborators
            </h2>

            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {sponsors.map((sponsor, index) => (
                    <li
                        key={index}
                        className="group flex flex-col items-center bg-white/85 backdrop-blur-xl p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
                    >
                        <div className="relative mb-4 w-48 h-48">
                            <div
                                className="absolute inset-0 rounded-full opacity-70 blur-2xl scale-110 transition-all duration-500 group-hover:opacity-100"
                                style={{
                                    background:
                                        "radial-gradient(circle at center, #7fbf3f 0%, rgba(127,191,63,0.2) 60%, transparent 100%)", // this would give a shrek vibe I guess lol
                                }}
                            ></div>

                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="relative z-10 w-full h-full object-contain rounded-full border-[3px] border-white shadow-[0_0_20px_rgba(127,191,63,0.4)]"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-dark-purple mb-1">
                            {sponsor.name}
                        </h3>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CollabSection;