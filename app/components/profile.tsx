import React from "react";
import "app/css/profile.css";

interface ProfileProps {
  name: string;
  position: string;
  image: string;
}

const Profile: React.FC<ProfileProps> = ({ name, position, image }) => {
  return (
    <div className="flex flex-col ">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="hover:scale-110 transition duration-300 rounded-2xl object-cover object-top profile-img"
        />
      </div>

      <h3 className="name xl:text-3xl lg:text-2xl text-xl mt-4">{name}</h3>
      <p className="position xl:text-xl lg:text-lg text-base">{position}</p>
    </div>
  );
};

export default Profile;
