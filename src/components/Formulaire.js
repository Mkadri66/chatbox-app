import React, { Component } from 'react'

class Formulaire extends Component {

    state = {
        message: ""
    }

    createMessage = () => {
        const { addMessage, pseudo } = this.props

        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        // Reset text area 
        this.setState({message: ''})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createMessage();
    }

    handleChange = (event) => {
        const message = event.target.value
        this.setState({message})
    }
    render() {
        return (
            <div>
                <form 
                    className="form"
                    onSubmit = {this.handleSubmit}>
                    <textarea
                        value={this.state.message}
                        onChange={this.handleChange}
                        required
                        maxLength="140">
                    </textarea>
                    <div className="info">140</div>
                    <button type="submit">
                        Envoyer !
                    </button>
                </form>
            </div>
        )
    }
}

export default Formulaire
