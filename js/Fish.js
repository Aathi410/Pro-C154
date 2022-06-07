AFRAME.registerComponent("fish", {
    init:function(){
        for(var i = 1; i <= 10; i ++){
            const id = `fish${i}`

            const posX = Math.round() * 100 + -50
            const posY = Math.round() * 5 + 5
            const posZ = Math.round() * 60 + -40
            
            const position = { x : posX, y : posY, z : posZ }
            this.createFish(id, position)
        }
    },

    createFish:function(id, position){
        const fishEntity = document.querySelector("#fish_model")
        
        var fishEl = document.createElement("a-entity")

        fishEl.setAttribute("id", id)
        fishEl.setAttribute("position", position)

        fishEl.setAttribute("rotation", { x : 0, y : 180, z :0})
        fishEl.setAttribute("scale", { x : 0.3, y : 0.3, z : 0.3})
        
        fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf")

        fishEl.setAttribute("animation-mixer", {})

        fishEntity.appendChild(fishEl)
    }
})