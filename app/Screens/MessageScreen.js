import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Icon from '../components/Icon';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const data = [
  {
    id: 't1',
    title: 't1',
    description: 'd1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 't2',
    title: 't2',
    description: 'd2',
    image: require('../assets/mosh.jpg'),
  },
];

const MessageScreen = () => {
  const [messages, setMessages] = useState(data);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    const newMessages = messages.filter((msg) => {
      return msg.id !== message.id;
    });
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => {
          return message.title.toString();
        }}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => {
                console.log('Message selected ', item);
              }}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          );
        }}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(data);
        }}
      />
    </Screen>
  );
};

export default MessageScreen;
