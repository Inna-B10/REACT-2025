// Very simple collection of error causes
export const errorCause = {
  connection: "Connection Error",
  client: "Client Error",
  backend: "Backend Error",
  corrupted: "Data corruption Error",
  unknown: "Unknown Error",
};

export async function fetchJson(url) {
  let data = null;
  let error = null;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status >= 400 && response.status < 500) {
        // Clientside error range
        error = errorCause.client;
      } else if (response.status < 600) {
        // Serverside error range
        error = errorCause.backend;
      } else {
        // Unkown error
        error = errorCause.unknown;
      }
    } else {
      // Parsing a json can result in an error
      try {
        data = await response.json();
      } catch (_) {
        error = errorCause.corrupted;
      }
    }
  } catch (_) {
    // Fetch throws when it can't connect to the server
    // like incorrect url or network issues
    error = errorCause.connection;
    return { data, error };
  }

  return { data, error };
}
