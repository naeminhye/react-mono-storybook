import React from "react";

/** Components */
import { List } from "react-mono";

import { listData } from "../data";

const story = () => (
  <List
    dataSource={listData.dataSource}
    renderItem={(item) => <div>{item.name}</div>}
  />
);

export default story;
