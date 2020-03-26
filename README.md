# ChatCenterV3
### About
This is my ambitious project on creating a socializing platform with a bit of a twist.

ChatCenter revolves around chatting to random strangers online, there are similar applications already but my app would utilize modern technologies, rich of features and would be scalable.

## Technologies
My project was basically was cut into two server sides.
I would use **nuxt.js** as my front-end framework and have it generate a static website.
To gather data, my back-end was built with **Laravels** back-end framework and with **axios** and API handling I was able to exchange data between these two servers.

Laravel took care of my database work and api handling,
Nuxt took care of my front-end routing and views.
**Vuex** let me work with my axios back-end API's and delivering them to the front-end.

As for visuals I used vuetify to craft components.
For the web-communication I would have used Laravel echo, but my project didn't make it so far.

I also got to work with other technologies along the way such as *express, node.js, bootstrap, materialize*   

## Challenges
There were many challenges, particularly the biggest challenge was the Idea itself, my initial Idea was to create a feature packed socializing website ***but*** and this was a big one, my ideas kind of spun out of control.

I had a very big interest in admin panels, thus I wanted to create an admin panel of my own, thus I thought it would be cool to add a blogging capability to update whats going on on the page, little did I know, creating a blog where you can do **crud** operations in a web-based GUI would be quite a challenge but I still took it on.

This really delayed my whole project since along the way I would work on many **cherrypicked features** such as *lazy loading, laravel factory, ridiculous visual animations etc*.

So I pretty much started the project as one idea, but ended up adding more and more tech and ideas.  
Additionally I started this project when I was really fresh into web-development, thus I basically started off coding most routing and MVC architecture logic by hand myself, which took a ridiculous amount of time and well, that really didn't get far since then I started learning about frameworks

## Future
As time goes on, my vocabulary in the web-development-community evolves, so when I've got enough time and money I definitely see this idea as very cool application that people could have fun with.


# Server Architecture

<pre>
          FRONTEND                BACKEND
+------->  + Vue +----+   +----->  + Laravel +-------+
|                     |   |                          |
|     +--+ + Vuex <---+   |                          |
|     |                   |                          |
|     +--> + Axios +------+                          |
|                                 DATABASE           |
+-------+  + Nuxt                  + MariaDB  <------+

</pre>


---

# OpenWorld Chat Architecture

<pre>
                                                                +---------------+
                                                                |               |
                                                                |     USER      |
                                                                |               |
                             +---------------------------+      +-------+-------+
                             |                           |              |
+-----------------------+    |  The username is sent and |              |
|                       |    |  saved to the DB          |              |
|                       |    |                           |   +----------v---------+
|       USER            <----+---------------------------+---+                    |
|       DATABASE        |                                    |   User Joins Chat  |
|                       +---+-----------------------------+-->                    |
|                       |   |                             |  +----------+---------+
+-----------------------+   |   The server sends back     |             |
                            |   the Chats History         |             |
                            |                             |             |
                            +-----------------------------+     +-------v-------+
                                                                |               |
                                                                |     CHAT      |
                                                                |               |
                                                                +---------------+

</pre>

# Chat Component Architecture

<pre>                                                            +--------------------------+
                                                              |                          |
+---------------------------------------------------+         | Holds all the            |
|                                                   |         | Chat components together |
| Chat Container                            +---------------> |                          |
|                                                   |         +--------------------------+
|  +---------------------------------------------+  |
|  |                                             |  |           +----------------------+
|  | Chat Log                               +------------->     |                      |
|  |                                             |  |           | Contains all the     |
|  | +-----------------------------------------+ |  |           | Chat Messages, from  |
|  | |                                         | |  |           | earlier to Present   |
|  | |  Chat Message                           | |  |           |                      |
|  | |                                         | |  |           +----------------------+
|  | |                                         | |  |
|  | |                                    +------------------> +------------------------+
|  | |                                         | |  |          |                        |
|  | +-----------------------------------------+ |  |          | Contains user relate   |
|  |                                             |  |          | info {Name, Message..} |
|  |                                             |  |          |                        |
|  +---------------------------------------------+  |          +------------------------+
|                                                   |
|  +---------------------------------------------+  |
|  |                                             |  |           +----------------------+
|  |   Chat Composer                      +------------------>  |                      |
|  |                                             |  |           | Gets User input,     |
|  +---------------------------------------------+  |           | Binds User input and |
|                                                   |           | Name together        |
+---------------------------------------------------+           |                      |
                                                            +----------------------+
</pre>
