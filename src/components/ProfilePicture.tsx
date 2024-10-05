import React from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ProfilePicture = ({ name }: { name: string }) => {
  const fallbackColor = getRandomColor();
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: fallbackColor }}
      >
        <span className="text-white font-bold text-lg">{firstLetter}</span>
      </div>
    </div>
  );
};

export default ProfilePicture;
