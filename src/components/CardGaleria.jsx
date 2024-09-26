import React from 'react';

export default function ImageCard({ index, url, name, uploadDate, size, extension }) {

    function download() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/open#examples
        window.open(url, '_blank');
    }

    function formatBytes(bytes = 0, decimals = 2) {
        if (!+bytes) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    }

    return (
        <>
            <div className='galeria-card' key={index}>
                <div className="galeria-imagem">
                    <img src={url} alt={name} onClick={download} />
                </div>
                <div className="galeria-info">
                    <p><strong>{name}</strong></p>
                    <p>{uploadDate} | {formatBytes(size)} | {extension}</p>
                </div>
            </div>
        </>
    )
}
