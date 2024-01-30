import { View, Text, FlatList } from 'react-native'
import React from 'react'

import repositories from '../../data/repositories.js'

export function RepositoryList() {
  return (
    <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => (<Text> </Text>)}
        renderItem={({ item: repo }) => (
            <View key={repo.id}>
                <Text>id: {repo.id}</Text>
                <Text>fullName: {repo.fullName}</Text>
                <Text>description: {repo.description}</Text>
                <Text>language: {repo.language}</Text>
                <Text>stargazersCount: {repo.stargazersCount}</Text>
                <Text>forksCount: {repo.forksCount}</Text>
                <Text>reviewCount: {repo.reviewCount}</Text>
                <Text>ratingAverage: {repo.ratingAverage}</Text>
            </View>
        )}
    >
    </FlatList>
  )
}