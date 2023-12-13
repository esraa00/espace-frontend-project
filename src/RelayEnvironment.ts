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
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzAyNDkzMjc5LCJleHAiOjE3MDI0OTY4NzksImp0aSI6IjMwNzM5ODA4LTg4MTgtNGFlMS1iY2RhLTNmOTRhYzJjNjEwNiJ9.f2Bh9ZtFxq3GEeZVunYcR7OHwxZhzd8IA-Zitr-IOwU",
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
