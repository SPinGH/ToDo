import React, { Fragment } from 'react';
import classNames from 'classnames';

import './Input.scss';

function Input({ id, className, label, error, ...attrs }) {
    const classes = classNames(
        'input',
        className,
        { error },
    );

    return (
        <>
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
        </>
    );
};

export default Input;