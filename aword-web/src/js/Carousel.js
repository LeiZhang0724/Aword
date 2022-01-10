import React, { useState } from 'react'
import { Carousel } from 'antd'

const contentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
}

function CarouselComponent(props) {
	const [cardSide, setCardSide] = useState(true)
	function handleFlip() {
		setCardSide(!cardSide)
	}
	function onChange() {}

	let wordsData = props.data
	return (
		<Carousel afterChange={onChange}>
			{Object.entries(wordsData).map(([key, value]) => (
				<div key={key} className="card-container">
					<div className="flip" onClick={() => handleFlip()}>
						{cardSide ? (
							<div className="front">
								<h3 style={contentStyle}>{key}</h3>
							</div>
						) : (
							<div className="back">
								<h3 style={contentStyle}>{value}</h3>
							</div>
						)}
					</div>
				</div>
			))}
		</Carousel>
	)
}

export default CarouselComponent
