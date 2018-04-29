//Shutter

var onShutter = document.getElementById('onShutter')
var offShutter = document.getElementById('offShutter')
var Shutter = document.getElementById('Shutter')

onShutter.onclick = function () {
    var shutter = document.getElementById('shutter')
    shutter.className = 'shutter-on'
}

offShutter.onclick = function () {
    var shutter = document.getElementById('shutter')
    shutter.className = 'shutter-off'
}
