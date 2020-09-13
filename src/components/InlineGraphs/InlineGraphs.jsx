import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './InlineGraphs.scss';

import Title from '../../components/Title/Title';
import InlineGraph from '../InlineGraph/InlineGraph'

function InlineGraphs({ className, title, data }) {
    const classes = classNames(
        "inlineGraphs",
        className,
    )
    return (
        <div className={classes}>
            <Title >{title}</Title>
            <div className="inlineGraphs__graph">
                {data.map(({ name, color, width, count }, index) => (
                    <InlineGraph
                        key={index}
                        className="inlineGraphs__item"
                        name={name}
                        color={color}
                        width={width + "%"}
                        count={count} />
                ))}
            </div>
        </div>
    );
}

InlineGraphs.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.array,
}

InlineGraphs.defaultProps = {
    className: "",
    title: "",
    data: [],
}

export default InlineGraphs;