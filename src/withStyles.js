import React, { PureComponent } from 'react';

function withStyles(DecoratedComponent, styles) {
  return class WithStyles extends PureComponent {
    componentWillMount() {
      const { staticContext } = this.props;
      if (staticContext) {
        staticContext.css.push(styles._getCss());
      }
    }
    render() {
      return <DecoratedComponent {...this.props} />;
    }
  };
}

export default withStyles;
