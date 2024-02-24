const tareas = [];

//funcion para añadir tareas
function agregarTarea() {
    return new Promise((req, res) => {
      setTimeout(() => {
        const indicator = readline.question('Indicador: ');
        const description = readline.question('Descripción: ');
        tareas.push({ indicator, description, completed: false });
        console.log('Tarea añadida.');
        req()
    }, 3000)  
    })
  
  }

  //Eliminar tareas
  function eliminarTareas() { 
    return new Promise((req, res) => {
    setTimeout(() => {
        const index = readline.question('tarea a eliminar:');
        if (index >= 0 && index <tareas.length){
            tareas.splice(index, 1);
            console.log('tarea eliminada.');
            req()
        } else {
            console.log('indice no valido.');
            res('indice no valido') 
        }
    },3000);
})
  }

  //Eliminar tareas
  function mostrarTareas(){
    console.log('lista de tareas:');
    tareas.forEach((tarea, index) => {
        console.log(${index}. [${task.completed ? 'X' : ' '}] ${task.indicator}: ${task.description});
  });
  }

  async function menu(){
    while (true){ console.log('\nOpciones:');
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Completar tarea');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');

    rl.question('Ingrese el número de la opción: ', (opcion) => {
      switch (opcion) {
        case '1':
          mostrarTareas();
          break;
        case '2':
          agregarTarea();
          break;
        case '3':
          eliminarTareas();
          break;
        case '4':
          completarTarea();
          break;
        case '5':
          rl.close();
          break;
        default:
          console.log('Opción inválida. Intente de nuevo.');
          mostrarMenu();
          break;
      }
    });
  }
}
  mostrarMenu()