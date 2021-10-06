import * as React from "react"
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.scss";
import Layout from "../components/layout";
import separator from "/public/separators/separator1.svg";
import separator2 from "/public/separators/separator2.svg";
import {Project} from "../components/project/types"
import ProyectCard from "../components/project/ProjectCard";

interface Props {
  projects: Project[]
}

const Index: NextPage<Props> = ({projects}) => {
  const [disabled, setDisabled] = React.useState<boolean>(false)
  const handleSubmit = async(e: any) => {
    e.preventDefault()
    setDisabled(true)
    const formData:{[index: string]: any} = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      //@ts-ignore 
      if(!field.name) return
      //@ts-ignore 
      formData[field.name] = field.value
    })
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    }).then(() =>{
      e.target.email.value = ""
      e.target.message.value = ""
      setDisabled(false)
      alert("Mail sent successfully!")
    })
    .catch(()=>alert("Oops. Something went wrong . . ."))
  }
  
  return (
    <Layout>
      <Head>
        <title>Enzo Ponferrada | Web Developer</title>
      </Head>
      <div className={styles.separator}>
        <Image layout="fill" src={separator} />
      </div>
      <div id="projects" className={styles.projects}>
        <div className={`container ${styles.container}`}>
          {projects.map((project, index) => <ProyectCard key={index} project={project} />)}
          
        </div>
      </div>
      <div className={styles.separator}>
        <Image layout="fill" src={separator2} />
      </div>
      <div className={`${styles.skills} container`}>
        <div>
          <Image
            src="/images/icons/react.svg"
            layout="responsive"
            width={12}
            height={12}
            alt="react"
          />
        </div>
        <div>
          <Image
            src="/images/icons/typescript.svg"
            layout="responsive"
            width={12}
            height={12}
            alt="typescript"
          />
        </div>
        <div>
          <Image
            src="/images/icons/firebase.svg"
            layout="responsive"
            width={12}
            height={12}
            alt="firebase"
          />
        </div>
        <div>
          <Image
            src="/images/icons/javascript.svg"
            layout="responsive"
            width={12}
            height={12}
            alt="javascript"
          />
        </div>
        <div>
          <Image
            src="/images/icons/html.svg"
            layout="responsive"
            width={12}
            height={12}
            alt="HTML"
          />
        </div>
        <div>
          <Image
            src="/images/icons/css.svg"
            layout="responsive"
            width={12}
            height={12}
            alt="CSS"
          />
        </div>
      </div>
      <div id="contact" className={`${styles.contact} container`}>
      <h5>Get in Touch!</h5>
        <div className={styles.social}>
          <a tabIndex={0} href="https://linkedin.com/in/enzo-ponferrada">
            <Image src="/images/icons/linkedin.svg" width={28} height={28} />
            LinkedIn
          </a>
          <a tabIndex={0} href="https://github.com/enzoponf3">
            <Image src="/images/icons/github.svg" width={28} height={28} />
            Git Hub
          </a>
          <a tabIndex={0} href="https://drive.google.com/file/d/1NjKFIq_DL1KYIYlaBr8ySqeFmTAW4uSv/view?usp=sharing">
            <Image src="/images/icons/download.svg" width={28} height={28} />
            PDF - Resume
          </a>
        </div>
        <div className={styles.mail}>
          <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter Your Email"/>
            <label>Message</label>
            <textarea name="message" placeholder="Enter Your Message"/>
            <button disabled={disabled}>Send Message</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = await import("../public/projects.json").then((r) => r.default)
  return {
    props: {
      projects,
    },
  };
}

export default Index;
