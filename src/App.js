import React,{useState,useReducer} from 'react';
   
const reducer =(state,action)=>{
    switch (action.type){
        case 'SUBMITDATA':
            return[
             ...state,{
               item: action.payload.item,
             }
             
            ]
            default:
                return state;
    }
}

const Todo = ()=>{
const [data,dispatch] = useReducer(reducer,[])

let [item,updatedItem] = useState('');

const nameChangeHandler =(e)=>{
  console.log("updatedItem(e.target.value)",e.target.value)
    updatedItem(e.target.value)
    
}

const submitData =(e) =>{

    e.preventDefault();
    item.trim().length>0  &&  dispatch({
        type :'SUBMITDATA',
payload:{
    item,
}
});
updatedItem('');
}
console.log("state",data);
return (
        <>
      <div>Add Items to the TodoList</div>
      <input type = 'text' name ='item' value ={item} onChange ={(e)=>nameChangeHandler(e)} />
    <button onClick ={submitData} >Add Todo</button>
    {data && data.length>0&&(
        <>
        <div>Item Added</div>
        <ul>
        {data.map(data1=>{
            return <li>{data1.item} </li>
                
        })}
          </ul>
    
        </>
    )}
    </>
    )
    
}

export default Todo;