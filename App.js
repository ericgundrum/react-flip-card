import React from 'react'
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardText from 'material-ui/Card/CardText'

export default () => (
  <Card style = {{ maxWidth: '30em' }}>
    <CardHeader
    title = 'Loaded'
    subtitle = { new Date().toLocaleTimeString() }
    />
    <CardText>
      the void
    </CardText>
  </Card>
)
