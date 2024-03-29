import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import ResumeItem from "./ResumeItem"
import ResumeFeatured from "./ResumeFeatured"
import Subtitle from "../../Subtitle"

const query = graphql`
  {
    resumes: allStrapiResumes {
      nodes {
        id
        role
        show
        category
        company
        location
        names
        created_at
      }
    }
    notifications: allStrapiNotifications {
      nodes {
        notification
        id
      }
    }
  }
`

// get unique cateogories
const getCategories = items => {
  let tempItems = items.map(item => {
    return item.category
  })

  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = [...categories]
  // sort categories in alphabetical order
  categories = categories.sort((a, b) => (a > b ? 1 : -1))
  return categories
}

const ResumeList = () => {
  const {
    resumes: { nodes: resume },
    notifications: { nodes: notification },
  } = useStaticQuery(query)

  // array of unique categories
  const [categories] = useState(getCategories(resume))
  categories.splice(2, 1)
  categories.splice(0, 0, "c3audio")

  // sort resume item according to created time & display each resume item
  const renderList = categoryResume =>
    resume
      .sort((a, b) => (b.created_at > a.created_at ? 1 : -1))
      .map(item => {
        if (item.category === categoryResume) {
          return <ResumeItem key={item.id} item={item} />
        }
        return null
      })

  // convert title
  const switchTitle = category => {
    switch (category) {
      case "a1theatre":
        return "theatre"
      case "b2film":
        return "film & television"
      case "c3audio":
        return "voice over"
      case "d4directing":
        return "directing"
      case "e5vocal":
        return "vocal coaching"
      case "f6writing":
        return "dramaturgy & writing"
      case "g7training":
        return "training"
      default:
        return "default"
    }
  }

  return (
    <ResumeWrapper>
      <div className="max-width">
        <Subtitle subtitle="SELECTED CREDITS" credits />
        <div className="resume-column">
          <div className="resume-content">
            {categories.map((item, index) => {
              return (
                <div key={index} className="resume-item">
                  <h1 className="resume-category">{switchTitle(item)}</h1>
                  {renderList(item)}
                </div>
              )
            })}
            {/* contact button */}
            <Link to="/contact" className="about-btn-container">
              <button className="btn about-btn">contact for full resume</button>
            </Link>
          </div>
          {/* resume sidebar */}
          <div className="resume-featured">
            <ResumeFeatured notification={notification} />
          </div>
        </div>
      </div>
    </ResumeWrapper>
  )
}

const ResumeWrapper = styled.section`
  padding: 3rem 1rem;
  margin: 3rem auto;

  .resume-column {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .resume-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .resume-featured {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .resume-item {
    padding: 24px 0;
    padding: 1.5rem 0;
  }

  .resume-category {
    text-transform: uppercase;
    margin: 16px 0;
    margin: 1rem 0;
    letter-spacing: 1.6px;
    letter-spacing: 0.1rem;
    display: inline-block;
    color: var(--lighterPurple);
  }

  .about-btn-container {
    margin: 48px 0;
    margin: 3rem 0;
    text-align: center;
  }

  @media (min-width: 768px) {
    .resume-column {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }

    .resume-content {
      -webkit-box-flex: 3;
      -ms-flex: 3;
      flex: 3;
      padding-right: 1rem;
    }

    .resume-featured {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    .about-btn-container {
      margin: 3rem 0;
      text-align: left;
    }
  }

  @media (min-width: 996px) {
    padding: 7rem;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`

export default ResumeList
