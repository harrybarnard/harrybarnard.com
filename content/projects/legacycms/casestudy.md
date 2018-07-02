+++
title = "Case Study"
+++

## Background

Until 2006 I had been building my dynamic website projects using a combination of vanilla PHP and Mambo CMS. I found
myself often having to rewrite a large part of Mambo to make it match a the functionality requirements of my clients and
often repeating the same work when creating vanilla PHP back ends. For that reason I resolved to create a reusable core of
back end code that I could use as a starting point for future website projects.

## Brief

Core requirements of the project were:

* Provide the core functionality common to all if not most dynamic websites.
* Allow modules of functionality to be combined as the project required.
* Provide a simple white label front end that I could customise and expand to the needs of the project.
* Be potentially deployable on cheaper commodity/shared hosting solutions. (i.e. not dedicated servers or VPSs).

## Solution

I completed version 1 of the CMS in 2006. It was mainly created by combining functionality from previous projects. It used
the following technology:

* PHP 4
* MySQL 4
* Adobe Spry JavaScript framework

During late 2006 I began work on version 2 that would use the newly released Zend Framework for it’s core functionality. It
utilised the following technology:

* PHP 5
* MySQL 5
* Zend Framework
* Dojo Toolkit JavaScript framework

## Key Technologies Used

### Zend Framework

Zend Framework is a PHP MVC framework. It can also be used as a library of individual components. Using Zend enabled
me to concentrate more on the needs of the project at hand and less on building out the framework functionality. It
provides a large, comprehensive library of components that I could often use to build the functionality that clients required.

### Dojo Toolkit

Dojo Toolkit is a library for creating JavaScript/Ajax front ends. It provided me with easy to use and accessible components
for creating front end interactive features along with a consistent I/O wrapper for communicating with the back end.