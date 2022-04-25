import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "./data/queries";
import { ListItem } from "src/components";

const Home = () => {
  const { data } = useQuery(GET_PEOPLE, {
    variables: {
      page: 1,
    },
  });
  const people = data?.people?.persons;
  return (
    <>
      <div>
        {people?.map((person, index) => {
          return <ListItem key={index} name={person.name} />;
        })}
      </div>
    </>
  );
};

export default Home;
