import React from 'react';
import StartStopResetButton from './components/StartStopResetButton';
import TimeAndSettings from './components/TimeAndSettings';
import ModeButtons from './components/ModeButtons';
import beep from './beep.mp3'


import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      typeTime:{ pomodoro: 25, shortBreak: 5, longBreak: 15},
      type: 'pomodoro',
      isActive: false,
      secondsLeft: 1500,
      showSettings: false,
      resetActive: false,
      beep: new Audio (beep)
    })
  }

  changeStatus = () => {
    this.setState ({
      isActive: !this.state.isActive,
      resetActive: true
    })
    if (!this.state.isActive) {
      this.timerInterval = setInterval( () => {
        if (this.state.secondsLeft === 0){
          if (this.state.type === 'pomodoro'){
            this.setState({
              type: 'shortBreak',
              secondsLeft: this.convertMinutesToSeconds(this.state.typeTime['shortBreak'])
            })
            this.state.beep.play();
          }else if(this.state.type === 'shortBreak'){
            this.setState({
              type: 'pomodoro',
              secondsLeft: this.convertMinutesToSeconds(this.state.typeTime['pomodoro'])
            })
            this.state.beep.play();
          }else{
            this.setState({
              type: 'pomodoro',
              secondsLeft: this.convertMinutesToSeconds(this.state.typeTime['pomodoro'])
            })
            this.state.beep.play();
          }
        }
        this.setState(prevState => ({ secondsLeft: prevState.secondsLeft - 1}));
      } ,1000)
    } else {
      clearInterval(this.timerInterval);

    }
  }

  handleReset = () => {
    this.setState({
      isActive: false,
      resetActive: false,
      secondsLeft: this.convertMinutesToSeconds(this.state.typeTime[this.state.type])
    })
    clearInterval(this.timerInterval);

  }

  convertMinutesToSeconds = time => {
    return time * 60;
  }

  changetype = newType => {
    this.setState ({
      type: newType,
      secondsLeft: this.convertMinutesToSeconds(this.state.typeTime[newType])
    })
  }

  changeSettingsState = () => {
    this.setState({showSettings: !this.state.showSettings})
  }

  changeFinalTime = (newTime, target) => {
     this.setState({
       typeTime: {...this.state.typeTime, [target]:newTime},
     })
     if (target === this.state.type){
       this.setState({
         secondsLeft: this.convertMinutesToSeconds(newTime)
       })
     }
  }


  render() {
    return (
      <div>
      <div className='mode-buttons' >
        <ModeButtons changetype={this.changetype} type={this.state.type}/>
      </div>
      <div className={this.state.showSettings ? 'mainContainer-settings' : "mainContainer"}>
        <TimeAndSettings typeTime={this.state.typeTime}
                         type={this.state.type}
                         secondsLeft={this.state.secondsLeft}
                         showSettings={this.state.showSettings}
                         changeSettingsState={this.changeSettingsState}
                         changeFinalTime={this.changeFinalTime}/>
      </div>
      <div className='start-stop-button'>
        <StartStopResetButton isActive={this.state.isActive}
                              changeStatus={this.changeStatus}
                              resetActive={this.state.resetActive}
                              handleReset={this.handleReset} /> </div>
      </div>
    )
  }
}


export default App;
