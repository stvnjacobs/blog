
### homepage sort order ###


Order by date, similar to a blog roll.

Posts should be ordered chronologically in the following groupings:

Photos:
- grouped by date and posted as such

Posts:
- Always in a "featured" style

Links/Bookmarks:
- Post once 5 new bookmarks have been saved to pinboard

Craft/Serigraphy:
- Undecided

### style cleanup ###

_style could change if homepage sort order changes_

when clicking on featured post, images are not 50% width, like they are on the homepage


### post edits ###

something like

```yml
title: life
date: 1989-09-12
edit-date: 2014-01-02
```

could be implemented with the following format

```yml
title: life
edits:
- date: 1996-9-12
  changes: "I am no longer 5 anymore.  please refer to me as a 6 year old from now on"
```

then an if statement that appears if an edit is present. to output

```
{% include edit.html %}
```

post could include subheader

```
Last Edit was 42 days ago
```


### reading time ###

http://andytaylor.me/2013/04/07/reading-time/
