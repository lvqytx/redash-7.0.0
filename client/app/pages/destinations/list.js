import settingsMenu from '@/services/settingsMenu';
import template from './list.html';

function DestinationsCtrl($scope, $location, toastr, currentUser, Destination) {
  $scope.destinations = Destination.query();
}

export default function init(ngModule) {
  settingsMenu.add({
    permission: 'admin',
    title: '所有警报目标',
    path: 'destinations',
    order: 4,
  });

  ngModule.controller('DestinationsCtrl', DestinationsCtrl);

  return {
    '/destinations': {
      template,
      controller: 'DestinationsCtrl',
      title: '所有目标',
    },
  };
}

init.init = true;
