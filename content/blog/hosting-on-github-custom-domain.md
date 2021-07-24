---
title : Hosting Hugo site on Github Pages with Custom Domain
date : 2019-02-13
published: true
tags : ["hugo",	"featured"]
category : ["Development"]
canonical_url: false
description : "As Sites created with HUGO will be static site and Github provides a free hosting for static website, we are going to use [Github Pages](https://help.github.com/articles/what-is-github-pages/)."
---

As Sites created with HUGO will be static site and Github provides a free hosting for static website, we are going to use [Github Pages](https://help.github.com/articles/what-is-github-pages/).

</br>
## Create a Github Repository and Clone it Locally
First thing we need to do is to Create 2 Project repositories on GitHub. Name your first repository with exact name as your website directory `YourProjectNanme` (Project that you created in your local machine) and for the second one,name it as **\<YourUserName\>.github.io**. This repository will contain static content created with Hugo.


Now, pull those repos to your local machine

```
cd <YourProjectNanme>
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YourUserName.github.io
git clone https://github.com/YOUR-USERNAME/YourUserName.github.io.git
```
		
Initialize your `<YourProjectNanme>` folder with below Command

```
git init
```


And repo remotely with `remote` and `add` 

```
git remote add origin https://github.com/YOUR-USERNAME/YourProjectName.git
git pull origin master
```

</br>
## Edit Config File

Before we commit our changes we need to edit `config.toml` (Located in Root Directory of your Project 'YourProjectName') and change Base URL.

```
baseurl = "https://YourUserName.github.io" // Change YourUserName with your GIthub Username 
--- OR ---
baseurl = "https://MySpecialDomainName.com" // Custom Domain Name 
```

</br>
## Generate static content
Now lets generate static content with Hugo
```
hugo -d ../YourUserName.github.io
```
And now Push our Hugo Code to github repository

```
cd YourProjectName
git add .
git commit -m "your message"
git push origin master
```

And Push Static content to github 

```
cd YourUserName.github.io
git add .
git commit -m "your message"
git push origin master
```

</br>
# Configuring Custom Domain

In order to use custom domain with our gitthub pages, we will have to configure `A` records for our domain (you can do this wil help of DNS Provider)

Add below IP address as a  `A` records on your domain.
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

There are two way to add custom domain to our project.
1. Create a CNAME file in our root directory of the project
2. Use `Settings` option from github project repo and add a custom domain.

##### We are going with option 2
</br>
Open your github project repo **YourUserName.github.io** and navigate to settings page.Scroll down untill you see **GitHub Pages** section and there will be a option to add custom domain there.

Add your custom domain and click on save button.There is a also another check box `Enforce HTTPS`. check it (It will provide a layer of encryption and your site will be viewed over `HTTPS`).

If you are using a `www` sub-domain, there are chances that you might not be able to check the `Enforce HTTPS` check-box.
I was also receiving a [Privacy error with custom domain](https://dev.to/priteshusadadiya/privacy-error-with-custom-domain-in-and-github-pages-2ll2) and i solved it by changing a DNS record.

I had added the CNAME record (you can add this using DNS Provider)

```
www CNAME priteshusadadiya.com
```
Problem with above is that I was redirecting my `www` sub-domain to my apex(main) domain.

I Solved this issue by changing my CNAME record to 
```
www CNAME YourUserName.github.io // add your github.io url here
```

</br>
#### It takes around 48 hours for Github to generate HTTPS certificate on custom domain so, you might want to wait for it.


</br></br>
🙌 **Congratulations,** your website is now live and can be seen at  **\<YourUserName\>.github.io**




##### A Note:
I am documenting this entire process just in case i might need it in future. Maybe this can be useful to you too.

Happy Coding.

