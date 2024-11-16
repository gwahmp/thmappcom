---
layout: default
title: "Wikimint Community"
---

<div class="modal" id="introBanner" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-body">
            <div class="card mt-5 mx-auto justify-content-center align-items-center d-flex" style="max-width: 600px;">
                <div class="card-body p-lg-5 p-4 text-center">
                <div class="guest-only">  
                    <img class="mb-4" src="/community/assets/images/wikimint-logo.webp"/>  
                    <h1>Wikimint Community</h1><hr/>
                    <p>Wikimint Community is a space for users to share their voice, build a public profile, and connect with others. Join a vibrant network, post status updates, and engage with like-minded people across diverse interests.</p>
                <center>
                    <div id="my-signin2" class="mx-auto">
                        <button class="btn btn-primary gsignin-ph">Sign in with Google</button>
                    </div>
                </center>   
                </div> 
                <div class="member-only">
                    <span class="d-block display-6 lead">Welcome</span>
                    <p class="display-5 lead fw-normal fs-3 m-name my-3 text-success"></p>
                    <p>
                    <a href="https://connect.wikimint.com"><button class="btn btn-primary d-none">Go to feeds</button></a>
                    </p>
                    <a class="m-link" href="#profile">My profile</a>
                    <a class="/community/dashboard" href="/community/dashboard">Dashboard</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script>
  $(document).ready(function() {
    $('#introBanner').modal('show');
  });
</script>