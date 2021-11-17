import React from 'react';

const Api=()=>{
  const [data,setData] = React.useState([]);
  const [name,setName] = React.useState();
  const [age,setAge] = React.useState();


  React.useEffect( async ()=>{
      await fetchData()
      console.log("outside fetch")
  },[])

  const fetchData=()=>{
    fetch('http://localhost:4000/student/').then((res) => res.json()).then((data)=>{
        console.log("inside fetch");
        setData(data)
      })
  }
 const deleteHandler=(id)=>{
  fetch('http://localhost:4000/student/'+id,{
     method: 'DELETE' 
  }).then((res) => {
        console.log("inside fetch");
        fetchData();
      })
 }
 const insertHandler=()=>{
console.log(name,age);
fetch('http://localhost:4000/student/',{
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body:JSON.stringify({
        name:name,
        age:age
     })
  }).then((res) => {
        console.log("inside fetch");
        fetchData();
      })
 }
    return <>
      <h1>Student Info</h1>
      <input type="text" placeholder="Enter Name" name="name" onChange={(e)=> setName(e.target.value)}/> 
      <input type="text" placeholder="Enter age" name="age" onChange={(e)=>setAge(parseInt(e.target.value))}/> 
      <button onClick={()=>{
        insertHandler()
      }}>Insert</button>
      <table border={1}> 
           <tr>
             <th>Id:</th>
             <th>Name:</th>
             <th>Age:</th>
             <th>Action:</th>

           </tr>
           {
             data.map((data,index)=>{
               return <tr key={data.id}>
                   <td >{data.id}</td>
                   <td>{data.name}</td>
                   <td>{data.age}</td>
                   <td><button onClick={()=> deleteHandler(data.id)}>Delete</button></td>
               </tr>
             })
           }
           
      </table>

    </>
};

export default Api;