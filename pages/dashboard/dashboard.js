app.controller("ctrl_dashboard", ['$scope', 'svcApi', '$parse', '$http',
 function ($scope, svcApi, $parse, $http) {

    //localisation
    $scope.str_series_type = Globalize.localize("str_series_type");
    $scope.str_interval = Globalize.localize("str_interval");
    $scope.str_interval_type = Globalize.localize("str_interval_type");

    $scope.success = false;
    $scope.error = false;
    $scope.submit_button = '';

     $http.get('fetch_data.php').then(function(data){
         $scope.namesData = data.data;
         $scope.id = data.data.id;
         $scope.first_name = data.data.first_name;
         $scope.last_name = data.data.last_name;
         console.log($scope.namesData);
     });

	$scope.fetchData = function(){
		$http.get('fetch_data.php').then(function(data){
            $scope.namesData = data.data;
            console.log($scope.namesData, 'dohvati podatke');
		});
	};

     $scope.openModal = function(){
         var modal_popup = angular.element('#crudmodal');
         modal_popup.modal('show');
         console.log($scope.error, 'otpri');
     };

     $scope.closeModal = function(){
         var modal_popup = angular.element('#crudmodal');
         modal_popup.modal('hide');
         $scope.fetchData();
         console.log($scope.error,'zapri');
     };

     $scope.addData = function(){
         $scope.modalTitle = 'Add Data';
         $scope.submit_button = 'Insert';
         $scope.closeModal();
     };

     $scope.submitForm = function(){
         $http({
             method:"POST",
             url:"insert.php",
             data:{'first_name':$scope.first_name, 'last_name':$scope.last_name, 'action':$scope.submit_button, 'id':$scope.hidden_id}
             }).success(function(data){
             if(data.error !== '')
             {
                 $scope.success = false;
                 $scope.error = true;
                 $scope.errorMessage = data.error;
                 console.log($scope.error, 'ERROR');
             }
             else
             {
                 $scope.success = true;
                 $scope.error = false;
                 $scope.successMessage = data.message;
                 $scope.form_data = {};
                 console.log($scope.success, 'SUCCESS');
                 $scope.fetchData();
             }
         });
     };

     $scope.fetchSingleData = function(id){
         $http({
             method:"POST",
             url:"insert.php",
             data:{'id':id, 'action':'fetch_single_data'}
         }).success(function(data){
             $scope.first_name = data.first_name;
             $scope.last_name = data.last_name;
             $scope.hidden_id = id;
             $scope.modalTitle = 'Edit Data';
             $scope.submit_button = 'Edit';
             $scope.openModal();
         });
     };

     $scope.deleteData = function(id){
         if(confirm("Are you sure you want to remove it?"))
         {
             $http({
                 method:"POST",
                 url:"insert.php",
                 data:{'id':id, 'action':'Delete'}
             }).success(function(data){
                 $scope.success = true;
                 $scope.error = false;
                 $scope.successMessage = data.message;
                 $scope.fetchData();
             });
         }
     };

}]);


