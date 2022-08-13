# CalmSlides
## Website

**Live URL:** [View CalmSlides Live](https://calmslides.netlify.app/)

![CalmSlides Home Page](https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%2F1.png?alt=media "CalmSlides Home Page")

CalmSlides in basic terms is a marquee-styled slideshow of randomly selected images.

It is powered by another project of mine called the “[CalmSlides Bot](https://github.com/Ola4606/Calm-Slides-Bot)” _(this was a worker bot built with NodeJS, that ran for 4 days, and stored the metadata of about 100,000 Unsplash images | which was all legal according to the Unsplash API guidelines)_ .

On the website, users can have “Relaxation Sessions” for which they can set the time _(how long the slideshow will last, e.g., 5mins)_ and speed _(how fast the slideshow will move, e.g., Medium)_.

The website uses the image URLs from the metadata stored on my MongoDB database to power the relaxation sessions, but there were some problems I ran into while building this project with MongoDB:

![CalmSlides Session Settings](https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%2F2.png?alt=media "CalmSlides Session Settings")

**Immediate Problem:**  I am using the MongoDB free tier, meaning that there are a limited number of connections allowed at a time to the database _(about 500 simultaneous connections)_. So, all users could not be connected to the database directly.

**Solution:**  I used the MongoDB Data API service to act as a medium between the users and the MongoDB database. This solves the immediate problem because, all users now retrieve data using an API, rather than connecting directly with the database; meaning that only 1 connection is being made to the database on behalf of all users.

**Further Problem:**  MongoDB prevents their Data API service from being used directly from the browser _(client-side)_, due to some CORS policy violations, which was a problem I did not know about until after writing the code to get data using the Data API service.

**Solution:**  I used the MongoDB Realm service _(through the realm-web NPM package)_ which allows users to make the MongoDB Data API calls _(as a function)_ from the MongoDB servers and returns the data to them on the browser.

**A Further Further Problem:**  I am using MongoDB Realm on its free tier, hence I am limited to 1 million function calls per month, after which users cannot use my website.

**Solution (Coming Soon!):**  I aim to build an API using ExpressJS that runs the MongoDB API calls server side to retrieve the data for the users. I will make requests to this API using the Axios NPM package and return the data to the browsers. This will allow me to avoid MongoDB Realm.

![A CalmSlides Session](https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%2F5.png?alt=media "A CalmSlides Session")

Using TailwindCSS breakpoints, I was able to make it fully responsive for mobile, tablet, and laptop screens.

While building this website, I was able to improve my skills on some React principles and concepts, such as:

*   Using React Hooks _(namely useState, useEffect, and useMemo)_
*   Using React Memo
*   Passing and receiving props

I also learned new principles, which included:

*   The React Router DOM NPM Package which allowed me to add multi-page navigation to the website
*   The Realm-web NPM package which allowed me to use MongoDB Realm services

**Key NPM Packages used:**  realm-web, react-timer-hook, react-router-dom

**Read on more of my projects over on my website:** [Adeyemo OlaOluwa](https://laolu.netlify.app/)

