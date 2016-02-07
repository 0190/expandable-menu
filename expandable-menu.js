/*globals angular */

angular.module('expendable-menu').directive('expandableMenu', function () {
  'use strict';

  return {
    transclude: true,
    scope: {
      expandImg: '@',
      collapseImg: '@',
      title: '@'
    },
    template: "<div class='menu clickable' ng-click='expanded = !expanded'>" +
                "<div class='menu-left'>{{title}}</div>" +
                "<div class='menu-right'><img src='{{ expanded ? collapseImg : expandImg }}'/></div>" +
                "<div class='content-wrapper {{expanded ? \"show\" : \"hide\" }}'>" +
                  "<div class='content {{expanded ? \"show\" : \"hide\"}}' ng-transclude></div>" +
                "</div>" +
              "</div>"
  };
});