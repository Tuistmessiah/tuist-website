const BASE_URL = "http://www.tuistmessiah.com/nether-api";
const DEV_URL = "http://localhost:5000";
// TODO: Choose BASE_URL based on environment

const TUNO_ENTITY = "tuno";
const SECTION_ENTITY = "section";
const SOUND_ENTITY = "sound";

// API Endpoints

/* Tuno */
export async function allTunos() {
  return fetchFromAPI(TUNO_ENTITY, "all", { method: "GET" });
}

/* Section */
export function fitleredSectionsByPage(page_ref) {
  return fetchFromAPI(SECTION_ENTITY, `page/${page_ref}`, {
    method: "GET",
  })
    .then((filteredArray) =>
      filteredArray.map((section) => ({
        ...section,
        config: JSON.parse(section.config),
      }))
    )
    .then((filteredArray) =>
      arrayToObject(filteredArray, "section_name", "config")
    );
}

// INTERNALS

function fetchFromAPI(endpoint, url, { method, headers, body }) {
  return fetch(`${DEV_URL}/${endpoint}/${url}`, { method, headers, body })
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
  console.info("Fetched:", response.message, response.content);
  return response;
}
