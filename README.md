# 💻 Portafolio de María Pia Saavedra (Mapi)

**Data Science · Automatización con IA** · Ingeniería Industrial PUCP (10mo ciclo) · Concentración en Business Analytics

Construyo modelos y automatizo procesos con datos e IA: entreno modelos de machine learning, automatizo procesos reales con Python, RPA y Power Automate, y convierto datos en decisiones.

🌐 **[Ver portafolio en línea](https://mapisaavedra.github.io/Portafolio-Analista-de-Datos/)** · 📄 **[Descargar CV](CV_Maria_Pia_Saavedra_Chavez.pdf)** · 💼 **[LinkedIn](https://www.linkedin.com/in/mariapiasaavedra111/)**

> 🇬🇧 The site is bilingual: switch between Spanish and English with the **EN / ES** button.

---

## 🚀 Proyectos

### 🎶 ¿Dónde cae la música afroperuana en el mapa latino? · *Machine Learning*
Entrené un modelo para reconocer 8 géneros latinos con las características de audio de Spotify y luego le hice "escuchar" música afroperuana que nunca vio.
- **71% de accuracy** entre 8 géneros (azar: 12,5%) con Gradient Boosting.
- Perú Negro → salsa · Chabuca Granda → tango · Susana Baca → MPB · Novalima → reggaetón.
- La música afroperuana es más atípica que la latina promedio; el pop peruano (grupo de control) es completamente "normal".

`Python` `pandas` `scikit-learn` `UMAP` `matplotlib`

### ⚙️ Monitor cripto que corre solo, con costo $0 · *Pipeline de datos*
Pipeline sin servidor que cada hora consulta precios de BTC, ETH y SOL en CoinGecko, guarda el histórico en CSV dentro del repo y publica un dashboard interactivo.
- Métricas de riesgo con pandas: cambios a 24h/7d/30d, medias móviles, volatilidad, máxima caída y correlación.
- Dashboard con Plotly.js, precio en vivo cada minuto y simulador de "¿y si hubiera invertido?".
- Alertas configurables en YAML con aviso por Telegram.
- Calidad: 7 tests con pytest (API simulada), CI con GitHub Actions y linter ruff.

`Python` `pandas` `requests` `GitHub Actions` `GitHub Pages` `Plotly.js` `pytest`

### 🤖 Automatización inteligente: RPA para siniestros de Hogar · *En producción en Pacífico Seguros*
Bot RPA que automatiza de punta a punta las tareas repetitivas del flujo de siniestros de Hogar, diseñado a partir del mapeo AS-IS / TO-BE.
`RPA` `Python` `Mapeo de procesos`

### ✉️ Correos automáticos con Power Automate · *En producción en Pacífico Seguros*
Flujos que toman la data, arman y envían comunicaciones de seguimiento solos, a tiempo y con trazabilidad.
`Power Automate` `Outlook` `Excel`

### 🏭 Optimización de Almacenes PUCP · *Expuesto en XpoSTEM 2025-2*
Rediseño del control de inventarios del almacén de la Facultad de Gastronomía, Hotelería y Turismo: OCR y reconocimiento por imagen, balanza conectada a base de datos en la nube y dashboard web.

| Indicador | AS-IS | TO-BE | Mejora |
|---|---|---|---|
| Tiempo de cotización | 4,5 h | 1 h | -78% |
| Error de inventario | 7% | <1% | -86% |
| Mermas | 5–10% | <1% | -80% |
| Retrabajo en Excel | 3 h/semana | 0 h | -100% |

TIR estimada de 35% y recuperación de la inversión en 2 años (valores proyectados).
`Lean` `AS-IS / TO-BE` `OCR` `Evaluación económica`

### 📈 Análisis de venta de salvamentos · *Pacífico Seguros*
Análisis del proceso de subasta de vehículos siniestrados con Python y Excel avanzado para encontrar mejoras operativas.

### 🔍 Patrones de error con SQL · *Directo*
Consultas SQL avanzadas, análisis causa-raíz y 5W2H para priorizar mejoras con datos.

### 🧭 En el roadmap
- 🧠 **Asistente con IA para siniestros:** un LLM que lee documentos (con datos ficticios), extrae campos clave y clasifica casos.
- ⚙️ **Pipeline ETL con datos abiertos del Perú:** extracción, limpieza y carga automática a una base en la nube, con dashboard.

---

## 🧰 Herramientas

**Machine Learning:** scikit-learn (clasificación, Gradient Boosting, validación) · UMAP · pandas · matplotlib · seaborn
**Datos y automatización:** Python · SQL · R (tidyverse) · RPA · Power Automate · GitHub Actions · pytest · Power BI · Excel avanzado
**Procesos:** Lean · AS-IS / TO-BE · 5W2H · Causa-raíz · Mejora continua
**Gestión:** Jira · Confluence · Git · Scrum · Kanban

## 💼 Experiencia

- **Pacífico Seguros** — Practicante de Siniestros Vehiculares (set 2025 – actualidad)
- **Directo** — Practicante de Documentación TI (ene – ago 2025)

## 🛠️ Sobre este sitio

Hecho a mano en un solo `index.html` (HTML, CSS y JavaScript, sin frameworks) y publicado con GitHub Pages. Incluye modo oscuro, versión en inglés y animaciones que respetan la preferencia de movimiento reducido.

---

📬 ¿Un problema que pide a gritos datos e IA? Escríbeme a **mariapiasaavedrachavez@gmail.com**
