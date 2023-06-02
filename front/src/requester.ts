import { viewUpdater } from "./updater";

// requête sur la route /subscriptions
export async function requestHandler(url: string) {
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    if (data.success) {
      viewUpdater(data.references); // OK
    } else {
      // handle empty response
      viewUpdater([]);
      console.warn("Request returned ok with no data.");
    }
  } else {
    // handle failed request
    console.error(`ERROR: request failed with status code ${response.status}`);
  }
}
