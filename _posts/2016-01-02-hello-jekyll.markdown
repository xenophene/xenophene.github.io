---
layout: post
title:  "Hello World from Jekyll!"
date:   2016-01-02 22:00:00 -0800
categories: jekyll
---
Oh boy, this took a while. I finally got around to setting up my [personal page][] on Github.
Well, more precisely, I _ported_ my [existing][] page still being graciously hosted by CSE, IITD servers and updated a few things that have since changed.

Setting that up was relatively easy, it just required creating a new Github repository with a preset name. I then had the grand idea of also starting a blog alongside.
Github advertises using Jekyll, and that's what I wanted to try out. This part took a while to figure out. There were just too many failed attempts at installing
Jekyll on my local machine (something to do with El Capitan's enhanced security policies not allowing access to Ruby libraries). After weeks of Googling around, I gave up.
Then suddenly, a few minutes ago, I tried it again and it just worked! My best guess is that the bug may have had some correlation with the year 2015 (on that note, happy new year to everyone reading this!).

But I wasn't done just yet. Turns out that the Jekyll blog just can not _not_ be the top-level directory on Github. So, while the Jekyll directory structure was working locally, it wasn't working on Github.
Moreover, I was getting these cryptic mails from Github saying that:

> The page build failed with the following error: The file `blog/css/main.scss`
contains syntax errors. For more information, see
https://help.github.com/articles/page-build-failed-markdown-errors. If you have
any questions you can contact us by replying to this email.

Eventually, I moved all the files in to the top-level directory at the cost of a messy directory structure right now, and voilà!
Sometimes I wonder if I really should call myself a Software Engineer!

[personal page]: http://xenophene.github.io/personal.html "My page"
[existing]: http://www.cse.iitd.ernet.in/~cs5080224
