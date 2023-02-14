import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Featured(props) {

    return (
        <div className='container'>
            <h3>Featured Content</h3>
            <div className={styles.featuredGridContainer}>
                {
                    props.data.map((item, key) => {

                        return (

                            <div key={key} className={styles.featuredContainer} onClick={() => {window.location.href="https://blog.superflows.dev"}}>
                                <img src={item.coverImage} className={styles.featuredImage}  />
                                <div>
                                    <b>{item.title}</b> <br />
                                    <div className={styles.featuredFooter}>
                                        <small>{item.dateAdded} ago</small> &nbsp; 
                                    </div>
                                </div>
                            </div>
                        );

                    })
                }
                
            </div>
            <br /><br />
        </div>
    )
}