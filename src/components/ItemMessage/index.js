import react from 'react'
import './itemMessage.css'

function ItemMessage(props){
	return(
		<div className="container-message">
			<div className="message">
				<p>{props.text}</p>
			</div>
		</div>
	)
}

export default ItemMessage;