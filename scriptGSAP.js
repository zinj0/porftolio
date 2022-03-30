// HOVER PROJETOS


let descanso = document.getElementById('telaDescanso')
let vPortfolio = document.getElementById('vPortfolio')
let vInsp = document.getElementById('vToInsp')
let vGaleria = document.getElementById('vGaleria')
let vMoscas = document.getElementById('vMoscas')
let vAna = document.getElementById('vAna')
let aberto = document.getElementsByClassName('aberto')
let fechado = document.getElementsByClassName('fechado')
let content = document.getElementsByClassName('.barra::before')
let vCuadrado = document.getElementById('vCuadrado')
let vNinfo = document.getElementById('vNinfo')
let vDeliver = document.getElementById('vDeliver')

gsap.set(('.fechado'), { xPercent: 20, yPercent: 20, opacity: 0 })

// HOVER INSPIRE IN
function toIn() {
    gsap.to(aberto, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(vInsp, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(aberto, { xPercent: 20, yPercent: 20, delay: 0.3 })

    vInsp.classList.add('aberto');
    vInsp.classList.remove('fechado');
    aberto.classList.add('fechado');
    aberto.classList.remove('aberto');
}

// HOVER INSPIRE OUT
function toOut() {
    gsap.to(vInsp, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(descanso, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0}, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(vInsp, { xPercent: 20, yPercent: 20, delay: 0.3 })

    descanso.classList.add('aberto');
    descanso.classList.remove('fechado');
    vInsp.classList.add('fechado');
    vInsp.classList.remove('aberto');
}

// HOVER GALERIA IN
function gIn() {
    gsap.to(aberto, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(vGaleria, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(aberto, { xPercent: 20, yPercent: 20, delay: 0.3 })

    vGaleria.classList.add('aberto');
    vGaleria.classList.remove('fechado');
    aberto.classList.add('fechado');
    aberto.classList.remove('aberto');
}

// HOVER GALERIA OUT
function gOut() {
    gsap.to(vGaleria, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(descanso, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(vGaleria, { xPercent: 20, yPercent: 20, delay: 0.3 })

    descanso.classList.add('aberto');
    descanso.classList.remove('fechado');
    vGaleria.classList.add('fechado');
    vGaleria.classList.remove('aberto');
}

// HOVER ANA IN
function anIn() {
    gsap.to(aberto, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(vAna, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(aberto, { xPercent: 20, yPercent: 20, delay: 0.3 })

    vAna.classList.add('aberto');
    vAna.classList.remove('fechado');
    aberto.classList.add('fechado');
    aberto.classList.remove('aberto');
}

// HOVER ANA OUT
function anOut() {
    gsap.to(vAna, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(descanso, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(vAna, { xPercent: 20, yPercent: 20, delay: 0.3 })

    descanso.classList.add('aberto');
    descanso.classList.remove('fechado');
    vAna.classList.add('fechado');
    vAna.classList.remove('aberto');
}

// HOVER NECRO IN
function neIn() {
    gsap.to(aberto, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(vNecro, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(aberto, { xPercent: 20, yPercent: 20, delay: 0.3 })

    vNecro.classList.add('aberto');
    vNecro.classList.remove('fechado');
    aberto.classList.add('fechado');
    aberto.classList.remove('aberto');
}

// HOVER NECRO OUT
function neOut() {
    gsap.to(vNecro, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(descanso, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(vNecro, { xPercent: 20, yPercent: 20, delay: 0.3 })

    descanso.classList.add('aberto');
    descanso.classList.remove('fechado');
    vNecro.classList.add('fechado');
    vNecro.classList.remove('aberto');
}

// HOVER MOSCAS IN
function mIn() {
    gsap.to(aberto, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(vMoscas, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(aberto, { xPercent: 20, yPercent: 20, delay: 0.3 })

    vMoscas.classList.add('aberto');
    vMoscas.classList.remove('fechado');
    aberto.classList.add('fechado');
    aberto.classList.remove('aberto');
}

// HOVER MOSCAS OUT
function mOut() {
    gsap.to(vMoscas, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(descanso, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(vMoscas, { xPercent: 20, yPercent: 20, delay: 0.3 })

    descanso.classList.add('aberto');
    descanso.classList.remove('fechado');
    vMoscas.classList.add('fechado');
    vMoscas.classList.remove('aberto');
}

// HOVER SD IN
function sdIn() {
    gsap.to(aberto, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(vSoundlights, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(aberto, { xPercent: 20, yPercent: 20, delay: 0.3 })

    vSoundlights.classList.add('aberto');
    vSoundlights.classList.remove('fechado');
    aberto.classList.add('fechado');
    aberto.classList.remove('aberto');
}

// HOVER SD OUT
function sdOut() {
    gsap.to(vSoundlights, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(descanso, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(vSoundlights, { xPercent: 20, yPercent: 20, delay: 0.3 })

    descanso.classList.add('aberto');
    descanso.classList.remove('fechado');
    vSoundlights.classList.add('fechado');
    vSoundlights.classList.remove('aberto');
}

// HOVER CUADRADO IN
function cuIn() {
    gsap.to(aberto, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(vCuadrado, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(aberto, { xPercent: 20, yPercent: 20, delay: 0.3 })

    vCuadrado.classList.add('aberto');
    vCuadrado.classList.remove('fechado');
    aberto.classList.add('fechado');
    aberto.classList.remove('aberto');
}

// HOVER CUADRADO OUT
function cuOut() {
    gsap.to(vCuadrado, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(descanso, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(vCuadrado, { xPercent: 20, yPercent: 20, delay: 0.3 })

    descanso.classList.add('aberto');
    descanso.classList.remove('fechado');
    vCuadrado.classList.add('fechado');
    vCuadrado.classList.remove('aberto');
}

// HOVER NINFO IN
function ninIn() {
    gsap.to(aberto, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(vNinfo, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(aberto, { xPercent: 20, yPercent: 20, delay: 0.3 })

    vNinfo.classList.add('aberto');
    vNinfo.classList.remove('fechado');
    aberto.classList.add('fechado');
    aberto.classList.remove('aberto');
}

// HOVER NINFO OUT
function ninOut() {
    gsap.to(vNinfo, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(descanso, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(vNinfo, { xPercent: 20, yPercent: 20, delay: 0.3 })

    descanso.classList.add('aberto');
    descanso.classList.remove('fechado');
    vNinfo.classList.add('fechado');
    vNinfo.classList.remove('aberto');
}

// HOVER DELIVER IN
function ditIn() {
    gsap.to(aberto, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(vDeliver, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(aberto, { xPercent: 20, yPercent: 20, delay: 0.3 })

    vDeliver.classList.add('aberto');
    vDeliver.classList.remove('fechado');
    aberto.classList.add('fechado');
    aberto.classList.remove('aberto');
}

// HOVER DELIVER OUT
function ditOut() {
    gsap.to(vDeliver, { duration: 0.3, xPercent: -20, yPercent: -20, opacity: 0 })
    gsap.fromTo(descanso, { duration: 0.3, xPercent: 60, yPercent: 60, opacity: 0 }, { duration: 0.3, xPercent: 0, yPercent: 0, opacity: 1 })
    gsap.set(vDeliver, { xPercent: 20, yPercent: 20, delay: 0.3 })

    descanso.classList.add('aberto');
    descanso.classList.remove('fechado');
    vDeliver.classList.add('fechado');
    vDeliver.classList.remove('aberto');
}

