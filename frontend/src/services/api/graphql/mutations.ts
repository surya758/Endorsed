/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
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
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
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
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
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
export const createSpecification = /* GraphQL */ `
  mutation CreateSpecification(
    $input: CreateSpecificationInput!
    $condition: ModelSpecificationConditionInput
  ) {
    createSpecification(input: $input, condition: $condition) {
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
export const updateSpecification = /* GraphQL */ `
  mutation UpdateSpecification(
    $input: UpdateSpecificationInput!
    $condition: ModelSpecificationConditionInput
  ) {
    updateSpecification(input: $input, condition: $condition) {
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
export const deleteSpecification = /* GraphQL */ `
  mutation DeleteSpecification(
    $input: DeleteSpecificationInput!
    $condition: ModelSpecificationConditionInput
  ) {
    deleteSpecification(input: $input, condition: $condition) {
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
