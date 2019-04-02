import React, {Component} from 'react';
import classes from './CoverText.css';
import { Parallax} from 'react-scroll-parallax';

class MusicalNotes extends Component{
   render(){
       return(
        <Parallax
        className={classes.MusicalNotes}
        offsetYMax={'90%'}
        offsetYMin={'-90%'}
        slowerScrollRate
        tag="font">
            <div className={classes.MusicNotes1}>Welcome</div>
            <div className={classes.MusicNotes2}>to</div>
            <div className={classes.MusicNotes3}>the</div>
            <div className={classes.MusicNotes4}>Rock</div>
            <div className={classes.MusicNotes5}>pub</div>
        </Parallax>       
   )};
};

export default MusicalNotes ;