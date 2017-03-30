import React from 'react'
import { gql, graphql } from 'react-apollo'

const Comment = ({ comment }) => <li>
  <p>{comment.body}</p>
</li>

Comment.fragments = {
  comment: gql`
    fragment Comment on Comment {
      id
      body
    }
  `
}

const Comments = ({ comments }) => <ul>
  { comments.edges.map(comment =>
    <Comment comment={comment.node} key={comment.node.id} /> ) }
</ul>

const Post = ({ post }) => <li>
  <p>{post.title}</p>
  <p>{post.body}</p>
  <Comments comments={post.comments} />
</li>

Post.fragments = {
  post: gql`
    fragment Issue on Issue {
      id
      title
      body
      comments(first: 100) {
        edges {
          node {
            ...Comment
          }
        }
      }
    }
    ${Comment.fragments.comment}
  `
}

const Posts = ({ posts }) => <ul>
  { posts.edges.map(post => <Post post={post.node} key={post.node.id} />)}
</ul>

const Blog = ({ data }) => <div>
  { data.viewer && <Posts posts={data.viewer.repository.issues}/> }
</div>

const schema = gql`
query Issues { 
  viewer {
    repository(name: "namelos") {
      issues(first: 100) {
        edges {
          node {
            ...Issue
          }
        }
      }
    }
  }
}
${Post.fragments.post}
`
export default graphql(schema)(Blog)
