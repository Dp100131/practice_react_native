import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StyledText from '../../styles/styledText.jsx'
import RepositoryStats from '../RepositoryStats/index.jsx'
const RepositoryItem = (repo) => {
  return (
    <View 
        key={repo.id} 
        style={styles.container}
    >
        <StyledText fontWeight={'bold'}>id: {repo.id}</StyledText>
        <StyledText color={'primary'}>fullName: {repo.fullName}</StyledText>
        <StyledText>description: {repo.description}</StyledText>
        <StyledText>language: {repo.language}</StyledText>
        <RepositoryStats {...repo} ></RepositoryStats>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 20, 
        paddingBottom: 5, 
        paddingTop:5
    },
    strong:{
        fontWeight:'bold', 
        marginBottom:5,
        color:'#09f'
    }
})

export default RepositoryItem