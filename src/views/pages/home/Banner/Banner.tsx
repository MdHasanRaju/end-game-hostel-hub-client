import React from 'react';
import b1 from './../../../../assets/maldives-slider-img-1.jpg';

const Banner = () => {
    // const items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!"
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!"
    //     }
    // ]

    return (
        <>
            <img style={{ width: '100%' }} src={b1} alt="" />
        </>
        // This is carousel part
        //     <Carousel>
        //     {
        //         items.map( (item, i) => <BannerDisplay key={i} item={item} /> )
        //     }
        // </Carousel>
    );
};

export default Banner;
