import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { auth } from '../../firebase/firebase.utils';


import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container"> <Logo className="logo" /> </Link>
        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/shop" className="option">Contact</Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className="option" to='/signin'>Sign In</Link>
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);