/* 
Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
*/

function createSecretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (value) {
      secret = value;
    },
  };
}

const secret = createSecretHolder("Password is 123456");
console.log(secret.getSecret());
secret.setSecret("Password updated to 987654");
console.log(secret.getSecret());
