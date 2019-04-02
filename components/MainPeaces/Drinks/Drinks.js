import React from 'react';
import classes from './Drinks.css';
const drinks = (props) => {

     const img3="https://firebasestorage.googleapis.com/***";
     const img5="https://firebasestorage.googleapis.com/***";
     const img6="https://firebasestorage.googleapis.com/***";
     const img7="https://firebasestorage.googleapis.com***";
     const img8="https://firebasestorage.googleapis.com***";
     const img13="https://firebasestorage.googleapis.com/***";
     const img15="https://firebasestorage.googleapis.com/***";
     const img16="https://firebasestorage.googleapis.com/***";
     
     return(
     <div className={classes.Offers}>
          <img className={classes.Drinks} src={img15} alt="img11" />
          <img className={classes.Drinks} src={img13} alt="img2" />
          <img className={classes.Drinks} src={img7} alt="img7" />
          <img className={classes.Drinks} src={img16} alt="img4" />

          <img className={classes.Drinks} src={img3} alt="img3" />
          <img className={classes.Drinks} src={img5} alt="img5" />
          <img className={classes.Drinks} src={img6} alt="img6" />
          <img className={classes.Drinks} src={img8} alt="img6" />
     </div>
     );
};

export default drinks ;