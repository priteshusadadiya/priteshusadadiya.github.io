---
title: Building Newsletter and contact forms for Hugo site.
date: 2019-02-09
published: true
tags: ["hugo", "featured"]
category: ["Development"]
canonical_url: false
description: "Hugo is a static site generator , which means everything in your website is static html pages. So if you want to gather emails from your visitors for building a newsletter or contact form to gather more data ? How will you go about it ?"
---

Maybe you can use emails service like mailchimp or tinyletters or other xyz service to gather that or there is a another easy way to do it hassle free (at-least I think so)

First thing you need is a simple HTML form that contains one or more input fields.

There is an opensource product named [FORMSPREE](https://github.com/formspree/formspree) that you can use to build your newsletter and contact forms.


There is no need to setup any third part plugins or any kind of registration for that. all you need is an email address.

First thing you have to do is add below line to your form to connect it to `FORMSPREE` 
```
<form action="https://formspree.io/your@email.com" method="POST" />
```
Second thing is to add `name` attribute to all of your form elements.

And the last thing is to confirm email.  you have to submit the form once yourself.This first-time-use will trigger an email requesting confirmation.

Here is how the complete form looks like
```
<form method="POST" action="https://formspree.io/your@email.com">
  <input type="email" name="email" placeholder="Your email">
  <textarea name="message" placeholder="Test Message"></textarea>
  <button type="submit">Send Test</button>
</form>
```

Do this and you are done. Congratulations!...

### One Important Thing:

Now you have build a contact from to collect emails and feedback and ready to go , what's next ?

Now suppose you write /post your content on multiple platforms so, you can't just use same form everywhere how will you identify what email/data came from which channel ?

Would you use different emails for different platforms ? that sounds messy.

### So what can we do ?
The answer is to utilize hidden type of form elements.
like ,
```
<input type="hidden" name="NameofPlatfrom" Value="AddSomeValueHere">
```
With this, form element will be hidden and will not get displayed to end user but , once form is submitted it will send value of this hidden field as well.

Now you can successfully distinguish sources of your contact data.

### Remember:
Make sure you don't use same name property more that once in single form. This will confuse the api and users will receive an error and you won't get any data.


There are other couple of features of `FORMSPREE` for more advanced configuration but it's paid and i haven't used it. Hence , not included here. But you can [check it out here](https://github.com/formspree/formspree)  
