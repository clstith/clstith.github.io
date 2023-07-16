---
permalink: /notes/
title: "Notes"
---

Heading 1
======

{% for post in site.posts %}
  <h2>hi</h2>
  {% include archive-single.html %}
{% endfor %}
