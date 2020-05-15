import React, {useState, useEffect} from 'react';
import {getFetchData} from '../../Services/photos-service';
import './_images.scss';

const ImageList = () => {

	const [images, setImages] = useState([]);

	const getData = async () => {
		getFetchData().then(res => {
			setImages(res);
		})
	}

	useEffect(() => {
		getData();
	}, [])

	return (
		<div className="main">
			<div className="main__container">
				<header className="main__container__header">
					<h1 className="main__container__header__title">Galería de imágenes</h1>
					<h4 className="main__container__header__subtitle">Te presentamos las fotos sobre Covid-19 que están dando la vuelta al mundo.</h4>
				</header>
				<ul className="main__container__list">
					{images.map(img =><img className="main__container__list__image" src={img.urls.regular} key={img.id} alt={img.alt_description}/>)}
				</ul>
			</div>
		</div>
	);
}

export default ImageList;