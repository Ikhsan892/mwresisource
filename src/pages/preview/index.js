import React from "react";
import Result from "../Invoice/components/result";
import { Helmet } from "react-helmet";
export default function Preview() {
  return (
    <div>
      <Helmet>
        <meta name='description' content='Preview' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Preview</title>
      </Helmet>
      <Result
        style={{
          size: "a4",
        }}
      />
    </div>
  );
}
