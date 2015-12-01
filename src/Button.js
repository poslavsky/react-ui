import React, { Component } from 'react';
import classNames from 'classnames';

export default class Button extends Component {
	// propTypes: {
	// 	disabled: React.PropTypes.bool,
	// 	compact: React.PropTypes.bool,
	// 	primary: React.PropTypes.bool,
	// 	scary: React.PropTypes.bool,
	// 	type: React.PropTypes.string,
	// 	href: React.PropTypes.string,
	// 	onClick: React.PropTypes.func
	// }

	static defaultProps = {
		disabled: false,
		type: 'button',
		//onClick: noop
	}



  render() {
		const element = this.props.href ? 'a' : 'button';
		const buttonClasses = classNames( {
			'btn': true,
			'waves-effect': true,
			'waves-light': true,
			'btn-large': this.props.large,
			'green lighten-2': this.props.green,
			'red lighten-2': this.props.green,
			'blue lighten-2': this.props.green
		} );
		const props = Object.assign( {}, this.props, {
				className: classNames( this.props.className, buttonClasses )
		} );

    return (
			React.createElement( element, props, this.props.children )
    );
  }
}

export default Button;
