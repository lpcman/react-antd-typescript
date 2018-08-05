import * as React from 'react';
import { Link } from 'react-router-dom'
import Hi from '../../containers/Hi';
import MainLayout from '../../layout/main/';
import './Home.less';

const Home = () => (
  <MainLayout>
    <div className='Home'>
      Home test me
      <Hi />
      <Hi />
      <Hi />
      <Hi />
      <div className="navList">
        <Link to="/about?color=Blue&size=40">link to about</Link>
        <Link to="/i18n">link to i18n</Link>
      </div>
    </div>
  </MainLayout>
);

export default Home;
