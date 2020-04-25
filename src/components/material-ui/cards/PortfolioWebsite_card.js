import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PortfolioWebsite_card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        target="_blank"
        href="https://github.com/RslWlsn3/Portfolio-Website-React"
      >
        <CardMedia
          className={classes.media}
          image={require('../../../img/projects/project6.PNG')}
          title="Porfolio website"
          style={{ height: 0, paddingTop: '75%' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Porfolio website
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            I built this website using Sass, React, and Material UI.
            Responsiveness with kept in mind throughout development. I am
            currently hosting with GitHub Pages.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href="https://github.com/RslWlsn3/Portfolio-Website-React"
        >
          GITHUB
        </Button>
      </CardActions>
    </Card>
  );
}
