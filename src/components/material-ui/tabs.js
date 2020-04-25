import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import BaseStation_card from './cards/BaseStation_card';
import HooptimeDashboard_card from './cards/HooptimeDashboard_card';
import CheaperClicker_card from './cards/CheaperClicker_card';
import FallingBlock_card from './cards/FallingBlock_card';
import TTT_card from './cards/TTT_card';
import PortfolioWebsite_card from './cards/PortfolioWebsite_card';
import SeniorPrj_card from './cards/SeniorPrj_card';
import Parallelism_card from './cards/Parallelism_card';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Web tech" {...a11yProps(0)} />
          <Tab label="Python" {...a11yProps(1)} />
          <Tab label="C#" {...a11yProps(2)} />
          <Tab label="C++" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid key={value} item>
                  <HooptimeDashboard_card />
                </Grid>
                <Grid key={value} item>
                  <CheaperClicker_card />
                </Grid>
                <Grid key={value} item>
                  <PortfolioWebsite_card />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid key={value} item>
                  <SeniorPrj_card />
                </Grid>
                <Grid key={value} item>
                  <FallingBlock_card />
                </Grid>
                <Grid key={value} item>
                  <TTT_card />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid key={value} item>
                  <BaseStation_card />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid key={value} item>
                  <Parallelism_card />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
