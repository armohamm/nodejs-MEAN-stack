'use strict'

/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */

var licenseKEY;
// Bluemix Config
if (process.env.NEWRELIC_LICENSE == undefined){
  var env = JSON.parse(process.env.VCAP_SERVICES),
      licenseKEY = env['newrelic'][0]['credentials']['licenseKey'];
}
// Localhost config
else{
  licenseKEY = process.env.NEWRELIC_LICENSE
}
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['NodeJS MEAN Boilerplate on Bluemix'],
  /**
   * Your New Relic license key.
   */
  license_key: licenseKEY,
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  }
}
