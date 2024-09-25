import React from 'react';

export default function ImageCard({ url, name, uploadDate, size, extension }) {
    return (
        <>
            <div className='galeria-card'>
                <div className="galeria-imagem">
                    <img src={url} alt={name} />
                </div>
                <div className="galeria-info">
                    <p><strong>{name}</strong></p>
                    <p>{uploadDate} | {size}MB | {extension}</p>
                </div>
            </div>
        </>
    )
}
