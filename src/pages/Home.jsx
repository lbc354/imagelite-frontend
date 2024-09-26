import React, { useEffect, useState } from 'react';
import CardGaleria from '../components/CardGaleria';
import axios from "axios";

export default function Home() {

    const baseURL = 'http://localhost:8080/v1/images';

    const [images, setImages] = useState([]);
    // parâmetros de pesquisa
    const [query, setQuery] = useState('');
    const [extension, setExtension] = useState('');
    // carregando conteúdo
    const [loading, setLoading] = useState(false);

    const loadImages = async () => {
        setLoading(true);
        try {
            const result = await axios.get(`${baseURL}?query=${query}&extension=${extension}`);
            setImages(result.data);
        } catch (error) {
            console.log(error);
            alert("erro");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadImages();
    }, [])

    return (
        <>
            <section>
                <div>
                    <button className='botao-adicionar-novo'>Add New</button>
                </div>
                <div className='search-container'>
                    <input type="text" name="" id="" onChange={(e) => setQuery(e.target.value)} />
                    <select name="" id="" onChange={(e) => setExtension(e.target.value)}>
                        <option value="">All</option>
                        <option value="JPEG">JPEG</option>
                        <option value="PNG">PNG</option>
                        <option value="GIF">GIF</option>
                    </select>
                    <button onClick={loadImages}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </section>



            <section>
                {loading
                    ?
                    <div className="loader"></div>
                    :
                    <div className="galeria-container">
                        <div className="galeria">
                            {images.map((image, index) => (
                                <CardGaleria index={index} url={image.url} name={image.name} uploadDate={image.uploadDate} size={image.size} extension={image.extension} loading={loading} />
                            ))}
                        </div>
                    </div>
                }
            </section>
        </>
    )
}
