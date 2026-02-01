const core = require('@actions/core');

try {
  const nameToGreet = core.getInput('who-to-greet');
  const greetingMessage = `Hello ${nameToGreet}!`;
  console.log(greetingMessage);
  core.setOutput('greeting-message', greetingMessage);
} catch (error) {
  core.setFailed(error.message);
}
