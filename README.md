# Installation / Run
- Install `npm` (Node Package Manager) per your operating system's instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
- `cd` into this repository's root directory
- Run `npm install`
- Run `npm start`
- Navigate your browser to http://localhost:3000/

# Summary of Design Choices

I decided to use ReactJS to create this project because it lets me create reusable components and easily create a responsive application. I was also familiar with it beforehand so it allowed me to complete the project roughly in the 3-4 hour time window which was recommended. The large community of available libraries also gave me freedom to use external code to add functionality which would have been taxing to do manually. In this case I am using an external library to render a loading spinner animation to display when colors are loading. 

For the actual design of the application, I went with a simple form of 2 text input fields where the user can set Saturation and Luminosity values for the desired color palette. The fields alert the user to the acceptable range of values and an alert will appear if the user tries to submit with non-valid values. This ensures that the user is made aware of what is accepted by those fields and stops them if/when an error is made. While the palette is generating, the user receives two types of feedback to let them know that the application is working on their request. The first is a loading spinner which overlays on the screen, and is a familiar processing indicator to most internet users. The second is that the found colors spill onto the screen as they are discovered, letting the user know that progress is being made on their request. I think that the combination of these two things are visually interesting enough to make the 10-15 so seconds of loading go by a lot faster, while indicating that the request is still working.