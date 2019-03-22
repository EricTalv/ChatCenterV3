import Vue from 'vue'

// Register a global custom directive called `v-scroll`
Vue.directive('scroll', {
    // When bound element is inserted into the DOM..
    inserted: function (el, binding) {
        // Logic : Do something
        // add eventListener
        let f = function (evt) {
            // Bind an event to the SCROLL-EVENT
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f);
    }
});

