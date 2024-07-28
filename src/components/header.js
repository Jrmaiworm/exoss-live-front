import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full mb-4 flex items-center justify-between bg-blue-900 p-5">
      <Link href="https://www.exoss.org">
        <Image
          width={100}
          height={50}
          className="w-20 mb-2 flex hover:cursor-pointer"
          src="https://exoss.imo.net/imo/img/org/exo/logos/exoss.png"
          alt="Exoss Logo"
        />
      </Link>
      
      <Link href="https://www.seti.org/cams">
        <Image
          width={40}
          height={40}
          className="w-10 mb-2 flex hover:cursor-pointer"
          src="https://www.seti.org/sites/default/files/setilogo_1.png"
          alt="Seti Logo"
        />
      </Link>
      
      <Link href="https://exoss.imo.net/members/imo/report_intro">
        <Image
          width={40}
          height={40}
          className="w-10 mb-2 flex hover:cursor-pointer"
          src="https://www.imo.net/dist/img/org/imo.png"
          alt="IMO Logo"
        />
      </Link>
      
      <Link href="/home">
        <button className="bg-white text-blue-900 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
          Associados
        </button>
      </Link>
    </header>
  );
}
