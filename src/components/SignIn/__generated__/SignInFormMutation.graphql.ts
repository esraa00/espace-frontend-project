/**
 * @generated SignedSource<<2fd5065ffad7caa1a6fc01b7bea29a64>>
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
    readonly bearerToken: string | null | undefined;
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
            "name": "user"
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bearerToken",
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
    "cacheID": "774b7f1dfed8cc199c7df1d9d4d8c4f1",
    "id": null,
    "metadata": {},
    "name": "SignInFormMutation",
    "operationKind": "mutation",
    "text": "mutation SignInFormMutation(\n  $usernameOrEmail: String!\n  $password: String!\n) {\n  signin(input: {user: {usernameOrEmail: $usernameOrEmail, password: $password}}) {\n    errors\n    bearerToken\n  }\n}\n"
  }
};
})();

(node as any).hash = "79dfb90a09e1ed4c28b1acbba9fde0f2";

export default node;
