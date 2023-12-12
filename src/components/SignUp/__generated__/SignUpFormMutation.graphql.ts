/**
 * @generated SignedSource<<079bd15190b2bf5f8635b4ee2fd156dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SignUpFormMutation$variables = {
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
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "passwordConfirmation"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
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
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SignUpFormMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "SignUpFormMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "4080acdfbabacbfa927c759dcb427603",
    "id": null,
    "metadata": {},
    "name": "SignUpFormMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpFormMutation(\n  $username: String!\n  $email: String!\n  $password: String!\n  $passwordConfirmation: String!\n) {\n  signup(input: {username: $username, email: $email, password: $password, passwordConfirmation: $passwordConfirmation}) {\n    errors\n  }\n}\n"
  }
};
})();

(node as any).hash = "749286803effd88ba256581e7d265087";

export default node;
