import React,{ useEffect, useRef } from 'react'
import './contentConversation.css'
import ItemMessage from '../ItemMessage'


export default function ContentConversation(prop){

	const ref = useRef(null)

	useEffect(() => {
		ref.current.scrollTop = ref.current.scrollHeight
	}, [prop])

	
	return	<div className="content-conversation" ref={ref}>
				<p className="data-conversation">now</p>
				{prop.base.map(message => (
					<ItemMessage key={message.id} fromMe={message.fromMe} text={message.text}/>
				))}
			</div>
}