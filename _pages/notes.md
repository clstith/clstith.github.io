---
permalink: /notes/
title: "Notes"
---

Heading 1
======
This is the page permalinked "/notes"

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
