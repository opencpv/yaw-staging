"use client";
import Image from "next/image";
import React, { useState } from "react";
import AuthorImageCircle from "./AuthorImageCircle";
import { motion } from "framer-motion";

let authorsDemoDB = [
  {
    id: 1,
    name: "Madhukar Singh",
    image: "/assets/images/about/about-slider-img.webp",
    about:
      "Passionate about creating seamless digital experiences, Madhukar Singh is a seasoned web developer with expertise in front-end technologies. His commitment to innovation and user-centric design has led to the successful implementation of various web projects. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, eveniet!",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "/assets/images/about/black-businessman.webp",
    about:
      "With a keen eye for design and a flair for creativity, Jane Doe is an aspiring graphic artist. Her journey in the world of visual storytelling has been marked by a dedication to pushing artistic boundaries. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, doloremque!",
  },
  {
    id: 3,
    name: "Chris Arthur",
    image: "/assets/images/about/young-couple.webp",
    about:
      "Chris Arthur, a strategic marketing specialist, brings a wealth of experience in crafting compelling brand narratives. His analytical approach and dynamic strategies have consistently driven successful marketing campaigns. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, impedit!",
  },
  {
    id: 4,
    name: "John Doe",
    image: "/assets/images/about/hand-holding.webp",
    about:
      "John Doe, a dedicated environmental activist, strives to make a positive impact on our planet. Through community engagement and sustainable initiatives, he envisions a greener and healthier future for generations to come. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, consequatur!",
  },
  {
    id: 5,
    name: "Mary Fordjour",
    image: "/assets/images/about/about1.webp",
    about:
      "Mary Fordjour is a dynamic advocate for education accessibility. Her work in empowering underprivileged communities through educational initiatives has garnered widespread recognition. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, explicabo!",
  },
];

const Authors = () => {
  const [currentAuthorIndex, setCurrentAuthorIndex] = useState<number>(0);
  const [authorsDemo] = useState(authorsDemoDB);

  return (
    <div key={authorsDemo[currentAuthorIndex]?.id} className="space-y-1">
      <div className="flex flex-wrap items-center gap-3 p-5 bg-white rounded-[5rem] shadow-large max-w-lg">
        <div className="relative w-20 h-20">
          <Image
            src={authorsDemo[currentAuthorIndex]?.image}
            alt={authorsDemo[currentAuthorIndex]?.name}
            className="rounded-full shrink-0"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex-[3] space-y-3">
          <h3 className="text-sm text-neutral-800 font-[700]">
            {authorsDemo[currentAuthorIndex]?.name}
          </h3>
          <motion.p
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            className="text-xs text-neutral-500 min-w-[8rem] line-clamp-5"
          >
            {authorsDemo[currentAuthorIndex]?.about}
          </motion.p>
        </div>
      </div>
      {/* Group */}
      <div className="flex flex-wrap -space-x-4 rtl:space-x-reverse">
        {authorsDemo.map((author, idx) => (
          <AuthorImageCircle
            key={idx + 1}
            image={author.image}
            name={author.name}
            onClick={() => setCurrentAuthorIndex(idx as number)}
          />
        ))}
      </div>
    </div>
  );
};

export default Authors;
