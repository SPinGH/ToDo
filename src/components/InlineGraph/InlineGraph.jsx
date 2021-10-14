import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './InlineGraph.scss';

function InlineGraph({ className, name, color, width, count }) {
    const classes = classNames(
        'inlineGraph',
        className,
    );

    const LineRef = React.useRef();

    React.useEffect(() => {
        LineRef.current.style.width = width;
    }, [width]);

    return (
        <div className={classes}>
            <div className='inlineGraph__name'>{name}</div>
            <div className='inlineGraph__content'>
                <div className='inlineGraph__line'><span ref={LineRef} style={{ backgroundColor: color, width: 0 }}></span></div>
                <div className='inlineGraph__value'>Выполнено: {count}</div>
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
    className: '',
    name: '',
    color: '#cccccc',
    width: '0%',
    count: 0,
}

export default InlineGraph;