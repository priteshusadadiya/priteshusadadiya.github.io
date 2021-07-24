---
title : Customizing RSS Feed for Hugo Blog
date : 2019-02-13
published : true
tags : ["hugo",	"featured"]
category : ["Development"]
canonical_url : false
description : "Hugo ships with its own `RSS 2.0` template that requires almost no configuration, or you can create your own RSS templates.	"
---

Hugo ships with its own `RSS 2.0` template that requires almost no configuration, or you can create your own RSS templates.	

However, there are few basic limitations to this like having complete `rss` feed, all pages and posts gets included, only summary of each post is included with RSS feed.
So when you implement default `rss` feed then you also limit your `RSS feed` for your blog with above parameters.

Answer to this is to create your own `RSS` template.

## How to create custom RSS Template for Hugo.

Below is the RSS template for Hugo. Copy below code into file, name it as `rss.xml` and save this file into default directory of layouts i.e. `layouts\_default`

```
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>
	{{ if eq  .Title  .Site.Title }}{{ .Site.Title }}{{ else }}{{ with .Title }}{{.}} on {{ end }}
	{{ .Site.Title }}{{ end }}
	</title>
    <link>{{ .Permalink }}</link>
    <description>Recent content {{ if ne  .Title  .Site.Title }}{{ with .Title }}in {{.}} 
	{{ end }}{{ end }}on {{ .Site.Title }}</description>
    <generator>Hugo -- gohugo.io</generator>{{ with .Site.LanguageCode }}
    <language>{{.}}</language>{{end}}{{ with .Site.Author.email }}
    <managingEditor>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</managingEditor>
	{{end}}
	{{ with .Site.Author.email }}
    <webMaster>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</webMaster>
	{{end}}
	{{ with .Site.Copyright }}
    <copyright>{{.}}</copyright>{{end}}{{ if not .Date.IsZero }}
    <lastBuildDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</lastBuildDate>
	{{ end }}
    {{ with .OutputFormats.Get "RSS" }}
        {{ printf "<atom:link href=%q rel=\"self\" type=%q />" .Permalink .MediaType | safeHTML }}
    {{ end }}
    {{ range .Pages }}
    <item>
      <title>{{ .Title }}</title>
      <link>{{ .Permalink }}</link>
      <pubDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</pubDate>
      {{ with .Site.Author.email }}<author>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</author>{{end}}
      <guid>{{ .Permalink }}</guid>
      <description>{{ .Summary | html }}</description>
    </item>
    {{ end }}
  </channel>
</rss>
```
</br>
## How to add entire post instead of just description in RSS Feed.
By default only post description will be included in `RSS` feed so if you want to add full post in feed you will have to make some changes 

Change this 
```
<description>{{ .Summary | html }}</description>
```
to this
```
<description>{{ .Content | html }}</description>
```
</br>
## Exclude other custom pages and only include **`posts`** in RSS Feed
By Default everything on your Hugo site will get transmitted over RSS feed including your custom pages which are not the part of your blog posts.
To exclude these and include only `posts` make below change in your `rss.xml` file

Change below line 
``` 
{{ range .Pages }}
```
With this 
```
{{ range .Pages "Section" "post" }}
```
This will exclude all single and separate pages from your `RSS` Feed

</br>
## Limit the feed with certain no. of posts.
You can also limit the total no. of posts that broadcasts with `RSS` feed by using below code.

```
{{ range first 15 .Pages}}
```
</br>
### So, lets see what we can do by combining all of the above 

```
{{ range first 15 (where .Data.Pages "Section" "post") }}
```

> Above code will remove all other pages and add only blog posts and also limit posts number by 15 (only first 15 posts will broadcast) 

### Putting it all together

At the end, here is how your `rss.xml` file will look like,
```
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>
	{{ if eq  .Title  .Site.Title }}
	{{ .Site.Title }}{{ else }}{{ with .Title }}{{.}} on {{ end }}{{ .Site.Title }}
	{{ end }}
	</title>
    <link>{{ .Permalink }}</link>
    <description>Recent content 
	{{ if ne  .Title  .Site.Title }}
	{{ with .Title }}in {{.}} {{ end }}{{ end }}on {{ .Site.Title }}
	</description>
    <generator>Hugo -- gohugo.io</generator>{{ with .Site.LanguageCode }}
    <language>{{.}}</language>{{end}}{{ with .Site.Author.email }}
    <managingEditor>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</managingEditor>
	{{end}}
	{{ with .Site.Author.email }}
    <webMaster>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</webMaster>
	{{end}}
	{{ with .Site.Copyright }}
    <copyright>{{.}}</copyright>{{end}}{{ if not .Date.IsZero }}
    <lastBuildDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</lastBuildDate>
	{{ end }}
    {{ with .OutputFormats.Get "RSS" }}
        {{ printf "<atom:link href=%q rel=\"self\" type=%q />" .Permalink .MediaType | safeHTML }}
    {{ end }}
    {{ range first 15 (where .Data.Pages "Section" "post") }}
    <item>
      <title>{{ .Title }}</title>
      <link>{{ .Permalink }}</link>
      <pubDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</pubDate>
      {{ with .Site.Author.email }}<author>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</author>{{end}}
      <guid>{{ .Permalink }}</guid>
	  <description>{{ .Content | html }}</description>
    </item>
    {{ end }}
  </channel>
</rss>
```



Hope this information can be useful.</br>
Cheers 👋
