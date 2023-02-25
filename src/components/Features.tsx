import React from "react";
import Feature from "./Feature";

function Features() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What makes us special
          </h2>

          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <Feature/>
          <Feature feature="NLP and Cosine similarity"/>
          <Feature feature="Real time hiring"/>
          <Feature feature="Easy to Use"/>
          <Feature feature="Easy to apply"/>
          <Feature feature="More reliable"/>

        </div>
      </div>
    </section>
  );
}

export default Features;
