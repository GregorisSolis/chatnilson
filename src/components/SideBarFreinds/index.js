import React from 'react'
import './sideBarFreinds.css'

function SideBarFreinds(){

	return(
		<div className="container-sidebar">
			<div className="title_chat">
				<h1>Chats</h1>
				<div className="icon-add"><strong>+</strong></div>
			</div>
			<div className="input_sidebar">
				<input type="text" className="input_search" placeholder="Search Here..."/>
			</div>
			<div className="container-list_chat">
				<div className="item-friends">
					<div className="photo_profile">
						<img src="https://cdn.bitrix24.com/b16507207/landing/a22/a22234b7bda07a424890d360e48cf971/headset_male_man_support_user_young_icon-1320196267025138334_1x.png" alt="photo_profile_nilson"/>
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