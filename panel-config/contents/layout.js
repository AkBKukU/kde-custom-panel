// Install with:
// kpackagetool5 -t Plasma/LayoutTemplate --install ~/mypanel
//
// Remove with:
// kpackagetool5 -t Plasma/LayoutTemplate --remove com.akbkuku.popupPanel
//
// Current plasmashell config:
// $HOME/.config/plasma-org.kde.plasma.desktop-appletsrc

var panel = new Panel
var panelScreen = panel.screen

// No need to set panel.location as ShellCorona::addPanel will automatically pick one available edge

// For an Icons-Only Task Manager on the bottom, *3 is too much, *2 is too little
// Round down to next highest even number since the Panel size widget only displays
// even numbers
panel.height = 48

// Restrict horizontal panel to a maximum size of a 21:9 monitor
const maximumAspectRatio = 21/9;
if (panel.formFactor === "horizontal") {
    const geo = screenGeometry(panelScreen);
    const maximumWidth = Math.ceil(geo.height * maximumAspectRatio);

    if (geo.width > maximumWidth) {
        panel.alignment = "center";
        panel.minimumLength = maximumWidth;
        panel.maximumLength = maximumWidth;
    }
}

var kickoff = panel.addWidget("org.kde.plasma.kickoff")
kickoff.currentConfigGroup = ["Shortcuts"]
kickoff.writeConfig("global", "Alt+F1")

// Custom popup panels
// -- Video --
var pop_video = panel.addWidget("tuscoss.betterPopupLauncher")
pop_video.currentConfigGroup = ["General"]
pop_video.writeConfig("title", "Video")
pop_video.writeConfig("widgetWidth", "300")
pop_video.writeConfig("separatorStyle", "true")
pop_video.writeConfig("icon", "camera-video")

pop_video.writeConfig("apps", [
    "davinci-resolve-studio.desktop",
    "",
    "com.obsproject.Studio.desktop",
    "com.uploadedlobster.peek.desktop",
    "",
    "audacity.desktop",
    "gimp.desktop",
    "",
    "org.kitone.subtitleeditor.desktop",
    "MagewellUSB.desktop"
])
// -- Software Dev --
var pop_software = panel.addWidget("tuscoss.betterPopupLauncher")
pop_software.currentConfigGroup = ["General"]
pop_software.writeConfig("title", "Software Dev")
pop_software.writeConfig("widgetWidth", "400")
pop_software.writeConfig("separatorStyle", "true")
pop_software.writeConfig("icon", "applications-development")

pop_software.writeConfig("apps", [
    "org.kde.kate.desktop",
    "epp.package.cpp.desktop",
    "",
    "ghidra.desktop",
    "imhex.desktop",
    "",
    "me.mitya57.ReText.desktop"
])
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
// -- Remote --
var pop_remote = panel.addWidget("tuscoss.betterPopupLauncher")
pop_remote.currentConfigGroup = ["General"]
pop_remote.writeConfig("title", "Remote")
pop_remote.writeConfig("widgetWidth", "300")
pop_remote.writeConfig("separatorStyle", "true")
pop_remote.writeConfig("icon", "yast-nfs-server")

pop_remote.writeConfig("apps", [
    "NoMachine-base-unity.desktop",
    "",
    "filezilla.desktop",
    "org.kde.krusader.desktop"
])
// -- Archiving --
var pop_archiving = panel.addWidget("tuscoss.betterPopupLauncher")
pop_archiving.currentConfigGroup = ["General"]
pop_archiving.writeConfig("title", "Archiving")
pop_archiving.writeConfig("widgetWidth", "300")
pop_archiving.writeConfig("separatorStyle", "true")
pop_archiving.writeConfig("icon", "kfloppy")

pop_archiving.writeConfig("apps", [
    "imhex.desktop",
    "",
    "org.entangle_photo.Manager.desktop",
    "com.uploadedlobster.peek.desktop",
    "",
    "ld-analyse.desktop",
    "DomesdayDuplicator.desktop",
    "",
    "scanner.desktop",
    "xsane.desktop"
])
// -- Games --
var pop_games = panel.addWidget("tuscoss.betterPopupLauncher")
pop_games.currentConfigGroup = ["General"]
pop_games.writeConfig("title", "Games")
pop_games.writeConfig("widgetWidth", "400")
pop_games.writeConfig("separatorStyle", "true")
pop_games.writeConfig("icon", "applications-games")

pop_games.writeConfig("apps", [
    "steam.desktop",
    "org.prismlauncher.PrismLauncher.desktop",
    "",
    "factorio-se-1.1.109.desktop",
    "factorio-se-v0.6.desktop",
    "factorio-1.1.87.desktop",
    "factorio_space-age_vanilla.desktop",
    "",
    "racer.desktop",
    "",
    "ps2.desktop",
    "dolphin-emu.desktop",
    "yuzu.desktop",
    "",
    "jstest-gtk.desktop"
])


//panel.addWidget("org.kde.plasma.showActivityManager")
panel.addWidget("org.kde.plasma.pager")
panel.addWidget("org.kde.plasma.icontasks")
panel.addWidget("org.kde.plasma.marginsseparator")

panel.addWidget("org.kde.plasma.systemtray")
panel.addWidget("org.kde.plasma.digitalclock")
panel.addWidget("org.kde.plasma.showdesktop")

