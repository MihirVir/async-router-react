import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router";
import { loader } from "./main-loader";
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

export default Main;
