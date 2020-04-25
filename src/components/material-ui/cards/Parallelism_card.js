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

export default function Parallelism_card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        target="_blank"
        href="https://github.com/RslWlsn3/Parallelism-RFI"
      >
        <CardMedia
          className={classes.media}
          image={require('../../../img/projects/Parallelism.png')}
          title="Parallelism-RFI"
          style={{ height: 0, paddingTop: '75%' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Parallelism-RFI
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A merge sort which utilizes the C++ thread class to increase
            performance.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href="https://github.com/RslWlsn3/Parallelism-RFI"
        >
          GITHUB
        </Button>
      </CardActions>
    </Card>
  );
}
