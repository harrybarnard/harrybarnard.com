# harrybarnard.com

This is the source code for [harrybarnard.com](https://harrybarnard.com).

Prerequisites:

* [Hugo](https://gohugo.io/)
* [Node.js](https://nodejs.org/)
* [Amazon S3](https://aws.amazon.com/s3/)
* [Amazon Cloudfront](https://aws.amazon.com/cloudfront/)

## Usage

This is a [Hugo](https://gohugo.io/) project. Check the [Hugo Documentation](https://gohugo.io/documentation/) for more 
usage information.

### Content Commands

Add new page:
```bash
hugo new page/<page name>.md
```
Add new service:
```bash
hugo new service/<service name>.md
```

### Development Commands
Check [gulpfile.js](https://github.com/harrybarnard/harrybarnard.com/blob/master/gulpfile.js) for more info.

Install dependencies:
```bash
npm install
```
Run local development server at [http://localhost:1313](https://localhost:1313):
```bash
npm run server
```
Build source:
```bash
npm run build
```
Watch source for changes:
```bash
npm run watch
```
Publish site. This builds from source, uploads to S3 then runs an invalidation on Cloudfront as necessary:
```bash
npm run publish
```

### Configuration
Hugo is configured using [config.yml](https://github.com/harrybarnard/harrybarnard.com/blob/master/config.toml).  
You'll need to create an aws.json (in the project root) file to configure your Amazon deployment. You can use 
[aws.example.json](https://github.com/harrybarnard/harrybarnard.com/blob/master/aws.example.json) as a guide for this.

## Licence
Content: CC-BY-SA-4.0
Code: MIT