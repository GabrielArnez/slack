import React, { Children, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Message } from './styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

  function Canal() {
    const [messages, setMessages] = useState([]);
    let { id } = useParams();
    const mensagem = getCanal(id);
    return (
      <div>
          msg:<p>{mensagem}</p>
      </div>
    );
  }

  function getCanal(id){
       axios.get(`http://localhost:8080/messages?channel_id=${id}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        });
  }

function ChannelData() {
    return(
        <Container>
            <Switch>
                <Route path="/:id" children={<Canal/>}/>
            </Switch>  
        </Container>
    );
}




export default ChannelData;


