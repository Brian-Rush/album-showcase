//Back End
function Album (artist, albumName, year, image) {
  this.artist = artist;
  this.albumName = albumName;
  this.year = year;
  this.image = image;
  this.infoArray = []
}

var library = new Object();
library.albumsArray = []


Album.prototype.getAlbumDetails = function() {
  return this.artist + this.albumName + this.year + this.image;
}
// library.prototype.getAlbumURI = function() {
//   return this.firstName + " " + this.lastName ;
// }


//Front End
function resetFields() {
  $("input[name='artist']").val("");
  $("input[name='album-name']").val("");
  $("input[name='year']").val("");
  $("input[name='image']").val("");
};


$(document).ready(function() {

  //Submit listener
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedArtist = $("input[name='artist']").val();
    var inputtedAlbumName = $("input[name='album-name']").val();
    var inputtedYear = $("input[name='year']").val();
    var inputtedImageLink = $("input[name='image']").val();
    var newAlbum = new Album(inputtedArtist, inputtedAlbumName, inputtedYear, inputtedImageLink);

    newAlbum.getAlbumDetails();
    console.log(newAlbum.getAlbumDetails());

    newAlbum.infoArray.push(inputtedArtist, inputtedAlbumName, inputtedYear, inputtedImageLink);

    console.log(newAlbum);
    // library.albumsArray.push(newAddress);

    // .push
    //$(".newArtist").each(function() {
    //
    // });
    //
    // $(".new-address, .old-address").each(function(){
    //   var addressType = $(this).find("select.address-select-box").val();
    //   var inputtedStreet = $(this).find("input.new-street").val();
    //   var inputtedCity = $(this).find("input.new-city").val();
    //   var inputtedState = $(this).find("input.new-state").val();
    //   var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, addressType);
    //   newContact.addresses.push(newAddress);

    $(".output").text(newAlbum.getAlbumDetails());
  });
});
