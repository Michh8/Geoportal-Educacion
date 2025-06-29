# 🗺️ Geoportal Educativo de El Salvador

Este proyecto es un **Geoportal Educativo Interactivo** desarrollado con datos espaciales y educativos de El Salvador, que permite visualizar información clave relacionada con la brecha de género, distribución de centros escolares, cobertura educativa y más.

Desarrollado con herramientas de **Sistemas de Información Geográfica (SIG)** y tecnologías web modernas.

---

## 🎯 Objetivos

- Visualizar la distribución de centros escolares por zona, género y nivel educativo.
- Analizar brechas educativas (género, cobertura, inscripción).
- Identificar zonas con alta densidad poblacional infantil y baja cobertura educativa.
- Mostrar isócronas de acceso a centros educativos.
- Brindar estadísticas y visualizaciones mediante un dashboard.

---

## 🧱 Estructura del Proyecto

```
Geoportal-Educacion/
├── index.html                 # Página principal con menú de navegación
├── estilos.css                # Estilos generales
├── datos/                     # Archivos CSV (escuelas, distritos, etc.)
│   ├── escuelas.csv
│   └── distritos.csv
├── visores/
│   ├── zonas/
│   │   └── index.html         # Mapa por zona (rural/urbana)
│   ├── brechas/
│   │   └── index.html         # Brecha de género por centro escolar
│   ├── escolarizacion/
│   │   └── index.html         # Porcentaje de inscritos por centro
│   ├── densidad/
│   │   └── index.html         # Mapa de densidad poblacional
│   ├── isocronas/
│   │   └── index.html         # Isócronas desde escuelas
│   └── dashboard/
│       ├── index.html         # Panel gráfico de estadísticas
│       └── dashboard.js
├── resources/                 # Recursos generados por QGIS2Web
│   ├── ol.js, qgis2web.js, etc.
└── GeoEdu.png                 # Logo del proyecto
```

---

## 🧰 Tecnologías Utilizadas

| Herramienta         | Descripción |
|---------------------|-------------|
| **QGIS**            | Para el análisis y preparación de datos espaciales. |
| **QGIS2Web**        | Plugin para exportar mapas como visores web con OpenLayers. |
| **OpenLayers**      | Librería JS de mapas usada para mostrar los visores. |
| **Chart.js**        | Para los gráficos del dashboard. |
| **PapaParse**       | Para cargar y procesar archivos CSV en el navegador. |
| **HTML/CSS/JS**     | Base del desarrollo web del geoportal. |

---

## 🚀 Cómo visualizar el geoportal

Puedes abrirlo localmente o subirlo a una plataforma como **Vercel**, **Netlify** o **GitHub Pages**.

### 📌 Requisitos mínimos:
- Navegador moderno
- Servidor local (opcional, para evitar errores CORS con CSV)

### 📦 Ejecutar localmente:

1. Descarga el proyecto completo.
2. Abre `index.html` en tu navegador.
   - Si los archivos CSV no cargan, usa un servidor local:
     ```bash
     # Con Python
     python -m http.server
     # O con Node.js
     npx serve
     ```

---

## 📊 Indicadores implementados

- Brecha de género por centro escolar
- Porcentaje de inscripción escolar
- Clasificación por zona (rural/urbana/mixta)
- Densidad poblacional
- Accesibilidad por isócronas
- Panel de estadísticas (Dashboard)

---

## 📝 Créditos y datos

- Datos del Ministerio de Educación (MINED)
- Datos poblacionales (DIGESTYC, Censos)
- Geometría de distritos y red vial
- Proyecto académico con enfoque en **educación y equidad de género**

---

## 📌 Estado del proyecto

✅ Funcional  
🛠 En desarrollo continuo  
🚀 Listo para desplegar

---

## 📬 Contacto
  
**Correo**: [00381721@uca.edu.sv]
