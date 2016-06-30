(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name angulartics.mixpanel
 * Enables analytics support for Mixpanel (http://mixpanel.com)
 */
angular.module('angulartics.mixpanel', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {

  angulartics.waitForVendorApi('mixpanel', 500, '__loaded', function (mixpanel) {
    $analyticsProvider.registerSetUsername(function (userId) {
      mixpanel.identify(userId);
    });
    $analyticsProvider.registerSetAlias(function (userId) {
      mixpanel.alias(userId);
    });
    $analyticsProvider.registerSetSuperPropertiesOnce(function (properties) {
      mixpanel.register_once(properties);
    });
    $analyticsProvider.registerSetSuperProperties(function (properties) {
      mixpanel.register(properties);
    });
    $analyticsProvider.registerSetUserPropertiesOnce(function (properties) {
      mixpanel.people.set_once(properties);
    });
    $analyticsProvider.registerSetUserProperties(function (properties) {
      mixpanel.people.set(properties);
    });
    $analyticsProvider.registerPageTrack(function (path) {
      mixpanel.track( "Page Viewed", { "page": path } );
    });
    $analyticsProvider.registerEventTrack(function (action, properties) {
      mixpanel.track(action, properties);
    });
    $analyticsProvider.registerIncrementProperty(function (property, value) {
      if (typeof value === 'undefined') {
        mixpanel.people.increment(property);
      } else {
        mixpanel.people.increment(property, value);
      }
    });
    $analyticsProvider.registerUserTimings(function (action, properties) {
      mixpanel.time_event(action);
    });
  });

}]);

})(window, window.angular);
