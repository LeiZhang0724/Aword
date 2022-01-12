/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

const useSpeechSynthesis = (props = {}) => {
	const { onEnd = () => {} } = props
	const [voices, setVoices] = useState([])
	const [speaking, setSpeaking] = useState(false)
	const [supported, setSupported] = useState(false)
	// finished, playing, paused, resumed
	const [playStatus, setPlayStatus] = useState('finished')

	const processVoices = (voiceOptions) => {
		setVoices(voiceOptions)
	}

	const getVoices = () => {
		// Firefox seems to have voices upfront and never calls the
		// voiceschanged event
		let voiceOptions = window.speechSynthesis.getVoices()
		if (voiceOptions.length > 0) {
			processVoices(voiceOptions)
			return
		}

		window.speechSynthesis.onvoiceschanged = (event) => {
			voiceOptions = event.target.getVoices()
			processVoices(voiceOptions)
		}
	}

	const handleEnd = () => {
		setSpeaking(false)
		setPlayStatus('finished')
		onEnd()
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && window.speechSynthesis) {
			setSupported(true)
			getVoices()
		}
	}, [])

	const speak = (args = {}) => {
		const { voice = null, text = '', rate = 1, pitch = 1, volume = 1 } = args
		if (!supported) return
		setSpeaking(true)
		setPlayStatus('playing')
		// Firefox won't repeat an utterance that has been
		// spoken, so we need to create a new instance each time
		const utterance = new window.SpeechSynthesisUtterance()
		utterance.text = text
		utterance.voice = voice
		utterance.onend = handleEnd
		utterance.rate = rate
		utterance.pitch = pitch
		utterance.volume = volume
		window.speechSynthesis.speak(utterance)
	}

	const cancel = () => {
		if (!supported) return
		setSpeaking(false)
		setPlayStatus('finished')
		window.speechSynthesis.cancel()
	}

	const pause = () => {
		if (!supported) return
		setPlayStatus('paused')
		window.speechSynthesis.pause()
	}
	const resume = () => {
		if (!supported) return
		setPlayStatus('resumed')
		window.speechSynthesis.resume()
	}

	return {
		supported,
		speak,
		speaking,
		cancel,
		voices,
		pause,
		resume,
		playStatus,
	}
}

export default useSpeechSynthesis
