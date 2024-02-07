import React from "react";

const ClickableDiv = (props: any): JSX.Element => (
  <div role="button" tabIndex={0} {...props} />
);

export default ClickableDiv;
