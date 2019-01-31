import {
  graphql
} from 'react-relay'

const HomeViewerQuery = graphql`
  query HomeViewerQuery {
    viewer {
      allPosts(last: 100, orderBy: createdAt_DESC){
      edges {
        node {
          id
          description
          imageUrl
        }
      }
    }
    }
  }
`

export {
  HomeViewerQuery,
}
