
/**************************
 App ui Services

 loggit - Creates a logit type message for all logging

 **************************/

angular.module("app.ui.services", []).factory("loggit", [
    function() {
        var logIt;
        return toastr.options = {
            closeButton: !0,
            positionClass: "toast-top-right",
            timeOut: "3000"
        }, logIt = function(message, type) {
            return toastr[type](message);
        }, {
            log: function(message) {
                logIt(message, "info");
            },
            logWarning: function(message) {
                logIt(message, "warning");
            },
            logSuccess: function(message) {
                logIt(message, "success");
            },
            logError: function(message) {
                logIt(message, "error");
            }
        };
    }
]).factory("ArtistListingSrv",
  function($http) {

    /**************************
     Gets artists list with image url and name from the Server
     **************************/

    var ArtistListingObj = {},
      artists = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    ArtistListingObj.getArtists = function(callback){

      $http.get('dist/data/artists.json').success(function(data) {

        artists = data;

        ArtistListingObj.artists = artists;
        callback(data);

      });

    };

    return ArtistListingObj;

  }).factory("AlbumsListingSrv",
  function($http) {

    /**************************
     Gets artists list with image url and name from the Server
     **************************/

    var AlbumListingObj = {},
      albums = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    AlbumListingObj.getAlbums = function(callback){

      $http.get('dist/data/albums.json').success(function(data) {

        albums = data;

        AlbumListingObj.albums = albums;
        callback(data);

      });

    };

    return AlbumListingObj;

  })
  .factory("GenresListingSrv",
  function($http) {

    /**************************
     Gets genres list with image url and name from the Server
     **************************/

    var GenresListingObj = {},
      genres = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    GenresListingObj.getGenres = function(callback){

      $http.get('dist/data/genres.json').success(function(data) {

        genres = data;

        GenresListingObj.genres = genres;
        callback(data);

      });

    };

    return GenresListingObj;


  }).factory("ArtistSrv",
  function($http) {

    /**************************
     Gets artists with all songs from the "Server"
     **************************/

    var PlayListObj = {},
      artists = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    PlayListObj.getSongs = function(callback){

      $http.get('dist/data/artistsSongs.json').success(function(data) {

        artists = data;

        PlayListObj.artists = artists;
        callback(data);

      });

    };

    PlayListObj.getArtist = function(title,callback) {

      PlayListObj.getSongs(function(data){

        _.map(PlayListObj.artists, function(artistSongs){

          if(artistSongs.url_name == title){
            return callback(artistSongs);
          }
        });

      });

    };

    return PlayListObj;

  })
  .factory("PlayListSrv",
  function() {

    /**************************
     Saves and loads Playlists from the localStorage
     **************************/

    var PlayListObj = {},
      playlists = {
        list: []
      };

    var storage_id = "playlists_local_list";

    /**************************
     Initialize with some default values
     **************************/

    playlists.list[0] = {
      url_name: 'top-songs',
      name: 'Top Songs',
      banner: 'https://download.unsplash.com/32/6Icr9fARMmTjTHqTzK8z_DSC_0123.jpg',
      image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg',
      genre: [],
      songs: [
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/8c/Beatles_drive_my_car.ogg', displayName: 'Beatles - Drive my car' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/1/1b/Beatles_loser.ogg', displayName: 'Beatles - Loser' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/5/5a/Beatles_all_my_loving.ogg', displayName: 'Beatles - All my loving' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/82/Beatles_taxman.ogg', displayName: 'Beatles - Taxman' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/8c/Beatles_drive_my_car.ogg', displayName: 'Beatles - Drive my car' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/1/1b/Beatles_loser.ogg', displayName: 'Beatles - Loser' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/5/5a/Beatles_all_my_loving.ogg', displayName: 'Beatles - All my loving' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/82/Beatles_taxman.ogg', displayName: 'Beatles - Taxman' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/8c/Beatles_drive_my_car.ogg', displayName: 'Beatles - Drive my car' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/1/1b/Beatles_loser.ogg', displayName: 'Beatles - Loser' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/5/5a/Beatles_all_my_loving.ogg', displayName: 'Beatles - All my loving' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/82/Beatles_taxman.ogg', displayName: 'Beatles - Taxman' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/8c/Beatles_drive_my_car.ogg', displayName: 'Beatles - Drive my car' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/1/1b/Beatles_loser.ogg', displayName: 'Beatles - Loser' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/5/5a/Beatles_all_my_loving.ogg', displayName: 'Beatles - All my loving' },
        {image: 'http://art.originalvagabonds.com/system/files/imagecache/product_full/TheBeatles1-1212.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/82/Beatles_taxman.ogg', displayName: 'Beatles - Taxman' }
      ]
    };

    playlists.list[1] = {
      url_name: 'enya',
      name: 'Enya',
      banner: 'https://download.unsplash.com/32/6Icr9fARMmTjTHqTzK8z_DSC_0123.jpg',
      image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg',
      genre: ['New age','Celtic','World'],
      songs: [
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Enyalaetha.ogg', displayName: 'Enya - Laetha' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/c/ca/Enyaonlyif.ogg', displayName: 'Enya - Only if' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Enya-Trains_and_Winter_Rains.ogg', displayName: 'Enya - Trains and winter rains' }
      ]
    };

    PlayListObj.get = function (){
      return JSON.parse(localStorage.getItem(storage_id) || JSON.stringify(playlists));
    };

    PlayListObj.put = function (playlist){

      PlayListObj.playlists.push(playlist);

      return localStorage.setItem(storage_id, JSON.stringify(PlayListObj.playlistsObj));
    };

    PlayListObj.update = function (playlists){

      PlayListObj.playlists = playlists;

      return localStorage.setItem(storage_id, JSON.stringify(PlayListObj.playlistsObj));
    };

    //Replace with get from localStorage
    PlayListObj.playlistsObj = PlayListObj.get();
    //PlayListObj.playlistsObj = playlists;

    PlayListObj.playlists = PlayListObj.playlistsObj.list;

    PlayListObj.getPlaylist = function(title,callback) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.url_name == title){
          return callback(playlist);
        }
      });

    };

    PlayListObj.addSongToPlaylist = function(song,playListName) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.name == playListName){

          playlist.songs.push(song);

          PlayListObj.update(PlayListObj.playlists);
        }

      });

    };

    return PlayListObj;

  }).factory("navigationMenuService",
  function() {

    /**************************
     Provides a way to toggle the menu scope
     **************************/

    var MENU_STATES = {
      menu:true,
      playing:false
    };

    return MENU_STATES;


  }).factory("CreatePlaylistSrv",['$modal','$log','PlayListSrv',function($modal,$log,PlayListSrv) {

    /**************************
     Provides a way to create a new playlist
     **************************/

    var CreatePlayListSrvObj = {};

    CreatePlayListSrvObj.openCreateModal = function(song){

     var modalInstance = $modal.open({
       templateUrl: 'app/views/forms/create_playlist.html',
       controller: 'CreatePlaylistInstanceCtrl',
       resolve: {
         playlistName: function () {
           return '';
         },
         song: function () {
           return song;
         }
       }
     });

     modalInstance.result.then(function (response) {

       var songs = [],
         playlistName;

       if(typeof response.song != "undefined"){
         songs.push(response.song);
       }

       playlistName = response.playlistName;

       //Callback for a Okay on Save new playlist
       var url_name = playlistName.toLowerCase().replace(" ","-"),
       new_playlist = {
         url_name: url_name,
         name: playlistName,
         banner: 'https://download.unsplash.com/32/6Icr9fARMmTjTHqTzK8z_DSC_0123.jpg',
         image: 'http://www.perfume-city.com/wordpress/wp-content/uploads/2015/01/spotify.png',
         genre: [],
         songs: songs
       };

       PlayListSrv.put(new_playlist);


     }, function () {
        $log.info('Modal dismissed at: ' + new Date());
     });

     };

    return CreatePlayListSrvObj;


  }]);