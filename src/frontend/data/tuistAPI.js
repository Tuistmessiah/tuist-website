import auth from "./auth.json";

// TODO: Choose BASE_URL based on environment
// TODO: Improve Error logging on HTTP request

const BASE_URL = auth.API_URL[auth.API_URL.auth_mode];
const BASIC_TOKEN = auth.basicToken;
const TUNO_ENTITY = "tuno";
const SECTION_ENTITY = "section";
const SOUND_ENTITY = "sound";

// API Endpoints

console.log({ BASE_URL });

/* Tuno */
export async function allTunos() {
  return fetchFromAPI(TUNO_ENTITY, "all", { method: "GET" });
}

/* Section */
export function fitleredSectionsByPage(page_ref) {
  return fetchFromAPI(SECTION_ENTITY, `page/${page_ref}`, {
    method: "GET",
  })
    .then((filteredArray) => {
      if (!filteredArray) {
        return [];
      }
      return filteredArray.map((section) => ({
        ...section,
        config: JSON.parse(section.config),
      }));
    })
    .then((filteredArray) =>
      arrayToObject(filteredArray, "section_name", "config")
    );
}

// INTERNALS

function fetchFromAPI(endpoint, url, { method, headers, body }) {
  return fetch(`${BASE_URL}/${endpoint}/${url}`, {
    method,
    headers: { ...headers, basicToken: BASIC_TOKEN },
    body,
  })
    .then((response) => response.json())
    .then(logger)
    .then((responseJSON) => responseJSON.content)
    .catch((error) => console.error(error));
}

// 'Array'; 'indexVariable': variable for indexing values in new object, 'valueVariable' to attach to new object
function arrayToObject(array, indexVariable, valueVariable) {
  return array.reduce((prev, curr) => {
    prev[curr[indexVariable]] = curr[valueVariable];
    return prev;
  }, {});
}

function logger(response) {
  console.info("API fetch:", response.message, response.content);
  return response;
}
