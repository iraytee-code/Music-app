import React, {Fragment} from "react";
import { CollectionCard } from "../../components";
import cardimg1 from "../../assets/images/Rectangle 14.png";
import cardimg2 from "../../assets/images/Rectangle 15.png";
import cardimg3 from "../../assets/images/Rectangle 16.png";
import cardimg4 from "../../assets/images/Rectangle 18.png";


const Collections = () => {
  return (
 <Fragment>
<div className=" flex flex-col pb-40 md:pb-0">

<div className='flex items-center justify-between md:justify-start py-10'>
  <div>
  <button className="w-[180px] p-3 rounded-full text-dark bg-secondary md:mr-3">My Collections</button>
  </div>
<div>
<button style={
      {border: '1px solid #EFEEE0'}
    } className=" w-[180px] lg:px-5 py-3 lg:w-[100px]  text-light bg-dark rounded-full">Likes</button>
</div>
   </div>

<div className="self-center lg:self-start grid gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
<CollectionCard
collectionImg={cardimg1}
title={'Limits'}
artist={'John watts'}
likes ={'2.3m likes'}
/>
<CollectionCard
collectionImg={cardimg2}
title={'Free'}
artist={'Jerey mark'}
likes ={'555k likes'}
/>
<CollectionCard
collectionImg={cardimg3}
title={'whole Heart'}
artist={'John doe'}
likes ={'2.9m likes'}
/>
<CollectionCard
collectionImg={cardimg4}
title={'Fever'}
artist={'jane jaydee'}
likes ={'333k likes'}
/>
   </div>
</div>
 </Fragment>
  );
};

export default Collections;
