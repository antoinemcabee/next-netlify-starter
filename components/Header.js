import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_QUERY = gql`
  query {
    orgs {
      id
      orgName
      orgCity
      orgState
    }
  }
`;

export default function Header({ title }) {

  const { loading, error, data } = useQuery(GET_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>lol its broke</p>;

  return (
    data.orgs.map(org => (
      <h1>{org.orgName}</h1>
    ))
  )
}
