// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import axios from 'axios';
// import ExploreContainer from '../components/ExploreContainer';
// import './Home.css';


const Home: React.FC = () => {

  const [username, setUsername] = React.useState("")
  const login =() =>{
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(respose =>{
      console.log(respose.data)
      setUsername(respose.data.title)
    }).catch(error =>{ console.log(error)});
  }


  return (
    <div style={{margin:'20px'}}>
      <div>
        <div>Hello</div>
        <div>{`${username}`}  </div>
        <button onClick={login} > Login</button>
      </div>
    </div>
  );
};

export default Home;
