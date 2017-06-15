//Back End
function Album (artist, albumName, year, imageLink) {
  this.artist = artist;
  this.albumName = albumName;
  this.year = year;
  this.imageLink = imageLink;
  this.infoArray = []
}

// function Link (imageLink) {
//   this.imageLink = imageLink;
//   this.imageArray = []
// }

var library = new Object();

library.albumsArray = [];

var linkLibrary = new Object();
linkLibrary.imageLinkArray = [];


Album.prototype.getAlbumDetails = function() {
  return this.artist + this.albumName + this.year + this.imageLink;
}

// library.prototype.getImageLinks = function() {
//   var imageLinkArray = [];
//   for(var i=0; i < library.albumsArray.length + 1; i++) {
//     imageLinkArray.push(this.newAlbum.imageLink);
//     return imageLinkArray;
//   }
// }

// library.prototype.getAlbumURI = function() {
//   return this.firstName + " " + this.lastName ;
// }


//FRONT END
function resetFields() {
  $("input[name='artist']").val("");
  $("input[name='album-name']").val("");
  $("input[name='year']").val("");
  $("input[name='image-link']").val("");
};


$(document).ready(function() {

  //Submit listener
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedArtist = $("input[name='artist']").val();
    var inputtedAlbumName = $("input[name='album-name']").val();
    var inputtedYear = $("input[name='year']").val();
    var inputtedImageLink = $("input[name='image-link']").val();
    var newAlbum = new Album(inputtedArtist, inputtedAlbumName, inputtedYear, inputtedImageLink);

    newAlbum.getAlbumDetails();
    console.log(newAlbum.getAlbumDetails());

    newAlbum.infoArray.push(inputtedArtist, inputtedAlbumName, inputtedYear, inputtedImageLink);

    console.log(newAlbum);
    library.albumsArray.push(newAlbum);
    linkLibrary.imageLinkArray.push(inputtedImageLink);

    console.log(library);
    // library.getImageLinks();

    // $(".d-block").attr("src", inputtedImageLink);
    // $(".carousel-item").append('<div class="carousel-item">' +
    //             '<img class="d-block img-fluid" src="' + inputtedImageLink + '" alt="">' +
    //           '</div>'
    //         );

    // for(var i=0; i < library.albumsArray.length; i++) {
      var lastLinkAdded = linkLibrary.imageLinkArray.slice(-1);
      $('<div class="carousel-item"><img src="' + lastLinkAdded + '"></div>').appendTo(".carousel-inner");
    // };

    //DOESN'T WORK
    // library.albumsArray[i]
    // works
    // library.albumsArray[i].imageLink

    // $(".output").text(library.albumsArray);
  });
});
