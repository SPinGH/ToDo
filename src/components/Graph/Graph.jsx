import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Graph.scss';

import Title from '../Title/Title';

function Graph({ className, title, data, sign }) {
    const classes = classNames(
        "graph",
        className,
    )
    const [DATA, setDATA] = React.useState(data.map(() => ({ width: 0 })));
    React.useEffect(() => {
        setDATA(data);
    }, [data]);
    const count = data.length - 1;
    const widthColumn = 420 / count;
    let path = "";
    for (let i = 0; i <= count; i++) {
        path += (5 + i * widthColumn) + "," + (105 - DATA[i].width) + " ";
    }
    return (
        <div className={classes}>
            <Title className="ws-title">{title}</Title>
            <div className="graph__graph">
                <svg width="100%" height="100%" viewBox="0 0 430 110" xmlns="http://www.w3.org/2000/svg">

                    {DATA.map((item, index) => (
                        <line key={index} y2="105" x2={5 + widthColumn * index} y1="5" x1={5 + widthColumn * index} strokeWidth="2" stroke="#ccc" />
                    ))}
                    <line y2="105" x2="425" y1="105" x1="5" strokeWidth="2" stroke="#ccc" />

                    <linearGradient id="linear-gradient" x1="100%" y1="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="100%" stopColor="#8799ED99" />
                    </linearGradient>

                    <path id="svg_7" d={`M ${path}425,105 5,105`}
                        fill="url(#linear-gradient)" />
                    <path id="svg_7" d={`M ${path}`} fillOpacity="null"
                        strokeOpacity="null" strokeWidth="2" stroke="#8799ED" fill="none" />

                    {DATA.map(({ width }, index) => (
                        <ellipse key={index} stroke="#8799ED" ry="4" rx="4" cy={105 - width} cx={5 + index * widthColumn} fill="#fff" strokeWidth="2" />
                    ))}
                </svg>
            </div>
            <div className="graph__colnames" style={{ fontSize: 28 - count }}>
                {sign.map((item, index) => (
                    <div key={index} className="graph__colname">{item}</div>
                ))}
            </div>
        </div>
    );
}

Graph.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.array,
    sign: PropTypes.array,
}

Graph.defaultProps = {
    className: "",
    title: "",
    data: [],
    sign: [],
}

export default Graph;