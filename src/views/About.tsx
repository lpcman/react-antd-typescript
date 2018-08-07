import * as React from 'react';
import { Link } from 'react-router-dom'
import Hello from '../containers/Hello';
import EmptyLayout from '../layout/empty/';
import { Button } from 'antd';

const About = (props: any) => (
  <EmptyLayout>
      about.
      <Hello />
      <Hello />
      <Button type="primary">有字的button</Button>
      <Link to="/">link to home</Link>
  </EmptyLayout>
);

export default About;
