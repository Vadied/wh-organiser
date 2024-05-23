"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-4">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </div>
  );
};

export default Navigation;