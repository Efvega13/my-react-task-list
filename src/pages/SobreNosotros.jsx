function SobreNosotros(){
    return (
        <div>
            <p>Mi aplicación es una lista de tareas llamada "My React Task List" desarrollada utilizando tecnologías
               modernas de desarrollo web. A continuación, proporciono una descripción detallada de sus funcionalidades 
               y las tecnologías utilizadas en su desarrollo:</p>

            <h1>Descripción de la Aplicación:</h1>

            <h2>Gestión de Tareas:</h2> 
            <p>Los usuarios pueden agregar, editar, marcar como completadas y eliminar tareas de la lista.</p>

            <h2>Validación de Tareas:</h2> 
            <p>La aplicación valida que el nombre de una tarea tenga al menos 3 caracteres antes de permitir su creación.</p>

            <h2>Descripción Opcional:</h2>
            <p>Los usuarios pueden agregar una descripción opcional para cada tarea.</p>

            <h2>Contador de Tareas Pendientes:</h2> 
            <p>La aplicación muestra un contador en tiempo real de las tareas pendientes.</p>

            <h2>Limpieza de Tareas Completadas: </h2>
            <p>Los usuarios pueden eliminar todas las tareas completadas con un solo clic.</p>

            <h2>Interfaz de Usuario Intuitiva:</h2> 
            <p>La interfaz de usuario es fácil de usar y muestra las tareas de forma organizada con opciones de edición 
                y eliminación.</p>

            <h1>Tecnologías Utilizadas:</h1>

            <h2>React:</h2> 
            <p>La aplicación está construida utilizando React, una popular biblioteca de JavaScript para la construcción
               de interfaces de usuario.</p>

            <h2>React Router:</h2> 
            <p>Se utiliza React Router para gestionar las rutas y la navegación en la aplicación, permitiendo la creación
               de rutas dinámicas para diferentes vistas.</p>

            <h2>LocalStorage: </h2>
            <p>Se utiliza localStorage para almacenar las tareas localmente en el navegador del usuario, lo que permite 
               que las tareas persistan incluso después de cerrar la aplicación.</p>

            <h2>CSS y Estilos: </h2>
            <p>Se aplican estilos atractivos y responsivos utilizando CSS puro para garantizar una experiencia de usuario 
               agradable.</p>

            <h2>React Hooks: </h2>
            <p>Se utilizan Hooks de React como useState y useEffect para administrar el estado y los efectos secundarios 
               en la aplicación.</p>

            <h2>Validación de Entradas: </h2>
            <p>Se implementa una validación en el formulario para garantizar que el nombre de la tarea tenga al menos 3 
               caracteres antes de permitir su creación.</p>

            <h2>Componentización: </h2>
            <p>La aplicación se organiza en componentes reutilizables, lo que facilita la gestión y el mantenimiento del
               código</p>.

            <h2>Gestión de Estado: </h2>
            <p>Se utiliza el estado de React para representar y administrar el estado de las tareas y la interfaz de 
               usuario.</p>

            <h2>React Testing Library: </h2>
            <p>La aplicación puede ser probada de manera efectiva utilizando React Testing Library para garantizar su 
               funcionamiento correcto y la detección temprana de errores.</p>

            <p>En resumen, "My React Task List" es una aplicación de lista de tareas simple pero efectiva que utiliza 
               las mejores prácticas de desarrollo web y las tecnologías más actuales de React para brindar a los 
               usuarios una experiencia de gestión de tareas eficiente y agradable.</p>
        </div>
    );
    
    
    }
    export default SobreNosotros;