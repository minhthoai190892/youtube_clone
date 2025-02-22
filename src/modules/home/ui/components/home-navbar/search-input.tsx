import { Search } from "lucide-react";
import React from "react";

export default function SearchInput() {
    // todo: add search functionality
  return (
    <form className="flex w-full max-w-[600]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500"
        />
        {/* todo: add remove search button */}
      </div>

      <button
        className="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
      >
        <Search className="size-5" />
      </button>
    </form>
  );
}
