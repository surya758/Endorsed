/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  profilePicture?: string | null,
  pushToken?: string | null,
  name: string,
  deactivated: boolean,
  mobNo?: string | null,
  password: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  name?: ModelStringInput | null,
  deactivated?: ModelBooleanInput | null,
  mobNo?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  profilePicture?: string | null,
  pushToken?: string | null,
  name: string,
  deactivated: boolean,
  mobNo?: string | null,
  password: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  profilePicture?: string | null,
  pushToken?: string | null,
  name?: string | null,
  deactivated?: boolean | null,
  mobNo?: string | null,
  password?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  username: string,
  title: string,
  views: number,
  upvotes: number,
  price: number,
  description: string,
  releaseDate?: string | null,
  rating: number,
  images: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  productSpecificationId: string,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  views?: ModelIntInput | null,
  upvotes?: ModelIntInput | null,
  price?: ModelIntInput | null,
  description?: ModelStringInput | null,
  releaseDate?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  images?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  username: string,
  title: string,
  views: number,
  upvotes: number,
  price: number,
  description: string,
  releaseDate?: string | null,
  rating: number,
  images: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  comments?: ModelCommentConnection | null,
  specification: Specification,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  productID: string,
  userID: string,
  username: string,
  content: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User | null,
  product?: Product | null,
};

export type Specification = {
  __typename: "Specification",
  id: string,
  productID: string,
  username: string,
  ram: number,
  storage: number,
  resolution: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  product?: Product | null,
};

export type UpdateProductInput = {
  id: string,
  username?: string | null,
  title?: string | null,
  views?: number | null,
  upvotes?: number | null,
  price?: number | null,
  description?: string | null,
  releaseDate?: string | null,
  rating?: number | null,
  images?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  productSpecificationId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  productID: string,
  userID: string,
  username: string,
  content: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCommentConditionInput = {
  productID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  productID?: string | null,
  userID?: string | null,
  username?: string | null,
  content?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateRatingInput = {
  id?: string | null,
  userID: string,
  productID: string,
  username: string,
  rating: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelRatingConditionInput = {
  userID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRatingConditionInput | null > | null,
  or?: Array< ModelRatingConditionInput | null > | null,
  not?: ModelRatingConditionInput | null,
};

export type Rating = {
  __typename: "Rating",
  id: string,
  userID: string,
  productID: string,
  username: string,
  rating: number,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User | null,
  product?: Product | null,
};

export type UpdateRatingInput = {
  id: string,
  userID?: string | null,
  productID?: string | null,
  username?: string | null,
  rating?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteRatingInput = {
  id: string,
};

export type CreateSpecificationInput = {
  id?: string | null,
  productID: string,
  username: string,
  ram: number,
  storage: number,
  resolution: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  specificationProductId?: string | null,
};

export type ModelSpecificationConditionInput = {
  productID?: ModelIDInput | null,
  ram?: ModelIntInput | null,
  storage?: ModelIntInput | null,
  resolution?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSpecificationConditionInput | null > | null,
  or?: Array< ModelSpecificationConditionInput | null > | null,
  not?: ModelSpecificationConditionInput | null,
};

export type UpdateSpecificationInput = {
  id: string,
  productID?: string | null,
  username?: string | null,
  ram?: number | null,
  storage?: number | null,
  resolution?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  specificationProductId?: string | null,
};

export type DeleteSpecificationInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  name?: ModelStringInput | null,
  deactivated?: ModelBooleanInput | null,
  mobNo?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  title?: ModelStringInput | null,
  views?: ModelIntInput | null,
  upvotes?: ModelIntInput | null,
  price?: ModelIntInput | null,
  description?: ModelStringInput | null,
  releaseDate?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  images?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items?:  Array<Product | null > | null,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelRatingFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRatingFilterInput | null > | null,
  or?: Array< ModelRatingFilterInput | null > | null,
  not?: ModelRatingFilterInput | null,
};

export type ModelRatingConnection = {
  __typename: "ModelRatingConnection",
  items?:  Array<Rating | null > | null,
  nextToken?: string | null,
};

export type ModelSpecificationFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  ram?: ModelIntInput | null,
  storage?: ModelIntInput | null,
  resolution?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSpecificationFilterInput | null > | null,
  or?: Array< ModelSpecificationFilterInput | null > | null,
  not?: ModelSpecificationFilterInput | null,
};

export type ModelSpecificationConnection = {
  __typename: "ModelSpecificationConnection",
  items?:  Array<Specification | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profilePicture?: string | null,
    pushToken?: string | null,
    name: string,
    deactivated: boolean,
    mobNo?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profilePicture?: string | null,
    pushToken?: string | null,
    name: string,
    deactivated: boolean,
    mobNo?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profilePicture?: string | null,
    pushToken?: string | null,
    name: string,
    deactivated: boolean,
    mobNo?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    username: string,
    title: string,
    views: number,
    upvotes: number,
    price: number,
    description: string,
    releaseDate?: string | null,
    rating: number,
    images: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        productID: string,
        userID: string,
        username: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    specification:  {
      __typename: "Specification",
      id: string,
      productID: string,
      username: string,
      ram: number,
      storage: number,
      resolution: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      product?:  {
        __typename: "Product",
        id: string,
        username: string,
        title: string,
        views: number,
        upvotes: number,
        price: number,
        description: string,
        releaseDate?: string | null,
        rating: number,
        images: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
    },
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    username: string,
    title: string,
    views: number,
    upvotes: number,
    price: number,
    description: string,
    releaseDate?: string | null,
    rating: number,
    images: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        productID: string,
        userID: string,
        username: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    specification:  {
      __typename: "Specification",
      id: string,
      productID: string,
      username: string,
      ram: number,
      storage: number,
      resolution: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      product?:  {
        __typename: "Product",
        id: string,
        username: string,
        title: string,
        views: number,
        upvotes: number,
        price: number,
        description: string,
        releaseDate?: string | null,
        rating: number,
        images: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
    },
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    username: string,
    title: string,
    views: number,
    upvotes: number,
    price: number,
    description: string,
    releaseDate?: string | null,
    rating: number,
    images: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        productID: string,
        userID: string,
        username: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    specification:  {
      __typename: "Specification",
      id: string,
      productID: string,
      username: string,
      ram: number,
      storage: number,
      resolution: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      product?:  {
        __typename: "Product",
        id: string,
        username: string,
        title: string,
        views: number,
        upvotes: number,
        price: number,
        description: string,
        releaseDate?: string | null,
        rating: number,
        images: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
    },
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    productID: string,
    userID: string,
    username: string,
    content: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profilePicture?: string | null,
      pushToken?: string | null,
      name: string,
      deactivated: boolean,
      mobNo?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    productID: string,
    userID: string,
    username: string,
    content: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profilePicture?: string | null,
      pushToken?: string | null,
      name: string,
      deactivated: boolean,
      mobNo?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    productID: string,
    userID: string,
    username: string,
    content: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profilePicture?: string | null,
      pushToken?: string | null,
      name: string,
      deactivated: boolean,
      mobNo?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type CreateRatingMutationVariables = {
  input: CreateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type CreateRatingMutation = {
  createRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    productID: string,
    username: string,
    rating: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profilePicture?: string | null,
      pushToken?: string | null,
      name: string,
      deactivated: boolean,
      mobNo?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type UpdateRatingMutationVariables = {
  input: UpdateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type UpdateRatingMutation = {
  updateRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    productID: string,
    username: string,
    rating: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profilePicture?: string | null,
      pushToken?: string | null,
      name: string,
      deactivated: boolean,
      mobNo?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type DeleteRatingMutationVariables = {
  input: DeleteRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type DeleteRatingMutation = {
  deleteRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    productID: string,
    username: string,
    rating: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profilePicture?: string | null,
      pushToken?: string | null,
      name: string,
      deactivated: boolean,
      mobNo?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type CreateSpecificationMutationVariables = {
  input: CreateSpecificationInput,
  condition?: ModelSpecificationConditionInput | null,
};

export type CreateSpecificationMutation = {
  createSpecification?:  {
    __typename: "Specification",
    id: string,
    productID: string,
    username: string,
    ram: number,
    storage: number,
    resolution: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type UpdateSpecificationMutationVariables = {
  input: UpdateSpecificationInput,
  condition?: ModelSpecificationConditionInput | null,
};

export type UpdateSpecificationMutation = {
  updateSpecification?:  {
    __typename: "Specification",
    id: string,
    productID: string,
    username: string,
    ram: number,
    storage: number,
    resolution: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type DeleteSpecificationMutationVariables = {
  input: DeleteSpecificationInput,
  condition?: ModelSpecificationConditionInput | null,
};

export type DeleteSpecificationMutation = {
  deleteSpecification?:  {
    __typename: "Specification",
    id: string,
    productID: string,
    username: string,
    ram: number,
    storage: number,
    resolution: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profilePicture?: string | null,
    pushToken?: string | null,
    name: string,
    deactivated: boolean,
    mobNo?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profilePicture?: string | null,
      pushToken?: string | null,
      name: string,
      deactivated: boolean,
      mobNo?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    username: string,
    title: string,
    views: number,
    upvotes: number,
    price: number,
    description: string,
    releaseDate?: string | null,
    rating: number,
    images: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        productID: string,
        userID: string,
        username: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    specification:  {
      __typename: "Specification",
      id: string,
      productID: string,
      username: string,
      ram: number,
      storage: number,
      resolution: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      product?:  {
        __typename: "Product",
        id: string,
        username: string,
        title: string,
        views: number,
        upvotes: number,
        price: number,
        description: string,
        releaseDate?: string | null,
        rating: number,
        images: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
    },
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    productID: string,
    userID: string,
    username: string,
    content: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profilePicture?: string | null,
      pushToken?: string | null,
      name: string,
      deactivated: boolean,
      mobNo?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      productID: string,
      userID: string,
      username: string,
      content: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        profilePicture?: string | null,
        pushToken?: string | null,
        name: string,
        deactivated: boolean,
        mobNo?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      product?:  {
        __typename: "Product",
        id: string,
        username: string,
        title: string,
        views: number,
        upvotes: number,
        price: number,
        description: string,
        releaseDate?: string | null,
        rating: number,
        images: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRatingQueryVariables = {
  id: string,
};

export type GetRatingQuery = {
  getRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    productID: string,
    username: string,
    rating: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profilePicture?: string | null,
      pushToken?: string | null,
      name: string,
      deactivated: boolean,
      mobNo?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type ListRatingsQueryVariables = {
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRatingsQuery = {
  listRatings?:  {
    __typename: "ModelRatingConnection",
    items?:  Array< {
      __typename: "Rating",
      id: string,
      userID: string,
      productID: string,
      username: string,
      rating: number,
      createdAt?: string | null,
      updatedAt?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        profilePicture?: string | null,
        pushToken?: string | null,
        name: string,
        deactivated: boolean,
        mobNo?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      product?:  {
        __typename: "Product",
        id: string,
        username: string,
        title: string,
        views: number,
        upvotes: number,
        price: number,
        description: string,
        releaseDate?: string | null,
        rating: number,
        images: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSpecificationQueryVariables = {
  id: string,
};

export type GetSpecificationQuery = {
  getSpecification?:  {
    __typename: "Specification",
    id: string,
    productID: string,
    username: string,
    ram: number,
    storage: number,
    resolution: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      username: string,
      title: string,
      views: number,
      upvotes: number,
      price: number,
      description: string,
      releaseDate?: string | null,
      rating: number,
      images: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      specification:  {
        __typename: "Specification",
        id: string,
        productID: string,
        username: string,
        ram: number,
        storage: number,
        resolution: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null,
  } | null,
};

export type ListSpecificationsQueryVariables = {
  filter?: ModelSpecificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpecificationsQuery = {
  listSpecifications?:  {
    __typename: "ModelSpecificationConnection",
    items?:  Array< {
      __typename: "Specification",
      id: string,
      productID: string,
      username: string,
      ram: number,
      storage: number,
      resolution: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      product?:  {
        __typename: "Product",
        id: string,
        username: string,
        title: string,
        views: number,
        upvotes: number,
        price: number,
        description: string,
        releaseDate?: string | null,
        rating: number,
        images: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};
