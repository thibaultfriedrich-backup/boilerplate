app.controller('ChannelCtrl', function($scope, $routeParams, $mdSidenav, user, members, $http, socket){

    $scope.user = user;
    $scope.members = members;

    $scope.channel = {
        id:$routeParams.channelId
    };

    $scope.messages = [];
    /*
        {
            author: 'toto',
            text: 'Hello'
        },
        {
            author: 'titi',
            text: 'Hello'
        }
        ];*/
    $http({
        method: 'GET',
        url: '/messages/'+$scope.channel.id
    }).then(function(response){
        $scope.messages = response.data;
    });

    $scope.comment ='';

    $scope.postComment = function(){
        socket.emit('post-message', {
            channel: $scope.channel.id,
            message: $scope.comment
        });
        $scope.comment = '';
    }

    $scope.enter = function($event){
        if($event.keyCode == 13){
            $scope.postComment();
        }
    }

    $scope.toggleMenu = function(){
        $mdSidenav('left').toggle();
    };

    socket.emit('active-channel', {
        channel: $scope.channel.id,
        user: user.login
    });

    socket.on('message-posted', function(data){
        console.log(data);
        $scope.messages.push(data);
    });

});
