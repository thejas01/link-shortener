import React from 'react';

const UrlResult = ({ shortenedUrl }) => {
    if (!shortenedUrl) return null;

    const shortUrl = `${window.location.origin}/${shortenedUrl}`;

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h4>Shortened URL:</h4>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
            </a>
        </div>
    );
};

export default UrlResult;
