import React, { Suspense } from "react";

export default ({ children }) => (
  <React.Fragment>
    <Suspense fallback={null}>{children}</Suspense>
  </React.Fragment>
);
