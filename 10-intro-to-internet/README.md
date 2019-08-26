## First....
* What will you get out of this Mod?
  * Developer -> Web Developer

## Introduction to the internet

* What is the difference between the Internet, the Web and a browser?

  Internet - Communication between computers
  Web - Built on top of the internet, following certain protocols
  Browser - Window used to browse the web (Application)

  * https://en.wikipedia.org/wiki/ARPANET
  * https://en.wikipedia.org/wiki/Tim_Berners-Lee
  * http://info.cern.ch/hypertext/WWW/TheProject.html

* How can I find out the IP address of www.google.com using a terminal command? What kind of server makes this lookup possible?
  * DNS (Domain Name System)
  google.com <-> 172.217.10.36
  * `nslookup`
  * https://iplocation.com/

* What is a server? What is a client?
  Browser - Client
  ESPN - Server

* What is the request / response cycle?

* With a client and server, which makes the request? Which sends the response?
  Browser(client) sends the request
  ESPN(Server) responds to the request

* What is a HTTP request? Make a few, using at least two of these tools: Google Chrome, Postman, curl, telnet (this one is a little tricky!)

* What are the parts of a HTTP request
  * Use a web browser to find the headers for an HTTP request. What do you think these headers do?
  * What is usually in the body of an HTTP _response_?
  * What is a HTTP status code? What do the codes 200, 404, 500, 503, 302, 422 and 418 mean?
    * https://http.cat/
  * Why do we use HTTP verbs? What is the difference between what GET, POST, PUT, PATCH, and DELETE requests do?
  * What is a URL? Which part of a URL is the scheme (protocol)? Where is the host? The port? The path? Query string? Fragment? What is the purpose of each of these parts? Which parts are required, and which are optional?
    * https://docs.google.com/presentation/d/1no3yw_Vw4hBzGDlsEDcubvFnowi-Exjg9FW_VJid_U0/edit#slide=id.g378a2b8862_0_5

    https://www.google.com/search?q=cute+elephants
    source=>hp
    ei=>2wJkXbb6IPKI5wKM1qe4CQ
    q=>cute+doggos
    oq=>cute+doggos
    gs_l=>psy-ab.3..0l3j0i22i10i30l5j0i22i30j0i22i10i30.7429.8825..9015...0.0..0.194.934.8j3....2..0....1..gws-wiz.......0i10.YyVQJg9lGfo
    ved=0ahUKEwj20-nk9KDkAhVyxFkKHQzrCZcQ4dUDCAc
    uact=>5

  * What's the difference between static and dynamic websites? What are some of the benefits of a dynamic website?

*************** 3 min break! ********************

## Intro to Sinatra
* Build a basic web app in 30 seconds
* Do basic web requests in Sinatra
* Explain what Sinatra is
* Walk through `corneal new`
* Talk about `shotgun`
* Walk through Sinatra basic file structure
* Walk through Model View Controller \(MVC\) pattern and give an example
  * https://docs.google.com/presentation/d/1no3yw_Vw4hBzGDlsEDcubvFnowi-Exjg9FW_VJid_U0/edit#slide=id.g378a2b8862_0_22
* Explain how web frameworks \(like Sinatra\) use the MVC pattern and why
