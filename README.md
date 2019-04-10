# ChatCenterV3
ChatCenter with feature-push platform

# Architecture

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