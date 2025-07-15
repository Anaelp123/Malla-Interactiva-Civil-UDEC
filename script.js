const ramos = [
  // Semestre 1
  { id: "fisica1", nombre: "Física I", creditos: 5, desbloquea: ["fisica2"] },
  { id: "algebra1", nombre: "Álgebra I", creditos: 5, desbloquea: ["algebra2"] },
  { id: "calculo1", nombre: "Cálculo I", creditos: 5, desbloquea: ["calculo2"] },
  { id: "quimica1", nombre: "Química General I", creditos: 5 },
  { id: "intro_ingenieria", nombre: "Intro a la Ing. Civil", creditos: 2, desbloquea: ["intro_innovacion"] },

  // Semestre 2
  { id: "fisica2", nombre: "Física II", creditos: 5, desbloquea: ["mecanica"], requiere: ["fisica1"] },
  { id: "algebra2", nombre: "Álgebra II", creditos: 5, desbloquea: ["calculo3", "edo", "estadistica"], requiere: ["algebra1"] },
  { id: "calculo2", nombre: "Cálculo II", creditos: 5, desbloquea: ["calculo3", "edo", "mecanica", "estadistica"], requiere: ["calculo1"] },
  { id: "herramientas", nombre: "Herramientas Computacionales", creditos: 4, desbloquea: ["dibujo"] },
  { id: "intro_innovacion", nombre: "Intro a la Innovación", creditos: 2, requiere: ["intro_ingenieria"] },

  // Semestre 3
  { id: "calculo3", nombre: "Cálculo III", creditos: 5, desbloquea: ["calculo_numerico", "complemento", "fluid"] },
  { id: "edo", nombre: "Ecuaciones Diferenciales", creditos: 4, desbloquea: ["complemento", "solidos", "fluid"] },
  { id: "mecanica", nombre: "Mecánica", creditos: 4, desbloquea: ["estatica", "fluid"] },
  { id: "programacion", nombre: "Programación", creditos: 3, desbloquea: ["calculo_numerico"], requiere: ["fisica1", "algebra1", "calculo1", "quimica1", "intro_ingenieria", "fisica2", "algebra2", "calculo2", "herramientas", "intro_innovacion"] },
  { id: "construccion", nombre: "Ing. de la Construcción", creditos: 3, desbloquea: ["proyecto_sustentable"], creditos_min: 34 },
  { id: "dibujo", nombre: "Dibujo en Ing. Civil", creditos: 2, desbloquea: ["geomatica"], requiere: ["herramientas"] },
  { id: "ingles1", nombre: "Inglés 1 - Principiante", creditos: 3, desbloquea: ["ingles2"] },

  // Semestre 4
  { id: "estadistica", nombre: "Estadística y Probabilidades", creditos: 4, desbloquea: ["demanda", "hormigon"], requiere: ["algebra2", "calculo2"] },
  { id: "calculo_numerico", nombre: "Cálculo Numérico", creditos: 4 },
  { id: "estatica", nombre: "Estática", creditos: 3, desbloquea: ["solidos", "demanda"] },
  { id: "complemento", nombre: "Complemento de Cálculo", creditos: 5 },
  { id: "proyecto_sustentable", nombre: "Proyecto de Construcción Sustentable", creditos: 2 },
  { id: "geomatica", nombre: "Geomática", creditos: 3, creditos_min: 42 },
  { id: "ingles2", nombre: "Inglés 2 - Elemental", creditos: 3, desbloquea: ["ingles3"] },

  // Semestre 5
  { id: "economia", nombre: "Economía", creditos: 4, creditos_min: 50, desbloquea: ["transporte"] },
  { id: "optimizacion", nombre: "Optimización en Ing. Civil", creditos: 3, creditos_min: 90, desbloquea: ["transporte"] },
  { id: "solidos", nombre: "Mecánica de Sólidos", creditos: 4, desbloquea: ["estructural", "geotecnia"] },
  { id: "fluid", nombre: "Mecánica de Fluidos", creditos: 4, desbloquea: ["hidraulica", "geotecnia"] },
  { id: "materiales", nombre: "Materiales de Construcción", creditos: 3, desbloquea: ["hormigon"] },
  { id: "demanda", nombre: "Demanda en Obras de Infraestructura", creditos: 2, desbloquea: ["conceptual"] },
  { id: "ingles3", nombre: "Inglés 3 - Básico", creditos: 3, desbloquea: ["ingles4"] },
  { id: "practica", nombre: "Práctica Laboral", creditos: 2 },

  // Semestre 6
  { id: "gestion", nombre: "Gestión de Empresas", creditos: 3, creditos_min: 80 },
  { id: "estructural", nombre: "Análisis Estructural", creditos: 3, desbloquea: ["proyecto_basica", "hormigon_armado"] },
  { id: "geotecnia", nombre: "Geotecnia", creditos: 3, desbloquea: ["proyecto_basica", "suelos"] },
  { id: "hidraulica", nombre: "Hidráulica", creditos: 3, desbloquea: ["proyecto_basica", "hidrologia"] },
  { id: "hormigon", nombre: "Ing. del Hormigón", creditos: 3, desbloquea: ["hormigon_armado"] },
  { id: "proyecto_civil", nombre: "Proyecto de Ing. Civil", creditos: 2, desbloquea: ["proyecto_basica"] },
  { id: "ingles4", nombre: "Inglés 4 - Básico Alto", creditos: 3 },

  // Semestre 7
  { id: "innovacion", nombre: "Innovación", creditos: 3, creditos_min: 100 },
  { id: "transporte", nombre: "Sistemas de Transporte", creditos: 3, desbloquea: ["infraestructura"] },
  { id: "hormigon_armado", nombre: "Hormigón Armado", creditos: 3 },
  { id: "suelos", nombre: "Ing. de Suelos", creditos: 3, desbloquea: ["fundaciones"] },
  { id: "hidrologia", nombre: "Hidrología para Ingenieros", creditos: 3, desbloquea: ["proyecto_i"] },
  { id: "proyecto_basica", nombre: "Proyecto de Ing. Básica", creditos: 3, desbloquea: ["detalle"] },

  // Semestre 8
  { id: "infraestructura", nombre: "Infraestructura de Transporte", creditos: 3, desbloquea: ["proyecto_i"] },
  { id: "antisismica", nombre: "Ing. Antisísmica", creditos: 3, desbloquea: ["proyecto_i"] },
  { id: "fundaciones", nombre: "Fundaciones", creditos: 3, desbloquea: ["proyecto_i"] },
  { id: "ambiental", nombre: "Ing. Ambiental", creditos: 3, creditos_min: 120 },
  { id: "detalle", nombre: "Proyecto de Ing. de Detalle", creditos: 3, desbloquea: ["proyecto_i"] },
  { id: "complementaria1", nombre: "Complementaria 1", creditos: 2 },
  { id: "complementaria2", nombre: "Complementaria 2", creditos: 2 },

  // Semestre 9
  { id: "proyecto_i", nombre: "Proyecto de Ing. Civil I", creditos: 1, desbloquea: ["proyecto_ii"] },
  { id: "electivo1", nombre: "Electivo 1", creditos: 5 },
  { id: "electivo2", nombre: "Electivo 2", creditos: 5 },
  { id: "electivo3", nombre: "Electivo 3", creditos: 5 },
  { id: "complementaria3", nombre: "Complementaria 3", creditos: 2 },
  { id: "complementaria4", nombre: "Complementaria 4", creditos: 2 },
  { id: "practica_pre", nombre: "Práctica Pre Profesional", creditos: 5, desbloquea: ["practica_final"] },

  // Semestre 10
  { id: "evaluacion", nombre: "Formulación y Evaluación de Proyectos", creditos: 4, creditos_min: 120 },
  { id: "proyecto_ii", nombre: "Proyecto de Ing. Civil II", creditos: 1 },
  { id: "electivo4", nombre: "Electivo 4", creditos: 3 },
  { id: "electivo5", nombre: "Electivo 5", creditos: 4 },
  { id: "complementaria5", nombre: "Complementaria 5", creditos: 3 },
  { id: "complementaria6", nombre: "Complementaria 6", creditos: 3 },

  // Semestre 11
  { id: "memoria", nombre: "Memoria de Título", creditos: 20 },
  { id: "practica_final", nombre: "Práctica Pre Profesional II", creditos: 4 },
];


let creditos = 0;
const aprobados = new Set();

function crearRamos() {
  const contenedor = document.getElementById("malla");

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = `div-${ramo.id}`;

    const nombre = document.createElement("h3");
    nombre.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;

    const boton = document.createElement("button");
    boton.textContent = "Se aprueba el ramo";
    boton.id = `btn-${ramo.id}`;
    boton.disabled = true;

    boton.addEventListener("click", () => aprobarRamo(ramo.id));

    div.appendChild(nombre);
    div.appendChild(boton);
    contenedor.appendChild(div);
  });

  verificarDesbloqueos(); // Inicializar estado de botones
}

function aprobarRamo(id) {
  const ramo = ramos.find(r => r.id === id);
  if (aprobados.has(id)) return;

  aprobados.add(id);
  creditos += ramo.creditos;

  const boton = document.getElementById(`btn-${id}`);
  if (boton) boton.disabled = true;
  const div = document.getElementById(`div-${id}`);
  if (div) div.style.backgroundColor = "#ffcccc";

  document.getElementById("contador").textContent = creditos;

  verificarDesbloqueos();
}

function verificarDesbloqueos() {
  ramos.forEach(ramo => {
    const boton = document.getElementById(`btn-${ramo.id}`);
    if (!boton || aprobados.has(ramo.id)) return;

    let requisitosCursos = true;
    let requisitosCreditos = true;

    if (ramo.requiere) {
      requisitosCursos = ramo.requiere.every(req => aprobados.has(req));
    }

    if (ramo.creditos_min) {
      requisitosCreditos = creditos >= ramo.creditos_min;
    }

    if (requisitosCursos && requisitosCreditos) {
      boton.disabled = false;
    }
  });
}

crearRamos();

