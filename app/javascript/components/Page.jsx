import React from 'react';
import PropTypes from 'prop-types';

import { PageHeader } from './PageHeader';

export class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRead: false
    };

    this.handleMarkAsRead = this.handleMarkAsRead.bind(this);
  }

  handleMarkAsRead(e) {
    this.setState({
      isRead: true
    });
  }

  render() {
    const { title, subtitle, children } = this.props;

    return (
      <React.Fragment>
        {title && <PageHeader title={title} subtitle={subtitle} />}
        <div className="page-content">
          {children}
        </div>
        <button onClick={this.handleMarkAsRead}>Mark As Read</button>
      </React.Fragment>
    );
  }
}

Page.defaultProps = {
  title: '',
  subtitle: '',
  children: null
};

Page.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
};
