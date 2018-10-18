---
title: 'Pushing a PostgreSQL Database to Heroku on Windows'
date: '10-17-2017'
---

<div style="text-align:center">

![Skylight](https://source.unsplash.com/N9UuFddi7hs/512x490 'A grid-like skylight')

</div>

I've been working on an application that utilizes a [PostgreSQL](https://www.postgresql.org/) database, and it's time to deploy it to [Heroku](https://www.heroku.com/). Heroku's command line tool works quite well with the Heroku Postgres add-on, but I had a several issues actually pushing my local database to Heroku's database, primarily revolving around permissions issues. I had a few items that seem like they were specific to Windows users I wanted to share, in case others are running into the same thing. I'm currently running Windows 10.

First of all, if you have PostgreSQL installed on your system (it's one of a few SQL variants), it's helpful to become familiar with their CLI, [psql](https://www.postgresql.org/docs/current/static/app-psql.html). I could basically copy and paste the database-specific errors and find what I was looking for on either Stack Overflow or the psql documentation itself -- one of the advantages of working with a long-existing technology (SQL is over 30 years old, while PostgreSQL is over 20).

In order to push my database to Heroku without errors, I had to nest myself out of some permissions hell. The permissions are particularly important for psql to work properly - every operation you conduct assumes a default user and asks for a password input (assuming you haven't changed the default settings). So, fun fact for Windows users: PostgreSQL automatically sets the CLI default user as whatever your Windows username is. I never really knew the password that Postgres set (if I set it, it's been long forgotten). I've working around this by specifying creating a different username and password combo and using that when signing into Postgres, like this:

```shell
$ psql -U [username]
Password:
```

When you use the Heroku CLI, it nicely automates several psql operations for you to access your local database. However, because Heroku was assuming the default user to access my database, I kept getting an error that I didn't have permission. If there is a way to manually pass psql flags to the Heroku CLI, I haven't found it, so I had to change which permissions my default user had.

## Changing Permissions

At first, I thought the issue was that my user didn't have permission to access the specific database. Which was true! However, that was only one reason it wasn't working. I realized that if I was going to push my database to Heroku, I needed to change my database user permissions so that Heroku could use my default account without being prompted for a password.

To do this, you need to find the distribution of PostgreSQL on your machine, go into the data/ directory, and find pg_hba.conf. This file controls the Postgres permission settings. If you change all of the values in the final column to "trust" instead of "md5", psql will no longer prompt you for a password on default. The bad news is that this isn't secure, so I'll have to be turning the password option back on for general use, but it did allow the Heroku CLI to do everything it needed to do.

## The Upshot

The bad news is that I spent an afternoon trying to use a system that was supposed to be essentially automated, but it wasn't all bad.

1. I learned a lot more about how psql works and how to configure and use more of its functionality.
2. I figured out some things that were stopping me from being more functional on my machine (for instance, I have two distributions of PostgreSQL installed for no reason, thanks past self!).
3. I'm familiar with what I need to do to make this process go more smoothly in the future.

Have any questions? Could I have done something differently? You can get in touch with me via [email](mailto:jaredjgebel@gmail.com) or my [Github page](https://github.com/jaredjgebel).
