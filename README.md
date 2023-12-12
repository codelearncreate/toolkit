# Weavly Toolkit

[![Netlify Status](https://api.netlify.com/api/v1/badges/6e252f16-15df-48b3-baeb-396b49c45b1c/deploy-status)](https://app.netlify.com/sites/weavly-toolkit/deploys)

This repository contains the files needed to build [Eleventy](http://11ty.dev/)-based static sites for the [Fluid Project](https://fluidproject.org).
It does not include support for internationalization; if your project requires internationalization, use [Trivet](https://github.com/fluid-project/trivet/)
instead.

## Usage

### To run locally in development mode

1. Install the required NPM packages: `npm install`
2. Run [Eleventy](http://11ty.dev) in development mode: `npm start`.

The website will be available at [http://localhost:8080](http://localhost:8080).

### To build and serve using Docker

You can build and serve the website from a [Docker](https://docs.docker.com/get-docker) container.

Once you have Docker installed, run the following commands to build a Docker image and start a container:

* Build the image: `docker build -t weavly-toolkit .`
* Run the container: `docker run --name weavly-toolkit -p 8000:80 weavly-toolkit`

The website will be available at [http://localhost:8000](http://localhost:8000)

If you make changes to the website, repeat the steps to build the image and start a new container.

### To build for deployment to a personal web server

1. Install the required NPM packages: `npm install`
2. Run the build script: `npm run build`
3. Upload the contents of the `./_site/` directory to the web root of your server.

If you make changes to the website, repeat step 2 to build the website and upload any changed files from the `./_site/`
directory to the web root of your server.

## Features

* Basic static site configuration for developing project websites and blogs.
* Starter configuration for [Decap CMS](https://decapcms.org/).
* Integrated [User Interface Options](https://docs.fluidproject.org/infusion/development/UserInterfaceOptionsAPI.html)
  Preferences Editor.

## Notes

Modifications can be made to any source file or directory except for the contents of the `_site` directory. The
`_site` directory is not versioned since it contains the built website that Eleventy generates from the source files,
and  files in `_site` are overwritten at build time.

## Working with Decap CMS

The [Decap CMS](https://decapcms.org/) configuration can be edited in [`src/admin/config.yml`](src/admin/config.yml).
For full documentation, see the [Decap CMS documentation](https://decapcms.org/docs/).

## License

The Weavly Toolkit is available under the [New BSD License](https://raw.githubusercontent.com/codelearncreate/toolkit/master/LICENSE.md).

## Third Party Software in the Weavly Toolkit

The Weavly Toolkit is based on other publicly available software, categorized by license:

### New BSD License

* [Trivet Monolingual](https://github.com/fluid-project/trivet-monolingual)
