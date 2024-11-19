---
layout: default
title: All users | Wikimint Community
description: Join Wikimint Community and eplore new things everyday
---

<div class="container mt-5">
    <div class="row">

<!-- Main Content -->
<main class="col-md-8 col-lg-8">

<h1>Connect with community members</h1><hr/>
<p>Dive into a dynamic community where members share their skills, portfolios, and creative journeys. Whether it’s coding, art, or innovation, find inspiration and engage with people who are making an impact.</p>

<h2>Active members</h2><hr/>
{% assign user_pages = site.pages | where_exp: "page", "page.url contains '/user/'" %}

{% assign shuffled_users = user_pages | sort: 'random' | limit: 6 %}

{% for page in shuffled_users %}
{% if page.n %}
<a class="text-dark" href="../user/{{page.u}}">
<div class="card mb-3 border-0 bg-light">
  <div class="row g-0">
    <div class="col-2">
      <img height="80" width="80" src="{% if page.dp %}{{ page.dp | replace: 's96', 's200' }}{% else %}/community/assets/images/dp.webp{% endif %}" class="img-fluid rounded-start mt-3" alt="{{page.n}} community profile page">
    </div>
    <div class="col-10">
      <div class="card-body">
        <h3 class="card-title">{{ page.n }}</h3>
        <p class="card-text"><small class="text-body-secondary">{{page.t}}</small></p>
      </div>
    </div>
  </div>
</div>
</a>
{% endif %}

{% endfor %}




</main>


<!-- Sidebar -->
<aside class="col-md-4 col-lg-4">
<h2>Join the community</h2>
<p>Be part of a vibrant platform where individuals showcase their skills, share their portfolios, and connect with like-minded talents. Whether you’re here to learn, collaborate, or simply be inspired, this is the space to let your work shine and build meaningful connections.</p>

</aside>
</div>
</div>
