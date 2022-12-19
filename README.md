# general-tiger-gun

Personal Project to get updated with Websockets and context hooks. This repo only contains the frontend, backend is on another repo.

## Description

Traditional rock-paper-scissors game, with multiplayer feature implementing using socket.io and an express backend.

# Reflection
This was a week long project built during my winter break in 2022. Project goals included using technologies I haven't practiced in a while, like reactjs, express and docker while learning new ones like websockets.

Originally, it was meant to be a connect-four type of game, but I decided to change it to a rock-paper-scissors game in order to get more time for myself to focus on the backend, rather than the frontend. This frontend repo also allowed me to practice using Git Subtrees, by having an S3 bucket that is configured to have CI with the GH-pages subtree.

This project was challenging because I had never worked in depth with React's useContext hooks before, and also because socket.io was something completely new to me. This was also my first time trying out vite create react app, and it was so much faster and a generally better experience overall. This made it a great experience as I had lots of fun learning and running into errors I didn't even know existed in the first place. Throughout the experience, I managed to brush up on my Git CLI commands, CI with AWS CodePipeline and even AWS ECS, ECR and ELB during the hosting. This made it more enjoyable as the project expanded beyond just development on my local machine, but was also fully deployed for others to try out. 

## Getting Started

### Executing program

* [Check out the app here](http://mmt-rockpaperscissors.s3-website-ap-southeast-1.amazonaws.com/)


## Version History

* 0.2
    * Various bug fixes and optimizations
* 0.1
    * Initial Release

## Acknowledgments

Libraries utilised
* [socket.io documentation](https://socket.io/docs/v4/)
* [Reactjs](https://reactjs.org/docs/getting-started.html)

Hosted on AWS ECS with Docker
* [AWS](https://aws.amazon.com/)
* [Docker](https://www.docker.com/)
