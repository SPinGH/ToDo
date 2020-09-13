import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Title.scss';

function Title({ className, children, ...attrs }) {
    const classes = classNames(
        'title',
        className,
    );

    return (
        <div className={classes} {...attrs}>{children}</div>
    );
};

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
}

Title.defaultProps = {
    className: "",
    text: "",
}

export default Title;