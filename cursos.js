let cursosVirtuales = [
    {
        id:200070,
        nombre: 'E-Commerce',
        duracion: 40, //duracion en horas
        valor: 300000, //en pesos colombianos
    },
    {
        id:200072,
        nombre: 'Redes sociales',
        duracion: 32, //duracion en horas
        valor: 180000, //en pesos colombianos
    },
    {
        id:200074,
        nombre: 'Desarrollo de ideas Innovadoras',
        duracion: 24, //duracion en horas
        valor: 100000, //en pesos colombianos
    },
];

function mostrarCursos(curso,n) {
    setTimeout(function() {
        let presentacionCurso="El curso "+curso[n].nombre+" con identificador "+curso[n].id+ ", tiene una duración de "+curso[n].duracion+" horas y un valor de $"+curso[n].valor+" pesos.";
        console.log(presentacionCurso);
        n+=1;
        if(n<curso.length){
            mostrarCursos(curso,n);
        }
    }, 2000);
}

let n=0;
// mostrarCursos(cursosVirtuales,n);

module.exports = {
    cursosVirtuales,
    mostrarCursos
}