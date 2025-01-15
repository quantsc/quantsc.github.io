# Quant SC Website

Hello and welcome to the Quant SC Website repo.

Here is a brief overview of things to know if you plan on editing this:

- all images are in assets/imgs
- all css is in body.css, parallax.css, or pulled from bootstrap.
- all javascript is in js. This is mainly used for animations
- the main entrypoint for everything is in index.html

Committing to the master branch automatically deploys all changes (usually within ~20 minutes).
Before deploying changes, always make sure to preview the website. I recommend using the VSCode Live Server extension paired with Google Chrome Dev Tools. To pull up Dev Tools, just right-click on the page and click "Inspect". To get Live Server, first install VSCode, then go to extensions, then look it up and install; it should create a small "Go Live" button at the bottom of your VSCode window that you can click, which will create a localhost instance that displays the website.

If editing css, I highly recommend that you make sure the edits are compatible across devices. This is done by setting screen width ranges on which css properties apply/don't apply (i.e. small screen width --> smaller properties, maybe more cushioning! Test around with it and also note that Dev Tools sometimes does not work -- view your changes manually once you deploy them on your phone).

If you ever want to edit the website but want a second set of eyes, feel free to create a pull request on a personal branch and bump one of the other contributors externally.

## Domain

The current domain names we own are quantsc.github.io and quantsc.org. The former is provided by Github and the latter is paid for through Google Domains. To transfer ownership, the new recipient needs to have a Google Domains account and sign in after a transfer auth code is generated.

## Sections

### Head

The head of a website is pretty important because it includes metadata that is likely the first thing end-users will see. For example, the title and "description" meta element get displayed to end-users who find our website via search engines like Google and are wondering what the website is for.

The head also creates references to all js and css files that we need to load the site properly. Without these links, the website would be very bland!

### Header

This contains our navbar. Pretty self-explannatory. One cool thing about our navbar is that it's transparent at first but then solidifies! To see how this feature works, look at nav.js

### Parallax Jumbotron

This is just a pretty cover page that is stationary while the user scrolls, creating a cool effect in the process. This is done via the `jumbotron` & `paral` tags. To place text, links, etc. in the cover image's center, just place them within the `smaller-width` div. We often place the application link here.

### Featurettes

The rest of the website is mostly divided into "featurettes". These are basically just sub-sections! There is some generic css from them in body.css.

#### Featurette 1 -- Who We Are

We typically use this featurette to put faces to the name of Quant SC. It's nice to show that we have active steering members, and these should be updated as people join/leave. Note that this is generally one of the more fickle parts of the website in terms of formatting. If you'd like to change how we do this in the future, that's not a bad idea!

#### Featurette 2 & 3 -- Events & Cohort Timeline

We give some info on what we do as a club in these...
Some of the wording could be improved, but maybe not the end of the world...

#### Featurette 4 -- Join Us

We generally include a link to the mailing list and semesterly application here as well as details on when applications open again/close again. It's important to be fairly punctual about putting the application up & taking the application down when we say we will because it puts us on a positive foot as far as showing that we care about our candidates.

#### Featurette 5 -- Alumni

This includes an board of logos compiled into an image. We don't directly link our alum on the website because that might be considered a slight breach of trust and honestly just a hassle to upkeep.

### FAQ

Right now, we don't have enough FAQs to warrant any special drop-down options for visual space-saving -- we just list all Qs w/ As right below which is probably the most user friendly tbh.

### Footer

This just has links to our different social identities.
Also, at the bottom of the index.html file, you'll see some css/js files included. These help to maintain some of the special functions on our website -- all pretty standard stuff.
