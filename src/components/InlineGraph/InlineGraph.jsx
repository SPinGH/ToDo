import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './InlineGraph.scss';

function InlineGraph({ className, name, color, width, count }) {
    const classes = classNames(
        'inlineGraph',
        className,
    );

    return (
        <div className={classes}>
            <div className="inlineGraph__name">{name}</div>
            <div className="inlineGraph__content">
                <div className="inlineGraph__line"><span style={{ backgroundColor: color, width: width }}></span></div>
                <div className="inlineGraph__value">Выполнено: {count}</div>
            </div>
        </div>
    );
};

InlineGraph.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    count: PropTypes.number,
}

InlineGraph.defaultProps = {
    className: "",
    name: "",
    color: "#ccc",
    width: "0%",
    count: 0,
}

export default InlineGraph;