import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './CircleGraph.scss';

function CircleGraph({ className, procent }) {
    const classes = classNames(
        "circleGraph",
        className,
    )
    return (
        <div className={classes}>
            <svg width="98px" height="98px" viewBox="0 0 42 42">
                <circle cx="21" cy="21" r="15.91549430918954" fill="#f3f3f3"></circle>
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ccc" strokeWidth="3">
                </circle>
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#4BD7C3"
                    strokeWidth="3" strokeDasharray="100" strokeDashoffset={procent}></circle>
            </svg>
        </div>
    );
}

CircleGraph.propTypes = {
    className: PropTypes.string,
    procent: PropTypes.number,
}

CircleGraph.defaultProps = {
    className: "",
    procent: 0,
}

export default CircleGraph;