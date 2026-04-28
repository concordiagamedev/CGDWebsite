export default function Venue() {
  type Lab = {
    room: string;
    type: string;
    footnoteMarker: string;
    days?: string;
  };

  const venueInfo = {
    university: "Concordia University",
    building: "Henry F. Hall Building",
    rooms: [
      { day: "Friday", room: "H.937" },
      { day: "Saturday", room: "H.937" },
      { day: "Sunday", room: "H.920" },
    ],
    labs: [
      {
        room: "H.962",
        type: "Game Engines",
        footnoteMarker: "",
      },
      {
        room: "H.966",
        type: "Game Engines",
        footnoteMarker: "",
      },
      {
        room: "EV 5.635",
        type: "Unreal Workstation",
        footnoteMarker: "*",
      },
    ] satisfies Lab[],
    note:
      "Computer labs require ENCS accounts to log in. Let us know if you want to use one but have no account.",
    workstationFootnote:
      "* Unreal Workstation available only Saturday and Sunday with the help of Computation Arts Student Society.",
  };

  return (
    <section
      id="venue"
      className="max-w-5xl mx-auto mb-28 text-center md:text-left font-corbert font-bold"
    >
      <h2 className="text-4xl font-bold text-dark-purple mb-10">
        Venue & Labs
      </h2>

      <div className="text-lg text-gray-700 leading-relaxed space-y-8">
        <p>
          The Learnathon will take place at{" "}
          <strong className="underline text-dark-purple font-extrabold decoration-2 underline-offset-2">
            {venueInfo.university}
          </strong>{" "}
          — our <em>main creative hub</em> for the weekend! 🎮
        </p>

        <p>
          The main room will host the opening ceremony, workshops, and
          showcase:
        </p>

        <ul className="space-y-2">
          {venueInfo.rooms.map((r) => (
            <li key={r.day}>
              <strong>{r.day}:</strong>{" "}
              <span className="text-dark-purple underline font-semibold decoration-2 underline-offset-2">
                {r.room}
              </span>
            </li>
          ))}
        </ul>

        <div className="relative border-l-4 border-dark-purple pl-6 ml-2">
          <h3 className="text-2xl font-semibold text-dark-purple mb-2">
            💻 Labs & Workspaces
          </h3>

          <p className="mb-4">
            Here are the labs we reserved (available throughout the event):
          </p>

          <ul className="space-y-2 text-gray-800">
            {venueInfo.labs.map((lab) => (
              <li key={lab.room}>
                • Lab Room {lab.room} ({lab.type}
                {lab.days ? `, ${lab.days}` : ""}
                {lab.footnoteMarker})
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-600 mt-3 italic">
            {venueInfo.workstationFootnote}
          </p>

          <p className="text-sm text-gray-600 mt-4 italic">
            {venueInfo.note}
          </p>
        </div>

        <p className="text-sm text-gray-500 italic text-center mt-6">
          *All rooms are located in the {venueInfo.building},{" "}
          {venueInfo.university}.
        </p>
      </div>
    </section>
  );
}
