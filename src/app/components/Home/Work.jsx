import { workData, assets } from '../../../assets/index';
import React, { useState, useMemo } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import './Work.scss';

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Machine Learning"
];

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [showMore, setShowMore] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const router = useRouter();

  console.log("Router object:", router);

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
      <h4 className="workIntro">My Portfolio</h4>
      <h2 className="workTitle">My Latest Work</h2>

      <p className="workDescription">
        These projects reflect my journey as a software engineer,
        spanning web and mobile development and intelligent machine learning solutions.
      </p>

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
        {categories.map((cat) => (
          <button
            key={cat}
            className={`categoryButton ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(4);
              setShowMore(true);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="workGrid">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="workCard"
            style={{ backgroundImage: `url(${project.bgImage})` }}
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
    </div>
  );
};

export default Work;
