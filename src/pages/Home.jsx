import React, { useEffect, useState } from 'react';
import CardGaleria from '../components/CardGaleria';
import axios from "axios";

export default function Home() {

    const [images, setImages] = useState([]);

    const loadImages = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/v1/images`);
            console.log(result.data);
            setImages(result.data);
        } catch (error) {
            console.log(error)
            alert("erro")
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
                    <input type="text" name="" id="" />
                    <select name="" id="">
                        <option value="">None</option>
                        <option value="JPEG">JPEG</option>
                        <option value="PNG">PNG</option>
                        <option value="GIF">GIF</option>
                    </select>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </section>



            <section>
                <div className="galeria-container">
                    <div className="galeria">
                        {images.map((image, index) => (
                            <CardGaleria url={image.url} name={image.name} uploadDate={image.uploadDate} size={image.size} extension={image.extension} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
