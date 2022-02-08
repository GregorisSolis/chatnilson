import React from 'react'
import './itemMessage.css'

function ItemMessage(props){
	return(
		<div className={`${props.fromMe ? 'container-message' : 'container-message_nilson'}`}>
			<div className="message">
				<p>{props.text}</p>
			</div>
		</div>
	)
}

export default ItemMessage;