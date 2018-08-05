import * as React from 'react';
import './EmptyLayout.less';

class EmptyLayout extends React.Component {
  public render() {
    return (
      <div className="EmptyLayout">
        {this.props.children}
      </div>
    );
  }
}
export default EmptyLayout;
