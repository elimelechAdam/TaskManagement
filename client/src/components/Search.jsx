import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      width: "200px",
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: { width: 0, x: "-200%", opacity: 0, transition: { duration: 0.5 } },
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center ">
      <MagnifyingGlassIcon
        className="h-9 w-9 p-2 bg-gray-300 rounded-full cursor-pointer"
        name="search"
        size="xl"
        onClick={toggleSearch}
      />

      <motion.div
        className="absolute left-48 top-0 bg-black rounded-lg overflow-hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <motion.input
          type="text"
          className="p-2 w-full bg-gray-300 "
          placeholder="Search..."
        />
      </motion.div>
    </div>
  );
};

export default Search;
