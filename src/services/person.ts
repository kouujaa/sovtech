import fetch from "node-fetch";

export const getPeopleFromSWAPI = async (page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);

    const data = await response.json();
    const count = data.count;
    const next = data.next;
    const previous = data.previous;
    const enrichedData = await Promise.all(
      data.results.map(async (person) => ({
        ...person,
        homeworld: await getWorldFromSWAPI(person.homeworld),
      }))
    );
    getWorldFromSWAPI(data.results[0].id);
    return {
      persons: enrichedData,
      count,
      next,
      previous,
    };
  } catch (error) {
    console.log({ error });
  }
};

export const searchPersonFromSWAPI = async (name: string) => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${name}`
    );
    const data = await response.json();
    const count = data.count;
    const next = data.next;
    const previous = data.previous;
    const enrichedData = await Promise.all(
      data.results.map(async (person) => ({
        ...person,
        homeworld: await getWorldFromSWAPI(person.homeworld),
      }))
    );
    getWorldFromSWAPI(data.results[0].id);
    return {
      persons: enrichedData,
      count,
      next,
      previous,
    };
  } catch (error) {
    console.log({ error });
  }
};

export const getWorldFromSWAPI = async (url: string) => {
  try {
    const response = await fetch(String(url));
    const data = await response.json();
    return data?.name;
  } catch (error) {
    console.log({ error });
  }
};
