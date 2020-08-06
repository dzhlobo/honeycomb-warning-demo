Run:

```
docker run --rm -it -v "$(pwd):/app" -w /app -p 3000:3000 node node index.js
```

On https://docs.honeycomb.io/getting-data-in/javascript/beeline-nodejs/ in example code beeline is reinitialized (pay attention to invocation a function we require) with empty config every time you send custom context.

Is it something we need to do?

It seems it causes a warning about honeycomb can't instrument some libraries because they already loaded but honeycomb loaded them itself when we initialized it for the first time.

> The following modules were required before honeycomb-beeline: express
> These modules will not be instrumented.  Please ensure honeycomb-beeline is required first.

It seems we just shouldn't reinitialize (require but don't invoke as a function) beeline everywhere in the app and only need to require it.
