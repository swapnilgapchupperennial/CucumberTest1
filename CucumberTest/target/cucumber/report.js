$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava/cucumberJava.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    }
  ],
  "line": 7,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Image exists",
  "description": "",
  "id": "cucumberjava;image-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I open toolsqa website",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I have tested if the image exist for given path",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.openBrowser()"
});
formatter.result({
  "duration": 4996739496,
  "status": "passed"
});
formatter.match({
  "location": "annotation.goToFacebook()"
});
formatter.result({
  "duration": 19523159232,
  "status": "passed"
});
formatter.match({
  "location": "annotation.loginButton()"
});
formatter.result({
  "duration": 2330475223,
  "status": "passed"
});
formatter.uri('cucumberJava/cucumberReport.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#This is to check test result for Pass test case"
    }
  ],
  "line": 3,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "image exists",
  "description": "",
  "id": "cucumberjava;image-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I open toolsqa website",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I have tested if the image exist for given path",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.openBrowser()"
});
formatter.result({
  "duration": 4096206660,
  "status": "passed"
});
formatter.match({
  "location": "annotation.goToFacebook()"
});
formatter.result({
  "duration": 16445878976,
  "status": "passed"
});
formatter.match({
  "location": "annotation.loginButton()"
});
formatter.result({
  "duration": 1743772816,
  "status": "passed"
});
});