import React from 'react'
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardText from 'material-ui/Card/CardText'
import BackIcon from 'material-ui/svg-icons/action/flip-to-front'
import FrontIcon from 'material-ui/svg-icons/action/flip-to-back'
import style from './flip.css'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { flipped: false }
    this.doFlip = this.doFlip.bind(this)
    this.setSize = this.setSize.bind(this)
  }

  doFlip() { this.setState({flipped: !this.state.flipped}) }

  setSize(elm) {
    if (elm) {
      this.setState({
        height: elm.getBoundingClientRect().height,
        width: elm.getBoundingClientRect().width
      })
    }
  }

  render() { return (
  <div className={[style.flipcontainer, this.state.flipped ? style.flip : ''].join(' ')}
    style={ this.state.width ? { width: this.state.width } : {} }>
  	<div className={style.flipper}>
  		<div id='front' className={style.front} ref={this.setSize}>
        <Card style={{ maxWidth: '30em' }} onExpandChange={this.doFlip}>
          <CardHeader
          title = 'Loaded'
          subtitle = { new Date().toLocaleTimeString() }
          showExpandableButton = {true}
          closeIcon = { React.createElement(FrontIcon) }
          openIcon = { React.createElement(BackIcon) }
          />
          <CardText>
            the void
          <p/>
            not quite empty
          </CardText>
        </Card>
      </div>
      <div className={style.back}>
        <Card style={{ maxWidth: '30em' }} onExpandChange={this.doFlip}
          style={ this.state.height ? { height: this.state.height } : {} }>
          <CardHeader
          title = 'Loaded'
          subtitle = { new Date().toLocaleTimeString() }
          showExpandableButton = {true}
          closeIcon = { React.createElement(BackIcon) }
          openIcon = { React.createElement(FrontIcon) }
          />
          <CardText>
            the void behind
          </CardText>
        </Card>
      </div>
    </div>
  </div>
  )}

}
