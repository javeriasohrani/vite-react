import React from 'react';
import Carousal from '../Components/Carousal';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services';

export default function Home() {
  return <div>
	 <Navbar/>
	 <Carousal/>
	 <Services/>
  </div>;
}
