# Splash

This is a small experiment to see what it's like to use [Web Workers] to submit forms in the background. `./script/bootstrap` should be all one needs to run `./bin/rails s`.

## The Worker

The worker lives in [app/assets/javascripts/interested_user_worker.js](https://github.com/bcobb/splash/blob/f50052bec41864a9d7618488f30e95006873f63b/app/assets/javascripts/interested_user_worker.js). It processes serialized JSON, which it expects to contain serialized form data and a URL to which it can POST the data. It doesn't (yet) send any messages back to the original page. Gratuitious!

[Web Workers]: https://developer.mozilla.org/en-US/docs/Web/API/Worker
