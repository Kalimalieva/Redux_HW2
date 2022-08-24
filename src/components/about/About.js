import React from 'react';
import classes from './about.module.css'

function About(props) {
    return (
        <div className={classes.aboutLorem}>
            <h1>About Lorem</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Amet eaque fugiat itaque natus nesciunt nihil reprehenderit, velit.
                Consequatur deleniti ea illum magni maiores quidem quo quos reiciendis.
                Magnam mollitia, tempore.</p>
        </div>
    );
}

export default About;