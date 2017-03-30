angular
  .module('king.services.woocommerceconnection')
  .factory('wcConfig', wcConfig);

  wcConfig.$inject = ['configService'];
  function wcConfig(configService) {
    var scope        = configService.services.woocommerceconnection.scope;
    console.log('[V] Configuring WooCommerceConnection service...');


    return {
      createOauth     : createOauth,
      getOauthData    : getOauthData,
      getUrl          : getUrl
    };

    oauth.getTimeStamp = function() {
      return Math.round((new Date()).getTime() / 1000.0);
    };

    oauth.getNonce = function(lenght) {
      var text     = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for( var i=0; i < lenght; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    };

    function getUrl() {
      return scope.url;
    }

    function getOauthData() {
      var oauth       = createOauth();
      var oauth_data  = { oauth_consumer_key    : oauth.consumer.key,
                          oauth_nonce           : oauth.getNonce(5),
                          oauth_signature_method: oauth.signature_method,
                          oauth_timestamp       : oauth.getTimeStamp()
                        };
      return oauth_data;
    }

    function createOauth() {
      return OAuth({
        consumer: {
            key   : scope.consumerKey,
            secret: scope.consumerSecretKey
        },
        signature_method: 'HMAC-SHA1',
        hash_function: function(base_string, key) {
            return crypto.createHmac('sha1', key).update(base_string).digest('base64');
        }
      });
    }
  }