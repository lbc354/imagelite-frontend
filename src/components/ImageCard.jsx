import React from 'react';
import pipoca_doce from '../img/pipoca-doce.jpg';

export default function ImageCard() {
    return (
        <div>
            <div className="galeria-container">
                <div className="galeria">
                    <div className='galeria-card'>
                        <div className="galeria-imagem">
                            <img src={pipoca_doce} alt="" />
                        </div>
                        <div className="galeria-info">
                            <p><strong>Nome</strong></p>
                            <p>10MB - 01/01/0101</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
