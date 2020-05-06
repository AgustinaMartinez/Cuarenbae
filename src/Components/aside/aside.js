import React from 'react';
import '../aside/_aside.scss';

const aside = () => (
    <aside className="aside">
        <a href="https://www.clima.com/argentina/cordoba/cordoba" className="aside__weather"><img className="aside__weather--img" src="https://w.bookcdn.com/weather/picture/4_18277_1_4_4615e8_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=582&anc_id=8929" alt="weather"></img></a>
        <img className="aside__ads" src="/Assets/ads.png" alt="advertisement"></img>
        <img className="aside__ads2" src="/Assets/ads2.png" alt="advertisement"></img>
        <img className="aside__ads3" src="/Assets/ads3.png" alt="advertisement"></img>
    </aside>
);

export default aside;