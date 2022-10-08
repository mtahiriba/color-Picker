import React, { Component } from 'react'

export default class fragments extends Component {

    myfunc(){
        alert('i am tahir')
    }
    
  render() {
    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                    </tr>
                </tbody>
                
            </table>
        </React.Fragment>
    )
  }
}
