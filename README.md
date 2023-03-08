# Friends Quiz
'The One with the Ultimate Friends Quiz' is a multiple choice quiz for those interested in the TV show 'Friends'. Each game consists of 10 questions, with a 20 second timer for each question, with points being awarded for correct answers and how quickly those questions were answered, making this a game of both speed and 'Friends' knowledge.

![Friends quiz shown on a range of devices](docs/friends-quiz.png)

[View the live site here](https://s-batish.github.io/friends-quiz/)
## User Experience
### Site Owner's Goals
- To create an interactive online quiz to test users on their knowledge of the TV show 'Friends'
- To enable users to compete against their friends and family through the High Scores section, which makes it easy for users to see their previous scores and improve
- To provide a fully responsive quiz that can be played on a range of devices
### External User's Goals
- To play a fun and interactive online quiz to my my 'Friends' knowledge
- To save my high scores and view them in a leaderboard
- To have clear instructions about the rules of the game and how the scoring works
- To easily navigate the site and to have a way to return to the Home page at any point of the quiz
- To be able to restart the quiz at any point while I am playing the game
- To see what question number I am on and how many questions I have left
- To see how long I have left to answer the question
## Design
### Wireframes
Balsamiq wireframes were created for mobile, tablet and desktop devices to show the structure and overall design of each page of the quiz.

[Home page wireframe](docs/wireframes/homepage.png)

[Rules page wireframe](docs/wireframes/rules-page.png)

[Questions page wireframe](docs/wireframes/questions-page.png)

[End page wireframe](docs/wireframes/end-page.png)

[High scores page wireframe](docs/wireframes/high-scores-page.png)

### Colour Scheme
The purple and yellow colours have been used because of their connotations with the TV show 'Friends' and so have been chosen to tie into the theme of the quiz and also because they would be instantly recognisable colours to a fan of the programme.
### Typography
- The font 'Gloria Hallelujah' has been used for the title of the quiz because of its similarity to the 'Friends' logo.
- 'Cherry Swash' has been used for the headings, buttons and questions, and 'Montserrat' has been used for the answers and paragraph elements because they complement each other quite well and create an easy to read, but visually appealing quiz.
## Features
This quiz has been designed to be both entertaining and easy to use, and as such, the features that have been implemented across the game support this objective.
### Home page
-  This is what the user will be greeted with upon opening the quiz, and also what they will return to any time they click a button to return Home.
- It is an easy to navigate Home page, with the title of the quiz at the top, and 3 buttons below:
    
    - A Play button to start the quiz
    - A how to play button to take the user to the rules of the game
    - A High Scores button to take the user to the high scores page

<details><summary>Desktop home page</summary>

![Desktop home page](docs/features/home-page-desktop.png)
</details>
<details><summary>Mobile home page</summary>

![Mobile home page](docs/features/home-page-mobile.png)
</details>

### How to play section
- This section gives the user clear instructions about how the game works, including how many questions there are, how many seconds the user has to answer each question, and how the user's scores will be incremented.
- There is also a Home button at the bottom to allow the user to return to the Home page.

<details><summary>Desktop how to play section</summary>

![Desktop how to play section](docs/features/how-to-play-desktop.png)
</details>
<details><summary>Mobile how to play section</summary>

![Mobile how to play section](docs/features/how-to-play-mobile.png)
</details>

### High scores section
- This page displays the top 5 high scores in order from the highest at the top, to the 5th highest at the bottom.
- As the scores are only saved to local storage, users can only compete with those who play on the same device.
- There is a Clear high scores button which will clear the local storage and reload the window, taking the user back to the home page once this is clicked.
- The user can also move their mouse over each of the high scores which will enlarge them slightly as the mouse is hovering over it, which draws a bit more attention to the high score that the user is looking at.

<details><summary>Desktop high scores page</summary>

![Desktop high scores page](docs/features/high-scores-page-desktop.png)
</details>
<details><summary>Mobile high scores page</summary>

![Mobile high scores page](docs/features/high-scores-page-mobile.png)
</details>

### Quiz section
- When the user presses the play button they will be taken to the main quiz area, which displays 1 random question from the quizQuestions array and the 4 corresponding answer buttons.
- Below the answer buttons there is a Next button, which the user has to click to go to the next question, and a Restart button, which restarts the quiz, resetting the question counter to 1 and the timer and score to 0.

<details><summary>Desktop quiz section</summary>

![Desktop quiz section](docs/features/quiz-section-desktop.png)
</details>
<details><summary>Mobile quiz section</summary>

![Mobile quiz page](docs/features/quiz-section-mobile.png)
</details>

- If the user answers the question correctly, the answer button that they clicked on will change colour to green, and all of the answer buttons will become disabled, preventing the user from clicking on them.

<details><summary>Desktop correct answer</summary>

![Desktop correct answer](docs/features/correct-answer-desktop.png)
</details>
<details><summary>Mobile correct answer</summary>

![Mobile correct answer](docs/features/correct-answer-mobile.png)
</details>

- If the user answers the question incorrectly, the answer button that they clicked on will change colour to red, and all of the answer buttons will become disabled, preventing the user from clicking on them.
- The correct answer will not turn green if the user gets the question wrong to allow them to play the quiz again without knowing the correct answer.

<details><summary>Desktop incorrect answer</summary>

![Desktop incorrect answer](docs/features/incorrect-answer-desktop.png)
</details>
<details><summary>Mobile incorrect answer</summary>

![Mobile incorrect answer](docs/features/incorrect-answer-mobile.png)
</details>

#### Info bar
- The info bar on the quiz section has 4 font awesome icons to represent different functions on the quiz:

    - The home icon is a button that takes the user back to the Home page
    - The question mark icon displays the question number that the user is on out of the maximum number of questions
        - The maximum number of questions displayed in the quiz can be changed by changing the number in the maxQuestions variable in the script.js page.
    - The timer icon is a timer that counts down from 20 seconds on each question
    - The trophy icon tells the user the total amount of points they have scored during the quiz. This number is calculated by giving the user 10 points for the correct question and adding the time that they have remaining on the timer once they have answered the question.
        - The amount of points given for a correct answer (in this case 10 points) can be changed by changing the number in the correctPoints variable in the script.js page.

<details><summary>Desktop info bar</summary>

![Desktop info bar](docs/features/info-bar-desktop.png)
</details>
<details><summary>Mobile info bar</summary>

![Mobile info bar](docs/features/info-bar-mobile.png)
</details>

### End page section
- Once the user finishes the quiz they are automatically taken to the end page that tells them how many questions they answered correctly and how many points they got.
- Below this there is a space for the user to add their username in order to save their scores to the High Scores page. The username input has a required attribute which means the user cannot click the Save high scores button without inputting a username. A custom validity has also been added to present the user with a message telling them to input their username.

<details><summary>Desktop username input</summary>

![Desktop username input](docs/features/username-desktop.png)
</details>
<details><summary>Mobile username input</summary>

![Mobile username input](docs/features/username-mobile.png)
</details>

- Below the username input area there are three buttons
    - A Save High Score button which saves the user's high score and takes them to the High Scores page
    - A Play again button which restarts the quiz
    - A Home button which takes the user back to the home page

<details><summary>Desktop End page</summary>

![Desktop End page](docs/features/end-page-desktop.png)
</details>
<details><summary>Mobile End page</summary>

![Mobile End page](docs/features/end-page-mobile.png)
</details>

### 404 page
- The 404 page has been included in case the user directs to a broken link. It has a return home button to take the user back to the main home page without the need to click the back button on their browser.

<details><summary>Desktop 404 page</summary>

![Desktop home page](docs/features/404-page-desktop.png)
</details>
<details><summary>Mobile 404 page</summary>

![Mobile home page](docs/features/404-page-mobile.png)
</details>

### Future Features
- While I was making the high scores page on this quiz, I did look into saving the high scores to a Firebase database, as suggested by my mentor, as this would prevent the high scores from disappearing on different devices, as is the case with saving scores to local storage, and would mean that users would have greater competition by comparing their scores against anyone playing the quiz. However, given that I had never used this system before and that I had already implemented a local storage high scores page, I decided not to implement this feature in this project. However, with more time and knowledge of Firebase this is definitely something that I would want to add to this quiz.
- I would also want to add different levels to the quiz to allow the user to choose between easy, medium and hard questions, as right now the questions are a mix of all three categories, so I think that having different levels would create a more engaging experience for the quiz's users.
- Sound effects are another aspect that I think would make the quiz more engaging for users, for instance different sound effects when the user got a question correct or incorrect.
- Creating a function to shuffle the answer buttons would also be a good future feature to implement as this would ensure that the answer buttons do not appear in the same spaces everytime the same question is shown.

## Technologies
- HTML
    - Used to create the structure of the quiz
- CSS
    - Used to implement styling across the quiz
- JavaScript
    - Used to create interactivity throughout the quiz
- Gitpod
    - Used to develop and edit the code
- Git
    - Used to add, commit and push the code
- Github
    - Used to store and deploy the code
- [Balsamiq](https://balsamiq.com/)
    - Used to create wireframes
- [Google Fonts](https://fonts.google.com/)
    - Used to import fonts
- [Font Awesome](https://fontawesome.com/icons)
    - Used icons from this website as the icons on the main quiz page
- [Fontjoy](https://fontjoy.com/)
    - Used to create the font pairings used on the website
- [TinyPNG](https://tinypng.com/)
    - Used to reduce the size of the background image
- [Favicon](https://favicon.io/)
    - Used to create a favicon
## Testing
### Responsiveness
- The website has been tested on Chrome, Edge and Firefox as well as on an iPhone 11, iPhone 13 mini, Samsung Galaxy S22, and iPad 6th Generation in order to check the responsiveness on different devices and different browsers.
- Each section of the quiz was also tested on the [Responsive Design Checker website](https://responsivedesignchecker.com/), and on Chrome and Firefox developer tools, to ensure that the quiz is responsive on a range of mobile, tablet and desktop devices.
### Accessibility
- [Wave accessibility tool](https://wave.webaim.org/) was used to check how accessible the quiz is. No errors were found, and the only alert mentioned that there were no page regions found on the site. Given that this website is a quiz game, it was not necessary to have regions like a header, nav bar or footer, as the entire body of the quiz is contained within the purple section in the centre of the page.
<details><summary>Wave results</summary>

![Wave results](docs/testing/wave.png)
</details>

### Validator Testing
### Lighthouse Testing
### Manual Testing
### Testing User Stories
- Expectation: To play a fun and interactive online quiz to my my 'Friends' knowledge
    - Result: The site is an engaging way to test the user's 'Friends' knowledge thanks to the range of questions presented in the quiz that are all varying levels of difficulty.
- Expectation: To save my high scores and view them in a leaderboard
    - Result: Once the quiz is complete, the user is taken to the end page where they can input their username to save their scores, and this can be viewed on the High Scores page.
- Expectation: To have clear instructions about the rules of the game and how the scoring works
    - Result: The How to play section provides clear instructions about the rules of the game and explains how the scores are calculated.
- Expectation: To easily navigate the site and to have a way to return to the Home page at any point of the quiz
    - Result: The buttons on the quiz clearly explain what they do and there are Home buttons found on all of the sections of the quiz to allow the user to return to the Home page whenever they want.
- Expectation: To be able to restart the quiz at any point while I am playing the game
    - The Restart button on the quiz section allows the user to easily restart the quiz without having to return to the Home page and then starting the quiz again.
- Expectation: To see what question number I am on and how many questions I have left
    - The question counter on the info bar of the quiz clearly shows what question out of the maximum number of questions the user is on.
- Expectation: To see how long I have left to answer the question
    - Result: The timer on the info bar of the quiz shows how many seconds the user has left and once the timer reaches 0, the Next button will be highlighted signalling that the user has to move on.
### Solved Bugs
## Deployment
- The website was deployed to Github pages. The steps to deploy are as follows:
    - Login to Github and find the Github repository 'Friends Quiz'
    - Click on the 'Settings' button at the top of the repository
    - Click on 'Pages' on the left hand side navigation menu
    - Select 'Deploy from a branch' under 'Source' if this is not already selected
    - Under the 'Branch' drop down menus, select 'main' and 'root'
    - Click 'Save'
    - Once the page refreshes, the live link should appear underneath the 'Github Pages' title
The live link can be found here: 
## Credits
### Content
- The quiz questions and answers were written by myself, with inspiration from the book 'Mental Perk A Friends Quiz Book'.
- The fonts were chosen with [Font Joy](https://fontjoy.com/).
- The icons at the top of the main quiz page are from [Font Awesome](https://fontawesome.com/icons).
- The favicon is from [Favicon](https://favicon.io/).
### Media
- The background image is from [Unsplash](https://unsplash.com/photos/QZ7dTMf_cqQ).
### Code
- James Q Quick's [youtube tutorials](https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx) were used to help implement various elements of this quiz, such as adding the button hover shadow, creating the high scores function and how to randomly generate the questions, which have been noted in the script.js code.
- [Free Code Camp](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/) was used to help show me how to make a modal.
- [Free Code Camp](https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial/) was also used to show me how to reload the window.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity) was used to show me how to set a custom validity for the username.
- [Stack Overflow](https://stackoverflow.com/questions/7667958/clearing-localstorage-in-javascript) was used to show me how to clear the local storage.
