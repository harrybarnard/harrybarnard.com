+++
title = "Legacy PHP Content Management System"
date = "2018-06-17T13:50:15+01:00"
draft = false
categories = ["programming"]
topics = ["programming", "software", "content management system"]
technologies = ["php", "javascript", "zend framework", "dojo-toolkit", "mysql"]
+++

I've [published the code](/projects/legacycms/) for a content management system that was used to power several of my website projects starting
from when I was technical lead at a small digital agency in Brighton in 2006.

The version published is 2.1 and dates from 2010. It's built on top of [Zend Framework 1](https://framework.zend.com/)
and uses [Dojo Toolkit](https://dojotoolkit.org/) for some of it's UI components.

### Caveat emptor

Prior to publishing the code all I did was patch it to be compatible with PHP7, add Composer support where possible and
check that it runs on Debian Stretch.

As it's based on a now obsolete Zend Framework version, hasn't received any security patches or other attention 
for a long time and uses some obsolete techniques such as Flash for the uploader I suggest you avoid using it in a
production setting.