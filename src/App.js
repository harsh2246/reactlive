import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import CommentIcon from '@mui/icons-material/Comment';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function App() {
  const [results,setResults]=useState([]);
  const [userData,setUserData]=useState("")
  const [open, setOpen] = React.useState(false);
  const [comData,setComData] = React.useState([])
  const handleClickOpen = (value) => {
    setComData(comUser(value))
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
  const AllUser=async(apkId)=>{
    try{
      const URLS="https://jsonplaceholder.typicode.com/users"
      const res=await fetch(`${URLS}/${apkId}`)
      const data=await res.json();
      console.log(data.name)
     return data.name
      
    }
    catch(err){console.log(err)}
  }
  const comUser=async(postId)=>{
    try{
      const URLS="https://jsonplaceholder.typicode.com/users"
      const pk="comments"
      const res=await fetch(`${URLS}/${postId}/${pk}`)
      const data=await res.json();
      setResults(data)
      
    }
    catch(err){console.log(err);}
  }
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
              <CommentIcon color="primary"/>
              <Button size="small" onClick={(e)=>{handleClickOpen(e.target.value)}}>Comment</Button>
              <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
            </CardActions>
          </Card>
          </div>
      })}
    </div>
  );
}

export default App;
