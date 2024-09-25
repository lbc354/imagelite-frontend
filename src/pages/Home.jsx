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
            alert("erro")
            console.log(error)
        }
    }

    useEffect(() => {
        loadImages();
    }, [])

    return (
        <>
            <div className="galeria-container">
                <div className="galeria">
                    {images.map((image, index) => (
                        <CardGaleria url={image.url} name={image.name} uploadDate={image.uploadDate} size={image.size} extension={image.extension} />
                    ))}
                </div>
            </div>
        </>
    )
}
