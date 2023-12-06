/**
 * @generated SignedSource<<dd4ddbe10c2af218e2ebf03583ec865b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SignInFormMutation$variables = {
  password: string;
  usernameOrEmail: string;
};
export type SignInFormMutation$data = {
  readonly signin: {
    readonly errors: ReadonlyArray<string>;
  };
};
export type SignInFormMutation = {
  response: SignInFormMutation$data;
  variables: SignInFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "usernameOrEmail"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          },
          {
            "kind": "Variable",
            "name": "usernameOrEmail",
            "variableName": "usernameOrEmail"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "SignInResponse",
    "kind": "LinkedField",
    "name": "signin",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "errors",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SignInFormMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SignInFormMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "efee564c9cf7d1003ff9993d3570a58a",
    "id": null,
    "metadata": {},
    "name": "SignInFormMutation",
    "operationKind": "mutation",
    "text": "mutation SignInFormMutation(\n  $usernameOrEmail: String!\n  $password: String!\n) {\n  signin(input: {usernameOrEmail: $usernameOrEmail, password: $password}) {\n    errors\n  }\n}\n"
  }
};
})();

(node as any).hash = "4a9a618578290146e665cb06323b8bc1";

export default node;
