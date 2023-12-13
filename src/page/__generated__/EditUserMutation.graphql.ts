/**
 * @generated SignedSource<<2f9cbceb94f13f52f1c88f8f934d615c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EditUserMutation$variables = {
  currentPassword?: string | null | undefined;
  displayName: string;
  email: string;
  id: string;
  newPassword?: string | null | undefined;
  newPasswordConfirmation?: string | null | undefined;
  username: string;
};
export type EditUserMutation$data = {
  readonly editUser: {
    readonly errors: ReadonlyArray<string>;
  };
};
export type EditUserMutation = {
  response: EditUserMutation$data;
  variables: EditUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "currentPassword"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "displayName"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newPassword"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newPasswordConfirmation"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v7 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "currentPassword",
            "variableName": "currentPassword"
          },
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
            "name": "id",
            "variableName": "id"
          },
          {
            "kind": "Variable",
            "name": "newPassword",
            "variableName": "newPassword"
          },
          {
            "kind": "Variable",
            "name": "newPasswordConfirmation",
            "variableName": "newPasswordConfirmation"
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
    "concreteType": "EditUserResponse",
    "kind": "LinkedField",
    "name": "editUser",
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
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditUserMutation",
    "selections": (v7/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v1/*: any*/),
      (v6/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditUserMutation",
    "selections": (v7/*: any*/)
  },
  "params": {
    "cacheID": "ba79f2e4649aa03bf9678b1a002d82e4",
    "id": null,
    "metadata": {},
    "name": "EditUserMutation",
    "operationKind": "mutation",
    "text": "mutation EditUserMutation(\n  $id: String!\n  $displayName: String!\n  $username: String!\n  $email: String!\n  $currentPassword: String\n  $newPassword: String\n  $newPasswordConfirmation: String\n) {\n  editUser(input: {id: $id, displayName: $displayName, username: $username, email: $email, currentPassword: $currentPassword, newPassword: $newPassword, newPasswordConfirmation: $newPasswordConfirmation}) {\n    errors\n  }\n}\n"
  }
};
})();

(node as any).hash = "37d63a6775dac1ca24856eeaf9afb3e4";

export default node;
