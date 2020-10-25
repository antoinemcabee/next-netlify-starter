import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_QUERY = gql`
  query {
    users {
      name
    }
    message
  }
`;

export default function Header({ title }) {

  const { loading, error, data } = useQuery(GET_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    data.users.map(user => (
      <h1>{user.name}</h1>
    ))
  )
}
