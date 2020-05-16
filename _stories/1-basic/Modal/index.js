import React, { useState } from 'react';

/** Components */
import { Button, Modal } from 'react-mono';

const story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button
        shape="round"
        size="xs"
        onClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        roundCornered
        title="Modal Example"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        Hello
      </Modal>
    </div>
  );
};

export default story;
