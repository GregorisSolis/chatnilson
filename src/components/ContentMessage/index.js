import React, { Component } from 'react'
import './contentMessage.css'
import ContentConversation from '../ContentConversation'
import photo_profile from '../../Chat/userNilson.png'


export default class ContentMessage extends Component {

	state = {
		base: [{ id: 1, text: 'Hello, I am Nilson, to start I need your full name', fromMe: false }],
		info: '',
		moment: 2,
		user: [],
	}

	//this code is responsible for knowing the current year
	yearNow = () => {
		let year = new Date()
		return year.getFullYear()
	}

	//This code is responsible for sending and verifying that the user's messages are correctly written
	sendMessage = (e) => {
		e.preventDefault()

		const { base, info, moment } = this.state
		let data = {}

		if (info !== "") {

			if (moment === 4 || moment === 5 || moment === 6) {

				data = { id: base.length + 1, text: info, fromMe: true }
				base.push(data)

				if (isNaN(info) || info.includes('.') || info.includes(',') || info <= 0) {
					data = { id: base.length + 1, text: 'The dates of birth must be in number, please try again', fromMe: false }
					base.push(data)
				} else if (moment === 4 && info > this.yearNow()) {
					data = { id: base.length + 1, text: `I'm sorry, I think we haven't reached this year yet, please try again`, fromMe: false }
					base.push(data)
				} else if (moment === 5 && info > 12) {
					data = { id: base.length + 1, text: `Sorry, the month ${info} does not exist, please try again`, fromMe: false }
					base.push(data)
				} else if (moment === 6 && info > 31) {
					data = { id: base.length + 1, text: `sorry, the day ${info} does not exist, please try again`, fromMe: false }
					base.push(data)
				} else {
					this.setState({ moment: moment + 1 })
					this.botNilsonResponse()
				}
			}
			else if (moment === 7) {

				data = { id: base.length + 1, text: info, fromMe: true }
				base.push(data)

				if (info.includes('@') || info.includes('.com')) {
					this.setState({ moment: moment + 1 })
					this.botNilsonResponse()
				} else {
					data = { id: base.length + 1, text: 'the email you sent is not valid, please try again', fromMe: false }
					base.push(data)
				}
			}
			else {
				data = { id: base.length + 1, text: info, fromMe: true }
				base.push(data)
				this.setState({ moment: moment + 1 })
				this.setState({ info: '' })
				this.botNilsonResponse()
			}

		}
		this.setState({ info: '' })
	}

	//this function sends nilson's response to the user
	botNilsonResponse = () => {

		const { base, moment, user } = this.state

		let resp = [
			`ok ${base[1].text}, Now that I know your name, what city and state do you live in?`,
			"Cool, now that we know your city and state. What year were you born?",
			"now tell me the month please",
			"to finish, the day you were born",
			"Now tell me your email, please.",
			"The registration process has been completed successfully.",
		]

		let data = {}

		switch (moment) {
			case 2:
				data = { id: base.length + 1, text: resp[0], fromMe: false }
				break;
			case 3:
				data = { id: base.length + 1, text: resp[1], fromMe: false }
				break;
			case 4:
				data = { id: base.length + 1, text: resp[2], fromMe: false }
				break;
			case 5:
				data = { id: base.length + 1, text: resp[3], fromMe: false }
				break;
			case 6:
				data = { id: base.length + 1, text: resp[4], fromMe: false }
				break;
			case 7:
				data = { id: base.length + 1, text: resp[5], fromMe: false }
				break;
			default:
				return null

		}
		user.push(base[base.length - 1].text)
		base.push(data)

		if (user.length === 6) {
			this.sendInfoUser()
		}

	}

	//This function is responsible for organizing and sending the data to the database
	sendInfoUser = () => {
		const { user } = this.state
		let profile = {
			name: user[0],
			cityAndState: user[1],
			birthOfDate: user[2] + "/" + user[3] + "/" + user[4],
			email: user[5],
			dateNow: Date.now()
		}
		//code to send profile data to database
	}

	render() {

		const { base } = this.state

		return (
			<div className="contentMessage">
				<div className="header-contentMessage">
					<div className="user_profile_nilson">
						<img src={photo_profile} alt="img_nilson_profile" />
					</div>
					<h2>Nilson Suport</h2>
				</div>

				<ContentConversation base={base} />

				<form className="input-message" onSubmit={this.sendMessage}>
					<input type="text" name="text" onChange={e => this.setState({ info: e.target.value })} placeholder="Type your message here..." value={this.state.info} />

					<button type="submit">
						<img src="https://cdn.pixabay.com/photo/2015/12/07/22/53/paper-planes-1081560_960_720.png" alt="icon-send" />
					</button>
				</form>
			</div>
		)
	}
}