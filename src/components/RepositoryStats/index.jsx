import { StyleSheet, View } from 'react-native'
import React from 'react';
import StyledText from '../../styles/styledText';

const RepositoryStats = (repo) => {
  return (
    <View>
        <StyledText>stargazersCount: {repo.stargazersCount}</StyledText>
        <StyledText>forksCount: {repo.forksCount}</StyledText>
        <StyledText>reviewCount: {repo.reviewCount}</StyledText>
        <StyledText>ratingAverage: {repo.ratingAverage}</StyledText>
    </View>
  )
}

export default RepositoryStats

const styles = StyleSheet.create({})