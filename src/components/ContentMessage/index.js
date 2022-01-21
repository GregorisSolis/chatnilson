import React,{Component} from 'react'
import './contentMessage.css'

import ContentConversation from '../ContentConversation'


export default class ContentMessage extends Component{

	state = {
		base:[{id:1, text: 'Hello, I am Nilson, to start I need your full name', fromMe: false}],
		info: '',
	}

	//enviar mensaje
	sendMessage = () => {

		const { base, info } = this.state

		let data = {id: base.length + 1, text: info, fromMe: true}

		base.push(data)

		this.setState({info: ''})

		this.botNilsonResponse()

	}

	//respuesta de nilson
	botNilsonResponse = () => {

		const { base } = this.state

		let resp = [
			`ok ${base[1].text}, Now that I know your name, what city and state do you live in?`,
			"Cool, now that we know your city and state. What year were you born?",
			"now tell me the month please",
			"to finish, the day you were born",
			"Now tell me your email, please.",
			"You 've finished the test Make an assessment of the process you went through to get here. We thank!"
		]

		let data = null

		switch (base.length){
			case 2:
				data = {id: base.length + 1, text: resp[0] , fromMe: false}
			break;
			case 4:
				data = {id: base.length + 1, text: resp[1] , fromMe: false}
			break;
			case 6:
				data = {id: base.length + 1, text: resp[2] , fromMe: false}
			break;
			case 8:
				data = {id: base.length + 1, text: resp[3] , fromMe: false}
			break;			
			case 10:
				data = {id: base.length + 1, text: resp[4] , fromMe: false}
			break;
			case 12:
				data = {id: base.length + 1, text: resp[5] , fromMe: false}
			break;
			case 14:
				data = {id: base.length + 1, text: resp[6] , fromMe: false}
			break;
		}
		
		if(base.length < 14){
			base.push(data)
		}

	}

render(){

	const { base, info } = this.state

	return(
		<div className="contentMessage">


			<div className="header-contentMessage">
				<i className="led-freinds"></i>
				<h2>Nilson Suport</h2>
			</div>

			<ContentConversation base={base} />

			<div className="input-message">

				<input type="text" onChange={e => this.setState({ info: e.target.value })} placeholder="Type your message here..." value={this.state.info} />
				
				<button onClick={() => this.sendMessage()}>
					<img src="https://cdn.pixabay.com/photo/2015/12/07/22/53/paper-planes-1081560_960_720.png" alt="icon-send"/>
				</button>
				
			</div>

		</div>
	)
}
}