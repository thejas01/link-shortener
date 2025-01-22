import React, { useState } from 'react';
import { shortenUrl } from '../services/api';

const UrlForm = ({ setShortenedUrl }) => {
    const [originalUrl, setOriginalUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await shortenUrl(originalUrl);
            setShortenedUrl(response.data);
        } catch (error) {
            console.error('Error shortening URL:', error);
            alert('Failed to shorten URL. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', margin: '20px' }}>
            <input
                type="url"
                placeholder="Enter URL"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                required
                style={{ padding: '10px', width: '300px' }}
            />
            <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
                Shorten
            </button>
        </form>
    );
};

export default UrlForm;
