import React, { Component } from 'react'
import Person from './Person'

export default class PersonList extends Component {
  render() {
    let persons = [
        {
            name: 'Muhammad',
            age: 24
        }, 
        {
            name: 'Tahir',
            age: 23
        }, 
        {
            name:'Memon',
            age: 22
        }, 
        {
            name:'Abdul',
            age: 21
        }, 
        {
            name:'Samad',
            age: 20
        }]
    let personList = persons.map(person => <Person person={person}/>)
    return <div><ul>{personList}</ul></div>
  }
}
