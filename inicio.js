const {cursosVirtuales,mostrarCursos} = require('./cursos');
const fs = require('fs');
const opciones={
    id_curso:{
        demand:true,
        alias:'i'
    },
    nombre_interesado:{
        demand:true,
        alias:'n'
    },
    cedula:{
        demand:true,
        alias:'c'
    }
}
const argv = require('yargs')
            .command('inscribir','realizar incripcion a curso',opciones)
            .argv


/**Functions */
let buscarCurso = (id,cursosVirtuales)=>{
    return cursosVirtuales.find( cursosVirtuales => cursosVirtuales.id == id)
}
let inscribirUsuario = (curso,usuario)=>{
    texto='El usuario '+argv.nombre_interesado+' con cédula '+argv.cedula+' ha sido inscrito al curso '+curso.nombre+' con id '+curso.id+', el cual tiene una duración de '+curso.duracion+' horas y un valor de $'+curso.valor;
    fs.writeFile('inscripciones.txt',texto,(error)=>{
        if(error)throw(error)
        console.log('El usuario ha quedado inscrito al curso!');
    })
    // console.log(texto);
}
if(!argv.id_curso){
    mostrarCursos(cursosVirtuales,n=0);
}else{
    let curso=buscarCurso(argv.id_curso,cursosVirtuales);
    if(curso){
        inscribirUsuario(curso,argv);
    }else{
        console.log('El curso indicado no ha sido encontrado, por favor revise la lista de cursos a continuacion:');
        mostrarCursos(cursosVirtuales,n=0);
    }
}
