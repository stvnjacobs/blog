~~something like~~
```yml
title: life
date: 1989-09-12
edit-date: 2014-01-02
```

has been implemented with the following format
```yml
title: life
edits:
- date: 1996-9-12
  changes: "I am no longer 5 anymore.  please refer to me as a 6 year old from now on"
```

~~then an if statement that appears if an edit is present. to output~~

then with an edits section in the front-matter, add edit blurb on a page

```
{% include edit.html %}
```

stil remaining:
- change time to days ago

```
Last Edit was 42 days ago
```


==================================================================
reading time
http://andytaylor.me/2013/04/07/reading-time/
