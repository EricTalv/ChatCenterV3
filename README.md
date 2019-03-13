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
