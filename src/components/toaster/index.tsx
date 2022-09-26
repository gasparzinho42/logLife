import React, { useEffect, useMemo, useState } from "react";

import { Container } from "./styles";
interface toasterProps {
  toasterMessage: string;
  show: boolean;
  secondsInMs: number;
}
const Toaster: React.FC<toasterProps> = ({
  toasterMessage,
  show,
  secondsInMs,
}) => {
  const [canShow, setCanShow] = useState(false);
  useEffect(() => {
    if (show) {
      setCanShow(true);
      setTimeout(() => {
        setCanShow(false);
      }, secondsInMs);
    }
  }, [show]);

  return (
    <React.Fragment>
      {canShow && <Container>{toasterMessage}</Container>}
    </React.Fragment>
  );
};

export default Toaster;
