namespace proj2.Services {
  export class MessageBoardService {
    private MessageResource;

    public listMessages(){
      return this.MessageResource.query();
    }

    public saveMessage(newMessage){
      return this.MessageResource.save(newMessage).$promise;
    }

    constructor($resource: ng.resource.IResourceService){
      this.MessageResource = $resource('/form');
    }
  }
  angular.module('proj2').service("messageBoardService", MessageBoardService);

    // export class MovieService {
    //     private MovieResource;
    //
    //     public listMovies() {
    //         return this.MovieResource.query();
    //     }
    //
    //     constructor($resource: ng.resource.IResourceService) {
    //         this.MovieResource = $resource('/api/movies');
    //     }
    // }
    // angular.module('proj2').service('movieService', MovieService);
    // export class MyService {
    //
    // }
    // angular.module('proj2').service('myService', MyService);
    }
