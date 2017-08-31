// code to be ran on startup
Meteor.startup(() => {
  /*const prerenderio = Npm.require('prerender-node');
  const settings = Meteor.settings.PrerenderIO;

  if (settings && settings.token && settings.host) {
    prerenderio.set('prerenderToken', settings.token);
    prerenderio.set('host', settings.host);
    prerenderio.set('protocol', 'https');
    WebApp.rawConnectHandlers.use(prerenderio);
  }*/

  // global helpers
  Template.registerHelper("SITE_NAME", function () {
    return 'Seamy';
  });
});