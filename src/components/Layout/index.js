import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import ChannelList from '../ChannelList';
import ChannelName from '../ChannelName';
import ChannelData from '../ChannelData';
import NewMessage from '../NewMessage';

import './styles.css';

function Chat() {
    return (
        <div id="page-chat"> 
            <aside>
                <header>XYZ Company</header>
                <nav>
                    <Router>
                        <ChannelList />
                        <ChannelData />
                    </Router>
                </nav>
            </aside>

            <div className="container">
                <header>
                    <ChannelName />
                </header>
                <main>  
                            
                
                </main>
                <footer>
                    <NewMessage />
                </footer>
            </div>
            
        </div>
    );
}

export default Chat;