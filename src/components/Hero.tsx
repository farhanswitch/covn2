import React from "react";
import Image from "next/image";
import Link from "next/link";
import covid from "../../public/covid.jpeg";
const Hero: React.FC = () => {
  return (
    <section>
      <div className="flex flex-wrap">
        <div className="md:flex-1 bg-white md:bg-herogray  w-full h-[40vh] md:h-[80vh] grid place-items-center">
          <div className="uppercase p-8 md:p-4">
            <p className="text-2xl">data kasus covid-19 di indonesia</p>
            <Link href={"/harian"}>
              <button className="bg-sky-400 text-white px-4 py-2 rounded mt-10 hidden md:block text-center md:text-start">
                Data Harian
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[100vw] md:w-2/3 h-[50vh] md:h-[80vh] relative">
          <Image
            alt="covid"
            src={covid}
            width={200}
            height={100}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
