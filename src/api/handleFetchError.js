export default function handleFetchError(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw Error(response.status);
  }
}
