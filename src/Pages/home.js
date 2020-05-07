import React, { Fragment } from 'react';
import Layout from '../Components/layout/layout';
import Cover from '../Components/cover/cover';
import Aside from '../Components/aside/aside';
import SectionOne from '../Components/section-one/section-one';

const home = () => (
    <Fragment>
        <Layout>
            <Cover/>
            <Aside/>
            <SectionOne/>
        </Layout>
    </Fragment> 
);

export default home;