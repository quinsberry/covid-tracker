import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cn from 'classnames'

import styles from './Cards.module.scss'

const Cards = ({ data, loading }) => {

  const { confirmed, recovered, deaths, lastUpdate } = data

  const cardsContainer = [
    {
      title: 'Confirmed',
      numbers: confirmed ? confirmed.value : null,
      date: lastUpdate ? new Date(lastUpdate).toDateString() : null,
      description: 'Number of confirmed cases of COVID-19'
    },
    {
      title: 'Recovered',
      numbers: recovered ? recovered.value : null,
      date: lastUpdate ? new Date(lastUpdate).toDateString() : null,
      description: 'Number of recovered cases of COVID-19'
    },
    {
      title: 'Deaths',
      numbers: deaths ? deaths.value : null,
      date: lastUpdate ? new Date(lastUpdate).toDateString() : null,
      description: 'Number of deaths of COVID-19'
    },
  ]

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardsContainer.map((card, index) => (
          <Grid key={index} item component={Card} className={cn(styles.card, styles[card.title.toLowerCase()])} xs={12} md={3}>
            <CardContent >
              <Typography color="textSecondary" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="h5">
                {loading || card.numbers === null ? 'loading..' : (
                  <CountUp start={0} end={card.numbers} duration={2.5} separator="," />
                )}
              </Typography>
              <Typography color="textSecondary">
                {card.date}
              </Typography>
              <Typography variant="body2">
                {card.description}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Cards
