/**
 * @flow
 * @relayHash 95fe3b86e8ee412f7edab349fba8530e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeViewerQueryVariables = {||};
export type HomeViewerQueryResponse = {|
  +viewer: {|
    +allPosts: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +description: string,
          +imageUrl: string,
        |}
      |}>
    |}
  |}
|};
export type HomeViewerQuery = {|
  variables: HomeViewerQueryVariables,
  response: HomeViewerQueryResponse,
|};
*/


/*
query HomeViewerQuery {
  viewer {
    allPosts(last: 100, orderBy: createdAt_DESC) {
      edges {
        node {
          id
          description
          imageUrl
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allPosts",
  "storageKey": "allPosts(last:100,orderBy:\"createdAt_DESC\")",
  "args": [
    {
      "kind": "Literal",
      "name": "last",
      "value": 100,
      "type": "Int"
    },
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": "createdAt_DESC",
      "type": "PostOrderBy"
    }
  ],
  "concreteType": "PostConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "PostEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Post",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "description",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "imageUrl",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomeViewerQuery",
  "id": null,
  "text": "query HomeViewerQuery {\n  viewer {\n    allPosts(last: 100, orderBy: createdAt_DESC) {\n      edges {\n        node {\n          id\n          description\n          imageUrl\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomeViewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeViewerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v1,
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b13ad5e8a8670d80259951eb38688b9c';
module.exports = node;
