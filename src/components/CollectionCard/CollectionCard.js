import React from 'react';
import {TiMediaPlay} from 'react-icons/ti';

 const CollectionCard = ({title, artist, likes, collectionImg}) => {
  return (
    <div className='relative'>
      <img className=' rounded-xl w-[359px] h-[234px] md:w-[320px] h-[214px] lg:w-[213px] h-[234px] ' alt='bg-img' src={collectionImg}></img>
      <div className=' rounded-xl text-light p-3 flex flex-col justify-end bg-cardBg  w-[359px] h-[234px] md:w-[320px] h-[214px] lg:w-[213px] h-[234px] absolute top-0'>
          <div>
          <div className='text-lg'>{title}</div>
          <div className='text-xs'>{artist}</div>
          </div>

          <div className='flex justify-between items-center'>
<div>{likes}</div>
<div className=' flex items-center justify-center w-[40px] h-[40px] rounded-full bg-secondaryLight'>
<div><TiMediaPlay  size={23} color='#FACD66'/></div>
</div>
          </div>
      </div>
    </div>
  )
}

export default CollectionCard;