import Link from 'next/link';
import React from 'react';
import "./blob-button.css";

const BlobButton = () => {
    return (
        <div className="buttons">
            <button className="blob-btn">
                About Us
                <span className="blob-btn__inner">
                    <span className="blob-btn__blobs">
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                    </span>
                </span>
            </button>
        </div>
    );
};

export default BlobButton;