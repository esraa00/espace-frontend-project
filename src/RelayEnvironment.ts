import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";

const HTTP_ENDPOINT = "http://localhost:3000/graphql";

const fetchFn: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept:
        "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzAyNDI1NTQzLCJleHAiOjE3MDI0MjkxNDMsImp0aSI6IjliOWViNjNkLTc0YzgtNGJlOC04ZjViLWUzMTEzNjAzY2UxYyJ9.QV-gkE0w_c1a9Kk9Nt2Yega6r6agNEQtQ65BdhmvE10",
    },
    body: JSON.stringify({
      query: request.text, // <-- The GraphQL document composed by Relay
      variables,
    }),
  });
  return await resp.json();
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
