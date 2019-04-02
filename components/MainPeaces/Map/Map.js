import React, {Component} from 'react';
import classes from './Map.css';

import { Parallax } from 'react-scroll-parallax';
import Auxx from '../../../hoc/Auxx/Auxx';

class Map extends Component {
     state={
          scrSize: window.innerWidth
     }

     render(){
          let layout=
               <Parallax
               className={classes.AboutUs}
               offsetXMax={'0px'}
               offsetXMin={'0px'}

               slowerScrollRate
               tag="figure">
                    <iframe title= 'mapa' width="50%" id="gmap_canvas" src="https://maps.google.com/maps?q=sarajevo&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
               </Parallax>


          if(this.state.scrSize>600 && this.state.scrSize<1000 ){
               layout=
               <Parallax
               className={classes.AboutUs}
               offsetXMax={'-100%'}
               offsetXMin={'150%'}
               slowerScrollRate
               tag="figure">
                    <iframe title= 'mapa' width="0%" id="gmap_canvas" src="https://maps.google.com/maps?q=sarajevo&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
               </Parallax>
          } else if (this.state.scrSize>1000 && this.state.scrSize<1600){
               layout=
               <Parallax
               className={classes.AboutUs}
               offsetXMax={'-5%'}
               offsetXMin={'5%'}
               slowerScrollRate
               tag="figure">
                    <iframe title= 'mapa' width="0%" id="gmap_canvas" src="https://maps.google.com/maps?q=sarajevo&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
               </Parallax>
          } else if (this.state.scrSize>1600){
               layout=
               <Parallax
               className={classes.AboutUs}
               offsetXMax={'-3%'}
               offsetXMin={'3%'}
               slowerScrollRate
               tag="figure">
                    <iframe title= 'mapa' width="0%" id="gmap_canvas" src="https://maps.google.com/maps?q=sarajevo&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
               </Parallax>
          }

          return(
               <Auxx>
                    {layout}
               </Auxx>
          );
     }
}

export default Map ;