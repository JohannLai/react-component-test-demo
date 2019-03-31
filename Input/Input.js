import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};
const defaultProps = {
    value: '',
    onChange: () => {},
};
export default class Input extends Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <div>
                <input onChange={e => onChange(e.target.value)} value={value} />
            </div>
        );
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
