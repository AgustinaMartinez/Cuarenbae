import React from 'react';
import '../section-one/_section-one.scss';
import news from '../../Sample/news.json';

const sectionOne = () => (
  <section className="articles">
    <h3 className="articles__title">Noticias</h3>
    <div className="articles__container">
      {news.map(item => {
        return (    
          <div key={item.id}>
            <img alt={item.alt} src={item.src}/>
            <p><span>{item.title} </span>{item.comment}</p>
          </div>
        );
      })} 
    </div>
  </section>
);

export default sectionOne;