import app from './app';

const checkVersion = () => {
  const [major, minor] = process.versions.node.split('.').map(parseFloat);
  if (major < 7 || (major === 7 && minor <= 5)) {
    console.log(`You're on an older version of node that doesn't support Async and Await. Please go to nodejs.org and download version 7.6 or greater.`);
    process.exit();
  }
}

const startApp = () => {

  const port = 3001

  app.set('port', port);
  const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
}

checkVersion();
startApp();
