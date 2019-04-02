import React, {Component} from 'react';
import classes from './AboutUs.css';
import Auxx from '../../../hoc/Auxx/Auxx';

import { Parallax } from 'react-scroll-parallax';

class AboutUs extends Component {

     state={
          scrSize: window.innerWidth
     }

     render(){

          let paraLayout=     
               <Parallax
                    className={classes.AboutUs}
                    offsetXMax={'0%'}
                    offsetXMin={'-8%'}
                    slowerScrollRate
                    tag="figure">
                    <div className={classes.Title}>About us</div>
                    <div className={classes.Text}>Lorem ipsum dolor sit amet, vel ex dicta impetus, <br/> malis omnium eruditi eos id, vix harum tempor te. Sumo consul impetus duo ea. <br /> Id cum nonumy quaeque consequuntur, nam in probo posse minimum,  <br />qui no dolore splendide moderatius. </div>
               </Parallax>

          if(this.state.scrSize>600 && this.state.scrSize<1000){
               paraLayout=     
               <Parallax
                    className={classes.AboutUs}
                    offsetXMax={'50%'}
                    offsetXMin={'-130%'}
                    slowerScrollRate
                    tag="figure">
                    <div className={classes.Title}>About us</div>
                    <div className={classes.Text}>Lorem ipsum dolor sit amet, vel ex dicta impetus, <br/> malis omnium eruditi eos id, vix harum tempor te. Sumo consul impetus duo ea. <br /> Id cum nonumy quaeque consequuntur, nam in probo posse minimum,  <br />qui no dolore splendide moderatius. </div>
               </Parallax>
          } else if(this.state.scrSize>100){
               paraLayout=     
               <Parallax
                    className={classes.AboutUs}
                    offsetXMax={'25%'}
                    offsetXMin={'-10%'}
                    slowerScrollRate
                    tag="figure">
                    <div className={classes.Title}>About us</div>
                    <div className={classes.Text}>Lorem ipsum dolor sit amet, vel ex dicta impetus, <br/> malis omnium eruditi eos id, vix harum tempor te. Sumo consul impetus duo ea. <br /> Id cum nonumy quaeque consequuntur, nam in probo posse minimum,  <br />qui no dolore splendide moderatius. </div>
               </Parallax>
          } 


          return(
               <Auxx>
                    {paraLayout}
               </Auxx>
          );
     }
}

export default AboutUs ;