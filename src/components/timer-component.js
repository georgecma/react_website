import React from 'react'
import PropTypes from 'prop-types'

// adapted from: https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

//WHAT TO DO???
/**
 * pomodoro timer ->
 * 1. pretty interface -> find react components/styles online 
 * 2. adjust timer -> input form
 * 3. sound -> ring a bell when timer ends -> how to serve static local file ? 
 * 
 * 4. routing -> figure out how to make multi-page stuff
 * 
 * 5. traditional desktop app -> you have the wireframe, what to do next 
 * 
 * */

class TimerComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			timerOn: false,
			timerStart: 0,
			twentyFive: 1000 * 60 * 25,
			timerTime: 1000 * 60 * 25,
			audioPlaying: false,
			audioSource : new Audio('https://freesound.org/data/previews/205/205588_71257-lq.mp3')

		}
		//function binding
		this.startTimer = this.startTimer.bind(this)
		this.stopTimer = this.stopTimer.bind(this)
		this.resetTimer = this.resetTimer.bind(this)
		this.addSecond = this.addSecond.bind(this)
		this.addMinute = this.addMinute.bind(this)
		this.addHour = this.addHour.bind(this)
		this.toggleAudio = this.toggleAudio.bind(this)
	}

	startTimer() {
		if (this.state.timerOn === false) {
			this.setState({
				timerOn: true,
				timerTime: this.state.timerTime,
				timerStart: this.state.timerTime
			})
			// function below sets timerTime every 10 ms 
			this.timer = setInterval(() => {
				const newTime = this.state.timerTime - 10;
				if (newTime >= 0) {
					this.setState({
						timerTime: newTime
					});
				} else {
					clearInterval(this.timer)
					this.setState({
						timerOn: false
					})
					alert("Countdown ended")
				}
			}, 10);
		}
	}

	stopTimer() {
		clearInterval(this.timer)
		this.setState({ timerOn: false })
	}

	resetTimer() {
		const tf = this.state.twentyFive
		//if (this.state.timerOn === false) {
		this.setState({
			timerTime: tf,
			timerOn: false
		})
		clearInterval(this.timer)
		//}
	}

	addSecond() {
		this.setState({ timerTime: this.state.timerTime + 1000 })
	}
	addMinute() {
		this.setState({ timerTime: this.state.timerTime + 1000 * 60 })
	}
	addHour() {
		this.setState({ timerTime: this.state.timerTime + 1000 * 60 * 60 })
	}

	toggleAudio() {
		const {audioSource, audioPlaying} = this.state
		if (audioPlaying) {
			audioSource.pause()
			audioSource.currentTime = 0 // resets audio on button click 
			this.setState({audioPlaying:false})
		} else {
			audioSource.play()
			this.setState({ audioPlaying: true })
		}
		// resets state after audio ends 
		audioSource.onended = () => {
			this.setState({audioPlaying: false })
		}
	}
	

	render() {
		// Time rendering component
		const { timerTime } = this.state
		let timeInSeconds = (timerTime / 1000)
		let seconds = Math.floor(timeInSeconds % 60)
		let minutes = Math.floor((timeInSeconds / 60) % 60)
		let hours = Math.floor(timeInSeconds / 3600)

		

		return (

			<>

				<div id="timerDisplay">
					{hours}:{minutes}:{seconds}
				</div>

				<div id="buttons">
					<button onClick={this.startTimer}>Start</button>
					<button onClick={this.stopTimer}>Stop</button>
					<button onClick={this.resetTimer}>Reset</button>
				</div>
				<div>
					<button onClick={this.addSecond}> add second </button>
					<button onClick={this.addMinute}> add minute </button>
					<button onClick={this.addHour}> add hour </button>
					<button onClick={this.toggleAudio}> audio </button>
				</div>
			</>
		)
	}
}
// Enforces error checking 
TimerComponent.propTypes = {

}


export default TimerComponent 