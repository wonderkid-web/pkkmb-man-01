import { goals } from "@/static";
import Image from "next/image";
import logo from "/public/logo.png"

export const GoalsSection = () => {
    const handleCopyLink = () => {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    };
  
    return (
      <div className="px-4 py-8 max-w-5xl mx-auto">
        {/* Goals Section */}
        <section>
          <div className="w-32 h-32 relative mb-2 mx-auto">
            <Image src={logo} alt="logo" className="h-full w-full" objectFit="cover" />
          </div>
          <h2 className="text-3xl font-extrabold text-center mb-6 relative pb-2">
            Tujuan Madrasah
            <div className="absolute inset-x-0 bottom-0 border-b-4 border-teal-500 transform -translate-y-1/2" />
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-4">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <p className="text-lg text-gray-800">{goal}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
