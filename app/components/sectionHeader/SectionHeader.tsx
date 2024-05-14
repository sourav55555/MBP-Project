import React from 'react';
import "./sectionHeader.css";

const SectionHeader = ({title}:{title: string}) => {
    return (
        <div className="svg-wrapper ">
            <svg height="60" width="360" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="350" />
            </svg>
            <div className="text roboto-condensed">{title}</div>
        </div>
    );
};

export default SectionHeader;