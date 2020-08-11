import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import leaf from '../images/leaf.svg';

const query = graphql`
  {
     title:allStrapiTitles {
      nodes {
        id
        name
        pageName
        pageSubtitle
        pageTitle
      }
    }
  }
`

const Title = ({ page }) => {
  const data = useStaticQuery(query);
  return (
    <TitleWrapper>
      {data.title.nodes.map(({
        pageTitle, pageSubtitle, name, id, pageName
      }) => {
        if (pageName === page) {
          return (
            <div key={id}>
              <h1 className="title">{pageTitle}</h1><br />
              <img src={leaf} className="leaf" alt="leaf" />
              <ReactMarkdown source={pageSubtitle} className="subtitle" />
              {name ? <p className="quote-author">- {name}</p> : null}

            </div>
          )
        }
        return null;
      })}
    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
margin: 0 1rem 2rem;
text-align:center;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:column;
flex-direction:column;

.title{
  font-family: var(--titleFont);
  font-size: 40px;
  font-size:2.5rem;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 400;
}

.subtitle{
  font-size: 19.2px;
  font-size:1.2rem;
  padding:1rem 0;
  font-weight: 300;
}

.subtitle p{
  padding-bottom: 1rem;
}

.subtitle a {
  color: blue;
}

.quote-author{
  font-family: "Margetha";
  font-size: 1.8rem;
}

.leaf{
  width: 50%;
  margin: 0 auto;
}

.dash-icon{
  vertical-align:middle;
}

@media (min-width: 996px) {
  margin:0 auto 5rem;

  .title{
    font-size:3.7rem;
  }  

  .subtitle{
    padding:1rem;
  }
  
  .leaf{
    width: 20%;
  }

  .subtitle span {
    margin-left: 30rem;
  }

  .quote-author{
    margin-left: 30rem;
  }
}
`;

export default Title