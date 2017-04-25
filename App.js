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
    this.getSize = this.getSize.bind(this)
  }

  doFlip() { this.setState({flipped: !this.state.flipped}) }

  setSize(elm) {
    if (elm) {
      const size = {
        height: elm.getBoundingClientRect().height,
        width: elm.getBoundingClientRect().width
      }
      elm.id === 'front' ? this.front = size : this.back = size
    }
  }
  getSize() { return this.state.size || {} }

  componentDidMount() {
    this.setState({ size: {
      height: Math.max(this.front.height, this.back.height),
      width:  Math.max(this.front.width,  this.back.width)
    }})
  }

  render() { return (
  <div className={[style.flipcontainer, this.state.flipped ? style.flip : ''].join(' ')}
    style={Object.assign( { maxWidth: '15em' },
      this.state.size ? { width: this.state.size.width } : {} )}>
  	<div className={style.flipper}>
  		<div id='front' className={style.front} ref={this.setSize}>
        <Card onExpandChange={this.doFlip} containerStyle={ this.getSize() }>
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
      <div className={style.back} ref={this.setSize}>
        <Card onExpandChange={this.doFlip} containerStyle={ this.getSize() }>
          <CardHeader
          title = 'Loaded'
          subtitle = { new Date().toLocaleTimeString() }
          showExpandableButton = {true}
          closeIcon = { React.createElement(BackIcon) }
          openIcon = { React.createElement(FrontIcon) }
          />
          <CardText>
            the void behind is more than it seems
          <p/>
            yet just enough
          </CardText>
        </Card>
      </div>
    </div>
  </div>
  )}

}
