document.addEventListener('DOMContentLoaded', () => {
  Papa.parse('../../datos/escuelas.csv', {
    header: true,
    download: true,
    complete: function(results) {
      const data = results.data.slice(0, 10); // Solo los primeros 10 para gráficos

      const centros = [];
      const hombres = [];
      const mujeres = [];
      const porcentaje = [];

      let totalHombres = 0;
      let totalMujeres = 0;
      let totalBrechas = 0;
      let contadorBrechas = 0;

      data.forEach(row => {
        const nombre = row.nombre_cen || row.nombre || 'Escuela';
        const h = parseInt(row["2024_TOTAL_HOMBRES"] || 0);
        const m = parseInt(row["2024_TOTAL_MUJERES"] || 0);
        const brecha = parseFloat(row["2024_BRECHA_GENERO"] || 0);

        const total = h + m;
        const p_insc = parseFloat(row.porcentaje_inscritos || (total > 0 ? (total / 1000) * 100 : 0)); // Simulación

        centros.push(nombre);
        hombres.push(h);
        mujeres.push(m);
        porcentaje.push(p_insc.toFixed(2));

        // Acumuladores para indicadores globales
        totalHombres += h;
        totalMujeres += m;
        if (!isNaN(brecha)) {
          totalBrechas += brecha;
          contadorBrechas++;
        }
      });

      // Mostrar indicadores arriba de los gráficos
      document.getElementById('totalHombres').textContent = `👨 Hombres: ${totalHombres.toLocaleString()}`;
      document.getElementById('totalMujeres').textContent = `👩 Mujeres: ${totalMujeres.toLocaleString()}`;
      const promedio = contadorBrechas > 0 ? (totalBrechas / contadorBrechas).toFixed(2) : '0';
      document.getElementById('promedioBrecha').textContent = `📊 Prom. Brecha: ${promedio}%`;

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

      // Gráfico 2: Porcentaje de Inscritos (simulado)
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
