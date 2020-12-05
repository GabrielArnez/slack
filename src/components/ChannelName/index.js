import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import axios from 'axios';


function ChannelName () {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/channels')
        .then((response) => {
            setChannels(response.data);
        });
    }, []);
    
    return(
        <Container>
            {channels.map((channel) => (
                <div key={channel.id}>
                   # {channel.name}
                </div>
            ))}
        </Container>
    );
}

export default ChannelName;