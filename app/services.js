
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
  function() {

    /**************************
     Gets artists list with image url and name from the Server
     **************************/

    var ArtistListingObj = {},
      artists = [];

    /**************************
     Initialize with some default values
     **************************/

    artists[0] = {
      url_name: 'beatles',
      name: 'Jason Derulo',
      image: 'http://www.jasonderulo.com/sites/g/files/g2000001586/f/efc9a25503ee7750f48dca03156a5daf.jpg',
      genre: ['Pop','Rock','Folk']
    };

    artists[1] = {
      url_name: 'enya',
      name: 'John Legend',
      image: 'http://www.songstraducidas.com/imgs-bands/2/johnlegend-1426722418.jpg',
      genre: ['New age','Celtic','World']
    };

    artists[2] = {
      url_name: 'beatles',
      name: 'Aloe Black',
      image: 'http://ultimatechart.com/system/artists/Aloe_Blacc.jpg',
      genre: ['Rock','Jazz','World']
    };

    artists[3] = {
      url_name: 'beatles',
      name: 'Pharel Williams',
      image: 'http://s2.vagalume.com/pharrell-williams/images/g32296.jpg',
      genre: ['Rock','Electro','Metal']
    };

    artists[4] = {
      url_name: 'beatles',
      name: 'Keane',
      image: 'http://api.ning.com/files/VzwktO3ipL2xtjLzQ3A7X-GmcTyOvO7iXPDf6NwWOEfqOJtPHIzqAlw9FIlmTZxGBpE1yTwrvGeorOHhG42i17VV1B1zMLvW/Keane_400.jpg',
      genre: ['Jazz','Chill','Groove']
    };

    artists[5] = {
      url_name: 'beatles',
      name: 'Wativ',
      image: 'http://www.edgee.net/wp-content/uploads/2014/05/WATIV.jpg',
      genre: ['Classic','Piano','Orchestra']
    };

    artists[6] = {
      url_name: 'beatles',
      name: 'Pink floyd',
      image: 'https://homeofretro.s3.amazonaws.com/wp-content/uploads/2014/02/pink-floyd-blog-1.jpg',
      genre: ['Rock','Electro','Metal']
    };

    artists[7] = {
      url_name: 'beatles',
      name: 'Monty are I',
      image: 'http://static.underthegunreview.net/uploads/2012/07/Monty-Are-I-Break-Through-The-Silence.jpeg',
      genre: ['Rock','Electro','Metal']
    };

    artists[8] = {
      url_name: 'beatles',
      name: 'Rolling stones',
      image: 'http://www.turntablekitchen.com/_uploads/The+Rolling+Stones+Rolling+Stones+92.jpg',
      genre: ['Rock','Electro','Metal']
    };

    artists[9] = {
      url_name: 'beatles',
      name: 'Mark Ronson',
      image: 'http://514blog.com/media/2013/10/Mark+Ronson++8.png',
      genre: ['Rock','Electro','Metal']
    };

    artists[10] = {
      url_name: 'beatles',
      name: 'Led Zeppelin',
      image: 'http://3.bp.blogspot.com/-8sDCZVQs57o/T71nebP_LDI/AAAAAAAAEMw/Nzxev4_eFuY/s400/HG_Zepplin-002.jpg',
      genre: ['Rock','Heavy','Metal']
    };

    artists[11] = {
      url_name: 'beatles',
      name: 'Lecrea Gravity',
      image: 'https://m1.behance.net/rendition/modules/47396721/disp/3ad9e846be7008f7ddee82b00f65e151.jpg',
      genre: ['Rock','Heavy','Metal']
    };

    ArtistListingObj.artists = artists;

    return ArtistListingObj;

  }).factory("AlbumsListingSrv",
  function() {

    /**************************
     Gets artists list with image url and name from the Server
     **************************/

    var AlbumListingObj = {},
      albums = [];

    /**************************
     Initialize with some default values
     **************************/

    albums[0] = {
      url_name: 'beatles',
      artist: 'Jason Derulo',
      name: 'Tattoos',
      image: 'http://static.gigwise.com/gallery/5209864_8262181_JasonDeruloTatGall.jpg',
      genre: ['Pop','Rock','Folk']
    };

    albums[1] = {
      url_name: 'enya',
      artist: 'John Legend',
      name: 'All of me',
      image: 'http://www.thetropicalsoda.net/wp-content/uploads/2014/01/1528716_449499365151831_626947604_n.jpg',
      genre: ['New age','Celtic','World']
    };

    albums[2] = {
      url_name: 'beatles',
      artist: 'Aloe Black',
      name: 'Lift your spirit',
      image: 'http://www.hollywoodreporter.com/sites/default/files/imagecache/news_portrait/2014/03/aloe_blacc_lift_your_spirit.jpg',
      genre: ['Rock','Jazz','World']
    };

    albums[3] = {
      url_name: 'beatles',
      artist: 'Pharel Williams',
      name: 'Girl',
      image: 'http://www.highlandernews.org/wp-content/uploads/2014/03/radar.pharrell-williams-girl-album-artwork.jpg',
      genre: ['Rock','Electro','Metal']
    };

    albums[4] = {
      url_name: 'beatles',
      artist: 'Keane',
      name: 'Under the iron sea',
      image: 'http://vidordesigns.com/wp-content/uploads/six-revisions.jpg',
      genre: ['Jazz','Chill','Groove']
    };

    albums[5] = {
      url_name: 'beatles',
      artist: 'Wativ',
      name: 'Wativ',
      image: 'http://www.edgee.net/wp-content/uploads/2014/05/WATIV.jpg',
      genre: ['Classic','Piano','Orchestra']
    };

    albums[6] = {
      url_name: 'beatles',
      artist: 'Pink floyd',
      name: 'Division Bell',
      image: 'http://trendland.com/wp-content/uploads/2012/01/storm-thorgerson-album-cover-art-3-600x600.jpg',
      genre: ['Rock','Electro','Metal']
    };

    albums[7] = {
      url_name: 'beatles',
      artist: 'Monty are I',
      name: 'Break through the silence',
      image: 'https://s-media-cache-ak0.pinimg.com/736x/30/f6/ce/30f6ce3c0bacc8547a7862d3080f964c.jpg',
      genre: ['Rock','Electro','Metal']
    };

    albums[8] = {
      url_name: 'beatles',
      artist: 'Rolling stones',
      name: 'Forty Licks',
      image: 'http://www.smashingmagazine.com/images/music-cd-covers/37.jpg',
      genre: ['Rock','Electro','Metal']
    };

    albums[9] = {
      url_name: 'beatles',
      artist: 'Mark Ronson',
      name: 'The Business Intl',
      image: 'http://flowtv.org/wp-content/uploads/2010/11/mark_ronson-Record-Collection1-500x5001.png',
      genre: ['Rock','Electro','Metal']
    };

    albums[10] = {
      url_name: 'beatles',
      artist: 'Led Zeppelin',
      name: 'Celebration Day',
      image: 'http://blog.albumartexchange.com/wp-content/uploads/2012/11/ledzep-celebr_081.jpg',
      genre: ['Rock','Heavy','Metal']
    };

    albums[11] = {
      url_name: 'beatles',
      artist: 'Lecrea Gravity',
      name: 'Gravity',
      image: 'http://blog.albumartexchange.com/wp-content/uploads/2012/09/lecrae-gravit_042.jpg',
      genre: ['Rock','Heavy','Metal']
    };

    AlbumListingObj.albums = albums;

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
     Initialize with some default values
     **************************/

    /*genres[0] = {
      url_name: 'beatles',
      name: 'Mood',
      icon: 'musicicon-acoustic4',
      image : 'https://ununsplash.imgix.net/photo-1418225043143-90858d2301b4?fit=crop&fm=jpg&h=700&q=75&w=1050'
    };

    genres[1] = {
      url_name: 'beatles',
      name: 'Country',
      icon: 'musicicon-cornet3',
      image : 'https://download.unsplash.com/photo-1414912925664-0c502cc25dde'
    };

    genres[2] = {
      url_name: 'beatles',
      name: 'House',
      icon: 'musicicon-dj4',
      image : 'https://download.unsplash.com/photo-1425136738262-212551713a58'
    };

    genres[3] = {
      url_name: 'beatles',
      name: 'Jazz',
      icon: 'musicicon-saxophone8',
      image : 'https://download.unsplash.com/photo-1426200830301-372615e4ac54'
    };

    genres[4] = {
      url_name: 'beatles',
      name: 'Groovy',
      icon: 'musicicon-bass4',
      image : 'https://download.unsplash.com/photo-1417128281290-30a42da46277'
    };

    genres[5] = {
      url_name: 'beatles',
      name: 'Classic',
      icon: 'musicicon-music201',
      image : 'https://download.unsplash.com/photo-1414788020357-3690cfdab669'
    };

    genres[6] = {
      url_name: 'beatles',
      name: 'Zone',
      icon: 'musicicon-loudspeaker8',
      image : 'https://download.unsplash.com/uploads/14134890947503c6effdc/72adf455'
    };

    genres[7] = {
      url_name: 'beatles',
      name: 'Radio',
      icon: 'musicicon-radio43',
      image : 'https://download.unsplash.com/photo-1419332563740-42322047ff09'
    };

    genres[8] = {
      url_name: 'beatles',
      name: 'Percussion',
      icon: 'musicicon-cymbals2',
      image : 'https://download.unsplash.com/reserve/NxxLccbqQdGtNc7xJ43e_ancestral-home.jpg'
    };

    genres[9] = {
      url_name: 'beatles',
      name: 'Citadin',
      icon: 'musicicon-music200',
      image : 'https://download.unsplash.com/photo-1415302199888-384f752645d0'
    };

    GenresListingObj.genres = genres;

    console.log(genres);*/

    GenresListingObj.getGenres = function(callback){

      $http.get('dist/data/genres.json').success(function(data) {

        genres = data;

        GenresListingObj.genres = genres;
        callback(data);

      });

    };

    return GenresListingObj;


  }).factory("ArtistSrv",
  function() {

    /**************************
     Gets artists with all songs from the "Server"
     **************************/

    var PlayListObj = {},
      artists = [];

    /**************************
     Initialize with some default values
     **************************/

    artists[0] = {
      url_name: 'beatles',
      name: 'Beatles',
      banner: 'https://download.unsplash.com/reserve/wPCyys8TPCHY3GXm2N2D_ssp_inthewoods_1.jpg',
      image: 'https://download.unsplash.com/41/yEWFnFQRqfmY9l9efJ6g_Snap01-web.jpg',
      genre: ['Pop','Rock','Folk'],
      songs: [
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/8c/Beatles_drive_my_car.ogg', displayName: 'Beatles - Drive my car' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/1/1b/Beatles_loser.ogg', displayName: 'Beatles - Loser' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/5/5a/Beatles_all_my_loving.ogg', displayName: 'Beatles - All my loving' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/82/Beatles_taxman.ogg', displayName: 'Beatles - Taxman' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/8c/Beatles_drive_my_car.ogg', displayName: 'Beatles - Drive my car' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/1/1b/Beatles_loser.ogg', displayName: 'Beatles - Loser' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/5/5a/Beatles_all_my_loving.ogg', displayName: 'Beatles - All my loving' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/82/Beatles_taxman.ogg', displayName: 'Beatles - Taxman' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/8c/Beatles_drive_my_car.ogg', displayName: 'Beatles - Drive my car' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/1/1b/Beatles_loser.ogg', displayName: 'Beatles - Loser' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/5/5a/Beatles_all_my_loving.ogg', displayName: 'Beatles - All my loving' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/82/Beatles_taxman.ogg', displayName: 'Beatles - Taxman' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/8c/Beatles_drive_my_car.ogg', displayName: 'Beatles - Drive my car' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/1/1b/Beatles_loser.ogg', displayName: 'Beatles - Loser' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/5/5a/Beatles_all_my_loving.ogg', displayName: 'Beatles - All my loving' },
        {image: 'http://assets.rollingstone.com/assets/images/artists/the-beatles.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/8/82/Beatles_taxman.ogg', displayName: 'Beatles - Taxman' }
      ]
    };

    artists[1] = {
      url_name: 'enya',
      name: 'Enya',
      banner: 'https://download.unsplash.com/44/lSed5VXIQnOw7PMfB9ht_IMG_1642.jpg',
      image: 'https://download.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg',
      genre: ['New age','Celtic','World'],
      songs: [
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Enyalaetha.ogg', displayName: 'Enya - Laetha' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/c/ca/Enyaonlyif.ogg', displayName: 'Enya - Only if' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Enya-Trains_and_Winter_Rains.ogg', displayName: 'Enya - Trains and winter rains' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Enyalaetha.ogg', displayName: 'Enya - Laetha' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/c/ca/Enyaonlyif.ogg', displayName: 'Enya - Only if' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Enya-Trains_and_Winter_Rains.ogg', displayName: 'Enya - Trains and winter rains' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Enyalaetha.ogg', displayName: 'Enya - Laetha' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/c/ca/Enyaonlyif.ogg', displayName: 'Enya - Only if' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Enya-Trains_and_Winter_Rains.ogg', displayName: 'Enya - Trains and winter rains' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Enyalaetha.ogg', displayName: 'Enya - Laetha' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/c/ca/Enyaonlyif.ogg', displayName: 'Enya - Only if' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Enya-Trains_and_Winter_Rains.ogg', displayName: 'Enya - Trains and winter rains' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Enyalaetha.ogg', displayName: 'Enya - Laetha' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/c/ca/Enyaonlyif.ogg', displayName: 'Enya - Only if' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Enya-Trains_and_Winter_Rains.ogg', displayName: 'Enya - Trains and winter rains' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Enyalaetha.ogg', displayName: 'Enya - Laetha' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/c/ca/Enyaonlyif.ogg', displayName: 'Enya - Only if' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Enya-Trains_and_Winter_Rains.ogg', displayName: 'Enya - Trains and winter rains' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Enyalaetha.ogg', displayName: 'Enya - Laetha' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/c/ca/Enyaonlyif.ogg', displayName: 'Enya - Only if' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Enya-Trains_and_Winter_Rains.ogg', displayName: 'Enya - Trains and winter rains' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Enyalaetha.ogg', displayName: 'Enya - Laetha' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/c/ca/Enyaonlyif.ogg', displayName: 'Enya - Only if' },
        {image: 'http://upload.wikimedia.org/wikipedia/en/4/4b/Enya4.jpg', url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Enya-Trains_and_Winter_Rains.ogg', displayName: 'Enya - Trains and winter rains' }
      ]
    };

    PlayListObj.artists = artists;

    PlayListObj.getArtist = function(title,callback) {

      _.map(artists, function(playlist){

        if(playlist.url_name == title){
          return callback(playlist);
        }
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