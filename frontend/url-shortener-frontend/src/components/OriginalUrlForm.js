import React, { useState } from 'react';
import { getOriginalUrl } from '../services/api';

const OriginalUrlForm = ({ setOriginalUrl }) => {
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await getOriginalUrl(shortUrl);
            setOriginalUrl(response.data); // Update the original URL in the parent
        } catch (error) {
            console.error('Error retrieving original URL:', error);
            alert('Failed to retrieve original URL. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', margin: '20px' }}>
            <input
                type="text"
                placeholder="Enter shortened URL"
                value={shortUrl}
                onChange={(e) => setShortUrl(e.target.value)}
                required
                style={{ padding: '10px', width: '300px' }}
            />
            <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
                Retrieve
            </button>
        </form>
    );
};

export default OriginalUrlForm;
