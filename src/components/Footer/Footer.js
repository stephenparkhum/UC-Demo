import React from 'react';

export default function Footer() {
    return (
        <>
        <footer>
            <div className="footer--left">
                <ul>
                    <li><span className="accent">Headquarters | </span><span className="grey-accent">800 Willamette Street, Suite 790, Eugene, Oregon 97401</span></li>
                    <li><span className="accent">USA Locations | </span><span className="grey-accent">Hawaii, Ohio, Tennessee, New York, Oregon, Utah, Texas, California</span></li>
                    <li><span className="accent">International Locations | </span><span className="grey-accent">Germany, Egypt</span></li>
                </ul>
            </div>
            <div className="footer--right">
            <ul>
              <li><span className="grey-accent">info@urbancollaborative.com</span></li>
              <li><span className="grey-accent">+1.510.551.8065</span></li>
            </ul>
            </div>
        </footer>
        <div className="footer--bottom">
            <div className="">
                  <p className="grey-accent">Copyright 2020 The Urban Collaborative</p>
            </div>
        <div className="">
                <p className="grey-accent">Full Contact List</p>
            </div>
        </div>
        </>
    )
};