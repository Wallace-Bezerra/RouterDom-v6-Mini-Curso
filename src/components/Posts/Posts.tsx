import { Outlet, useParams, useSearchParams } from "react-router-dom";

export const Posts = () => {
  const {id} = useParams();
  const [qs] = useSearchParams();
// console.log(useSearchParams())
  // console.log(id)
  return <div>
    Posts
    <Outlet/>
    </div>;
};
