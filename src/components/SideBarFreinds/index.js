import React from 'react'
import './sideBarFreinds.css'
import photo_profile from '../../Chat/userNilson.png'

function SideBarFreinds() {

	return (
		<div className="container-sidebar">
			<div className="title_chat">
				<h1>Chats</h1>
				<div className="icon-add"><strong>+</strong></div>
			</div>
			<div className="input_sidebar">
				<input type="text" className="input_search" placeholder="Search Here..." />
			</div>
			<div className="container-list_chat">
				<div className="item-friends">
					<div className="photo_profile">
						<img src={photo_profile} alt="photo_profile_nilson" />
					</div>
					<div className="content-name_and_message">
						<h4>Nilson</h4>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideBarFreinds;