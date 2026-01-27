import { workData, assets } from './../../assets/index';
import React, { useState, useMemo } from 'react';
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Image from 'next/image';
import './Work.scss';

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI & Machine Learning"
];

export default function Work() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [showMore, setShowMore] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const router = useRouter();

  const filteredProjects = useMemo(() => {
    return workData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount(filteredProjects.length);
    setShowMore(false);
  };

  const handleShowLess = () => {
    setVisibleCount(4);
    setShowMore(true);
  };

  return (
    <div id="work" className="work">

      <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.6, delay: 0.3}}
        className="workIntro">
        My Portfolio
      </motion.h4>
      <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.6, delay: 0.8}}
        className="workTitle">
        My Latest Work
      </motion.h2>

      <motion.p 
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.3, delay: 0.8}} 
        className="workDescription">
        These projects reflect my journey as a software engineer,
        spanning web and mobile development and intelligent machine learning solutions.
      </motion.p>

      <motion.div
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={ {duration: 0.5, delay: 0.5}}
      >
          <input
            className="workSearch"
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(4);
              setShowMore(true);
            }}
          />

          <div className="categoryFilters">
            {categories.map((category) => (
              <button
                key={category}
                className={`categoryButton ${selectedCategory === category ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleCount(4);
                  setShowMore(true);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="workGrid">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="workCard"
                style={{ backgroundImage: `url(${project.bgImage})` }}
                onClick={() => router.push(`/projects/${project.id}`)}
              >
                <div className="workCardOverlay">
                  <h3 className="workCardTitle">{project.title}</h3>
                  <p className="workCardDescription">{project.category}</p>
                </div>

                <Image
                  src={assets.send_icon}
                  alt="arrow"
                  width={32}
                  height={32}
                  className="workCardIcon"
                  
                />
              </div>
            ))}
          </div>

          {filteredProjects.length > 4 && (
            showMore ? (
              <button className="viewMoreButton" onClick={handleShowMore}>
                Show more
                <Image src={assets.arrow_down} alt="down arrow" width={16} height={16} />
              </button>
            ) : (
              <button className="viewMoreButton" onClick={handleShowLess}>
                Show less
                <Image src={assets.arrow_up} alt="up arrow" width={16} height={16} />
              </button>
            )
          )}

      </motion.div>


    </div>
  );
};
