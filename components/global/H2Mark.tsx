import React from "react";

interface H2MarkProps {
  children: React.ReactNode;
}

const H2Mark: React.FC<H2MarkProps> = ({ children }) => (
  <h2 className="text-2xl font-bold mb-6">
    <mark className="bg-[#293279] text-white p-1 leading-loose">{children}</mark>
  </h2>
);

export default H2Mark;
