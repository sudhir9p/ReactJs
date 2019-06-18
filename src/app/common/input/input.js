import React from 'react';

export class Input extends React.Component {
    render() {
        return <input className={`${this.props.className}`}
            placeholder={this.props.placeholder}
            onKeyUp={this.props.keyUpHandler} />
    }
}