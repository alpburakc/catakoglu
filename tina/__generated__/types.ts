//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  basin: Basin;
  basinConnection: BasinConnection;
  posttr: Posttr;
  posttrConnection: PosttrConnection;
  postfr: Postfr;
  postfrConnection: PostfrConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryBasinArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryBasinConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<BasinFilter>;
};


export type QueryPosttrArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPosttrConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PosttrFilter>;
};


export type QueryPostfrArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPostfrConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PostfrFilter>;
};

export type DocumentFilter = {
  basin?: InputMaybe<BasinFilter>;
  posttr?: InputMaybe<PosttrFilter>;
  postfr?: InputMaybe<PostfrFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<DocumentFilter>;
};

export type DocumentNode = Basin | Posttr | Postfr;

export type Basin = Node & Document & {
  __typename?: 'Basin';
  title: Scalars['String'];
  date?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  kanal?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
};

export type BasinFilter = {
  title?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  youtube?: InputMaybe<StringFilter>;
  kanal?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type BasinConnectionEdges = {
  __typename?: 'BasinConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Basin>;
};

export type BasinConnection = Connection & {
  __typename?: 'BasinConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<BasinConnectionEdges>>>;
};

export type Posttr = Node & Document & {
  __typename?: 'Posttr';
  title: Scalars['String'];
  date?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type ImageFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PosttrFilter = {
  title?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  image?: InputMaybe<ImageFilter>;
  description?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type PosttrConnectionEdges = {
  __typename?: 'PosttrConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Posttr>;
};

export type PosttrConnection = Connection & {
  __typename?: 'PosttrConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PosttrConnectionEdges>>>;
};

export type Postfr = Node & Document & {
  __typename?: 'Postfr';
  title: Scalars['String'];
  date?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type PostfrFilter = {
  title?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  image?: InputMaybe<ImageFilter>;
  description?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type PostfrConnectionEdges = {
  __typename?: 'PostfrConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Postfr>;
};

export type PostfrConnection = Connection & {
  __typename?: 'PostfrConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PostfrConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateBasin: Basin;
  createBasin: Basin;
  updatePosttr: Posttr;
  createPosttr: Posttr;
  updatePostfr: Postfr;
  createPostfr: Postfr;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateBasinArgs = {
  relativePath: Scalars['String'];
  params: BasinMutation;
};


export type MutationCreateBasinArgs = {
  relativePath: Scalars['String'];
  params: BasinMutation;
};


export type MutationUpdatePosttrArgs = {
  relativePath: Scalars['String'];
  params: PosttrMutation;
};


export type MutationCreatePosttrArgs = {
  relativePath: Scalars['String'];
  params: PosttrMutation;
};


export type MutationUpdatePostfrArgs = {
  relativePath: Scalars['String'];
  params: PostfrMutation;
};


export type MutationCreatePostfrArgs = {
  relativePath: Scalars['String'];
  params: PostfrMutation;
};

export type DocumentUpdateMutation = {
  basin?: InputMaybe<BasinMutation>;
  posttr?: InputMaybe<PosttrMutation>;
  postfr?: InputMaybe<PostfrMutation>;
  relativePath?: InputMaybe<Scalars['String']>;
};

export type DocumentMutation = {
  basin?: InputMaybe<BasinMutation>;
  posttr?: InputMaybe<PosttrMutation>;
  postfr?: InputMaybe<PostfrMutation>;
};

export type BasinMutation = {
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
  kanal?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
};

export type PosttrMutation = {
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
};

export type PostfrMutation = {
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
};

export type BasinPartsFragment = { __typename?: 'Basin', title: string, date?: string | null, youtube?: string | null, kanal?: string | null, body?: any | null };

export type PosttrPartsFragment = { __typename?: 'Posttr', title: string, date?: string | null, image?: string | null, description?: string | null, url?: string | null, body?: any | null };

export type PostfrPartsFragment = { __typename?: 'Postfr', title: string, date?: string | null, image?: string | null, description?: string | null, url?: string | null, body?: any | null };

export type BasinQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type BasinQuery = { __typename?: 'Query', basin: { __typename?: 'Basin', id: string, title: string, date?: string | null, youtube?: string | null, kanal?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type BasinConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<BasinFilter>;
}>;


export type BasinConnectionQuery = { __typename?: 'Query', basinConnection: { __typename?: 'BasinConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'BasinConnectionEdges', cursor: string, node?: { __typename?: 'Basin', id: string, title: string, date?: string | null, youtube?: string | null, kanal?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type PosttrQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PosttrQuery = { __typename?: 'Query', posttr: { __typename?: 'Posttr', id: string, title: string, date?: string | null, image?: string | null, description?: string | null, url?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PosttrConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PosttrFilter>;
}>;


export type PosttrConnectionQuery = { __typename?: 'Query', posttrConnection: { __typename?: 'PosttrConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PosttrConnectionEdges', cursor: string, node?: { __typename?: 'Posttr', id: string, title: string, date?: string | null, image?: string | null, description?: string | null, url?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type PostfrQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PostfrQuery = { __typename?: 'Query', postfr: { __typename?: 'Postfr', id: string, title: string, date?: string | null, image?: string | null, description?: string | null, url?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PostfrConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PostfrFilter>;
}>;


export type PostfrConnectionQuery = { __typename?: 'Query', postfrConnection: { __typename?: 'PostfrConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PostfrConnectionEdges', cursor: string, node?: { __typename?: 'Postfr', id: string, title: string, date?: string | null, image?: string | null, description?: string | null, url?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const BasinPartsFragmentDoc = gql`
    fragment BasinParts on Basin {
  title
  date
  youtube
  kanal
  body
}
    `;
export const PosttrPartsFragmentDoc = gql`
    fragment PosttrParts on Posttr {
  title
  date
  image
  description
  url
  body
}
    `;
export const PostfrPartsFragmentDoc = gql`
    fragment PostfrParts on Postfr {
  title
  date
  image
  description
  url
  body
}
    `;
export const BasinDocument = gql`
    query basin($relativePath: String!) {
  basin(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BasinParts
  }
}
    ${BasinPartsFragmentDoc}`;
export const BasinConnectionDocument = gql`
    query basinConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BasinFilter) {
  basinConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BasinParts
      }
    }
  }
}
    ${BasinPartsFragmentDoc}`;
export const PosttrDocument = gql`
    query posttr($relativePath: String!) {
  posttr(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PosttrParts
  }
}
    ${PosttrPartsFragmentDoc}`;
export const PosttrConnectionDocument = gql`
    query posttrConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PosttrFilter) {
  posttrConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PosttrParts
      }
    }
  }
}
    ${PosttrPartsFragmentDoc}`;
export const PostfrDocument = gql`
    query postfr($relativePath: String!) {
  postfr(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostfrParts
  }
}
    ${PostfrPartsFragmentDoc}`;
export const PostfrConnectionDocument = gql`
    query postfrConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostfrFilter) {
  postfrConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostfrParts
      }
    }
  }
}
    ${PostfrPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      basin(variables: BasinQueryVariables, options?: C): Promise<{data: BasinQuery, variables: BasinQueryVariables, query: string}> {
        return requester<{data: BasinQuery, variables: BasinQueryVariables, query: string}, BasinQueryVariables>(BasinDocument, variables, options);
      },
    basinConnection(variables?: BasinConnectionQueryVariables, options?: C): Promise<{data: BasinConnectionQuery, variables: BasinConnectionQueryVariables, query: string}> {
        return requester<{data: BasinConnectionQuery, variables: BasinConnectionQueryVariables, query: string}, BasinConnectionQueryVariables>(BasinConnectionDocument, variables, options);
      },
    posttr(variables: PosttrQueryVariables, options?: C): Promise<{data: PosttrQuery, variables: PosttrQueryVariables, query: string}> {
        return requester<{data: PosttrQuery, variables: PosttrQueryVariables, query: string}, PosttrQueryVariables>(PosttrDocument, variables, options);
      },
    posttrConnection(variables?: PosttrConnectionQueryVariables, options?: C): Promise<{data: PosttrConnectionQuery, variables: PosttrConnectionQueryVariables, query: string}> {
        return requester<{data: PosttrConnectionQuery, variables: PosttrConnectionQueryVariables, query: string}, PosttrConnectionQueryVariables>(PosttrConnectionDocument, variables, options);
      },
    postfr(variables: PostfrQueryVariables, options?: C): Promise<{data: PostfrQuery, variables: PostfrQueryVariables, query: string}> {
        return requester<{data: PostfrQuery, variables: PostfrQueryVariables, query: string}, PostfrQueryVariables>(PostfrDocument, variables, options);
      },
    postfrConnection(variables?: PostfrConnectionQueryVariables, options?: C): Promise<{data: PostfrConnectionQuery, variables: PostfrConnectionQueryVariables, query: string}> {
        return requester<{data: PostfrConnectionQuery, variables: PostfrConnectionQueryVariables, query: string}, PostfrConnectionQueryVariables>(PostfrConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars,
    });

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "http://localhost:4001/graphql", queries }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

  