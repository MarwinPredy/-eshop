import React from 'react';
import {graphql} from 'gatsby';

const articleTemplate = ({data}) =>{
    return(
        <div>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
        </div>
    )
}

export default articleTemplate;

export const query = graphql`
query($path: String!){
    markdownRemark(frontmatter: {path: {eq:$path}}){
        frontmatter{
            title
        }
    }
}`