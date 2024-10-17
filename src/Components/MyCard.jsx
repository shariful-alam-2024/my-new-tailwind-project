import React from 'react';

const Cards =[
      {
           img:"Img/img1.png",
            title:"Whitechapel Rd.",
            address:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00",
      },
      {
            img:"Img/img2.png",
             title:"Whitechapel Rd.",
             address:"Tulare County,  Los Angles, CA 23415",
             price:"$1,456,654.00",
       },
       {
            img:"Img/img3.png",
             title:"Tulare County",
             address:"Tulare County,  Los Angles, CA 23415",
             price:"$1,456,654.00",
       },
       {
            img:"Img/img4.png",
             title:"Tulare County.",
             address:"Tulare County,  Los Angles, CA 23415",
             price:"$1,456,654.00",
       },
       {
            img:"Img/img5.png",
             title:"Tulare County",
             address:"Tulare County,  Los Angles, CA 23415",
             price:"$1,456,654.00",
       },
       {
            img:"Img/img6.png",
             title:"Tulare County",
             address:"Tulare County,  Los Angles, CA 23415",
             price:"$1,456,654.00",
       },
]





const MyCard = () => {
      return (
        <div className="container pt-3">
          <div className="flex flex-wrap justify-center pt-5">
            {Cards.map(({ img, title, address, price }, i) => (
              <div className=" p-4" key={i}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
                  {img && <img src={img} alt={title} className="w-[306px] h-[253px] object-cover" />}
                  
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#09090B]">{title}</h3>
                    <p className="text-[#71717A]">{address}</p>
                    <p className="text-[#09090B] font-bold">{price}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default MyCard;