import React, {Component} from 'react';
import Auxx from '../Auxx/Auxx';
import Header from '../../components/MainPeaces/Header/Header';
import Footer from  '../../components/MainPeaces/Footer/Footer';
import classes from './Layout.css';

class Layout extends Component{
    render(){
        return (
            <Auxx>
                <Header />
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
                <Footer />
            </Auxx>
        );
    }
}

export default Layout;