/*globals angular */

var expandableMenu = angular.module('expandable-menu', []);
angular.module('expandable-menu').directive('expandableMenu', function () {
  'use strict';

  return {
    transclude: true,
    scope: {
      expandImg: '@',
      collapseImg: '@',
      titleTemplate: '@',
      title: '@'
    },
    template: "<div class='menu clickable' ng-click='expanded = !expanded'>" +
                "<div ng-if='titleTemplate !== undefined' class='menu-left' ng-include='titleTemplate'></div>" +
                "<div ng-if='titleTemplate === undefined' class='menu-left'>{{title}}</div>" +
                "<div class='menu-right'><img src='{{ expanded ? collapseImg : expandImg }}'/></div>" +
                "<div class='content-wrapper {{expanded ? \"show\" : \"hide\" }}'>" +
                  "<div class='content {{expanded ? \"show\" : \"hide\"}}' ng-transclude></div>" +
                "</div>" +
              "</div>"
  };
});