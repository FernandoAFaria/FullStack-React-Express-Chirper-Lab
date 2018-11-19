# FullStack-React-Express-Chirper-Lab
#In this lab, you will combine two concepts:
#
#Building and serving an API using Express
#Building a ReactJS front-end that consumes that API
#You'll need to combine these two concepts into one project folder.
#
#API
#Your API should already be completed. Bring it into this project, making sure to observe the project structure discussed in lecture. Transition to using ES6 import/export syntax.
#
#Front-End
#Create a ReactJS front-end, observing the project structure discussed in lecture. The front-end should have a router that shows a list of chirps as the main page. There should be a form for creating a new chirp. Use an onClick event on the button to submit a POST request to your api using the fetch API.
#
#Each chirp should contain a button that says See Details. When that button is clicked, you should go to a page that specializes in displaying info for a single chirp.
#
#On the page for a single chirp, you should make a GET request for the specific chirp. Display the chirp information on the page. Have an X button on the page that will trigger a DELETE request to the API for that chirp. Send the user back to the main page when the chirp is successfully deleted. You should also have an Edit link that will send the user to a page that specializes in editing a single chirp.
#
#On the page for editing a single chirp, you should have a form that is prefilled with the current value of the chirp data. The user should be able to make changes and then click an update button to trigger a PUT request to the API for that chirp. When the update is successful, send the user back to the main page.
