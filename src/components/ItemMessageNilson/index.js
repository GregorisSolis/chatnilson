import react from 'react'
import './itemMessageNilson.css'

function ItemMessageNilson(props){
	return(
		<div className="container-message_nilson">
			<div className="message">
				<p>{props.text}</p>
			</div>
		</div>
	)
}

export default ItemMessageNilson;