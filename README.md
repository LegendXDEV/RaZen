 # RaZen
<div align="center"> 
  <br>
  <strong><i>A discord bot made by Legend X and DragZo.</i></strong>
  <br>
  <br>
 
  <a href="https://github.com/LegendXDEV/RaZen/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-gple74c3c.svg?style=for-the-badge" alt="GPL-3.0 License">
  </a>
  
  <a href="https://dashboard.heroku.com/">
    <img src="https://img.shields.io/badge/deploy_to-heroku-997FBC.svg?style=for-the-badge&logo=Heroku">
  </a>
 
  <a href="https://discord.gg/Fgw8gqq">
    <img src="https://img.shields.io/discord/402295226766721024.svg?label=Discord&logo=Discord&colorB=7289da&style=for-the-badge" alt="Support">
  </a>
  
  <a href="https://discord.js.org/#/">
    <img src="https://img.shields.io/badge/Made%20With-discord.js-blue.svg?style=for-the-badge&logo=javascript" alt="Made with discord.javascript">
  </a>

 
  <a href="https://github.com/LegendXDEV/RaZen/blob/master/package-lock.json">
    <img src="https://img.shields.io/badge/Packages%20-red?style=for-the-badge" alt="packages">
  </a>
  
   <a href="https://github.com/LegendXDEV/RaZen/commits/master">
    <img src="https://img.shields.io/github/last-commit/LegendXDEV/RaZen.svg" alt ="last commit">
  </a>

  <a href="https://github.com/LegendXDEV/RaZen/tree/master">
    <img src="https://img.shields.io/github/repo-size/LegendXDEV/RaZen.svg" alt="Repository Size">
  </a> 
 


## What is Modmail?

Modmail is similar to Reddit's Modmail both in functionality and purpose. It serves as a shared inbox for server staff to communicate with their users in a seamless way.

This bot is free for everyone and always will be. If you like this project and would like to show your appreciation, you can support us on **[Patreon](https://www.patreon.com/kyber)**, cool benefits included! 

## How does it work?

When a member sends a direct message to the bot, Modmail will create a channel or "thread" within an isolated category. All further DM messages will automatically relay to that channel, for any available staff can respond within the channel.

All threads are logged and you can view previous threads through their corresponding log link. Here is an [**example**](https://logs.modmail.tk/example).

## Features

* **Highly Customisable:**
  * Bot activity, prefix, category, log channel, etc.
  * Command permission system.
  * Interface elements (color, responses, reactions, etc).
  * Snippets and *command aliases*.
  * Minimum duration for accounts to be created before allowed to contact Modmail (`account_age`).
  * Minimum duration for members to be in the guild before allowed to contact Modmail (`guild_age`). 

* **Advanced Logging Functionality:**
  * When you close a thread, Modmail will generate a [log link](https://logs.modmail.tk/example) and post it to your log channel.
  * Native Discord dark-mode feel.
  * Markdown/formatting support.
  * Login via Discord to protect your logs ([premium Patreon feature](https://patreon.com/kyber)).
  * See past logs of a user with `?logs`.
  * Searchable by text queries using `?logs search`.

* **Robust implementation:**
  * Schedule tasks in human time, e.g. `?close in 2 hours silently`.
  * Editing and deleting messages are synced.
  * Support for the diverse range of message contents (multiple images, files).
  * Paginated commands interfaces via reactions.

This list is ever-growing thanks to active development and our exceptional contributors. See a full list of documented commands by using the `?help` command.

## Installation

Where can I find the Modmail bot invite link? 

Unfortunately, due to how this bot functions, it cannot be invited. This is to ensure the individuality to your server and grant you full control over your bot and data. Nonetheless, you can easily obtain a free copy of Modmail for your server by following one of the methods listed below (roughly takes 15 minutes of your time)...

### Heroku

This bot can be hosted on Heroku.

Installation via Heroku is possible with your web browser alone. 
The [**installation guide**](https://github.com/kyb3r/modmail/wiki/Installation) (which includes a video tutorial!) will guide you through the entire installation process. If you run into any problems, join our [Modmail Discord Server](https://discord.gg/etJNHCQ) for help and support.

To configure automatic updates:
 - Login to [GitHub](https://github.com/) and verify your account.
 - [Fork the repo](https://github.com/kyb3r/modmail/fork).
 - Install the [Pull app](https://github.com/apps/pull) for your fork. 
 - Then go to the Deploy tab in your [Heroku account](https://dashboard.heroku.com/apps) of your bot app, select GitHub and connect your fork (usually by typing "Modmail"). 
 - Turn on auto-deploy for the `master` branch.

### Hosting for patrons

If you don't want to go through the trouble of setting up your very own Modmail bot, and/or want to support this project, we offer the all inclusive installation, hosting and maintenance of your Modmail with [**Patron**](https://patreon.com/kyber). Join our [Modmail Discord Server](https://discord.gg/etJNHCQ) for more info! 

### Locally

Local hosting of Modmail is also possible, first you will need [`Python 3.7`](https://www.python.org/downloads/).

Follow the [**installation guide**](https://github.com/kyb3r/modmail/wiki/Installation) and disregard deploying the Heroku bot application. If you run into any problems, join our [Modmail Discord Server](https://discord.gg/etJNHCQ) for help and support.

Clone the repo:

```console
$ git clone https://github.com/kyb3r/modmail
$ cd modmail
```

Install dependencies:

```console
$ pipenv install
```

Rename the `.env.example` to `.env` and fill out the fields. If `.env.example` is nonexistent (hidden), create a text file named `.env` and copy the contents of [`.env.example`](https://raw.githubusercontent.com/kyb3r/modmail/master/.env.example) then modify the values.

Finally, start Modmail.

```console
$ pipenv run bot
```

#### Docker

This repo supplies a Dockerfile for simplified deployment. 

You can build your own Docker image:

```console
$ docker build . --tag=modmail
```

or run directly from a pre-built version from https://hub.docker.com/. Currently there are two community release of Modmail:

- Kyber's:

```console
$ docker pull kyb3rr/modmail
```

- Taku's:

```console
$ docker pull taaku18/modmail
# You can also choose one of the following:
$ docker pull taaku18/modmail:dev
$ docker pull taaku18/modmail:<version>  (<version> ex: 3.2.0, 3.2, etc.)
```

And to run your docker image:

```console
$ docker run --env-file .env user/modmail
```
- Replace `user/modmail` with `kyb3rr/modmail`, `taaku18/modmail`, `taaku18/modmail:3.2`, etc as above.
- `.env` should be the path to your env file, you can also supply a path: `/path/to/.env`.

## Sponsors

Special thanks to our sponsors for supporting the project.

<a href='https://www.youtube.com/channel/UCgSmBJD9imASmJRleycTCwQ/featured'>
  <img height=150 src='https://i.imgur.com/WyzaPKY.png' style='margin:10px'>
</a>

<a href='https://discord.gg/PmHHVt9'>
  <img height=150 src='https://imgur.com/8F18l3v.png' style='margin:10px'>
</a>

Become a sponsor on [Patreon](https://patreon.com/kyber).

## Plugins

Modmail supports the use of third-party plugins to extend or add functionalities to the bot. This allows niche features as well as anything else outside of the scope of the core functionality of Modmail. A list of third-party plugins can be found using the `plugins registry` command. To develop your own, check out the [plugins documentation](https://github.com/kyb3r/modmail/wiki/Plugins).

Plugins requests and support is available in our [Modmail Plugins Server](https://discord.gg/4JE4XSW).

## Contributing

Contributions to Modmail are always welcome, whether it be improvements to the documentation or new functionality, please feel free to make the change. Check out our contribution [guidelines](https://github.com/kyb3r/modmail/blob/master/CONTRIBUTING.md) before you get started.

If you like this project and would like to show your appreciation, support us on **[Patreon](https://www.patreon.com/kyber)**!
