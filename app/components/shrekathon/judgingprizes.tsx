
export default function Judging() {
  const evaluationCriteria = [
      { name: "Art", max: 5 },
      { name: "Programming", max: 5 },
      { name: "Audio", max: 5 },
      { name: "Theme", max: 5 },
      { name: "Design", max: 5 },
      { name: "Creativity", max: 3 },
  ]

  const awardCategories = [
    { name: "Overall Best Game (1st place only)", prize: "Winner Pins & Humble Bundle?" },
    { name: "Best Theme Integration", prize: "Winner Pins" },
    { name: "Best Technical Innovation", prize: "Winner Pins" },
    { name: "Best Art Direction", prize: "Winner Pins" },
  ];

  const winners = [
    { name: "Overall Best Game", winner: "To Be Announced" },
    { name: "Best Theme Integration", winner: "To Be Announced" },
    { name: "Best Technical Innovation", winner: "To Be Announced" },
    { name: "Best Art Direction", winner: "To Be Announced" },
  ];

  const podiumPlaces = [
    { place: "2nd", x: 140, y: 160, height: 130, color: "bg-gray-300" },
    { place: "1st", x: 300, y: 100, height: 190, color: "bg-yellow-400" },
    { place: "3rd", x: 460, y: 210, height: 80,  color: "bg-orange-400" },
  ];

  return (
    <section
      id="gameshowcase-judging"
      className="max-w-5xl mx-auto mb-28 text-center md:text-left font-corbert font-bold"
    >
      <h2 className="text-4xl font-bold text-dark-purple mb-10">
        Game Showcase & Judging
      </h2>

      <div className="text-lg text-gray-700 leading-relaxed space-y-8">
        <p>
          All judging will take place on the day of submission on Sunday.
          If the participants wish to update their submissions in the
          following days, the submissions will be reopened for 5 days
          after the jam ends. Do keep in mind that we only judge the
          version that is submitted on Sunday.
        </p>

        <p>
          The participants will be stationed at a workstation at the end
          of the jam and the judges will go judge each team one by one.
        </p>

        <div className="relative border-l-4 border-dark-purple pl-6 ml-2">
          <h3 className="text-2xl font-semibold text-dark-purple mb-2">
            Evaluation criteria:
          </h3>

          <ul className="space-y-2 text-gray-800">
            {evaluationCriteria.map((criterion) => (
              <li key={criterion.name}>
                • {criterion.name} (1–{criterion.max})
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-600 mt-4 italic">

          </p>
        </div>

        <div className="relative border-l-4 border-dark-purple pl-6 ml-2">
          <h3 className="text-2xl font-semibold text-dark-purple mb-2">
            Winning Categories & Prizes
          </h3>

          <ul className="space-y-2 text-gray-800">
            {awardCategories.map((award) => (
              <li key={award.name}>
                • {award.name} – {award.prize}
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-600 mt-4 italic">
              <img src="/assets/Shrekathon/ShrekathonPin.png" alt="Pin" className="w-64 h-auto"></img>
          </p>
        </div>

        <div className="relative border-l-4 border-dark-purple pl-6 ml-2">
          <h3 className="text-2xl font-semibold text-dark-purple mb-2">
            Winners
          </h3>

          <ul className="space-y-2 text-gray-800">
            {winners.map((winners) => (
              <li key={winners.name}>
                • {winners.name} – {winners.winner}
              </li>
            ))}
          </ul>
          


          <div className="mt-16 flex-col items-center">
            <h2 className="text-2xl font-semibold text-dark-purple mb-2">
              🏆 Top 3 Winners
            </h2>

            <svg width="100%" viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">

              {/* 2nd place */}
              <g className="group cursor-pointer">
                <rect x="140" y="170" width="140" height="130" rx="4" fill="#D3D1C7" stroke="#5F5E5A" strokeWidth="0.5"/>
                <rect x="150" y="175" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
                <text x="210" y="191" textAnchor="middle" dominantBaseline="central" fontSize="12">To Be Announced</text>
              </g>

              {/* 1st place */}
              <g className="group cursor-pointer">
                <rect x="300" y="110" width="140" height="190" rx="4" fill="#FAC775" stroke="#BA7517" strokeWidth="0.5"/>
                <rect x="310" y="115" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
                <text x="370" y="131" textAnchor="middle" dominantBaseline="central" fontSize="12">To Be Announced</text>
              </g>

              {/* 3rd place */}
              <g className="group cursor-pointer">
                <rect x="460" y="220" width="140" height="80" rx="4" fill="#F5C4B3" stroke="#993C1D" strokeWidth="0.5"/>
                <rect x="470" y="225" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
                <text x="530" y="241" textAnchor="middle" dominantBaseline="central" fontSize="12">To Be Announced</text>
              </g>

              {/* Base */}
              <rect x="120" y="300" width="500" height="12" rx="3" fill="#ccc"/>

              {/* Labels */}
              <text x="210" y="158" textAnchor="middle" fontSize="12">2nd place</text>
              <text x="370" y="98" textAnchor="middle" fontSize="12">1st place</text>
              <text x="530" y="208" textAnchor="middle" fontSize="12">3rd place</text>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}

