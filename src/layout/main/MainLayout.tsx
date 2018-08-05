import * as React from 'react';

class MainLayout extends React.Component {
  public render() {
    return (
      <div className="MainLayout">
        <div className="row">
          nav bar
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
