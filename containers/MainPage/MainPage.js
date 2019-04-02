import React, {Component} from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';

import classes from './MainPage.css'
import Auxx from '../../hoc/Auxx/Auxx';

import Cover from '../../components/MainPeaces/Cover/Cover';
import Events from '../../components/MainPeaces/Events/Events';
import AboutUs from '../../components/MainPeaces/AboutUs/AboutUs';
import Map from '../../components/MainPeaces/Map/Map';

import Reservation from '../../components/MainPeaces/Reservation/Reservation';
import Drinks from '../../components/MainPeaces/Drinks/Drinks';

const ResponsiveGridLayout=WidthProvider(Responsive);

class mainPage extends Component{

    render(){

        // const scrSize = window.innerWidth;
        
        const layout1700=[
            {i: 'cover'   ,x:0, y:0, w:1, h:6, static:true},
            {i: 'event'   ,x:0, y:18, w:1, h:14, static:true},
            {i: 'reser'   ,x:0, y:34, w:1, h:17, static:true},
            {i: 'aboutUs' ,x:0, y:51, w:1, h:8, static:true},
            {i: 'drinks'   ,x:0, y:59, w:1, h:10, static:true},
            {i: 'map'     ,x:1, y:69, w:1, h:10, static:true}
        ]

        const layout1500n=[
            {i: 'cover'   ,x:0, y:0, w:1, h:6, static:true},
            {i: 'event'   ,x:0, y:15, w:1, h:13, static:true},
            {i: 'reser'   ,x:0, y:29, w:1, h:17, static:true},
            {i: 'aboutUs' ,x:0, y:46, w:1, h:8, static:true},
            {i: 'drinks'   ,x:0, y:54, w:1, h:9, static:true},
            {i: 'map'     ,x:1, y:63, w:1, h:10, static:true}
        ]

        const layout1000n=[
            {i: 'cover'   ,x:0, y:0, w:1, h:6, static:true},
            {i: 'event'   ,x:0, y:16, w:1, h:12, static:true},
            {i: 'reser'   ,x:0, y:29, w:1, h:16, static:true},
            {i: 'aboutUs' ,x:0, y:46, w:1, h:5, static:true},
            {i: 'drinks'   ,x:0, y:51, w:1, h:8, static:true},
            {i: 'map'     ,x:1, y:59, w:1, h:10, static:true}
        ]

        const layout768=[
            {i: 'cover'   ,x:0, y:0, w:1, h:9, static:true},
            {i: 'event'   ,x:0, y:10, w:1, h:11, static:true},
            {i: 'reser'   ,x:0, y:21, w:1, h:17, static:true},
            {i: 'aboutUs' ,x:0, y:39, w:1, h:4, static:true},
            {i: 'drinks'   ,x:0, y:43, w:1, h:6, static:true},
            {i: 'map'     ,x:1, y:49, w:1, h:7, static:true}
        ]

        let changeLayouy=
                    <ResponsiveGridLayout className="layout" 
                        breakpoints={{
                            lgx:1700,
                            lg:1500,  
                            md: 1000, 
                            sm: 768, 
                            xs:600,
                            xxs:0}}

                        layouts={{
                            lgx:layout1700,
                            lg:layout1500n, 
                            md:layout1000n, 
                            sm:layout768
                        }} 

                        cols={{
                            lgx:1,
                            lg:1, 
                            md:1,
                            sm:1
                        }} 

                        rowHeight={50} 

                        width={{
                            lgx:1700, 
                            lg:1500,  
                            md: 1000, 
                            sm: 768}}>

                        
                        <div className={classes.Cover} key="cover"><Cover/></div>
                        <div className={classes.Event} key="event"><Events/></div> 
                        <div className={classes.Reservation} key="reser"><Reservation/></div> 
                        <div className={classes.Drinks} key="drinks"><Drinks/></div> 
                        <div className={classes.aboutUs} key="aboutUs"><AboutUs/></div>
                        <div className={classes.map} key="map"><Map/></div>
                       
            
                    </ResponsiveGridLayout>
                
        
        return(
            <Auxx>
            {changeLayouy}
            </Auxx>
        )
    }
};

export default mainPage ;