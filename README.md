# Imprint Privacy Bundle
This bundle adds two buttons to the app, which refer to the imprint and the privacy statements.

![Screenshot App](https://github.com/conterra/mapapps-imprint-privacy/blob/master/screenshot.JPG)

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
            "url": "https://www.conterra.de/de/formales/formales/impressum"
        },
        {
            "locale": "en",
            "url": "https://www.conterra.de/en/formales/formales/impressum"
        }
    ],
    "privacyUrls": [
        {
            "locale": "de",
            "url": "https://www.conterra.de/de/formales/formales/datenschutzerklaerung"
        },
        {
            "locale": "en",
            "url": "https://www.conterra.de/en/formales/formales/datenschutzerklaerung"
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

Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
