(function()
{
  'use strict'
<!--
  angular.module('MyFirstAngularApp',[])
  .controller('MyFirstController',function($scope)
{
$scope.name="Kundan";
$scope.sayHello=function(){
  return "Hi Kundan";
};
});
-->

angular.module('NameCalculator',[])
.controller('NameCalculatorController',function($scope)
{
$scope.name = "";
$scope.lengthName = 0;
$scope.displayNumeric=function()
{
var namelength=calculateNameLength($scope.name);
$scope.lengthName = namelength;
}
});
function calculateNameLength(string)
{
  var namelength=0;
  for(var i=0;i<string.length;i++)
  namelength+=string.charCodeAt(i);
  return namelength;
};

})();
