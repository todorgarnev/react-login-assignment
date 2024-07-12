import { FunctionComponent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { axios } from "@/utils";

export const Login: FunctionComponent = () => {
  const { data, refetch } = useQuery({
    queryKey: ["submitLogin"],
    queryFn: ({ signal }) => axios("/login", { signal }).then((res: { data: string }) => res.data),
    enabled: false,
  });

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  return (
    <>
      <h6>Login Page</h6>

      <button onClick={() => refetch()}>Submit</button>
    </>
  );
};
