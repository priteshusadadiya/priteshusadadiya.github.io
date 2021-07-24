---
title : Creating a blog with Hugo static site Generator
date : 2019-02-06
published : true
tags : ["hugo",	"featured"]
category : ["Development"]
canonical_url : false
description : "It has been long time since i wanted to start a blog and host it with my own Custom domain.Truth to be told , I am a lazy blogger - I only write occasionally."
---

Originally I wanted to setup my blog on Wordpress but configuring and hosting a blog on VPS server (no mater how cheap) , requires regular maintenance on monthly basis.

Add that with Keeping server up-to-date to avoid any risks, backups etc... just seems extra work that i really don't want to do.

Other option was host a blog on Blogger and redirect to custom domain. which again didn't seem right because external dependency on Google.(They can remove your blog without any warning if they feel like it. Doesn't matter if they actually do or don't, but they can)

Now being from Technical background and my curiosity to learn , I turned to Static site generators. I have heard some great thing about [Hugo](https://gohugo.io/) so thought why not give it a try. 

Hogo is a great choice as it has Github pages support and i can host entire thing for free with Github.

## Setting up Hugo server locally. 
---
</br>
#### Installing Hugo

There is entire section dedicated to installation for different environment [detailed instructions](https://gohugo.io/getting-started/installing/) .

#### Selecting Theme

after browsing some themes (and there are too many themes) i decided to go with [silhouette-hugo](https://github.com/mattbutton/silhouette-hugo).

#### Creating a new project template and forking a theme.

```
hugo new site <SITENAME>
cd <SITENAME>/themes
git clone https://github.com/mattbutton/silhouette-hugo.git
```

#### Adding the theme to project's config file.
```
cd..
echo 'theme = "silhouette-hugo"' >> config.toml
```
#### Starting the Hugo server locally
```
Hugo server
```
Once the Hugo is started ,site can be previewed on `http://localhost:1313`


#### Changing the site data 
Go to config.toml file of your project's main directory and from there you can change your sites configuration data like baseurl , title of site , social links etc... 

#### Using some CSS to slightly change look and feel of theme.

Navigate to <SITENAME>/themes/silhouette-hugo/assets/css

Here resides the styles.css file. you can change the style of the theme by editing this file.

[ One of the thing i love most about hugo is instant changes in site without any refresh. You could see the data changes in website as soom as you change/add css property.]

#### Deploy site

If you want to deploy the Hugo site to free GitHub pages, commit the project to your [Github](https://github.com/) account. Just name the repository as **\<Yourname\>.github.io** and the github automatically builds the site into the **http://\<yourname\>.github.io.**

There is a another post for this if you would like to know the process of hosting Hugo blog on GIthub Pages.