(function () {
    var app = angular.module('caseCtrl', ['ui.router']);
    
    app.controller('caseCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
        $scope.slug = $stateParams.slug;
        
        $scope.cases = [
            {
                title: "Case 1",
                image: "/img/Frontpage.jpg",
                description: "Cras congue, felis sed mollis pulvinar, libero justo semper elit, id consectetur erat libero id magna. Mauris eleifend efficitur magna sit amet malesuada. Mauris quam erat, aliquam et tristique et, ornare quis erat. Integer venenatis, enim laoreet aliquam porta, odio turpis ultricies mauris, non tempor justo ipsum rutrum nisi. Nulla venenatis lacus sem, et ullamcorper arcu fermentum id. Phasellus sed pellentesque purus. Etiam tempus odio ac urna porta dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam luctus lacus in turpis consectetur convallis. Donec finibus lectus interdum nibh euismod, quis porttitor nisi tristique. Pellentesque rhoncus hendrerit dolor nec auctor. Sed augue est, finibus at rhoncus ut, sagittis sed nisl. Aliquam a ante vel neque euismod venenatis.",
                link: "http://google.com",
                slug: "case-1"
            },
            {
                title: "Case 2",
                image: "http://www.newemage.com/wp-content/uploads/2015/08/web_design_el_paso.png",
                description: "Cras congue, felis sed mollis pulvinar, libero justo semper elit, id consectetur erat libero id magna. Mauris eleifend efficitur magna sit amet malesuada. Mauris quam erat, aliquam et tristique et, ornare quis erat. Integer venenatis, enim laoreet aliquam porta, odio turpis ultricies mauris, non tempor justo ipsum rutrum nisi. Nulla venenatis lacus sem, et ullamcorper arcu fermentum id. Phasellus sed pellentesque purus. Etiam tempus odio ac urna porta dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam luctus lacus in turpis consectetur convallis. Donec finibus lectus interdum nibh euismod, quis porttitor nisi tristique. Pellentesque rhoncus hendrerit dolor nec auctor. Sed augue est, finibus at rhoncus ut, sagittis sed nisl. Aliquam a ante vel neque euismod venenatis.",
                link: "http://compose.io",
                slug: "case-2"
            }
        ];
        
        if ($scope.slug === 'case-1') {
            $scope.currentCase = $scope.cases[0];
        } else if ($scope.slug === 'case-2') {
            $scope.currentCase = $scope.cases[1];
        }
    }]);
})();