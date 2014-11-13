Package.describe({
  name: 'whiterabbit:desk',
  summary: 'A meteor wrapper for desk.com helpdesk API',
  version: '0.1.2',
  git: 'https://github.com/white-rabbit-japan/meteor-desk'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('desk.js');
  api.export('DeskAPI', 'server');
});

Npm.depends({
  request: "2.48.0",
  "oauth-1.0a": "0.1.1"
});