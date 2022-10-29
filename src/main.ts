import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
/*import polyfillLibrary from 'polyfill-library';

const polyfillBundle = polyfillLibrary.getPolyfillString({
    uaString: 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
    minify: true,
    features: {
        'es6': { flags: ['gated'] }
    }
}).then(function(bundleString) {
    console.log(bundleString);
});*/

/*polyfillBundle();*/

createApp(App).mount('#app')
