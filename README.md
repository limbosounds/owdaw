# Open Web Digital Audio Workstation

The main target of this project is to recreate DAW (like Ableton, FL Studio, etc.) using Web Audio API.

## TODO List (will be renewed):  

- [ ] Basic work with producing sounds using oscilators
- - [ ] Basic oscilator playback
- - [ ] Switch oscilator waveform between basic waveforms
- - [ ] "Multi-osc plugin" - simultaneously playback 2+ oscilators inside one audio context
- - [ ] Merge different audio contexts into one output
- - [ ] Working with different count of input and output channels (*help needed*)

- [ ] Piano roll and ability to create note sequences
- - [ ] Generating piano keyboard
- - [x] Keystroke note playback (keyboard-based piano)
- - [ ] Piano-roll interface, store and playback note sequences
- - [ ] Note settings
- - - [ ] Volume
- - - [ ] Mod X
- - - [ ] Mod Y
- - - [ ] Panning
- - - [ ] Note slide
- - [ ] Connect MIDI devices (*help needed*)

- [ ] Playlist and patterns
- [ ] Save / load projects
- [ ] Render project into sound format
- [ ] Mixer
- [ ] Samplers
- [ ] Audio clips
- [ ] API for developing plugins

## How to run
1. Clone repository
2. Install dependencies
```
npm install
```
3. Run devserver
```
npm run dev

# or using yarn
yarn dev
```