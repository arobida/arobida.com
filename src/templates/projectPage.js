import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { FaGithub } from 'react-icons/fa'
import {IoIosArrowBack } from 'react-icons/io'
import ExtLink from '../components/ext_link'

const win = typeof window !== 'undefined' ? window : null

const ProjectPage = data => {
  const project = data.pageContext
  return (
    <Layout>
      <Seo title={project.name} author />
      <div>
      <h1 style={{ textTransform: 'uppercase' }}>{project.name}</h1>
      <img src={project.image} alt="project picture" style={{width:'80%'}} />
      <p>{project.description}</p>
      <ExtLink href={project.github}>
        <FaGithub />
      </ExtLink>
      {project.preview === null || '' ? (
        <span style={{ marginLeft: '15px' }}>No Preview</span>
      ) : (
        <ExtLink href={project.preview} styles={{ marginLeft: '20px' }}>
          Preview
        </ExtLink>
      )}
      <div onClick={() => win.history.back()} style={{cursor:'pointer', color:'#ffb237',marginLeft:'-1em'}}>
        <IoIosArrowBack size="2em" style={{transform:"translateY(30%)"}}/>
        Go Back
      </div>
      </div>
    </Layout>
  )
}

// export const ProjectQuery = graphql`
//   query project($id: String!) {

//   }
// `

export default ProjectPage
