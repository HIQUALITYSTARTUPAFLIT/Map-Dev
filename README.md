﻿﻿﻿﻿﻿﻿﻿﻿# Map-DevThe last few attempts with Ionic 2 weren't working and were pissing me off. So I destroyed them and replaced them with an older form. It works.## ContributingAll of the base code that the app needs is in `www/donotedit.js`, as the name suggests **DO NOT EDIT IT!!** I cannot stress that enough. Here are some basic guidelines* Any code that needs to be written should be written in `www/app.js`.* Custom scripts should be in `www/myscripts/`* Custom script tags should be placed under the `<!--**CUSTOM SCRIPT TAGS HERE**-->`* Always work on new features in a separate [branch](https://git-scm.com/book/en/v1/Git-Branching-What-a-Branch-Is)* Do not work on the `master` branch... it should be left clean and working for other features to be developed without conflict## TO-DOsI left a bunch of shit not done because I got sick of working. I wrote down implicit instructions/recommended-steps that I would have done anyways in [Projects](https://github.com/HIQUALITYSTARTUPAFLIT/Map-Dev/projects). ## UsageThe one big feature I implemented that we need is how to add markers to the map. This feature only works in scripts referenced under `<!--**CUSTOM SCRIPT TAGS HERE**-->`.```// Returns the marker objectplaceMarker({	lat: 0,	long: 0,	title: "Title",	icon: {		url: "icon.png",		size: {            x: 32,           	y: 32		}	}});```