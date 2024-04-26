import { projects } from "./projectData.js"

export function load() {
  return {
    summaries: projects.map((project) => {
      return {
        imageSrc: project.imageSrc,
        link: project.link,
        name: project.name,
        description: project.description,
      }
    }),
  }
}
