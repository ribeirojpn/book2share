angular.module('booktoshare').controller('ConfigController',function($resource,$scope) {
  var User = $resource('/config');
  $scope.mensagem = {
    success:'',
    erro:''
  };

  User.get(function (user) {
    $scope.user = user;
    console.log($scope.user);
  },function (erro) {
    console.log(erro)
  })

  $scope.save = function() {
    $scope.user.$save().then(function (user) {
      $scope.user = user;
      $scope.mensagem.success = 'User updated';
      $scope.mensagem.erro = '';
    }).catch(function (erro) {
      $scope.mensagem.success = '';
      $scope.mensagem.erro = 'Update failed';
      console.log(erro);
    });
  }
});
