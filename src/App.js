import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'

// Import components
import Formulaire from './components/Formulaire'
import Message from './components/Message'
 
// Import firebase
import base from './base'

// Import Animations
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {
  state = {
    messages: {},
    // Pseudo récuperé depuis l'URL 
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidMount(){
    base.syncState('/',{
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate(){
    const ref = this.messagesRef.current
    //console.log(ref)
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = (message) => {
    const messages = {...this.state.messages}
    // Ajout du message dans le state (à l'aide d'un timestamp )
    messages[`message-${Date.now()}`] = message
    console.log(messages)
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })
    this.setState({messages})
  }

  isUser = (pseudo) => {
    return pseudo === this.state.pseudo
  }


  render () {
    const messages = Object
    .keys(this.state.messages)
    .map(key => (
      <CSSTransition
        timeout={200}
        classNames='fade'
        key={key}>
        <Message 
          isUser={this.isUser}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}
        />
      </CSSTransition>

    ))
    //console.log(messages)
    return (
      <div className='box'>
        <div>
          <div 
            className="messages" 
            ref={this.messagesRef}
            >
            <TransitionGroup className="message">
              {messages}
            </TransitionGroup>
          </div>
        </div>
        <Formulaire
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
        />
      </div>
    )
  }
}

export default App
