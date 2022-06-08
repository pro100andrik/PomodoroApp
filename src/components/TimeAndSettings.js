import SettingsContainer from './SettingsContainer';

const TimeAndSettings = props => {
  const renderTime = time => {
    return `${('0' + parseInt(time / 60)).slice(-2)}:${('0' + parseInt(time % 60)).slice(-2)}`
  }
    return(
      <div>
        <div className='time'>
          {renderTime(props.secondsLeft)}
          <button className='settings-button' onClick={props.changeSettingsState}> ⚙️ </button>
        </div>
        {props.showSettings
          ?
        <div>
        <SettingsContainer typeTime={props.typeTime}
                           changeSettingsState={props.changeSettingsState}
                           changeFinalTime={props.changeFinalTime}/>
        </div>
          :
        null}
      </div>
    )
}

export default TimeAndSettings
