# A Custom KDE Default Panel

KDE panels are highly configurable but there is no method to "export" their configuration to be 
loaded on another system or even just to back them. I've been searching for a solution to this
problem and finally have a usable workaround by defining a new default panel.

This repo is both my current default panel config as well as an example of how to do this.

## How it Works

Default panels have their configuration stored in a JSON file, while your live plasmashell config
is stored in a less standard key/pair format. You have to look through the current config and 
manually convert it to a JSON file.

## The Basic Process

Start by configuring a normal default panel how you want. After you are done open the following 
file: `$HOME/.config/plasma-org.kde.plasma.desktop-appletsrc` and you will find the configuration 
saved like this:

```
[Containments][2][Applets][58]
immutability=1
plugin=tuscoss.betterPopupLauncher

[Containments][2][Applets][58][Configuration]
PreloadWeight=0

[Containments][2][Applets][58][Configuration][ConfigDialog]
DialogHeight=840
DialogWidth=1120

[Containments][2][Applets][58][Configuration][General]
apps=org.freecadweb.FreeCAD.desktop,org.kicad.kicad.desktop,openscad.desktop,,meshlab.desktop
icon=application-x-kicad-pcb
separatorStyle=true
title=Hardware Dev
widgetWidth=300
```
***Note**: This is an eample of [BetterPopupLauncher](https://github.com/unalignedcoder/better-popup-launcher)*

These changes are save in the order that you make them.

A lot of what is there can be ignore because it won't matter for a default panel. This config
data needs to be converted to Javascript and put into `contents/layout.js`. This example looks
like this:

```javascript
// -- Hardware Dev --
var pop_hardware = panel.addWidget("tuscoss.betterPopupLauncher")
pop_hardware.currentConfigGroup = ["General"]
pop_hardware.writeConfig("title", "Hardware Dev")
pop_hardware.writeConfig("widgetWidth", "300")
pop_hardware.writeConfig("separatorStyle", "true")
pop_hardware.writeConfig("icon", "application-x-kicad-pcb")

pop_hardware.writeConfig("apps", [
    "org.freecadweb.FreeCAD.desktop",
    "org.kicad.kicad.desktop",
    "openscad.desktop",
    "",
    "meshlab.desktop"
])
```

Widgets added to the `panel` object apear in the order they are added.
