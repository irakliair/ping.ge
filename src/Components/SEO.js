import React from 'react';
import {Helmet} from "react-helmet";

function SEO({title, description, name, type}) {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name="keywords" content="ping, pong, online ping, web ping, ping service, timeout, traceroute, response time, host, ttl, time to live, domain, dns, lookup, whois, utility, webping, http, webtool, web tool"/>
            { /* End standard metadata tags */}
            { /* Facebook tags */}
            <meta property="og:type" content={type}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={name}/>
            <meta name="twitter:card" content={type}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            { /* End Twitter tags */}
        </Helmet>
    );
}

export default SEO;