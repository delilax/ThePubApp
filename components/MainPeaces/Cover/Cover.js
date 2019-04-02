import React from 'react';
import classes from './Cover.css';
import CoverText from './LogoCover/CoverText/CoverText';

const cover = (props) => (

     <div className={classes.Cover}>
     <img src="https://firebasestorage.googleapis.com/v0/b/thepub.appspot.com/o/webimages%2Fbck2.png?alt=media&token=6f0b2e92-0f22-4025-97a7-d132a91ca87c" alt="bck" className={classes.BackgroundImage}></img>
     <CoverText className={classes.CoverText}/>
     </div>

);

export default cover ;