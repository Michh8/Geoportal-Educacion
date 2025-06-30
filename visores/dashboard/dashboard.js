document.addEventListener('DOMContentLoaded', () => {
  Papa.parse('../../datos/escuelas.csv', {
    header: true,
    download: true,
    complete: function(results) {
      const dataCompleta = results.data;
      const dataParaGraficos = dataCompleta.slice(0, 10); // Solo para gráficos

      const centros = [];
      const hombres = [];
      const mujeres = [];
      const porcentaje = [];

      let totalHombres = 0;
      let totalMujeres = 0;
      let totalBrechas = 0;
      let contadorBrechas = 0;

      // 🔢 Calcular totales con TODAS las filas
      dataCompleta.forEach(row => {
        const h = parseInt(row["2024_TOTAL_HOMBRES"] || 0);
        const m = parseInt(row["2024_TOTAL_MUJERES"] || 0);
        const brecha = parseFloat(row["2024_BRECHA_GENERO"] || 0);

        totalHombres += h;
        totalMujeres += m;
        if (!isNaN(brecha)) {
          totalBrechas += brecha;
          contadorBrechas++;
        }
      });

      // 📈 Mostrar indicadores
      document.getElementById('totalHombres').textContent = `👨 Hombres: ${totalHombres.toLocaleString()}`;
      document.getElementById('totalMujeres').textContent = `👩 Mujeres: ${totalMujeres.toLocaleString()}`;
      const promedio = totalMujeres - totalHombres;
      document.getElementById('promedioBrecha').textContent = `📊Brecha: ${promedio}`;

      // 📊 Preparar datos solo para los gráficos
      dataParaGraficos.forEach(row => {
        const nombreCentro = row.nombre_cen || row.nombre || 'Escuela';
        const municipio = row.municipio || row.nombre_muni || 'Sin municipio';
        const nombre = `${nombreCentro} (${municipio})`;

        const h = parseInt(row["2024_TOTAL_HOMBRES"] || 0);
        const m = parseInt(row["2024_TOTAL_MUJERES"] || 0);
        const total = h + m;
        const p_insc = parseFloat(row.porcentaje_inscritos || (total > 0 ? (total / 1000) * 100 : 0));

        centros.push(nombre);
        hombres.push(h);
        mujeres.push(m);
        porcentaje.push(p_insc.toFixed(2));
      });

      // 🎨 Gráfico 1: Género
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

      // 🎨 Gráfico 2: Porcentaje de Inscritos
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
