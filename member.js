function skillsmember () {
    return {
        restrict: 'E',
        scope: {
            skills: '='
        },
        template: '<div class="skills">' +
            '<div ng-repeat="skill in skills" class="skill">' +
            '<span class="name">{{skill.name}}</span>' +
            '<div class="level" ng-style="{width: skill.level + \'%\'}"></div>' +
            '</div>' +
            '</div>'
    };
}