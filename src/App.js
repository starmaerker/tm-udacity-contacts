import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  state = {
    contacts: [
      {
        "id": "tatyana",
        "name": "Tatyana Rabievska",
        "handle": "@atranarta",
        "avatarURL": "http://localhost:5001/tatyana.png"
      },
      {
        "id": "olzhas",
        "name": "Olzhas Askar",
        "handle": "@pheeria",
        "avatarURL": "http://localhost:5001/olzhas.jpg"
      },
      {
        "id": "andreas",
        "name": "Andreas Gropp",
        "handle": "@starmaerker",
        "avatarURL": "http://localhost:5001/andreas.jpg"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState((currentState) => ( {
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
  }

  render() {
    return (
      <div className="App">
        <ListContacts
           contacts={this.state.contacts}
           onDeleteContact={this.removeContact}
         />
      </div>
    )
  }
}

export default App;
