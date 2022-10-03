import React from "react";
import { Wrapper, LoadingText } from "./styles";
interface loadingProps {
  showLoading: boolean;
}
const Loading: React.FC<loadingProps> = ({ showLoading }) => {
  return (
    <React.Fragment>
      {showLoading && (
        <Wrapper>
          <LoadingText>Carregando...</LoadingText>
        </Wrapper>
      )}
    </React.Fragment>
  );
};

export default Loading;
