# "Toggle read/unread' button" plugin for tt-rss

This plugin for Tiny Tiny RSS (tt-rss) adds a button in the article footer to toggle an article as read/unread.

Forked from https://github.com/Elv1zz/ttrss_plugin-markasread. "Toggle read/unread' button" does not rely on images, and is thus optimized for Retina displays.

Feel free to open an issue if you encounter a bug or want to suggest an improvement.

## Installation

### Using git

**I HAVE NOT TESTED THIS SOLUTION YET**

Just checkout the code into your plugins folder like this:

```sh
$ cd /path/to/your/tt-rss
$ git clone git://github.com/simardcasanova/ttrss_plugin-toggle_read_unread plugins/toggle_read_unread
```

Then go to tt-rss preferences and enable the plugin.

### Without using git

Manually download, extract and copy the archive like this:
```sh
$ cd /tmp
$ wget https://github.com/simardcasanova/ttrss_plugin-toggle_read_unread/archive/master.zip
$ unzip master.zip
$ mkdir /path/to/your/tt-rss/plugins/toggle_read_unread
$ cp ttrss_plugin-markasread-master/* /path/to/your/tt-rss/plugins/toggle_read_unread
```

Then go to tt-rss preferences and enable the plugin.

## Update

Just pull the most recent version from the server:

```sh
$ cd /path/to/your/tt-rss/plugins/toggle_read_unread
$ git pull origin master
```

and you are done. 

## Versions

- v1 January 27, 2019: Fork and creation of the plugin