# Profanity Detection
Artificial Intelligence profanity detection service with [brain.js](https://github.com/BrainJS/brain.js).

## Need The Profanity Data File
First need the profanity data file containing the structure below in the **root** folder with `profanity.json` name.
> The content will be yours!
>
> Use the right data!!!

    [
        {
            "input": "f*** you",
            "output": "profanity",
        },
        {
            "input": "son of the b****",
            "output": "profanity",
        },
        .
        .
        .
    ]

## Installation and Usage

> mkdir **profanity-detection**
> 
> cd **profanity-detection**
> 
> git clone https://github.com/crazycoder-io/profanity-detection **.**
>
> node **train.js**
> 
> node **index.js**