import React from "react";

/** Plugins */
import { text, number } from "@storybook/addon-knobs";

/** Components */
import { Form, Card, Button, Input } from "react-mono";

const story = () => (
  <Card width={number("card with", 600)}>
    <Form
      title={text("title", "Log In")}
      actions={[<Button type="primary">Log In</Button>]}
    >
      <Form.Item label="Username">
        <Input type="text" style={{ marginBottom: 8 }} />
      </Form.Item>
      <Form.Item label="Password">
        <Input type="password" style={{ marginBottom: 8 }} />
      </Form.Item>
    </Form>
  </Card>
);

export default story;
