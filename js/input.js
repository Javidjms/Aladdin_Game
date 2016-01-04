//Recuperation des Touches en Entrée
(function() {
    var pressedKeys = {}; // Objet pressedKeys

    function setKey(event, status) { //Fonction setKey qui MAJ la valeur de pressedKeys en fonction de la touche pressé.
        var code = event.keyCode;
        var key;

        switch(code) {
        case 32:
            key = 'SPACE';
			break;
        case 38:
            key = 'UP';
			break;
        case 40:
            key = 'DOWN';
			break;
        default:
            // conversion des codes ASCII en lettres -- Cas par défaut
            key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }

    document.addEventListener('keydown', function(e) {
        setKey(e, true);
    });

    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();