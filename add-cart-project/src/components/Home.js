import React from 'react';


export default function Home(props) {

  return (
  <div>
  <div className='home'>Home component
  </div>
  <div className='cart-wrapper item'>
	  <div className=' image-wrapper item'>
    <img src="https://4.imimg.com/data4/BB/RH/MY-15241145/multimedia-mobile-phone-500x500.jpg" 	 alt="" srcset="" />
	  </div>
	
<div className='text-wrapper item'>
     <span>iphone</span>
	 <span>price:$10000</span>
</div>
<div className='btn-wrap item'>
	<button onClick= {()=>
		props.addToCartHandler({price:1000,name:"i phone 11"})}>Add to cart</button>
		<button onClick= {()=>   
		props.removeToCartHandler({price:1000,name:"i phone 11"})}>Remove to cart</button>

</div>
  </div>
  </div>
	
  )
}
