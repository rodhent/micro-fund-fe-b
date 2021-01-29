import React from 'react';

import { Form, Input, Radio, Button } from 'antd';

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const SearchInput = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
      <Form.Item
        label="Name:"
        name="name"
        rules={[
          {
            required: false,
            message: 'Enter name...',
          },
        ]}
      >
        <Input size="small" placeholder="Enter name..." />
      </Form.Item>

      <Form.Item name="radio-group" label="Status">
        <Radio.Group>
          <Radio value="pending">Pending</Radio>
          <Radio value="accepted">Accepted</Radio>
          <Radio value="rejected">Rejected</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Filter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchInput;