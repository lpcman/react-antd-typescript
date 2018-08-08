import * as React from 'react';
import "./MainLayout.less"
import Nav from '../../containers/NavCon';

class MainLayout extends React.Component {
  public render() {
    return (
      <div className="MainLayout">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
