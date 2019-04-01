import React, { Fragment } from "react";
import { Appear } from "mdx-deck";

export default ({ items }) => (
  <ul style={{ textAlign: "left" }}>
    <Appear>
      {items.map(item => (
        <li key={item}>item</li>
      ))}
    </Appear>
  </ul>
);
