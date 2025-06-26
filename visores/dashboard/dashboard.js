document.addEventListener('DOMContentLoaded', () => {
  Papa.parse('../../datos/escuelas.csv', {
    header: true,
    download: true,
    complete: function(results) {
      const data = results.data.slice(0, 10); // Solo los primeros 10 para demo

      const centros = [];
      const hombres = [];
      const mujeres = [];
      const porcentaje = [];

      data.forEach(row => {
        const nombre = row.nombre_cen || row.nombre || 'Escuela';
        const h = parseInt(row["2024_TOTAL_HOMBRES"] || 0);
        const m = parseInt(row["2024_TOTAL_MUJERES"] || 0);
        const total = h + m;
        const p_insc = parseFloat(row.porcentaje_inscritos || (total > 0 ? (total / 1000) * 100 : 0)); // simulación

        centros.push(nombre);
        hombres.push(h);
        mujeres.push(m);
        porcentaje.push(p_insc.toFixed(2));
      });

      // Gráfico 1: Género
      new Chart(document.getElementById('graficoGenero'), {
        type: 'bar',
        data: {
          labels: centros,
          datasets: [
            { label: 'Hombres', data: hombres, backgroundColor: 'rgba(54, 162, 235, 0.7)' },
            { label: 'Mujeres', data: mujeres, backgroundColor: 'rgba(255, 99, 132, 0.7)' }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: { display: true, text: 'Distribución por Género' }
          }
        }
      });

      // Gráfico 2: Porcentaje
      new Chart(document.getElementById('graficoInscritos'), {
        type: 'line',
        data: {
          labels: centros,
          datasets: [{
            label: '% Inscritos (estimado)',
            data: porcentaje,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3,
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.2)'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: { display: true, text: 'Inscripción Promedio (%)' }
          }
        }
      });
    }
  });
});
