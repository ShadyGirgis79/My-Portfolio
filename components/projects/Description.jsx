import React from 'react'

export default function Description({ project }) {

    console.log('Project in Description:', project);
  return (
    <div>
        <h1>
            {project ? `${project.title}` : 'Project Not Found'}
        </h1>
        {project && (
          <div>
            <p><strong>Category:</strong> {project.category}</p>
            <p><strong>Description:</strong> {project.description}</p>
          </div>
        )}
    </div>
  )
}
