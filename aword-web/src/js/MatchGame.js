import React from 'react'

import { Card, Statistic } from 'antd'
const { Countdown } = Statistic
const deadline = Date.now() + 1000 * 60 * 30 // Moment is also OK

class MatchGame extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			wordsData: props.data,
			matchWordsArray: [],
			matchWordsArrayDisplay: [],
			matchedIndex: [],
			wordsMap: null,
			gameStatus: false,
			activeCardIndex: null,
			firstSelect: null,
		}
	}
	componentDidMount() {
		let matchWordsArray = this.state.matchWordsArray
		let matchWordsArrayDisplay = this.state.matchWordsArrayDisplay
		Object.entries(this.state.wordsData).forEach(([key, value]) => {
			matchWordsArray.push(key)
			matchWordsArray.push(value)
		})
		matchWordsArray.sort(function () {
			return Math.random() - 0.5
		})

		matchWordsArray.forEach((item, index) => {
			matchWordsArrayDisplay[index] = 'visible'
		})
		this.setState({
			matchWordsArray: matchWordsArray,
			matchWordsArrayDisplay: matchWordsArrayDisplay,
		})
	}
	componentDidUpdate() {}
	handleClick(index, word) {
		this.setState({ gameStatus: true, activeCardIndex: index })
		let matchedIndex = this.state.matchedIndex
		let matchWordsArrayDisplay = this.state.matchWordsArrayDisplay
		if (this.state.firstSelect === null) {
			matchedIndex[0] = index
			this.setState({
				firstSelect: word,
				matchedIndex: matchedIndex,
			})
		} else {
			if (this.state.wordsData[word] === undefined) {
				if (this.state.wordsData[this.state.firstSelect] === word) {
					matchedIndex[1] = index
					matchedIndex.forEach((m) => {
						matchWordsArrayDisplay[m] = 'hidden'
					})

					this.setState({
						firstSelect: null,
						activeCardIndex: null,
						matchWordsArrayDisplay: matchWordsArrayDisplay,
						matchedIndex: [],
					})
				} else {
					this.setState({
						firstSelect: null,
						activeCardIndex: null,
						matchedIndex: [],
					})
				}
			} else {
				if (this.state.wordsData[word] === this.state.firstSelect) {
					matchedIndex[1] = index
					matchedIndex.forEach((m) => {
						matchWordsArrayDisplay[m] = 'hidden'
					})

					this.setState({
						firstSelect: null,
						activeCardIndex: null,
						matchWordsArrayDisplay: matchWordsArrayDisplay,
						matchedIndex: [],
					})
				} else {
					this.setState({
						firstSelect: null,
						activeCardIndex: null,
						matchedIndex: [],
					})
				}
			}
		}
	}
	onFinish() {
		console.log('finished!')
	}

	onChange(val) {
		if (4.95 * 1000 < val && val < 5 * 1000) {
			console.log('changed!')
		}
	}
	render() {
		return (
			<div className="matchGame-container">
				<Countdown
					title="Countdown"
					value={deadline}
					onFinish={() => this.onFinish}
				/>
				<div className="cards-container">
					{this.state.matchWordsArray.map((word, index) => (
						<Card
							className={this.state.activeCardIndex === index ? 'active' : ''}
							style={{
								width: 300,
								visibility: this.state.matchWordsArrayDisplay[index],
							}}
							key={index}
							onClick={() => this.handleClick(index, word)}
						>
							{/* , visibility: 'hidden' */}
							<p>{word}</p>
						</Card>
					))}
				</div>
			</div>
		)
	}
}

export default MatchGame
