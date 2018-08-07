import * as React from 'react';
import { Link } from 'react-router-dom'
import I18N from '../containers/I18N';
import MainLayout from '../layout/main/';
import { Button } from 'antd';

const I18NPage = (props: any) => (
  <MainLayout>
      <I18N />
      <Button type="primary">有字的button</Button>
      <Link to="/">link to home</Link>
  </MainLayout>
);

export default I18NPage;
