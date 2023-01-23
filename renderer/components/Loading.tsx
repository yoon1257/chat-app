import styled from "styled-components";
import Image from "next/image";

const Loading = () => {
  return (
    <LoadingContainer>
      <Image src="/gifs/loading.gif" />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
