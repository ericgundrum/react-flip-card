import React from 'react'
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardText from 'material-ui/Card/CardText'
import BackIcon from 'material-ui/svg-icons/action/flip-to-front'
import FrontIcon from 'material-ui/svg-icons/action/flip-to-back'
import style from './flip.css'
import cp from './colophon.js'

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

  blank () { return (<span>&nbsp;</span>) }
  copyright () {
    return (
      <div>
        Copyright &copy;{cp.year} {' '}
        <a target='_blank' href={cp.author.url}>{cp.author.name}</a>
      </div>
    )
  }

  render () {
    return (
      <div className={[style.flipcontainer, this.state.flipped ? style.flip : ''].join(' ')}
        style={Object.assign({maxWidth: '24em'},
          this.state.size ? {width: this.state.size.width} : {})}>
        <div className={style.flipper}>
          <div id='front' className={style.front} ref={this.setSize}>
            <Card onExpandChange={this.doFlip} containerStyle={this.getSize()}>
              <CardHeader
                title='Flip Card'
                subtitle={'rendered ' + new Date().toLocaleTimeString()}
                showExpandableButton
                closeIcon={React.createElement(FrontIcon)}
                openIcon={React.createElement(FrontIcon)}
              />
              <CardText>
                {cp.description} {' '}
                <a target='_blank' href={cp.homepage} alt='more info' style={{opacity: '.7'}}>
                  <img src='external-link.svg' width='12' />
                </a>
              </CardText>
            </Card>
          </div>
          <div className={style.back} ref={this.setSize}>
            <Card onExpandChange={this.doFlip} containerStyle={this.getSize()}>
              <CardHeader
                title={this.copyright()}
                subtitle={this.blank()}
                showExpandableButton
                closeIcon={React.createElement(BackIcon)}
                openIcon={React.createElement(BackIcon)}
              />
              <CardText>
                version {cp.version}<br />
                build {cp.build.rev} ({cp.build.branch})
                {cp.build.clean ? '' : ' modified'}<br />
                usage and <a target='_blank' href={cp.source}>source code</a>
                {' '} governed by the {' '}
                <a target='_blank' href={'https://spdx.org/licenses/' + cp.license + '.html'}>
                  {cp.license} license
                </a>
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    )
  }

}
