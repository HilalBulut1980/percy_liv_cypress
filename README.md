# Visual Testing for Livoneo with Percy/Cypress
Automated process of detecting and reviewing daily visual UI changes of https://www.....
 
***

## Update TestCases on IONOS Server
 

Every night (during the week - Sunday to Thursday) at 00:30 a.m. all visual test cases (LIV) run against production server. The test cases are executed via cron-job on a server from IONOS. In order to make the latest changes of the test cases available on the server follow the following steps:


* establish a ssh connection to the server with the following configuration
* Host: 82.165.75.148
* Port: 22
* user: root,  pwd: Oa416EwFiQ
  * > ssh root@82.165.75.148
  * > password: Oa416EwFiQ
* navigate to source-folder
  * > cd /var/www/html/percy-test-liv
  * > git pull
* type in github username and password

***

## Run tests manually
First the percy token needs to be set before running the tests. This step is needed for authentication and reviewing the test results on the percy dashboard. Without setting this token no snapshots will be taken and no results will be shown on the dashboard. 
Percy requires a token environment variable to be set:
> PERCY_TOKEN

**find percy token:**

  > visit https://percy.io/ec2e010d
  > signin with our browserstack account
  > select project (here LIV)
  > select Project settings

 **set percy token under Windows (in project folder):**
 
  > set  PERCY_TOKEN=4f0332c4fac85e0cb0b19d92dabce528be98766412d12492e842bf36abf3001d 
  
 **set percy token under Unix (in project folder):**

  > export  PERCY_TOKEN=4f0332c4fac85e0cb0b19d92dabce528be98766412d12492e842bf36abf3001d
    
This token is unique for each Percy repository - you can find it in the percy project settings (as described above).

**run all tests with:**

 > npx percy exec -- cypress run (in project folder)
 
**run all tests with bash:**

 > bash /var/www/html/percy-test-liv/cron/regression_test.sh (in root folder)
 
**run specific test with:**

 > npx percy exec -- cypress run --spec "cypress/integration/test.spec.js"


***


## Structure


-  we have 34 tests files in total:

    - six tests in folder cypress/integration/category_pages/
	    - **_category_page_diverse.spec.js_**
	    - **_category_page_doppelrollo.spec.js_**
	    - **_category_page_plissee.spec.js_**
	    - **_category_page_rollo.spec.js_**
	    - **_category_page_schiebegardinen.spec.js_**
	    - **_category_page_vorhaenge.spec.js_**

    - six tests in folder cypress/integration/cms_pages_proi1/
    	- **_cms_prio1_diverse.spec.js_**
    	- **_cms_prio1_doppelrollo.spec.js_**
    	- **_cms_prio1_jalousie.spec.js_**
    	- **_cms_prio1_plissee.spec.js_**
    	- **_cms_prio1_rollo.spec.js_**
    	- **_cms_prio1_vorhaenge.spec.js_**

    - five tests in folder cypress/integration/cms_pages_proi2/
	    - **_cms_prio2_diverse.spec.js_**
	    - **_cms_prio2_insektenschutz.spec.js_**
	    - **_cms_prio2_plissee.spec.js_**
	    - **_cms_prio2_rollo.spec.js_**
	    - **_cms_prio2_schiebegardinen.spec.js_**

    - nine tests in folder cypress/integration/configurator/
        - **_visual_LIV_configurator_basisplissee.spec_**
        - **_visual_LIV_configurator_doppelrollo.spec_**
        - **_visual_LIV_configurator_fliegengitter.spec_**
        - **_visual_LIV_configurator_holzjalousie.spec_**
        - **_visual_LIV_configurator_insektenschutzrollo.spec_**
        - **_visual_LIV_configurator_jalousie.spec_**
        - **_visual_LIV_configurator_plissee.spec_**
        - **_visual_LIV_configurator_rollo.spec_**
        - **_visual_LIV_configurator_schiebegardine.spec_**

    - eight tests in folder cypress/integration/product_pages/
    	- **_product_pages_doppelrollo.spec.js_**
    	- **_product_pages_insektenschutz.spec.js_**
    	- **_product_pages_plissee.spec.js_**
    	- **_product_pages_rollo.spec.js_**
    	- **_product_pages_schiebegardinen.spec.js_**
    	- **_product_pages_service.spec.js_**
    	- **_product_pages_vorhaenge.spec.js_**
    	- **_product_pages_zubehoer.spec.js_**


### Capture snapshot of each link which is visited
 
- Within the tests in following folders: _**category_pages, cms_prio1, cms_prio2 and product_pages**_ different LIV-links are visited and snapshots of each link are taken. The links are strored in separate json-files in folder fixtures, i.e.:

> _cypress/fixtures/**category_pages_diverse.json**_

> _cypress/fixtures/**category_pages_plissee.json**_

> _cypress/fixtures/**cms_prio1_doppelrollo.json**_

> _cypress/fixtures/**cms_prio1_vorhaenge.json**_

> _cypress/fixtures/**cms_prio2_jalousie.json**_

> _cypress/fixtures/**cms_prio2_rollo.json**_

> _cypress/fixtures/**product_pages_doppelrollo.json**_

> _cypress/fixtures/**product_pages_schiebegardinen.json**_



### Capture visual changes of the UI during product configuration

- Within the configurator tests (_**configurator_basisplissee.spec.js, configurator_schiebegardinen.spec.js, etc.**_) different steps of the configurators  are run through which leads to visual changes. Every change is being held on a separate snapshot.


### Capture "growing" images while hovering elements (**TO DO**)

- Additionally each image which is "growing" when hovering over shpuld be captured on a separate snapshot, i.e.:

![growing image](/IMAGES/growingImage.png)

### Ignoring specific elements
With Percy it is possible to ignore dynamic elements or specific regions.
As we have some youtube videos and dynamic elements (i.e. the slider on the main page) on PEX it makes sense to hide/ignore those elements. There are some configuration options in Percy as described in https://docs.percy.io/docs/sdk-configuration
We used the configuration in package.json:


     "percy": {
    "version": 1,
    "snapshot": {
      "widths": [
        375,
        1280
      ],
      "min-height": 1024,
      "percy-css": "#nav-menu-container { display: none !important; } iframe { display: none !important; }"
    }
  },

**With this configuration the nav-menu-container and youtube videos are ignored.**


***

## Open Issues

### Pixel errors


***-->Percy support contacted***


### Different distance between elements on every snapshot


***-->Percy support contacted***

### Capture opened menus

As in ticket TAL-77 described we also want to regression-test opened menus.

![Image of opened menus](/IMAGES/openedMenu.png)

### Layout of Schiebegardinen-product detail pages not correct

As in LIV-4186 described the layout of Schiebegardinen PDPs are not correct. The reason for this is that Percy does not support the Arial font and the fallback font according to Arial (i.e. Verdana for LIV) is used when the page is displayed. Verdana is wider in style than Arial which leads to an incorrect layout, i.e.:

![Image of opened menus](/IMAGES/incorrectLayout.png)

***

## Workarounds

### Make sure all ressources are loaded before snapshot

In order to speed up the page load we are using lazyload @LIV (the webpage is lazy loading the images). Unfortunately this has the disadvantage that not all ressources are loaded intime before the snapshot is taken by cypress/percy.
Since Percy captures the snapshot of the DOM and renders the same, in case the image is not visible in the DOM when the snapshot is captured, the snapshot will be incomplete.
As described in https://docs.percy.io/docs/capturing-lazy-loading-images we use the scroll-to-bottomjs package on NPM. 
The key to this is scrolling the page past all of the lazy-loaded images, triggering them to load their full resolution image. Following setting ensures that all images are loaded before the snapshot is taken:

    cy.window().then(cyWindow => scrollToBottom({ frequency: 150, timing: 20, remoteWindow: cyWindow }));


frequency 150: (default: 100) - How many scroll increments

timing 20: (default: 8) - The amout of ms to pause between scroll increments

remoteWindow: (default: window) - The browsers window object. Can be handly for test runners like Cypress, which run the subjects test in a remote iframe

---

