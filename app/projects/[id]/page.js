
import Description from './../../../components/projects/Description';
import { workData } from './../../../assets/index';

import React from 'react';

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
      <Description project={project} />
    </>
  );
}