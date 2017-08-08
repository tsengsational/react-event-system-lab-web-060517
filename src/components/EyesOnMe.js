// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
  render(){
    return(
      <button onFocus={this.focus} onBlur={this.blur} />
    )
  }

  focus = () => {
    console.log('Good!')
  }

  blur = () => {
    console.log('Hey! Eyes on me!')
  }
}

export default EyesOnMe
