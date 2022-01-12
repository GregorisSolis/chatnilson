import React, { Component } from 'react'
import './chat.css'
import SideBarFreinds from '../components/SideBarFreinds'
import ContentMessage from '../components/ContentMessage'

export default class Chat extends Component{
	render(){
		return(
			<div className="container-chat">

				<SideBarFreinds/>
				<ContentMessage/>

			</div>
		)
	}
}