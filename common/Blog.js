import React from 'react'
import { gql, graphql } from 'react-apollo'

const schema = gql`
query Issues { 
  viewer {
    repository(name: "namelos") {
      issues(first: 100) {
        edges {
          node {
            title
            body
            comments(first: 100) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
`

let Post = ({ post }) => <li>
  <p>{post.title}</p>
  <p>{post.body}</p>
</li>

let Posts = ({ posts }) => <ul>
  { posts.map((post, i) => <Post post={post.node} key={i} />)}
</ul>

let Blog = ({ data }) => <div>
  { data.viewer && <Posts posts={data.viewer.repository.issues.edges}/> }
</div>

export default graphql(schema)(Blog)
