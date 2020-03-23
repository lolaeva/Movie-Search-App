Movie Search App based on APIs from OMDb API. 
Page deployed on Heroku. Click <a href="https://movie-app-lola.herokuapp.com/">here</a> to see it. 


1. Route /. Sticking request inside it. Once request is done, then we're rendering a template. The important part is JSON.parse(body) - turn string into JS object.
2. We're using dynamic url. So whatever user inputs (in query string - the form), /results outputs list of movies with that input inside its title.

ACCESS DATA FROM QUERY STRING. --req.query.something vs req.body.something--
When we send a GET request, parameters are passed into the url. For instance, take into consideration http://website.com/?username=bob 
Here we have a key/value pair, username = bob, where username is the key and bob is the value. This was pulled from a form with a name attribute called "username": <input type="text" name="username">  and this form was submitted as a GET request, not a POST request. The form tag was like this <form action="/someUrl" method="GET">  instead of <form action="/someUrl" method="POST"> 
When we send a form via a POST request, then the body-parser npm package populates the req.body object with the values from the form's inputs, mapped as key/value pairs.

So the thing to remember here is, if the request is sent via a GET method, then it will populate the req.query object, but if it is sent as a POST method then it will populate the req.body object (as long as body-parser is installed and configured properly in your project). 
