//Back End
function Album (artist, albumName, year, image) {
  this.artist = artist;
  this.albumName = album;
  this.year = year;
  this.image = image;
  this.albumArray = []
}


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

    var inputtedArtist = $("input['name=artist']").val();
    var inputtedAlbumName = $("input['name=album-name']").val();
    var inputtedYear = $("input['name=year']").val();
    var inputtedImageLink = $("input['name=image']").val();
    var newAlbum = new Album(inputtedArtist, inputtedAlbumName, inputtedYear, inputtedImageLink);

    $(".new-address, .old-address").each(function(){
      var addressType = $(this).find("select.address-select-box").val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, addressType);
      newContact.addresses.push(newAddress);
    });

});
