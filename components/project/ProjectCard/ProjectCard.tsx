import * as React from "react"
import Image from "next/image"
import { Project } from "../types"

import styles from "./ProjectCard.module.scss"

interface Props{
    project: Project
}

const ProyectCard: React.FC<Props> = ({project}) => {
    return (
      <section className={project.importance === "high" ? `section ${styles.high}` : `section ${styles.medium}`}>
            <div className={styles.image}>
              <Image
                src={`/images/thumbnails/${project.image}`}
                layout="fill"
                objectFit="contain"
                alt={project.name}
                blurDataURL={`/images/thumbnails/${project.image}`}
                placeholder="blur"
              />
            </div>
            <div className={styles.projectData}>
              <h3>{project.name}</h3>
              <p className={styles.description}>
                {project.description}
              </p>
              <div className={styles.links}>
                {project.site !== "" && <a href={project.site} target="_blank" className="gradient">Live Site</a>}
                {project.code !== "" && <a href={project.code} target="_blank" className="gradient">Code</a>}
              </div>
            </div>
          </section>
    )
}

export default ProyectCard
