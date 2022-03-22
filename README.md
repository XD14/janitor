# Janitor
Janitor is a hands-off approach to automatically purging messages to ensure a server doesn't have an immensely large backlog of messages, which can potentially be a liability to those looking for privacy or servers which can be put at risk by future ToS amendments. The code is simple, likewise with configuration. 

## Configuration

Sample configuration file can be seen here:
```
{
        "token": ""
        "autopurgechannel": ""
        "messagemaximum": ""
}
```

`"token"` = Your Discord Bot's token. This is needed to sign into the Discord API.
`"autopurgechannel"` = The channel in which the bot will monitor and purge over time.
`"messagemaximum` = The bot's maximum tolerance for messages beyond the current session. Once this threshold is passed, the bot will purge.

## Getting started
Getting started is as simple as running a few commands.

```
$ git clone https://github.com/XD14/janitor
$ cd ./janitor-master
$ npm install
$ npm install -g pm2
$ pm2 start init.js
```

# Having issues?
Create an issue and I can address problems.
