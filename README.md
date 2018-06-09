# Austin Music Events
###### *MongoDB CRUD / Web Scraping Application*

### [VISIT THE SITE](https://whispering-brook-63081.herokuapp.com/)

This site is an experiment in scraping the Austin Chronicle for live music events and using the data in a simple CRUD application. I query the Austin Chronicle by with axios using today's date via moment.js. I scrape the pertinent data with cheerio.js and save that data in an existing event model previous setup using MongoDB / Mongoose. Mongoose handles populating each Event with its respective Notes if there are any. The front end is handled by Handlebar.js (zing). Node / Express for the back end.

#### Noteable Technologies:
* Node
* Express
* MongoDB
* Mongoose
* Cheerio
* Axios
* Handlebars

