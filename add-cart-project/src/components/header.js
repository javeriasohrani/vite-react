import React from 'react';

export default function header(props) {
  return (
	<div className='add-cart'>
	<span className="cart">{props.data.length} </span>	
	<img src="https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png" alt="" srcset="" />
</div>
  )
}
