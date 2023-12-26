import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";

const HTTP_ENDPOINT = "http://localhost:3000/graphql";

const fetchFn: FetchFunction = async (
  request,
  variables,
  cacheConfig,
  uploadables
) => {
  const requestToBeSent = {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };
  if (uploadables) {
    if (!window.FormData) {
      throw new Error("Uploading files without `FormData` not supported.");
    }
    const formData = new FormData();
    formData.append("query", request.text);
    formData.append("variables", JSON.stringify(variables));

    Object.keys(uploadables).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
        formData.append(key, uploadables[key]);
      }
    });
    requestToBeSent.body = formData;
  } else {
    requestToBeSent.headers["Content-Type"] = "application/json";
    requestToBeSent.body = JSON.stringify({
      query: request.text,
      variables,
    });
  }
  return await fetch(HTTP_ENDPOINT, requestToBeSent)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }

      // HTTP errors
      // TODO: NOT sure what to do here yet
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
