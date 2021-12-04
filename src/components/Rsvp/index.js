import { config } from 'config'
import React, { Component } from 'react'

import './style.css'

import SectionTitle from '../SectionTitle'

class Rsvp extends Component {
    state = {
        first_name: '',
        last_name: '',
        number_attending: '',
        note: '',
        error: {},
        showAcceptButton: true,
        showDeclineButton: true,
        acceptButtonText: "I'll be there!",
        acceptButtonClass: 'submit accept',
        declineButtonText: "I'm sad to miss it...",
        declineButtonClass: 'submit decline',
    }

    changeHandler = e => {
        const error = this.state.error
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error,
        })
    }

    validateForm = () => {
        const { first_name, last_name, error } = this.state
        let hasError = false

        if (first_name === '') {
            error.first_name = 'Please tell us your first name'
            hasError = true
        }
        if (last_name === '') {
            error.last_name = 'Please tell us your last name'
            hasError = true
        }

        this.setState({ error })

        return hasError
    }

    acceptRsvp = e => {
        e.preventDefault()

        const hasError = this.validateForm()
        let acceptButtonText = 'Adding you to VIP...'
        let acceptButtonClass

        if (!hasError) {
            this.setState({
                showDeclineButton: false,
                acceptButtonText,
            })

            const { first_name, last_name, number_attending, note } = this.state

            const formData = {
                first_name,
                last_name,
                number_attending,
                note,
                is_attending: 'Yes',
                rsvped_at: new Date().toLocaleString('en-US', {
                    timeZone: 'America/Chicago',
                }),
            }

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }

            fetch(config.rsvp.url, options)
                .then(response => {
                    if (response.status === 200) {
                        acceptButtonText = 'We have you on the list!'
                        acceptButtonClass = 'submit accept'
                    } else {
                        acceptButtonText =
                            'Something went wrong! Please try again...'
                        acceptButtonClass = 'btn-danger'
                    }
                    this.setState({ acceptButtonText, acceptButtonClass })
                })
                .catch(() => {
                    acceptButtonText =
                        'Something went wrong! Please try again...'
                    acceptButtonClass = 'btn-danger'
                    this.setState({ acceptButtonText, acceptButtonClass })
                })
        }
    }

    rejectRsvp = e => {
        e.preventDefault()

        const hasError = this.validateForm()
        let declineButtonText = 'Saving...'
        let declineButtonClass

        if (!hasError) {
            this.setState({
                showAcceptButton: false,
                declineButtonText,
            })

            const { first_name, last_name, number_attending, note } = this.state

            const formData = {
                first_name,
                last_name,
                number_attending,
                note,
                is_attending: 'No',
                rsvped_at: new Date().toLocaleString('en-US', {
                    timeZone: 'America/Chicago',
                }),
            }

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }

            fetch(config.rsvp.url, options)
                .then(response => {
                    if (response.status === 200) {
                        declineButtonText = 'We will miss you!'
                        declineButtonClass = 'submit decline'
                    } else {
                        declineButtonText =
                            'Something went wrong! Please try again...'
                        declineButtonClass = 'btn-danger'
                    }
                    this.setState({ declineButtonText, declineButtonClass })
                })
                .catch(() => {
                    declineButtonText =
                        'Something went wrong! Please try again...'
                    declineButtonClass = 'btn-danger'
                    this.setState({ declineButtonText, declineButtonClass })
                })
        }
    }

    render() {
        const {
            first_name,
            last_name,
            number_attending,
            note,
            error,
            showAcceptButton,
            showDeclineButton,
            acceptButtonText,
            acceptButtonClass,
            declineButtonText,
            declineButtonClass,
        } = this.state
        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <SectionTitle section={'Come Celebrate With Us!'} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="rsvp-wrap">
                                <form onSubmit={this.submitHandler}>
                                    <div className="contact-form form-style">
                                        <div className="col-12 col-sm-12">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                onChange={this.changeHandler}
                                                value={first_name}
                                                id="first_name"
                                                name="first_name"
                                            />
                                            <p>
                                                {error.first_name
                                                    ? error.first_name
                                                    : ''}
                                            </p>
                                        </div>
                                        <div className="col-12  col-sm-12">
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                onChange={this.changeHandler}
                                                value={last_name}
                                                id="last_name"
                                                name="last_name"
                                            />
                                            <p>
                                                {error.last_name
                                                    ? error.last_name
                                                    : ''}
                                            </p>
                                        </div>
                                        <div className="col-12  col-sm-12">
                                            <input
                                                type="text"
                                                placeholder="How many in your party?"
                                                onChange={this.changeHandler}
                                                value={number_attending}
                                                id="number_attending"
                                                name="number_attending"
                                            />
                                            <p>
                                                {error.number_attending
                                                    ? error.number_attending
                                                    : ''}
                                            </p>
                                        </div>
                                        <div className="col-12 col-sm-12">
                                            <textarea
                                                className="contact-textarea"
                                                value={note}
                                                onChange={this.changeHandler}
                                                placeholder="Leave us a note..."
                                                name="note"
                                            ></textarea>
                                            <p>
                                                {error.note ? error.note : ''}
                                            </p>
                                        </div>
                                        <div className="col-12 text-center d-flex justify-content-between">
                                            {showDeclineButton && (
                                                <button
                                                    id="submit"
                                                    type="button"
                                                    onClick={this.rejectRsvp}
                                                    className={
                                                        declineButtonClass
                                                    }
                                                >
                                                    {declineButtonText}
                                                </button>
                                            )}
                                            {showAcceptButton && (
                                                <button
                                                    id="submit"
                                                    type="button"
                                                    onClick={this.acceptRsvp}
                                                    className={
                                                        acceptButtonClass
                                                    }
                                                >
                                                    {acceptButtonText}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rsvp
