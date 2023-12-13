/**
 * @generated SignedSource<<82e7012dd62d7f67d5614b2e691ef0fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SignUpFormMutation$variables = {
  displayName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  username: string;
};
export type SignUpFormMutation$data = {
  readonly signup: {
    readonly errors: ReadonlyArray<string>;
  };
};
export type SignUpFormMutation = {
  response: SignUpFormMutation$data;
  variables: SignUpFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "displayName"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "passwordConfirmation"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "displayName",
            "variableName": "displayName"
          },
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          },
          {
            "kind": "Variable",
            "name": "passwordConfirmation",
            "variableName": "passwordConfirmation"
          },
          {
            "kind": "Variable",
            "name": "username",
            "variableName": "username"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "SignupResponse",
    "kind": "LinkedField",
    "name": "signup",
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SignUpFormMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "SignUpFormMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "2ca7054ceb22cf505804c03a918fbbe3",
    "id": null,
    "metadata": {},
    "name": "SignUpFormMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpFormMutation(\n  $displayName: String!\n  $username: String!\n  $email: String!\n  $password: String!\n  $passwordConfirmation: String!\n) {\n  signup(input: {displayName: $displayName, username: $username, email: $email, password: $password, passwordConfirmation: $passwordConfirmation}) {\n    errors\n  }\n}\n"
  }
};
})();

(node as any).hash = "3c83f0e3a7076ba51bc6431ccd2e523b";

export default node;
