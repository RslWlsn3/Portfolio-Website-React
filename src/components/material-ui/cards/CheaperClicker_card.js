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

export default function CheaperClicker_card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        target="_blank"
        href="https://github.com/MacBoyPro98/CheaperClicker"
      >
        <CardMedia
          className={classes.media}
          image={require('../../../img/projects/project3.jpeg')}
          title="Cheaper Clicker"
          style={{ height: 0, paddingTop: '75%' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cheaper Clicker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A proof of concept for a digital classroom quizzing system. Students
            use their phones to answer questions shown on a main projected
            display. The display receives live updates of student
            responses via server-sent events.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href="https://github.com/MacBoyPro98/CheaperClicker"
        >
          GITHUB
        </Button>
      </CardActions>
    </Card>
  );
}
