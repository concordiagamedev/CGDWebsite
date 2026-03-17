
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
    { name: "Overall Best Game (1st place only)", prize: "Winner Pins & Humble Bundle" },
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
        </div>
      </div>
    </section>
  );
}

