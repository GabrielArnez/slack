import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
import axios from 'axios';

function ChannelList () {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/channels')
        .then((response) => {
            setChannels(response.data);
        });
    }, []);
    
    return(
        <Container>
            <span>Channels</span>
            {channels.map((channel) => (
                    <li key={channel.id}>
                        # <Link to={channel.id}>{channel.name}</Link>
                    </li>
            ))}
        </Container>
    );
}

export default ChannelList;