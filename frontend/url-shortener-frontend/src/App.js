import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UrlForm from './components/UrlForm';
import UrlResult from './components/UrlResult';
import OriginalUrlForm from './components/OriginalUrlForm';

const App = () => {
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [originalUrl, setOriginalUrl] = useState('');

    return (
        <div>
            <Navbar />
            {/* Shorten URL Form */}
            <h3 style={{ textAlign: 'center' }}>Shorten a URL</h3>
            <UrlForm setShortenedUrl={setShortenedUrl} />
            <UrlResult shortenedUrl={shortenedUrl} />

            {/* Retrieve Original URL Form */}
            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>Retrieve Original URL</h3>
            <OriginalUrlForm setOriginalUrl={setOriginalUrl} />
            {originalUrl && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h4>Original URL:</h4>
                    <a href={originalUrl} target="_blank" rel="noopener noreferrer">
                        {originalUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default App;
