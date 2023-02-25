import React from "react";
const descriptions = "Cosine similarity is a metric used to measure how similar the documents are irrespective of their size. Mathematically, it measures the cosine of the angle between two vectors projected in a multi-dimensional space."
const Feature = ({feature = '2 layered Screening', description=descriptions}) => {
  return (
    <div className="flex items-start">
    <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
        <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
        </svg>
    </span>

    <div className="ml-4">
        <h2 className="text-lg font-bold">{feature}</h2>

        <p className="mt-1 text-sm text-gray-300">
           {description}
        </p>
    </div>
</div>
  );
};

export default Feature;
