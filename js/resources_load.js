// Fonction qui  Charge les Ressources Images et déclenche un evenement lorsqu'ils sont tous chargés -- uniquement au démarrage
(function() {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    // Charge une image ou un tableau d'images
    function load(urlOrArr) {
        if(urlOrArr instanceof Array) { // test si c'est un tableau
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        }
        else {
            _load(urlOrArr);
        }
    }

    function _load(url) {  
        if(resourceCache[url]) {  //le cache des images
            return resourceCache[url];
        }
        else {
            var img = new Image();
            img.onload = function() {
                resourceCache[url] = img;
                
                if(isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };
            resourceCache[url] = false;
            img.src = url;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {
        var ready = true;
        for(var k in resourceCache) {
            if(resourceCache.hasOwnProperty(k) &&
               !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {   //rappel quand tout est chargé
        readyCallbacks.push(func);
    }

    window.resources = { 
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();