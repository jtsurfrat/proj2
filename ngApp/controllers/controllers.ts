namespace proj2.Controllers {

    export class HomeController {
        // public message = 'Hello from the home page!';
        // public movies;
        //
        // constructor(movieService:proj2.Services.MovieService) {
        //     this.movies = movieService.listMovies();
        // }
        public Amessage = "Hello from form";
        public messages;
        public newMessage;

        public addMessage(){
          this.messageBoardService.saveMessage(this.newMessage).then(() =>{
            this.messages.push(this.newMessage);
            this.newMessage = null;
          });
        }

        constructor(private messageBoardService: proj2.Services.MessageBoardService){
          this.messages = messageBoardService.listMessages();

    }
}

    export class MessageBoardController {
      public Amessage = "Hello from form";
      public messages;
      public newMessage;

      public addMessage(){
        this.messageBoardService.saveMessage(this.newMessage).then(() =>{
          this.messages.push(this.newMessage);
          this.newMessage = null;
        });
      }

      constructor(private messageBoardService: proj2.Services.MessageBoardService){
        this.messages = messageBoardService.listMessages();

  }
}

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
