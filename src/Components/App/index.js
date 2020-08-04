import React, { useState } from 'react';
import NewMessageForm from '../NewMessageFrom';
import MessageList from '../MessageList';

//Style
import AppStyle from './AppStyle';

const App = () => {

  const [messages, setMessages] = useState([]);

  const handleSend = newMessage => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <AppStyle>
      <h4>New messages</h4>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </AppStyle>
  );
};

export default App;