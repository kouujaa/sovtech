import {
  getPeopleFromSWAPI,
  searchPersonFromSWAPI,
  getWorldFromSWAPI,
} from "./person";

describe("SWAPI test suit", () => {
  it("should return people from SWAPI", async () => {
    const people = await getPeopleFromSWAPI(1);
    expect(people.persons.length).toBeGreaterThan(0);
  });

  it("get person by name search", async () => {
    const people = await searchPersonFromSWAPI("Luke Skywalker");
    console.log(JSON.stringify(people, null, 2));
    expect(people.persons.length).toBeGreaterThan(0);
    expect(people.persons[0].name).toEqual("Luke Skywalker");
  });

  it("get world from SWAPI", async () => {
    const world = await getWorldFromSWAPI("https://swapi.dev/api/planets/1/");
    expect(world).toEqual("Tatooine");
  });
});
