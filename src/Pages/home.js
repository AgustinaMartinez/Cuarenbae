import React from 'react';
import Layout from '../Components/layout/layout';
import Cover from '../Components/cover/cover';
import Aside from '../Components/aside/aside';
import SectionOne from '../Components/section-one/section-one';
import Footer from '../Components/footer/footer';
import './_home.scss';

const Home = () => (
    <div className="home">
        <Layout className="home__layout">
            <Cover className="home__layout__cover"/>
            <div className="home__layout__middle">
                <SectionOne className="home__layout__middle__sectionOne"/>
                <Aside className="home__layout__middle__aside"/>
            </div>
            <Footer className="home__layout__footer"/>
        </Layout>
    </div> 
);

export default Home;