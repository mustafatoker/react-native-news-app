import React from 'react';
import {Header as NHEADER} from "react-native-elements";

const Header = () => {
    return (
        <NHEADER
            leftComponent={{icon: 'menu', color: '#fff'}}
            centerComponent={{text: 'SAHEL', style: {color: '#fff'}}}
            rightComponent={{icon: 'home', color: '#fff'}}
        />
    );
};

export default Header

