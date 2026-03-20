
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

  const rules = [
    "No AI-generated art or music!!!",
    "Create an itch.io page and submit your work on Sunday at 5PM",
    "Credit your borrowed assets!",
    "At least one member of the team has to present their project to the judges on-site",
  ];

  const modifiers = [
    "My kingdom, My rules. My fanfic, My delulus - 2pt",
    "Could you be quiet for 5 minutes??!! - 1pt",
    "Onion Control - 1pt",
    "Built in the swamp - 2pt",
    "Do the ROAR - 1pt",
    "Knight in the shining confusion - 1pt",
    "Shrek is love - 1pt",
    "Swamp cortisol - 1pt",
    "Far far away trade agreement - 1pt",
    "Mirror mirror on the wall - 1pt"
  ];

  return (
    <section
      id="gameshowcase-judging"
      className="max-w-5xl mx-auto mb-20 text-center md:text-left font-corbert font-bold"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-dark-purple mb-4">
              Shrekathon Rules
            </h3>
            <ul className="space-y-4 text-gray-800 text-left text-lg list-disc list-outside ml-6">
              {rules.map((rule) => (
                <li key={rule}>
                  {rule.includes("itch.io") ? (
                    <>
                      Create an{" "}
                      <a
                        href="https://itch.io"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#007bbf] underline decoration-2 underline-offset-2 hover:text-dark-purple"
                      >
                        itch.io
                      </a>{" "}
                      page and submit your work on Sunday at 5PM
                    </>
                  ) : (
                    rule
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-gray-600 italic text-left border-t border-gray-300 pt-4">
              Concordia Game Development Club acknowledges that this event takes place on unceded Indigenous lands.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-dark-purple mb-4">
              Modifiers
            </h3>
            <ul className="space-y-4 text-gray-800 text-left text-lg list-disc list-outside ml-6">
              {modifiers.map((modifier) => (
                <li key={modifier}>{modifier}</li>
              ))}
            </ul>
          </div>
        </div>

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

            <div className="flex justify-center md:justify-end md:min-w-[420px]">
              <div className="relative h-[260px] w-[320px] sm:h-[300px] sm:w-[380px] md:h-[340px] md:w-[430px]">
                <img
                  src="/assets/Shrekathon/winnerprize.png"
                  alt="Winner prize"
                  className="absolute bottom-0 right-0 w-64 h-auto animate-float-soft-delayed sm:w-72 md:w-80"
                />
                <img
                  src="/assets/Shrekathon/ShrekathonPin.PNG"
                  alt="Shrekathon winner pin"
                  className="absolute left-0 top-3 w-40 h-auto animate-float-soft sm:left-1 sm:top-1 sm:w-44 md:left-3 md:-top-1 md:w-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
