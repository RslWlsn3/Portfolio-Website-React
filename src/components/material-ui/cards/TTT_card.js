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

export default function TTT_card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        target="_blank"
        href="https://github.com/RslWlsn3/Tic_Tac_toe"
      >
        <CardMedia
          className={classes.media}
          image={require('../../../img/projects/project5.png')}
          title="Tic Tac Toe"
          style={{ height: 0, paddingTop: '75%' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Tic Tac Toe
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            Single or two player tic tac toe game. The game can be played with
            the console or a GUI created with Tkinter.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href="https://github.com/RslWlsn3/Tic_Tac_toe"
        >
          GITHUB
        </Button>
      </CardActions>
    </Card>
  );
}
