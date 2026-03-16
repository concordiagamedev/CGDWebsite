import Timetable from "../components/shrekathon/timetable";
import Venue from "../components/shrekathon/venue";

export default function Shrekathon() {
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl font-bold text-center mt-16 mb-8 text-dark-purple font-corbert">
        SHREKATHON
      </h1>
        <Timetable />
        <Venue />
    </div>
    );
}