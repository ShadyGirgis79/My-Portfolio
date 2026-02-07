
import { workData } from './../../../assets/index';

import React from 'react';
import Details from './../../../components/projects/Details';
import Background from './../../../components/projects/Background';

export function generateStaticParams() {
  return workData.map(project => ({
    id: project.id.toString(), // must be string
  }));
}

export default function Page({ params }) {
  const { id } = React.use(params);

  const project = workData.find(p => p.id == id);

  console.log("URL param:", id);
  console.log("Project:", project);

  if (!project) {
    return <h1>Project not found</h1>
  };

  return (
    <>
      <Background />
      <Details project={project} />
    </>
  );
}