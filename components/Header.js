import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ObjectId } from "mongodb";

const GET_QUERY = gql`
  query GetOrgById($orgId: ID!){
    getOrgById(orgId: $orgId) {
      orgId
      name
    }
  }
`;

export default function Header({ title }) {

  const { loading, error, data } = useQuery(GET_QUERY, {
    variables: {
      orgId: ObjectId('5fb9ced996692eb0bce3183e')
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const org = data.getOrgById
  return (
    <>
      <h1>{org.name}</h1>
    </>
  )
}
