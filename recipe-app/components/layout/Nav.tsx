// src/components/layout/Nav.tsx
"use client";

import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/recipes">Recipes</Link>
        </li>
        <li>
          <Link href="/add-recipe">Add recipe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;