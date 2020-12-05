import React from 'react';

export default function Nav({navigation}) {

    function displayMainNav(navigation) {
        return navigation.map((item) => {
            if (item.submenu) {
               return <li key={item.title} className="submenu"><a href={item.slug}>{item.title}</a></li>
            } else {
                return <li key={item.title}><a href={item.slug}>{item.title}</a></li>
            }

        })
    }

    return (
        <nav>
            <ul>
                {displayMainNav(navigation)}
            </ul>
        </nav>
    )
};