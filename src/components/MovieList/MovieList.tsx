import "./styles.css";
import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";
import { gql, useQuery } from "@apollo/client";

interface Users {
  total: number;
  data: User[];
}
interface User {
  id: number;
  first_name: string;
  last_name: string;
}
interface UsersData {
  users: Users;
}
interface UserData {
  User: User[];
}

const GET_USERS = gql`
  query GET_USERS {
    users @rest(type: "Users", path: "/users") {
      total
      data @type(name: "User") {
        id
        first_name
        last_name
      }
    }
  }
`;

export function UserList() {
  const { loading, error, data } = useQuery<UsersData>(GET_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);

    return <div>Error!</div>;
  }
if (data){
  console.error(data.users.data);

  return (<div>

    {data.users.data.map(usr =>

    <p key= {usr.id}>{usr.first_name}</p>

    ) }
    </div>)

  // return <div>hey {data.users.total}</div>;
}
}

// class Users extends PureComponent {
//   render() {
//     return (
//       <Query query={GET_USERS}>
//         {({
//           data: {
//             users: { data },
//           },
//           loading,
//           error,
//         }) => (
//           <ul>
//             {data.map((user) => (
//               <li key={user.id}>
//                 {user.first_name} {user.last_name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </Query>
//     );
//   }
// }
// export default Users;

// export interface OwnProps {
//   handleIdChange: (newId: number) => void;
// }

// interface Props extends OwnProps {
//   data: LaunchListQuery;
// }

// const className = "LaunchList";

// const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
//   <div className={className}>
//     <h3>Launches</h3>
//     <ol className={`${className}__list`}>
//       {!!data.launches &&
//         data.launches.map(
//           (launch, i) =>
//             !!launch && (
//               <li
//                 key={i}
//                 className={`${className}__item`}
//                 onClick={() => handleIdChange(launch.flight_number!)}
//               >
//                 {launch.mission_name} ({launch.launch_year})
//               </li>
//             )
//         )}
//     </ol>
//   </div>
// );

// export default LaunchList;
