import React from 'react';
import Head from 'next/head';

const siteUrl = 'https://srivatsamg.netlify.app';
const profileImage = `${siteUrl}/images/logos/profile.jpg`;

const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Srivatsa MG',
    alternateName: ['Srivatsa M G', 'Srivatsa'],
    jobTitle: 'Full-Stack Developer',
    description:
        'Full-Stack Developer based in Mysore, India. This Ubuntu-themed portfolio showcases software projects, skills, and experience.',
    url: siteUrl,
    image: profileImage,
    sameAs: [
        'https://www.linkedin.com/in/srivatsa-m-g',
        'https://www.linkedin.com/in/srivatsamg/',
        'https://github.com/srivatsamg',
        siteUrl,
    ],
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mysore',
        addressCountry: 'IN',
    },
    worksFor: {
        '@type': 'Organization',
        name: 'Accenture',
    },
};

export default function Meta() {
    return (
        <Head>
            <title>Srivatsa MG | Ubuntu Portfolio &amp; Full-Stack Developer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Srivatsa MG | Ubuntu Portfolio &amp; Full-Stack Developer" />
            <meta
                name="description"
                content="Explore Srivatsa MG's Ubuntu-themed portfolio: an interactive Linux desktop showcasing full-stack development projects, skills, experience, and resume."
            />
            <meta name="author" content="Srivatsa MG" />
            <meta
                name="keywords"
                content="Srivatsa MG, Srivatsa M G, Srivatsa, Ubuntu portfolio, Ubuntu-themed portfolio, Linux portfolio, Full-Stack Developer, Full Stack Developer, Web Developer, Software Engineer, Mysore developer, developer portfolio"
            />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />
            <meta name="image" content={profileImage} />

            <meta itemProp="name" content="Srivatsa MG | Ubuntu Portfolio &amp; Full-Stack Developer" />
            <meta
                itemProp="description"
                content="An interactive Ubuntu-themed portfolio by Srivatsa MG, showcasing full-stack development projects, skills, and experience."
            />
            <meta itemProp="image" content={profileImage} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Srivatsa MG | Ubuntu Portfolio &amp; Full-Stack Developer" />
            <meta
                name="twitter:description"
                content="Explore Srivatsa MG's interactive Ubuntu-themed portfolio featuring full-stack projects, skills, and experience."
            />
            <meta name="twitter:image" content={profileImage} />
            <meta name="twitter:site" content="@srivatsamg" />
            <meta name="twitter:creator" content="@srivatsamg" />

            <meta property="og:title" content="Srivatsa MG | Ubuntu Portfolio &amp; Full-Stack Developer" />
            <meta
                property="og:description"
                content="Explore Srivatsa MG's interactive Ubuntu-themed portfolio featuring full-stack projects, skills, and experience."
            />
            <meta property="og:image" content={profileImage} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:site_name" content="Srivatsa MG Portfolio" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:type" content="website" />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            <link rel="icon" href="/images/logos/profile.jpg" />
            <link rel="apple-touch-icon" href="/images/logos/profile.jpg" />
            <link rel="canonical" href={siteUrl} />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
    );
}
