import React from 'react'
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardText from 'material-ui/Card/CardText'
import BackIcon from 'material-ui/svg-icons/action/flip-to-front'
import FrontIcon from 'material-ui/svg-icons/action/flip-to-back'
import cp from './colophon.js'

const maxWidth = {maxWidth: '24em'}

export function Front (props) {
  return (
    <Card onExpandChange={props.doFlip} containerStyle={props.getSize()} style={maxWidth}>
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
  )
}

export function Back (props) {
  const subtitleJSX = <span>&nbsp;</span>
  const titleJSX = (
    <div>
      Copyright &copy;{cp.year} {' '}
      <a target='_blank' href={cp.author.url}>{cp.author.name}</a>
    </div>
  )
  return (
    <Card onExpandChange={props.doFlip} containerStyle={props.getSize()} style={maxWidth}>
      <CardHeader
        title={titleJSX}
        subtitle={subtitleJSX}
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
  )
}
