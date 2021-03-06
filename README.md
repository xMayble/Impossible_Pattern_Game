# Pre-work - Impossible Pattern Game

Impossible Pattern Game is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Mehbub Rohit

Time spent: 35 hours spent in total

Link to project: (https://glitch.com/edit/#!/impossible-pattern-game?path=script.js%3A6%3A11)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Player only loses after 3 mistakes (instead of on the first mistake)

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](http://g.recordit.co/b3bpZREO0x.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I have used various websites to help me along the way for this project. Such websites are linked below!
* https://developer.mozilla.org/en-US/docs/Web/CSS/counter()
* https://www.rapidtables.com/web/css/css-color.html#red
* https://www.w3schools.com/css//css_font_websafe.asp
* https://www.quora.com/What-color-goes-with-sky-blue]
* https://developers.google.com/web/updates/2017/09/autoplay-policy-changes

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The biggest challenge I encountered in creating this submission was how to give the user multiple tries. This was an optional task, but I wanted this to be part of the program since the pattern would get faster, which was also another optional task. As I kept looking at my code, I noticed that the else statement was only there if the user guessed wrong. Therefore, I thought to myself, ???if the else statement is there if the user guessed wrong, then how about I just stack up how many times the user pressed the wrong button in that specific else condition???. So, I had to use a counter to stack up how many times the user gets the pattern wrong. That means since my mistake_counter variable, which I just created, was already at 0, it would stack up from there each time the user guesses wrong. Then I knew I had to create if statements to implement how many tries the user has left. Of course, I did have to use resources to help me fix this issue, since staring and thinking about a problem without any references can take a long time. I searched up the definitions of counters to reassure my memory and help me understand the issue a bit more. Although the length for this code for this specific issue was not complicated, it was the fact that I slowly understood what I had to do and was able to fix it, which greatly contributed to the overall program. What I learned from this issue is that it is normal to stare at your code for a long time no matter how complicated or easy it is, as long as you are utilizing your resources effectively and progressing, that???s all that matters. 
Another slight issue that kept bothering me was the audio. My code for the audio was correct, but after hours of trying to figure out why the audio wouldn???t play when the user first presses the start button, I noticed that it was an issue with google chrome. I opened up my chrome developer tools on the glitch website, and noticed an issue concerning ???AudioContext???. So I searched up this issue, and apparently, google chrome had an update with the audio, so they told me to update my current program with a specific set of lines of code so when the user presses on anything, the sound would play or resume. 
]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[After learning that HTML is the interface of the project, CSS is the styling, and Javascript is what keeps things going on in the code, I want to know which aspect of web development do people mostly work on? The interface is really essential, but the javascript code keeps the code running. However, which aspect should be given greater significance when working as a web developer? These questions have been floating in my mind ever since I have used HTML, CSS, and JavaScript. For this specific project, I know JavaScript had the most significance since it controlled the patterns, start, end, and even the amount of tries the user had left. However, sometimes people want to implement a design that can appeal to the audience. At companies like Workday, what aspect of web development is given the most significance? Moreover, when working on an actual web development project, what is the research process like? What is the average amount of time it takes to complete a project relating to web development? What would be the maximum amount of time you can work on a web development project if you are working for a company? In terms of collaboration or team project with web dev, how often is github used? I know github can be used to commit changes, write new code, and updates. That way, teammates can notice these changes and look over. However, do you have to constantly use it when working on a team project? Is there a lot of commit, push, and pulling involved when doing a team project? Last question I have is, how is it like working with a team for a web dev project? What is the process like?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had more hours for this project, I would definitely use that time to add more creative aspects. So far, I was able to add some optional features such as adding more buttons, increasing the speed of the pattern, and allowing the user to have more tries to complete the game. However, one thing I noticed is that the user is notified of how many tries they have left through a pop up on the top part of the glitch browser. If I have more time for this project, I would want to display how many tries the user has left on the game itself, along with adding a ???game over??? text bar. I believe this will be a creative touch to the project. I would also want to add a random secret pattern because then the user would not be able to memorize the current pattern. Each time the game begins, the user will be given a whole new pattern to play with. Adding a timer to the game would also make it even interesting to rush the player if they take too long. Besides, this game is supposed to be ???The Impossible Pattern Game???. I am still deciding if adding images or alternative sounds to the game buttons would make it more interesting. Since I did add additional buttons, I think that may count as alternative sounds. Overall, this project was fun to work on and adding certain features every time made me realize there are many ways I can make this project be creative. ]



## License

    Copyright [Mehbub Rohit]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
