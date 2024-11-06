---
layout: default
---
 <div class="container">
  <h2 class="my-5">Register Account</h2>
  <div class="card p-3 bg-light">
  <div class="card-body">
  <form id="userDataForm" class="mt-3" method="post" target="wmreg" action="https://script.google.com/macros/s/AKfycbzhAy4v-Su8isXSRnhAfVI4cXgirC58T3ZwCzEC7UE/dev">
      <div class="form-group">
        <label class="form-label" for="userId">User ID</label>
        <input type="text" class="form-control" id="userId" name="u" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input type="text" class="form-control" id="name" name="n" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="title">Title</label>
        <input type="text" class="form-control" id="title" name="t" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="website">Website</label>
        <input type="url" class="form-control" id="website" name="w">
      </div>
      <div class="form-group">
        <label class="form-label" for="description">Description</label>
        <textarea class="form-control" id="description" name="d"></textarea>
      </div>
      <div class="form-group">
        <label class="form-label" for="facebook">Facebook URL</label>
        <input type="url" class="form-control" id="facebook" name="f">
      </div>
      <div class="form-group">
        <label class="form-label" for="twitter">Twitter URL</label>
        <input type="url" class="form-control" id="twitter" name="x">
      </div>
      <div class="form-group">
        <label class="form-label" for="linkedin">LinkedIn URL</label>
        <input type="url" class="form-control" id="linkedin" name="l">
      </div>
      <div class="form-group">
        <label class="form-label" for="instagram">Instagram URL</label>
        <input type="url" class="form-control" id="instagram" name="i">
      </div>
      <div class="form-group">
        <label class="form-label" for="youtube">YouTube URL</label>
        <input type="url" class="form-control" id="youtube" name="y">
      </div>
      <button type="submit" class="btn btn-primary mt-3">Register</button>
  </form>
  </div></div>
  </div>


<script>

$(document).ready(function() {
  $('#userDataForm').on('submit', function(event) {
    window.focus();
    setTimeout(function() {
var focusInterval = setInterval(function() {
      window.focus();
    }, 1000);
    setTimeout(function() {
      clearInterval(focusInterval);
        var closedTab = window.open('about:blank', "wmreg"); 
      if (closedTab) {
        closedTab.blur();
        window.focus();
        closedTab.close(); 
      }
    }, 6000);
    
    return false; 
       }, 1000);
  });
});

</script>