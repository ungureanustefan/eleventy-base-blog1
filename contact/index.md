---
layout: layouts/post.njk
title: Contact Me
templateClass: tmpl-post
eleventyNavigation:
  key: Contact Me
  order: 5
---

<form name="contact" method="POST" data-netlify="true">
  <p>
    <label for="name">Your Name: <input type="text" name="name" required /></label>   
  </p>
  <p>
    <label for="email">Your Email: <input type="email" name="email" required /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>