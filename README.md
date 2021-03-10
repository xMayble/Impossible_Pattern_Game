# Pre-work - Impossible Pattern Game

Impossible Pattern Game is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Mehbub Rohit

Time spent: 7 hours spent in total

## Instructions
Below is the site to play around with the Impossible Pattern Game! Once you arrive at the website, press 'Start'. However, do not 
attempt to play the game just yet. After you have pressed 'Start', click on the small refresh icon right above it! Now, you can 
officially start the game. Have fun!
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


- [I can implement a text on the program that displays how many tries the user has left. I can also change up the pattern everytime the game is started or ended.] List anything else that you can get done to improve the app!

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

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The biggest challenge I encountered in creating this submission was how to give the user multiple tries. This was an optional task, but I wanted this to be part of the program since the pattern would get faster. I was spending a long time on this specific part and starting to wonder if I should implement it or not. However, as I kept looking at my code, I noticed that the else statement was only there if the user guessed wrong. So, I had to use a counter to stack up how many times the user gets the pattern wrong. So that means since my mistake_counter variable was already at 0, it would stack up from there each time the user guesses wrong. Then I knew I had to create if statements to implement how many tries the user has left. Of course, I did have to use resources to help me fix this issue, since staring and thinking about a problem without any references can take a long time. I searched up the definitions of counters to reassure my memory and help me understand the issue a bit more. Although the code for this specific issue was not complicated, it was the fact that I understood and was able to fix it, which greatly contributed to the overall program. What I learned from this issue is that it is normal to stare at your code for a long time no matter how complicated or easy it is, as long as you are utilizing your resources effectively and progressing, that’s all that matters. Conclusively, I am grateful for having the opportunity to work on such an amazing project and it was definitely fun along the way to test the pattern, sounds, and colors.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[After learning that HTML is the interface of the project, CSS is the styling, and Javascript is what keeps things going on in the code, I want to know which aspect of web development do people mostly work on? The interface is really essential, but the javascript code keeps the code running. However, which aspect should be given greater significance when working as a web developer? These questions have been floating in my mind ever since I have used HTML, CSS, and JavaScript. For this specific project, I know JavaScript had the most significance since it controlled the patterns, start, end, and even the amount of tries the user had left.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had more hours for this project, I would definitely use that time to add more creative aspects. I was thinking of an implementation of how many tries the user has left in text form in the program. Instead of it showing how many tries the user has left in the program, the tries notification shows up from the top of the glitch webpage. Another thing I would add is a different pattern every time the game begins. I have the same pattern for this game, so the user can basically remember this pattern and eventually finish the game. I will try to work on these different functions of the program and test to see if they make the program any better. ]



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
