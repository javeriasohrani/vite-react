import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo,deleteTodo } from '../actions/action';


export default function Todo() {
	const[inputData, setInputData] = useState("");
	const list = useSelector((state)=>state.reducer.list)
	const dispatch = useDispatch();
  return (

	  <div className='main-div'>
		  <div className='child-div'>
			  <figure>
				  <figcaption>	
					  Add your List
				  </figcaption>
			  </figure>
			  <div className='add-items'>
				  <input type="text"  placeholder='add your text'
				  value = {inputData} 
				  onChange ={(event) => setInputData(event.target.value)}  />
				  <i class="fas fa-plus add-btn" onClick = {()=> dispatch(addTodo(inputData),setInputData(""))}></i>
			 </div>
			  <div className='show_items'>
				  {
				  	list.map((elem)=>{
					 return(
						<div className='each_item' key ={elem.id}>
						<h2>{elem.data}</h2>
						<div className='todo-btn'>
						<i class="fas fa-trash-alt" title = "delete item"  onClick = {()=> dispatch(deleteTodo(elem.id))}></i> 
					</div>
					</div>
					)	
				 
				  })}
					  
		  </div>
	  </div>
	  </div>	
	  

  );
}

