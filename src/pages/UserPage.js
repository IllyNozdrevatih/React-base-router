import "react";
import { useParams } from "react-router-dom";

function UserPage() {
  let _params = useParams();
  return <div>User page ID: {_params.userId}</div>;
}

export default UserPage;
