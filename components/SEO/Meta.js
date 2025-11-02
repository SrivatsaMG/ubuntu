import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Srivatsa M G Portfolio - Full-Stack Developer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Srivatsa M G Portfolio - Full-Stack Developer" />
            <meta name="description"
                content="Srivatsa M G's Personal Portfolio Website. Full-Stack Developer from Mysore. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Srivatsa M G" />
            <meta name="keywords"
                content="srivatsa mg, srivatsa portfolio, full-stack developer, web developer, ubuntu portfolio, developer portfolio,srivatsa mg ubuntu portfolio, srivatsa, vatsa, vasta" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/profile.jpg" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Srivatsa M G Portfolio - Full-Stack Developer" />
            <meta itemProp="description"
                content="Srivatsa M G's Personal Portfolio Website. Full-Stack Developer from Mysore. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/profile.jpg" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Srivatsa M G Portfolio - Full-Stack Developer" />
            <meta name="twitter:description"
                content="Srivatsa M G's Personal Portfolio Website. Full-Stack Developer from Mysore." />
            <meta name="twitter:image:src" content="images/logos/profile.jpg" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Srivatsa M G Portfolio - Full-Stack Developer" />
            <meta name="og:description"
                content="Srivatsa M G's Personal Portfolio Website. Full-Stack Developer from Mysore." />
            <meta name="og:image" content="images/logos/profile.jpg" />
            <meta name="og:url" content="https://srivatsamg.netlify.app" />
            <meta name="og:site_name" content="Srivatsa M G Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/profile.jpg" />
            <link rel="apple-touch-icon" href="images/logos/profile.jpg" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
