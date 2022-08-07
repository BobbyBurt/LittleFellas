# little Fellas

[Brainstorming doc](https://docs.google.com/document/d/19n-ml0TKguYE0PrPC5kYycIr7pbs8SALPjUFkuNVtsw/edit)

[Newgrounds project](https://www.newgrounds.com/projects/games/1920192/preview)

---

### Tasks prioritized
I should do this in order

- [x] What's the max resolution I'm designing for?
  - I can't reasonably test above 2532 x 1020, so that's fine for this project
  - NG window on desktop will be 960 x 540, if the others want to change that later then it will be easy to

- [x] Test how many animated sprites can exist on screen
- [x] Test how many sprites of various animations, bigger animations, each with movement code

- [x] Test ideal size of sprites
- [x] can the tank be the same size across different resolutions?
  - I can zoom, just make sure tank aspect ratio works on mobile & desktop

- [ ] refactor Level.js, separate chunks into functions
- [ ] use timer events in states
  - [ ] test if they are fixed or impacted by framerate

- [ ] prototype the most fun ways of interacting with creatures. The gameplay will be focused around them

- [x] Set consistent tank size, NG window resolution, zoom levels
- [ ] temp tank BG

- [x] Set up Newgrounds.io
- [ ] uhh can I call NGio.js functions the way it's set up?

- [ ] Impliment Psychogoldfish's audio hack for safari

- [x] only landscape orientation - add flip screen in case it's in portrait
- [x] temp orientation prompt

### Notes
- camera zoom messes with objects that should stay in place with a scroll factor of 0. I may have to render that stuff in a parallel scene
