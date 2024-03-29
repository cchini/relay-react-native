/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Post_post$ref = any;
type Post_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListPage_viewer$ref: FragmentReference;
export type ListPage_viewer = {|
  +allPosts: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +description: string,
        +imageUrl: string,
        +$fragmentRefs: Post_post$ref,
      |}
    |}>
  |},
  +$fragmentRefs: Post_viewer$ref,
  +$refType: ListPage_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ListPage_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "allPosts"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Post_viewer",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": "allPosts",
      "name": "__ListPage_allPosts_connection",
      "storageKey": null,
      "args": null,
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
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
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Post_post",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasPreviousPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "startCursor",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b71fedc39c21c07d84b5ec921b65e978';
module.exports = node;
