
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
    { name: "Overall Best Game", winner: "JumpSHREK - Team Farquad" },
    { name: "Best Theme Integration", winner: "7 layers - J y J Developers" },
    { name: "Best Technical Innovation", winner: "Clause & Effect - Clause and Effect" },
    { name: "Best Art Direction", winner: "Farsquaad - Farsquaad ink" },
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

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <ul className="space-y-2 text-gray-800 md:max-w-xl">
              {awardCategories.map((award) => (
                <li key={award.name}>
                  • {award.name} – {award.prize}
                </li>
              ))}
            </ul>

            <div className="flex justify-center md:justify-end md:min-w-[360px]">
              <div className="relative h-[220px] w-[280px] sm:h-[240px] sm:w-[320px] md:h-[280px] md:w-[360px]">
                <img
                  src="/assets/Shrekathon/winnerprize.png"
                  alt="Winner prize"
                  className="absolute bottom-0 right-0 w-56 h-auto animate-float-soft-delayed sm:w-60 md:w-72"
                />
                <img
                  src="/assets/Shrekathon/ShrekathonPin.PNG"
                  alt="Shrekathon winner pin"
                  className="absolute left-0 top-2  w-32 h-auto animate-float-soft sm:left-1 sm:top-0 sm:w-36 md:left-2 md:-top-2 md:w-40"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-l-4 border-dark-purple pl-6 ml-2">
          {/* <h3 className="text-2xl font-semibold text-dark-purple mb-2">
            Winners
          </h3> */}

          {/* <ul className="space-y-2 text-gray-800">
            {winners.map((winners) => (
              <li key={winners.name}>
                • {winners.name} – {winners.winner}
              </li>
            ))}
          </ul> */}
          


          <div className="mt-16 flex-col items-center">
            <h2 className="text-2xl font-semibold text-dark-purple mb-2">
              🏆 Top Winners
            </h2>

            <svg width="100%" viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">

              {/* 2nd place */}
              <g className="group cursor-pointer">
                <rect x="45" y="170" width="140" height="130" rx="4" fill="#D3D1C7" stroke="#5F5E5A" strokeWidth="0.5"/>
                <rect x="58" y="175" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
                <text x="117" y="191" textAnchor="middle" dominantBaseline="central" fontSize="12" ><a href="https://adglx.itch.io/clause-and-effect" style={{fill: "blue", textDecoration: "underline"}}>Clause and Effect</a></text>
              </g>

              {/* 1st place */}
              <g className="group cursor-pointer">
                <rect x="210" y="110" width="140" height="190" rx="4" fill="#FAC775" stroke="#BA7517" strokeWidth="0.5"/>
                <rect x="220" y="115" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
                <text x="280" y="131" textAnchor="middle" dominantBaseline="central" fontSize="12"><a href="https://dudenameddarcy.itch.io/jumpshrek" style={{fill: "blue", textDecoration: "underline"}}>JumpSHREK</a></text>
              </g>

              {/* 3rd place */}
              <g className="group cursor-pointer">
                <rect x="370" y="170" width="140" height="130" rx="4" fill="#F5C4B3" stroke="#993C1D" strokeWidth="0.5"/>
                <rect x="380" y="175" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
                <text x="440" y="191" textAnchor="middle" dominantBaseline="central" fontSize="12"><a href="https://bbsupremeus.itch.io/7-layers" style={{fill: "blue", textDecoration: "underline"}}>7 layers</a></text>
              </g>
              {/* 4th place*/}
              <g className="group cursor-pointer">
                <rect x="530" y="170" width="140" height="130" rx="4" fill="#F5C4B3" stroke="#993C1D" strokeWidth="0.5"/>
                <rect x="540" y="175" width="120" height="30" rx="4" fill="white" stroke="#ccc" strokeWidth="0.5"/>
                <text x="600" y="191" textAnchor="middle" dominantBaseline="central" fontSize="12"><a href="https://wonderfulnorah.itch.io/farsquaad-ink" style={{fill: "blue", textDecoration: "underline"}}>Farsquaad ink</a></text>
              </g>

              {/* Base */}
              <rect x="30" y="300" width="730" height="12" rx="3" fill="#ccc"/>

              {/* Labels */}
              <text x="117" y="158" textAnchor="middle" fontSize="12">Best Technical Innovation</text>
              <text x="280" y="98" textAnchor="middle" fontSize="12">Overall Best Game</text>
              <text x="440" y="158" textAnchor="middle" fontSize="12">Best Theme Integration</text>
              <text x="600" y="158" textAnchor="middle" fontSize="12">Best Art Direction</text>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
