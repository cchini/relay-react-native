/**
 * @flow
 * @relayHash 6ec40b6c2b702f19a6d4364a63b09a76
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LayoutViewerQueryVariables = {||};
export type LayoutViewerQueryResponse = {|
  +viewer: {|
    +id: string
  |}
|};
export type LayoutViewerQuery = {|
  variables: LayoutViewerQueryVariables,
  response: LayoutViewerQueryResponse,
|};
*/


/*
query LayoutViewerQuery {
  viewer {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "Viewer",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "LayoutViewerQuery",
  "id": null,
  "text": "query LayoutViewerQuery {\n  viewer {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LayoutViewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "LayoutViewerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fbcf65a6e2b6cdee6179f96ec03f6fdb';
module.exports = node;
