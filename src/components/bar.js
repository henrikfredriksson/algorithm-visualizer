import React from 'react';

export default function Bar(props) {
    const {index, width, value, fill} = props.data;

    return (
        <rect
            x={index*width}
            y={window.innerHeight - value-1}
            width={`${width -3}`}
            height={value}
            stroke='#A0A1A1'
            fill={fill}
        />
    );
}
