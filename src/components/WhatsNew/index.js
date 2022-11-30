import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function WhatsNew(props) {

    return (
        <div className='container'>
            <h3>What's New!</h3>
            <div className={styles.cardGridContainer}>
                <div className={styles.cardContainer} onClick={() => {
                    window.open(props.data.url, '_blank')}
                    }>
                    <b>{props.data.name}</b> <br />
                    <div className={styles.cardFooter}>
                        <small>{props.data.timestamp} ago</small> &nbsp; 
                        {props.data.author != null && <small>by {props.data.author.login}</small>} &nbsp; &nbsp; 
                        {props.data.author != null && <img className={styles.cardAuthorProfile} src={props.data.author.profile} />}
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    )
}