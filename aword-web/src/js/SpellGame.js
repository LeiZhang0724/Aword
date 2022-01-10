import React, { useState } from 'react'
import { Radio, Input, Button } from 'antd'

export default function SpellGame(props) {
	let wordsData = props.data
	const [randomWordsArray, setRandomWordsArray] = useState(
		Object.entries(wordsData).sort(function () {
			return Math.random() - 0.5
		})
	)
	const [gameLevel, setGameLevel] = useState('hard')
	const [finishedCount, setFinishedCount] = useState(0)
	const [wordIndex, setWordIndex] = useState(0)
	const [hintStatus, setHintStatus] = useState(false)
	const [inputArray, setInputArray] = useState([])
	const [inputArrayStatus, setInputArrayStatus] = useState([])
	const handleGameLevelSelect = (e) => {
		setGameLevel(e.target.value)
	}
	const handleInput = (e) => {
		let tmpInputArray = [...inputArray]
		tmpInputArray[e.target.name] = e.target.value
		setInputArray(tmpInputArray)
		console.log(inputArray)
	}
	// useEffect(() => {
	// 	setInputArray(inputArray)
	// }, [inputArray, hintStatus])
	const handleSubmit = () => {
		let checkWordArray = randomWordsArray[wordIndex][0].split('')
		// if (gameLevel === 'easy') {
		// }
		let tmpInputArrayStatus = [...inputArrayStatus]
		for (let i = 0; i < checkWordArray.length; i++) {
			if (inputArray[i] === checkWordArray[i]) {
				// spell correct and set position as true
				tmpInputArrayStatus[i] = true
			} else {
				// spell wrong and set position as false
				tmpInputArrayStatus[i] = false
			}
		}
		setInputArrayStatus(tmpInputArrayStatus)

		if (inputArray.join('').length < checkWordArray.join('').length) {
			// do not insert all input
			console.log('do not finish')
		} else {
			if (inputArrayStatus.some((status) => status === false)) {
				console.log('spell wrong')
			} else {
				console.log('spell correct')
				let count = finishedCount + 1
				setFinishedCount(count)
				if (count === randomWordsArray.length) {
					console.log('game finished')
				} else {
					setWordIndex(wordIndex + 1)
					setInputArray([])
				}
			}
		}

		console.log(inputArray)
		console.log(checkWordArray)
		console.log(inputArrayStatus)
	}

	const handleHintChange = () => {
		setHintStatus(!hintStatus)
	}
	console.log(randomWordsArray)
	return (
		<div className="spellGame-container">
			<Radio.Group onChange={handleGameLevelSelect} defaultValue={gameLevel}>
				<Radio.Button value="hard">Hard</Radio.Button>
				<Radio.Button value="medium">medium</Radio.Button>
				<Radio.Button value="easy">easy</Radio.Button>
			</Radio.Group>
			<div className="count-finished">
				已完成 ： <span>{finishedCount}</span>/
				<span>{randomWordsArray.length}</span>
			</div>
			<div className="spell-container">
				<div className="spell-main">
					<div className="spell-display">
						{randomWordsArray[wordIndex][0].split('').map((w, i) => (
							<Input
								className="spell-input"
								style={
									inputArrayStatus[i] === false
										? { border: '1px solid red' }
										: {}
								}
								key={i}
								name={i}
								value={inputArray[i]}
								maxLength={1}
								onChange={handleInput}
							/>
						))}
					</div>
					<Button
						type={'primary'}
						onClick={handleSubmit}
						disabled={finishedCount === randomWordsArray.length}
					>
						Submit
					</Button>
					<Button
						type={hintStatus ? 'primary' : 'dashed'}
						onClick={handleHintChange}
					>
						Hint
					</Button>
				</div>
				<div
					className="spell-hint"
					style={{ visibility: hintStatus ? 'visible' : 'hidden' }}
				>
					{randomWordsArray[wordIndex][1]}
				</div>

				{/* {randomWordsArray.map(([key, value], index) => (
					<div className="spell-main" key={index}>
						<div className="spell-input">
							{key.split('').map((w, i) => (
								<Input key={i} />
							))}
						</div>
						<div className="spell-hint">{value}</div>
					</div>
				))} */}
			</div>
		</div>
	)
}
