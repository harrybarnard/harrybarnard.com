+++
title = "Case Study"
+++
## Background

The Early Childhood Project are a small Brighton based children’s charity who seek to challenge and combat prejudice,
discrimination and injustice in the lives of children. Their main activity is providing a toy library service and advice and
support for parents and carers in their local area. They have one full time project coordinator and three part time
playworkers.
For approximately ten years ECP had a dynamic content management system powered website that they had used to post
updates about their activities and information relevant to their service users and funders.

### Observations

* The website was mainly updated by a volunteer who had subsequently left the country and was unable to
continue.
* The project coordinator had limited technical skills and little available time to manage the website.
* As the website was created in 2007 it was not designed to be “responsive” and was not easy to use on small
screen devices such as tablets and smartphones.
* The website maintenance costs were borne by a particular grant which the project not longer received.
* The website looked a little dated and did not reflect modern web design patterns.
* The website had little “engagement” in the form of comments or registrations from users.

## Brief

ECP wanted a new website that:

* Could potentially be updated, modified and maintained by an inexpert volunteer in the future.
* Would be cheap and easy to maintain and deploy.
* Would be safe and secure and minimise their data protection liabilities.
* Would be accessible to as many people and devices as possible.
* Would be more focused on communicating their core message and attractive to funders and donators.
* Would help to minimise the number of telephone and email enquiries they receive my addressing the queries or
concerns of their end users and also potentially encourage shy or nervous service users to attend their sessions.

## Solution

Some highlights of my solution:

* Separate the concerns of the existing website. One main site dedicated to “corporate” concerns designed to appeal
to funders and other statutory stakeholders. Create further small sites dedicated to individual services and their
user’s needs. The smaller sites could be created as future resources allow. The small sites could be search engine
optimised based around their particular offering.
* Employ a statically generated based website solution. By dispensing with the user interaction aspects of the site
which ECP weren’t really utilising anyway they could considerably reduce the complexity of the hosting solution
required.
* Move the dynamic user interactions to social media. Further utilise the ECP Facebook page and make use of their
event management, comments and other systems to communicate with the Toy Library users. This removes the data protection 
liabilities of their existing website and saves the project coordinator time with only having to
interact with a single system on a day to day basis. As many of their service users were already Facebook users
this should help to reduce the existing “friction” when interacting.
* The separate sites would use the same design language and theme to allow users to navigate seamlessly between
them. They would be differentiated by a unique colour.
* Only key information would be presented to the user initially with further information available as the user digs
deeper in to the website. This allows the content to be enhanced progressively whilst still being useful initially.
* I committed to maintain and update the websites as necessary on a pro bono basis.

## Key Technologies Used

### Hugo

Hugo is a Go based static site generator. I selected this generator for the following reasons:

* It is distributed as a compiled binary and would be relatively easy for others to install as it it has no dependencies.
* It is written in Go which is a language I am familiar with so I am better able to understand it’s functionality.
* It seemed to perform much faster than other generators during my evaluation.

### Bootstrap

Bootstrap is a front end framework for developing with HTML, CSS, and JS. I selected it for the following reasons:

* Bootstrap is the probably the most popular front end framework and therefore anyone else involved in maintaining
the website would likely be familiar with it or be able to easily access information about using it.

### Amazon Web Services

Amazon Web Services (AWS) provides an on demand, relatively cheap and highly available cloud computing platform. The
following AWS services were employed:

* Route 53 - domain name system
* S3 - static web hosting
* CloudFront - content distribution network with SSL.

By utilising this combination of services ECP could have a cheap, secure, highly available and scalable hosting solution that
required no intervention from them to operate day to day.

### Node.js

I created a simple development toolchain using Node.js (with Gulp and npm) that provides some commands to simplify
developing and deploying the site.