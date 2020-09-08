import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Input.scss';

function Input({ id, className, label, error, ...attrs }) {
    const classes = classNames(
        'input',
        className,
        { error },
    );

    return (
        <Fragment>
            {label
                && <label className="input__label" htmlFor={id}>{label}</label>
            }
            <input
                name={id}
                id={id}
                className={classes}
                {...attrs}
            />
            {error
                && <span className="input__error">{error}</span>
            }
        </Fragment>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
}

Input.defaultProps = {
    className: "",
    id: "",
    label: "",
    error: "",
}

export default Input;