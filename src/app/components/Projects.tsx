"use client";

import React, { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Inkflux: Mock Storefront for Textbooks",
    description:
      "Developed Inkflux, a full-stack mock e-commerce platform dedicated to selling textbooks. Leveraged JavaScript, Express, and Node.js for incorporating authentication and profile management systems. Features include product browsing, inventory management, user cart systems with add, remove, and checkout functionalities, as well as session storage. SQLite used to manage and store all relevant data.",
  },
  {
    id: 2,
    title: "WikiWhen: Analyzing Knowledge Propagation",
    description:
      "Developed a pipeline for analyzing the temporal dynamics of scientific information propagation on Wikipedia. Used BeautifulSoup and NLTK to mine and preprocess extensive Wikipedia edit histories, extracting large-scale temporal datasets. Leveraged advanced NLP models, including GPT and BERT, to deconstruct edit histories into discrete facts and extract individual semantic changes. Experimented with retrieval techniques such as BM-25, Contriever, TF-IDF, and Dense Passage Retrieval to map Wikipedia content to corresponding papers on PubMed. Presented preliminary findings at the 2024 Allen School Undergraduate and Master’s Research Showcase.",
  },
  {
    id: 3,
    title: "Distributed Key/Value Store: A Fault Tolerant Distributed System",
    description:
      "Designed and implemented a sharded, paxos replicated distributed key/value store. Created a system which partitioned storage into shards controlled by replica groups using the Paxos consensus algorithm for replication and fault tolerance. Implemented a shard master cluster to handle dynamic shard assignments and reconfigurations. Also implemented load balancing and two-phase commit protocols to ensure transactional consistency across shards.",
  },
  {
    id: 4,
    title: "SATScan: Parsing Standardized Tests",
    description:
      "Developed SATScan, an automated content extraction and retrieval system designed to process large volumes of scanned SAT exam papers efficiently. Implemented advanced image processing techniques, including contour detection, thresholding, and text recognition, using OpenCV and EasyOCR to accurately preprocess and extract question content. Designed a MongoDB database and developed a REST API to facilitate the conversion of extracted content into LaTeX and ensure efficient storage and retrieval.",
  },
  {
    id: 5,
    title: "Lightweight Flashcards: A Simple Study App",
    description:
      "Created a lightweight flashcards application, a web-based study tool implemented using TypeScript, HTML, and CSS. Enables users to create, manage, and practice flashcard decks with persistent data storage handled via in-memory data structures. Features include: viewing existing decks, adding new decks and cards with input validation, practicing decks by marking answers as correct or incorrect, and tracking scores across multiple users or sessions. Implemented client-side error handling, and ensured application reliability via unit testing.",
  },
  {
    id: 6,
    title: "Flight App: Database Transaction Management",
    description:
      "Developed Flight App, an airline management system implemented via database application and transaction management using Java and JDBC to integrate with SQL Server on Azure. Implemented ACID transaction management during concurrent operations. Supports comprehensive flight searches, including direct and indirect itineraries, and reservation booking with real-time inventory checks.",
  },
  {
    id: 7,
    title: "Imitation Learning on Expert Policy for Quadruped Locomotion",
    description:
      "Experimented with different neural network architectures such as fully connected networks (FCNs), recurrent neural networks (RNNs), and long short-term memory (LSTM) to accurately replicate expert policies for quadruped walking capabilities. Used domain randomization to create diverse synthetic datasets and improve model adaptability across various terrains. Conducted a comparative analysis of different neural network architectures, achieving gait and walk accuracy rates up to 92% with LSTM models.",
  },
  {
    id: 8,
    title: "Personal Website",
    description:
      "React + Tailwind. See for yourself ;)",
  },
  // add projects as needed
];

export default function Projects() {
  const [openProjectIds, setOpenProjectIds] = useState<number[]>([]);
  const [visibleProjectIds, setVisibleProjectIds] = useState<number[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    projectsData.forEach((project, index) => {
      const delay = index * 200; // 200ms delay between each item
      const timeout = setTimeout(() => {
        setVisibleProjectIds((prev) => [...prev, project.id]);
      }, delay);
      timeouts.push(timeout);
    });

    // cleanup on unmount to prevent memory leaks
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []); // empty dependency array ensures this runs only once

  const toggleProject = (id: number) => {
    setOpenProjectIds((prevOpenProjectIds) =>
      prevOpenProjectIds.includes(id)
        ? prevOpenProjectIds.filter((openId) => openId !== id)
        : [...prevOpenProjectIds, id]
    );
  };

  return (
    <section className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl mb-4 mt-10 text-center">
          Projects
        </h2>
        <ul className="space-y-6 py-6">
          {projectsData.map((project) => (
            <li
              key={project.id}
              className={`p-1 transition-opacity duration-500 ease-in-out transform ${
                visibleProjectIds.includes(project.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <button
                type="button"
                className="flex justify-between items-center gap-4 w-full text-left bg-transparent border-none focus:outline-none"
                onClick={() => toggleProject(project.id)}
                aria-expanded={openProjectIds.includes(project.id)}
                aria-controls={`project-description-${project.id}`}
              >
                <span className="flex-1 text-sm sm:text-base">
                  {project.title}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform transition-transform duration-300 ${
                    openProjectIds.includes(project.id) ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`project-description-${project.id}`}
                className={`transition-all duration-1000 ease-in-out ${
                  openProjectIds.includes(project.id)
                    ? "opacity-100 max-h-[500px]"
                    : "opacity-0 max-h-0"
                } overflow-hidden mt-2`}
              >
                <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
