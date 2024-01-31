import {  Text, FlatList } from 'react-native';
import React from 'react'

import repositories from '../../../data/repositories.js'
import RepositoryItem from '../RepositoryItem/index.jsx'

export function RepositoryList() {
  return (
    <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => (<Text> </Text>)}
        renderItem={({ item: repo }) => ( <RepositoryItem {...repo} /> )}
    >
    </FlatList>
  )
}