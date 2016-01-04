
(function() {

	// Fonction Sprite
    function Sprite(url, pos, size, speed, frames, once) {
        this.pos = pos;	//position x et y
        this.size = size; //taille de l'image (width/height)
        this.speed = typeof speed === 'number' ? speed : 0; //vitesse de l'animation
        this.frames = frames; //frames en tableau
        this._index = 0; // var à incrementer
        this.url = url; // lien de l'image
        this.once = once; //une seule animation seulement
    };
	//Méthode Update et Render
    Sprite.prototype = {
        update: function(dt) {
            this._index += this.speed*dt;   //incrémente avec la vitesse
        },

        render: function(ctx) {
            var frame;

            if(this.speed > 0) {
                var max = this.frames.length;
                var idx = Math.floor(this._index);
                frame = this.frames[idx % max];

                if(this.once && idx >= max) {
                    this.done = true;
                    return;
                }
            }
            else {
                frame = 0;
            }


            var x = this.pos[0];
            var y = this.pos[1];

				x += frame * this.size[0];		//incrémente la position x de la frame
				

            ctx.drawImage(resources.get(this.url),     //dessine sur le contexte du canvas
                          x, y,
                          this.size[0], this.size[1],
                          0, 0,
                          this.size[0], this.size[1]);
        }
    };

    window.Sprite = Sprite;
})();