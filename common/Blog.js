import React from 'react'
import { gql, graphql } from 'react-apollo'

const schema = gql`
query Issues { 
  viewer {
    repository(name: "namelos") {
      issues(first: 100) {
        edges {
          node {
            id
            title
            body
            comments(first: 100) {
              edges {
                node {
                  id
                  body
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
const Comment = ({ comment }) => <li>
  <p>{comment.body}</p>
</li>

const Comments = ({ comments }) => <ul>
  { comments.edges.map(comment =>
    <Comment comment={comment.node} key={comment.node.id} /> ) }
</ul>

const Post = ({ post }) => <li>
  <p>{post.title}</p>
  <p>{post.body}</p>
  <Comments comments={post.comments} />
</li>

const Posts = ({ posts }) => <ul>
  { posts.edges.map(post => <Post post={post.node} key={post.node.id} />)}
</ul>

const Blog = ({ data }) => <div>
  { data.viewer && <Posts posts={data.viewer.repository.issues}/> }
</div>

export default graphql(schema)(Blog)
