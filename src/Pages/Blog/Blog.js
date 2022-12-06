import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-10 py-20 gap-5 container">
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What are the different ways to manage a state in a React application?{" "}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Local (UI) state – Local state is data we manage in one or another component.
          Global (UI) state – Global state is data we manage across multiple components.
          Server state – Data that comes from an external server that must be integrated
          with our UI state. URL state – Data that exists on our URLs, including the
          pathname and query parameters.
        </p>
      </a>

      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          How does prototypical inheritance work?{" "}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          The Prototypal Inheritance is a feature in javascript used to add methods and
          properties in objects. It is a method by which an object can inherit the
          properties and methods of another object. Traditionally, in order to get and set
          the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
        </p>
      </a>

      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What is a unit test? Why should we write unit tests?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          The main objective of unit testing is to isolate written code to test and
          determine if it works as intended. Unit testing is an important step in the
          development process, because if done correctly, it can help detect early flaws
          in code which may be more difficult to find in later testing stages.
        </p>
      </a>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          React vs. Angular vs. Vue?{" "}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Vue provides higher customizability and hence is easier to learn than Angular or
          React. Further, Vue has an overlap with Angular and React with respect to their
          functionality like the use of components. Hence, the transition to Vue from
          either of the two is an easy option.
        </p>
      </a>
    </div>
  );
};

export default Blog;
