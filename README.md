# Imprint Privacy Bundle
This bundle adds two buttons to the app, which refer to the imprint and the privacy statements.

![Screenshot App](https://github.com/conterra/mapapps-imprint-privacy/blob/main/screenshot.JPG)

Sample App
------------------
https://demos.conterra.de/mapapps/resources/apps/downloads_imprintprivacy/index.html

#### Configurable Components of dn_imprintprivacy:

##### ToolHandler:
```
"ToolHandler": {
   "imprintUrls": [
        {
            "locale": "de",
            "url": "https://www.conterra.de/impressum"
        },
        {
            "locale": "en",
            "url": "https://www.con-terra.com/imprint"
        }
    ],
    "privacyUrls": [
        {
            "locale": "de",
            "url": "https://www.conterra.de/datenschutzhinweise"
        },
        {
            "locale": "en",
            "url": "https://www.con-terra.com/privacy-statements"
        }
    ],
    "toolsetDefinition": {
        "id": "imprintprivacyToolset",
        "tools": [
            "imprintTool",
            "privacyStatementsTool"
        ],
        "registerWidget": {
            "widgetRole": "footer_right"
        },
        "container": "ignore",
        "windowType": "container",
        "cssClass": "showToolLabels"
    }
}
```

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
