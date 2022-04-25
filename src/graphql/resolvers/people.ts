import {
  getPeopleFromSWAPI,
  searchPersonFromSWAPI,
} from "../../services/person";

const resolvers = {
  Query: {
    people: (_: any, { page }: any) => getPeopleFromSWAPI(page),
    searchPerson: (_: any, { name }: any) => searchPersonFromSWAPI(name),
  },
};

export default resolvers;
