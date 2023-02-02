const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    seavedBooks: [Book]!
  }

  type Book {
    authors: [String]
    description: String
    title: String
    image: image
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(
      authors: [String!]
      description: String!
      title: String!
      bookId: ID!
    ): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
