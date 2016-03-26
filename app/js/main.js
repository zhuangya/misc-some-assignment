'use strict';

var cruiseApp = angular.module('cruiseApp', []);

cruiseApp.controller('MainCtrl', function ($scope) {
  //TODO: sync data in localStorage?
  $scope.agents = [
  {
    domain: 'bjstdmngbgr01.thoughtworks.com',
    ip: '10.0.1.7',
    status: 'idle',
    binary: '/var/lib/cruise-agent',
    avatar: 'http://filldunphy.com/64/64',
    resources: ['ubuntu', 'firefox', 'Google Chrome', 'vim']
  },
  {
    domain: 'bjstdmngbgr02.thoughtworks.com',
    ip: '10.0.1.8',
    status: 'processing',
    binary: '/var/lib/cruise-agent',
    avatar: 'http://filldunphy.com/64/64',
    resources: ['ubuntu', 'emacs']
  },

  {
    domain: 'bjstdmngbgr03.thoughtworks.com',
    ip: '10.0.1.9',
    status: 'idle',
    binary: '/var/lib/cruise-agent',
    avatar: 'http://filldunphy.com/64/64',
    resources: ['fedora', 'emacs']
  },

  {
    domain: 'bjstdmngbgr04.thoughtworks.com',
    ip: '10.0.1.10',
    status: 'processing',
    binary: '/var/lib/cruise-agent',
    avatar: 'http://filldunphy.com/64/64',
    resources: ['OS X', 'Parallel']
  },

  ];
});

cruiseApp.directive('agentDetail', function () {
  return {
    restrict: 'E',
    scope: { agent: '=' },
    templateUrl: 'template/agent-detail.html',
    controller: function ($scope) {
      $scope.appending = false;

      $scope.showAppendBox = function (event) {
        $scope.popupPosition = {
          'left': (+event.target.offsetLeft) + 'px',
          'top': (+event.target.offsetTop + 36) + 'px',
        };
        $scope.appending = true;
      };
      $scope.removeResource = function (index) {
        $scope.agent.resources.splice(index, 1);
      };

      $scope.appendResources = function (wat) {
        $scope.agent.resources = $scope.agent.resources.concat(wat.split(','));

        $scope.resources = '';
        $scope.appending = false;
      };
    },
  };
});

cruiseApp.filter('shorty', function () {
  return function (text, length) {
    length = length || 10;
    if (text.length > length) {
      return text.slice(0, length) + '...';
    }

    return text;
  };
});
