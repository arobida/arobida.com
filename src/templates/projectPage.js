import React from 'react'
import { Link, graphlql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { FaGithub } from 'react-icons/fa'
import Ext_link from '../components/ext_link'

const ProjectPage = data => {
  console.log(data)
  const project = data.pageContext
  return (
    <Layout>
      <Seo title={project.name} />
      <h1 style={{ textTransform: 'uppercase' }}>{project.name}</h1>
      <p>{project.description}</p>
      <Ext_link href={project.github}>
        <FaGithub />
      </Ext_link>
      {project.preview === null || '' ? (
        <span style={{ marginLeft: '15px' }}>No Preview</span>
      ) : (
        <Ext_link href={project.preview} styles={{ marginLeft: '20px' }}>
          Preview
        </Ext_link>
      )}

      <h3>
        <Link to="/projects/">Go Back to the projects</Link>
      </h3>
    </Layout>
  )
}

// export const ProjectQuery = graphql`
//   query project($id: String!) {

//   }
// `

export default ProjectPage
