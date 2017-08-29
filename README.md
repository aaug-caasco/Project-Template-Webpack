# Project Template #

### What is this repository for? ###

* A template for new eChannel production team projects
* It is based on our sitecore template accessed by right-clicking on a page in sitecore > selecting "insert" > "insert from template" (Templates/User Defined/Insert/V2015/Content)

### How do I get set up? ###

You have two options:

1. Fork this repository by selecting "Fork" to your left and give it the name of your new repository or
2. Create your repo and then select "Downloads" under "Navigation" to your left and place this into your local repository.

NOTE: Do not clone.





### Run project ###

1. Once the project repo is installed locally cd in your terminal to the directory location and run "npm install" (note: if you already have a project installed you can just copy over the "node_modules" directory)

2. To start local project server run the command "npm start" in your terminal and wait for the response "webpack: Compiled successfully"

3. In your web browser open http://localhost:8080/ to preview your edits

* To build: "npm build"


### Structure ###

All your files source files are in src/ directory.

* hero.html - to edit your sitecore hero component
* body.html - to edit the sitecore body
* template - currently set to the 2015 template (Templates/User Defined/Insert/V2015/Content) you can remove it all to set it as an stand-alone/OM page


### Contribution guidelines ###

* For any change(s) or addition(s), please create a new branch to be pulled and merged. or
* Send me an email or HipChat of your change(s) or addition(s).

### Who do I talk to? ###

* Repo owner [rrey@caasco.ca](mailto:rrey@caasco.ca)



### Known issues ###

* Not really an issue but it may appear to hang at 94% during image optimization process, it still works just wait

* For image compression the following error may appear:
⚠ mozjpeg pre-build test failed
ℹ compiling from source
✖ Error: autoreconf

brew install libtool automake autoconf nasm

brew install libpng