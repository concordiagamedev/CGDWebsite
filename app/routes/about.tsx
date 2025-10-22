import cgdpink from "assets/icons/cgd-transp-pink.png";
import "app/css/aboutus.css";
import type { MetaFunction } from "@remix-run/node";
import controller from "assets/icons/cgd_controller.png";
import Profile from "app/components/profile";
import ConstructionCard from "~/components/constructioncard";
import { getStaffList } from "../utils/api";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "About | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
    { icon: "./favicon.ico" },
  ];
};

const TEAM_TITLES = [
  "The Final Bosses 👾",
  "The Comms Team - Socials 🎨",
  "The Comms Team - Events 💼",
  "The Tech Team 💻",
];

export default function DashboardAbout() {
  const [groupedStaff, setGroupedStaff] = useState<Record<string, any[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStaff() {
      setLoading(true);
      setError(null);
      try {
        const response = await getStaffList();
        if (response?.staff) {
          // Group staff by team
          const grouped: Record<string, any[]> = {};
          response.staff.forEach((member) => {
            const team = member.team || "Other";
            if (!grouped[team]) grouped[team] = [];
            grouped[team].push(member);
          });

          // Sort members in each team by id ascending
          Object.keys(grouped).forEach((team) => {
            grouped[team].sort((a, b) => a.id - b.id);
          });

          setGroupedStaff(grouped);
        } else {
          setGroupedStaff({});
        }
      } catch (err: any) {
        setError("Failed to fetch staff data.");
        setGroupedStaff({});
      } finally {
        setLoading(false);
      }
    }
    fetchStaff();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center text-dark-purple">Loading staff...</div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-dark-purple">{error}</div>
    );
  }

  return (
    <div>
      <ConstructionCard show={false} />
      <div className="page">
        <div className="about-us-container">
          <h1 className="sm:text-8xl text-6xl text-center text-dark-purple">
            About Us
          </h1>
          <div className="aboutus-container flex flex-col-reverse lg:flex-row justify-center items-center md:gap-0 gap-6 md:px-20 px-10 xl:mx-32">
            <div className="aboutus-text font-bold mt-5 mb-5 md:my-0 md:text-xl 2xl:text-2xl text-lg -z-10">
              We are Concordia's gamedev community and we focus on the technical
              and development aspects of video games in all disciplines, such
              as programming, art, game design, storytelling, sound engineering
              and more.
            </div>
            <div className="blob flex items-center justify-center lg:justify-end md:mt-0 mt-10 md:p-10 w-full">
              <img
                src={controller}
                className="blob w-5/6 md:w-3/6 lg:w-4/6"
                alt="CGD controller icon that represents the club"
              />
            </div>
          </div>
        </div>

        {/* Team sections */}
        <div className="ourteam-container md:my-20 my-10">
          <h2 className="ourteam sm:text-6xl text-4xl md:my-14 my-6 text-center md:text-left md:mx-10">
            Meet Our Team: 2025-26
          </h2>

          {TEAM_TITLES.map((team) => {
            const members = groupedStaff[team];
            if (!members || members.length === 0) return null; // skip empty teams
            return (
              <div key={team}>
                <h3 className="ourteam sm:text-2xl text-2xl md:my-14 my-6 text-center md:text-left md:mx-10">
                  {team}
                </h3>
                <div className="staff-section grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-8 lg:mx-32 lg:px-24 md:mx-20 md:px-20 px-6">
                  {members.map((m) => (
                    <Profile
                      key={m.id}
                      name={m.name}
                      position={m.role}
                      image={m.avatar}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Background floaties */}
        <div className="background h-full">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              <img
                src={cgdpink}
                alt="cgd pink alternate logo"
                className="floaties"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
