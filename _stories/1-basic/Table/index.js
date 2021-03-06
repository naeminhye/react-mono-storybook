import React from "react";

/** Plugins */
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

/** Components */
import { Table } from "react-mono";

import { tableData } from "../data";

const { columns, dataSource } = tableData;

const story = () => (
  <Table
    dataSource={dataSource}
    columns={columns}
    striped={boolean("striped", false)}
    bordered={boolean("bordered", false)}
    hover={boolean("hover", false)}
    selectable={boolean("selectable", false)}
  />
);

export default story;
