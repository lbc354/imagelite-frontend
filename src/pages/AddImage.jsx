import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddImage() {

    const [loading, setLoading] = useState(false);
    // const [errorMsgs, setErrorMsgs] = useState([]);
    const [preview, setPreview] = useState(null);

    const initialState = {
        name: '',
        tags: '',
        file: null,
    };
    const [image, setImage] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setImage((prevState) => ({
            ...prevState,
            [name]: files ? files[0] : value,
            // se for um input de arquivo, pega o primeiro arquivo, caso contrário, o valor
        }));

        // Se for um input de arquivo, gerar o preview
        if (name === 'file' && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result); // Salva a URL de pré-visualização no estado
            };
            reader.readAsDataURL(file); // Lê o arquivo como um URL base64
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const url = 'http://localhost:8080/v1/images';
        const formData = new FormData();
        formData.append('file', image.file);
        formData.append('name', image.name);
        formData.append('tags', image.tags);
        const headers = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };
        try {
            const response = await axios.post(url, formData, headers);
            console.log(response);
            toast.success('Imagem salva');
        } catch (error) {
            console.error(error);
            toast.error('Ocorreu um erro');
        } finally {
            setImage(initialState)
            setPreview(null)
            setLoading(false);
        }
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
            <span className='nav-pages'><Link to="/">Home</Link> / Upload</span>

            <form onSubmit={handleSubmit}>
                <h2>Upload Image</h2>

                <div className="campo">
                    <label htmlFor="name">Enter image name: *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={image.name}
                        onChange={handleChange}
                        maxLength={30}
                        required
                    />
                </div>

                <div className="campo">
                    <label htmlFor="tags">Enter image tags: *</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={image.tags}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="campo">
                    <label htmlFor="file">Enter image file: *</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Renderizar a pré-visualização da imagem */}
                {preview && (
                    <div className="preview">
                        <div className="preview-image">
                            <img src={preview} alt="preview" />
                        </div>
                        <span>{formatBytes(image.file.size)} / 3MB (máx.)</span>
                    </div>
                )}

                {/* {errorMsg
                    ?
                    <div>
                        <ul>
                            {errorMsgs.map((message, index) => (
                                <li key={index}>{message}</li>
                            ))}
                        </ul>
                    </div>
                    :
                    null
                } */}

                {loading
                    ? <div className="loader"></div>
                    : <input type="submit" className='btn-submit' disabled={loading} />
                }
            </form>
        </>
    )
}
