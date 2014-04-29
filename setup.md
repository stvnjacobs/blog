---
layout: default
title: setup
---
## my current setup

This page is a documentation of the various pieces that go into creating and maintaining this site.

### dependencies 

{% for dependency in site.data.dependencies %}

  <a class="italic" href="{{ dependency.link }}" target="_blank">{{ dependency.name }}</a>
  {{ dependency.description }}

{% endfor %}