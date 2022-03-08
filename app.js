import axios from 'axios';

const getData =async  (user_id)=>{
   
    const response1= await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const response2 = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`); 
        const obj={
            posts:[response2.data[user_id-1]]
        }
        const arr=response1.data
        
    console.log(Object.assign(arr,obj));    
}

getData(1).then(()=>console.log()).catch(()=>console.log)