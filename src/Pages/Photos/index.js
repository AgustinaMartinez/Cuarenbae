import React from 'react';
import Layout from '../../Components/layout/layout';
import ImageList from '../../Components/images/images-list';
import Footer from '../../Components/footer/footer';

const PhotosPage = props => {

    return (
        <div>
            <Layout/>
            <ImageList/>
            <Footer/>
        </div>
    );
}

export default PhotosPage;