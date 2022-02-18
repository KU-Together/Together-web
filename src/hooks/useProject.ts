import { Project, ProjectId } from "constants/types";
import { URLS } from "constants/urls";
import React, { useEffect, useState } from "react";

function useProject() {
  const [project, setProject] = useState<Project | undefined>();

  const getProject = async (projectId: ProjectId) => {
    const response = await fetch(URLS.together + "project");
    const projects: Project[] = await response.json();
    setProject(projects.find((elem) => elem.id === projectId));
  };

  return [project, getProject];
}

export default useProject;
