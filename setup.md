---
layout: default
title: setup
---
## my current setup

This page is a documentation of the various pieces that go into creating and maintaining this site.

### development dependencies

<dl>
{% for dependency in site.data.dependencies %}
  <dt><a href="{{ dependency.link }}" target="_blank">{{ dependency.name}}</a></dt>
  <dd>{{ dependency.description }}</dd>
{% endfor %}
</dl>

### process

A majority of the content on the site is formatted in a Markdown.  This page is even written in Markdown!  You can view it on Github in both the [raw][md-raw] format and a [stylized][md-github] version which they render using their own CSS styles.

[md-raw]: https://raw.github.com/stvnjacobs/blog/master/setup.md      "uncompiled .md source of this page.  neat!"
[md-github]: https://github.com/stvnjacobs/blog/blob/master/setup.md  "styled using github flavored markdown.  neat!"