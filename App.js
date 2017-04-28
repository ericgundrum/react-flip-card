import React from 'react'
import style from './flip.css'
import { Front, Back } from './Content.js'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { flipped: false }
    this.doFlip = this.doFlip.bind(this)
    this.setSize = this.setSize.bind(this)
    this.getSize = this.getSize.bind(this)
  }

  doFlip () { this.setState({flipped: !this.state.flipped}) }

  setSize (elm) {
    if (elm) {
      const size = {
        height: elm.getBoundingClientRect().height,
        width: elm.getBoundingClientRect().width
      }
      elm.id === 'front' ? this.front = size : this.back = size
    }
  }
  getSize () { return this.state.size || {} }

  componentDidMount () {
    this.setState({ size: {
      height: Math.max(this.front.height, this.back.height),
      width: Math.max(this.front.width, this.back.width)
    }})
  }

  render () {
    return (
      <div className={[style.flipcontainer, this.state.flipped ? style.flip : ''].join(' ')}
        style={this.state.size ? {width: this.state.size.width} : {}}>
        <div className={style.flipper}>
          <div id='front' className={style.front} ref={this.setSize}>
            <Front doFlip={this.doFlip} getSize={this.getSize} />
          </div>
          <div className={style.back} ref={this.setSize}>
            <Back doFlip={this.doFlip} getSize={this.getSize} />
          </div>
        </div>
      </div>
    )
  }

}
