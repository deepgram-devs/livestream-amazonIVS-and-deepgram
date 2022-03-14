# livestream-amazonIVS-and-deepgram

This is the example project to go along with the tutorial **How to Build a Live Streaming Web Application with Amazon IVS and Deepgram** found at https://developers.deepgram.com/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/

## Project setup

First, clone the project. Then install the dependencies with `npm install`.

## Set up .env file

Rename the .env-example file to .env. Then add the values for each environment variable.

## Run the development environment

Run the node the server with `npm run start`.

Run the front-end Vue cli with `npm run serve`.

## Live streaming

To see your livestream, be sure to:

- Download [Open Broadcast Software](https://obsproject.com/) software
- Set up an AWS account and create an [Amazon IVS](https://aws.amazon.com/ivs/) account
- Configure the stream to connect (follow instructions in the [tutorial](https://developers.deepgram.com/blog/2022/03/build-a-livestream-web-application-with-amazon-ivs-and-deepgram/))

## Captions

To use Deepgram speech-to-text API, [set up an account](https://console.deepgram.com/signup). This will give you $150 in free credit without the need to enter a credit card.
