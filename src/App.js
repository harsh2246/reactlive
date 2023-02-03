import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function App() {
  const [results,setResults]=useState([]);
  const [userData,setUserData]=useState({})
  const API="https://jsonplaceholder.typicode.com/posts";
  useEffect(function(){
    fetchApiData(API)
    console.log(results)
        },[])
  const fetchApiData=async(url)=>{
    try{
      const res=await fetch(url)
      const data=await res.json();
      setResults(data)
      
    }
    catch(err){console.log(err);}
  }
  const AllUser=async(userId)=>{
    try{
      const res=await fetch(`"https://jsonplaceholder.typicode.com/users"/${userId}`)
      const data=await res.json();
      return data.name
    }
    catch(err){console.log(err);}
  }
  /*const comUser=async(postId)=>{
    try{
      const res=await fetch(`"https://jsonplaceholder.typicode.com/posts"/${postId}/comments`)
      const data=await res.json();
      setResults(data)
      
    }
    catch(err){console.log(err);}
  }*/
  return (
    <div style={{display:'block',marginLeft:512}}>
      
      {results.map((item)=>{
        return <div key={item.title}>
          <Card sx={{ maxWidth: 345 ,marginBottom:1}}>
              <CardMedia
              component="img"
              alt={item.title}
              height="140"
              image="/public/logo192.png"
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                
                
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  {item.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" >Comment</Button>
            </CardActions>
          </Card>
          
          </div>
      })}
    </div>
  );
}

export default App;
