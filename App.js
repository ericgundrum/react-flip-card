import React from 'react'
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardText from 'material-ui/Card/CardText'
import BackIcon from 'material-ui/svg-icons/action/flip-to-front'
import FrontIcon from 'material-ui/svg-icons/action/flip-to-back'
import style from './flip.css'

let flipped = false

export default () => (
  <div className={[style.flipcontainer, flipped ? style.flip : ''].join(' ')}>
  	<div className={style.flipper}>
  		<div id='front' className={style.front}>
        <Card style={{ maxWidth: '30em' }} onExpandChange={() => {
          console.log('flipped:', flipped)
          flipped=!flipped
        }}>
          <CardHeader
          title = 'Loaded'
          subtitle = { new Date().toLocaleTimeString() }
          showExpandableButton = {true}
          closeIcon = { React.createElement(FrontIcon) }
          openIcon = { React.createElement(BackIcon) }
          />
          <CardText>
            the void
          </CardText>
        </Card>
      </div>
      <div className={style.back}>
        <Card style={{ maxWidth: '30em' }} onExpandChange={() => {
          console.log('flipped:', flipped)
          flipped=!flipped
        }}>
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
)
