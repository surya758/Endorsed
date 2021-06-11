/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      profilePicture
      pushToken
      name
      deactivated
      mobNo
      password
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        profilePicture
        pushToken
        name
        deactivated
        mobNo
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      username
      title
      views
      upvotes
      price
      description
      releaseDate
      rating
      images
      createdAt
      updatedAt
      comments {
        items {
          id
          productID
          userID
          username
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      specification {
        id
        productID
        username
        ram
        storage
        resolution
        createdAt
        updatedAt
        product {
          id
          username
          title
          views
          upvotes
          price
          description
          releaseDate
          rating
          images
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        title
        views
        upvotes
        price
        description
        releaseDate
        rating
        images
        createdAt
        updatedAt
        comments {
          nextToken
        }
        specification {
          id
          productID
          username
          ram
          storage
          resolution
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      productID
      userID
      username
      content
      createdAt
      updatedAt
      user {
        id
        username
        email
        profilePicture
        pushToken
        name
        deactivated
        mobNo
        password
        createdAt
        updatedAt
      }
      product {
        id
        username
        title
        views
        upvotes
        price
        description
        releaseDate
        rating
        images
        createdAt
        updatedAt
        comments {
          nextToken
        }
        specification {
          id
          productID
          username
          ram
          storage
          resolution
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        userID
        username
        content
        createdAt
        updatedAt
        user {
          id
          username
          email
          profilePicture
          pushToken
          name
          deactivated
          mobNo
          password
          createdAt
          updatedAt
        }
        product {
          id
          username
          title
          views
          upvotes
          price
          description
          releaseDate
          rating
          images
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      id
      userID
      productID
      username
      rating
      createdAt
      updatedAt
      user {
        id
        username
        email
        profilePicture
        pushToken
        name
        deactivated
        mobNo
        password
        createdAt
        updatedAt
      }
      product {
        id
        username
        title
        views
        upvotes
        price
        description
        releaseDate
        rating
        images
        createdAt
        updatedAt
        comments {
          nextToken
        }
        specification {
          id
          productID
          username
          ram
          storage
          resolution
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        productID
        username
        rating
        createdAt
        updatedAt
        user {
          id
          username
          email
          profilePicture
          pushToken
          name
          deactivated
          mobNo
          password
          createdAt
          updatedAt
        }
        product {
          id
          username
          title
          views
          upvotes
          price
          description
          releaseDate
          rating
          images
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getSpecification = /* GraphQL */ `
  query GetSpecification($id: ID!) {
    getSpecification(id: $id) {
      id
      productID
      username
      ram
      storage
      resolution
      createdAt
      updatedAt
      product {
        id
        username
        title
        views
        upvotes
        price
        description
        releaseDate
        rating
        images
        createdAt
        updatedAt
        comments {
          nextToken
        }
        specification {
          id
          productID
          username
          ram
          storage
          resolution
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listSpecifications = /* GraphQL */ `
  query ListSpecifications(
    $filter: ModelSpecificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        username
        ram
        storage
        resolution
        createdAt
        updatedAt
        product {
          id
          username
          title
          views
          upvotes
          price
          description
          releaseDate
          rating
          images
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
