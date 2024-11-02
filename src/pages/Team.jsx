import React from "react";
import { FaInstagram,FaLinkedin ,FaTelegram  } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      title:"CEO",
      members:[
        {
          name: "Iskandar Mukhamedov",
          title: "Founder",
          image: "https://picsum.photos/200/300",
          social: {
            facebook: "#",
            linkedin: "#",
            instagram: "#",
          },
        },
        {
          name: "Yousef Husain Yousef",
          title: "UAE CEO",
          image: "https://picsum.photos/400/300",
          social: {
            facebook: "#",
            linkedin: "#",
            instagram: "#",
          },
        },
        {
          name: "Oybek Nazirov",
          title: "Russian Federation CEO",
          image: "https://picsum.photos/300/300",
    
          social: {
            facebook: "#",
            linkedin: "#",
            instagram: "#",
          },
        },
      ]
    },
    {
      title:"International Manager",
      members:[
        {
          name: "Iskandar Mukhamedov",
          title: "Founder",
          image: "https://picsum.photos/500/600",
          social: {
            facebook: "#",
            linkedin: "#",
            instagram: "#",
          },
        },
       
      ]
    }
  ];
  return (
    <>
      <div className="align-items ">
        <div className="title_info my-10 md:my-24 md:mx-32">
          <h2 className="text-4xl  text-gray-800 lg:text-5xl font-semibold">TEAM</h2>
          <p className="w-full md:w-1/2 text-sm md:text-base mt-5 md:mt-10 text-gray-500 font-semibold">
          A competent team and competent design gives us the opportunity to work for an excellent result. The key point of our team is responsibility and punctuality. We will do our best to make you comfortable at all stages of collaboration from design to implementation!
          </p>
        </div>
      </div>
      <div className="  min-h-screen pb-10">
        <div className="align-items md:px-20 ">
          {/* Header */}
      {teamMembers.map((v,index)=>
        <>
        <header className="flex  items-center py-10">
          <h1 className="text-4xl font-semibold text-gray-800">{v.title}</h1>
        </header>

        {/* Team Member Cards */}
        <div className="flex flex-wrap  gap-8">
          {v?.members.map((members, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all group bg-white shadow-lg  w-64 h-96">
              {/* Image */}
              <img
                src={members.image}
                alt={members.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute  flex flex-col justify-center items-center top-full transition-all duration-500   w-full group-hover:top-0 h-full p-4 bg-black bg-opacity-50 text-white">
                <h2 className="text-2xl font-semibold duration-1000   group-hover:-translate-y-20">{members.name}</h2>
                <p className="text-sm duration-1000   group-hover:translate-y-20">{members.title}</p>

                {/* Social Icons (if available) */}
                {(
                  <div className="flex gap-4 mt-4 duration-1000   group-hover:-translate-y-10 ">
                    <a
                      href={members.social.facebook}
                      className="hover:text-gray-300">
                     <FaTelegram />
                    </a>
                    <a
                      href={members.social.linkedin}
                      className="hover:text-gray-300">
                      <FaInstagram/>
                    </a>
                    <a
                      href={members.social.instagram}
                      className="hover:text-gray-300">
                       <FaLinkedin/>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        </>
        )}
        </div>
      </div>
    </>
  );
};

export default Team;
