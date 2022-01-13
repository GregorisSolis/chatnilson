import React,{Component} from 'react'
import './contentMessage.css'

import ItemMessageNilson from '../ItemMessageNilson'
import ItemMessage from '../ItemMessage'

export default class ContentMessage extends Component{

	state = {
		BD:["What your name?","You are from?"]
	}

render(){
	return(
		<div className="contentMessage">

			<div className="header-contentMessage">
				<i className="led-freinds"></i>
				<h2>Nilson Suport</h2>
			</div>

			<div className="content-conversation">

				<ItemMessageNilson text={this.state.BD[0]} />


				<ItemMessage text="quiero registrarme" />

			</div>

			<div className="input-message">
				<input text="text" name="message" placeholder="Type your message here..." />
				<button type="submit">
					<img src="https://cdn.pixabay.com/photo/2015/12/07/22/53/paper-planes-1081560_960_720.png" alt="icon-send"/>
				</button>
			</div>

		</div>
	)
}
}