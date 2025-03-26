"use client";
import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <ul className="flex gap-6 px-6 py-4 items-center">
        <li>
          <Link
            href="/"
            className="text-gray-800 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/cars"
            className="text-gray-800 hover:text-blue-600 font-medium transition"
          >
            Cars
          </Link>
        </li>
        <li>
          <Link
            href="/lego"
            className="text-gray-800 hover:text-blue-600 font-medium transition"
          >
            Buy a Committer
          </Link>
        </li>
        <li>
          <Link
            href="/EnergyDrinks"
            className="text-gray-800 hover:text-blue-600 font-medium transition"
          >
            Energy Drinks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
