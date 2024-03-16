import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router";
import delay from "../util/delay";
import { MainContainer, MainHeading } from "./styled-elements";

const Main = () => {
  const { promise } = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>
        Main -{" "}
        <Suspense fallback="Fecthing....">
          <Await resolve={promise}>{(data) => <strong>{data}</strong>}</Await>
        </Suspense>
      </MainHeading>
    </MainContainer>
  );
};

async function loader() {
  return defer({ promise: delay("Fecthed Data", 1000) });
}

export const mainRoute = { element: <Main />, loader };
