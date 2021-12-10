const Main = imports.ui.main;
const Lang = imports.lang;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const Slider = imports.ui.slider;
const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Gtk = imports.gi.Gtk;
const GLib = imports.gi.GLib;
const Clutter = imports.gi.Clutter;
const Shell = imports.gi.Shell;
const Util = imports.misc.util;
const GObject = imports.gi.GObject;
//const ExtensionUtils = imports.misc.extensionUtils;
//const Me = ExtensionUtils.getCurrentExtension();
//const task_timer = Me.imports.classes.task_timer;
const Extension = imports.misc.extensionUtils.getCurrentExtension();
const Utils = Extension.imports.classes.utils;
const task_timer = Extension.imports.classes.task_timer;
const TaskItem = Extension.imports.classes.task_item;
const ADD_ICON = Gio.icon_new_for_string(Extension.path + "/icons/add_icon.png");

const KEY_RETURN = 65293;
const KEY_ENTER = 65421;

let _indicator;
function init()  {
}

function enable()  {
    _indicator = new task_timer.TaskTimer;
    Main.panel.addToStatusArea('taskTimer', _indicator, 0);
}

function disable()  {
    _indicator.disable();
    _indicator.destroy();
    _indicator = null;
}
