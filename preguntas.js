const preguntas = [
  {
    "pregunta": "¿Qué significa HTML?",
    "respuesta1": "HyperText Markup Language",
    "respuesta2": "Home Tool Markup Language",
    "respuesta3": "Hyperlinks and Text Markup Language",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Cuál etiqueta define un párrafo?",
    "respuesta1": "<head>",
    "respuesta2": "<p>",
    "respuesta3": "<body>",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Cómo se hace un comentario en HTML?",
    "respuesta1": "// comentario",
    "respuesta2": "<!-- comentario -->",
    "respuesta3": "# comentario",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Qué etiqueta se usa para una imagen?",
    "respuesta1": "<img>",
    "respuesta2": "<image>",
    "respuesta3": "<pic>",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué atributo se usa para enlazar un CSS?",
    "respuesta1": "src",
    "respuesta2": "style",
    "respuesta3": "href",
    "correcta": "respuesta3"
  },
  {
    "pregunta": "¿Cómo se define una clase en CSS?",
    "respuesta1": "#nombre",
    "respuesta2": ".nombre",
    "respuesta3": "*nombre",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Cuál es la etiqueta principal en HTML?",
    "respuesta1": "<main>",
    "respuesta2": "<html>",
    "respuesta3": "<body>",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Qué propiedad CSS cambia el color del texto?",
    "respuesta1": "text-color",
    "respuesta2": "font-color",
    "respuesta3": "color",
    "correcta": "respuesta3"
  },
  {
    "pregunta": "¿Qué etiqueta crea un enlace?",
    "respuesta1": "<link>",
    "respuesta2": "<a>",
    "respuesta3": "<url>",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Cómo se define un ID en CSS?",
    "respuesta1": "#nombre",
    "respuesta2": ".nombre",
    "respuesta3": "@nombre",
    "correcta": "respuesta1"
  },

  {
    "pregunta": "¿Qué etiqueta contiene los metadatos?",
    "respuesta1": "<meta>",
    "respuesta2": "<head>",
    "respuesta3": "<info>",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Qué propiedad CSS cambia el fondo?",
    "respuesta1": "background-color",
    "respuesta2": "bg",
    "respuesta3": "color",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué etiqueta se usa para listas ordenadas?",
    "respuesta1": "<ul>",
    "respuesta2": "<ol>",
    "respuesta3": "<li>",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Qué valor tiene display por defecto en un div?",
    "respuesta1": "block",
    "respuesta2": "inline",
    "respuesta3": "none",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué propiedad cambia el tamaño del texto?",
    "respuesta1": "text-size",
    "respuesta2": "font-size",
    "respuesta3": "size",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Cómo hacer que un enlace abra nueva pestaña?",
    "respuesta1": "target='_blank'",
    "respuesta2": "newtab=true",
    "respuesta3": "open='_new'",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué propiedad alinea texto al centro?",
    "respuesta1": "align",
    "respuesta2": "text-align",
    "respuesta3": "center",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Qué etiqueta crea una tabla?",
    "respuesta1": "<table>",
    "respuesta2": "<grid>",
    "respuesta3": "<tab>",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué atributo define el texto alternativo de una imagen?",
    "respuesta1": "alt",
    "respuesta2": "title",
    "respuesta3": "desc",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué propiedad separa elementos hacia adentro?",
    "respuesta1": "margin",
    "respuesta2": "padding",
    "respuesta3": "spacing",
    "correcta": "respuesta2"
  },

  {
    "pregunta": "¿Cómo se comenta en CSS?",
    "respuesta1": "// comentario",
    "respuesta2": "/* comentario */",
    "respuesta3": "# comentario",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Qué etiqueta crea una lista no ordenada?",
    "respuesta1": "<ul>",
    "respuesta2": "<ol>",
    "respuesta3": "<li>",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué propiedad crea bordes?",
    "respuesta1": "border",
    "respuesta2": "frame",
    "respuesta3": "outline",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué etiqueta va dentro de <table>?",
    "respuesta1": "<tr>",
    "respuesta2": "<td>",
    "respuesta3": "Ambas",
    "correcta": "respuesta3"
  },
  {
    "pregunta": "¿Cuál atributo en <input> define su tipo?",
    "respuesta1": "class",
    "respuesta2": "name",
    "respuesta3": "type",
    "correcta": "respuesta3"
  },
  {
    "pregunta": "¿Qué propiedad cambia el tipo de letra?",
    "respuesta1": "font-family",
    "respuesta2": "text-style",
    "respuesta3": "font-style",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué valor elimina un elemento de la vista?",
    "respuesta1": "hidden",
    "respuesta2": "none",
    "respuesta3": "invisible",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Qué etiqueta se usa para un formulario?",
    "respuesta1": "<form>",
    "respuesta2": "<input>",
    "respuesta3": "<fieldset>",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué propiedad cambia el alto de un elemento?",
    "respuesta1": "height",
    "respuesta2": "size-y",
    "respuesta3": "vertical-size",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué unidad representa porcentajes?",
    "respuesta1": "px",
    "respuesta2": "%",
    "respuesta3": "em",
    "correcta": "respuesta2"
  },

  {
    "pregunta": "¿Cómo incluir CSS en línea?",
    "respuesta1": "style='...'",
    "respuesta2": "<css>",
    "respuesta3": "class='...'",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Cuál etiqueta contiene el título del documento?",
    "respuesta1": "<title>",
    "respuesta2": "<head>",
    "respuesta3": "<header>",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué significa CSS?",
    "respuesta1": "Color Style Sheets",
    "respuesta2": "Creative Style Sheets",
    "respuesta3": "Cascading Style Sheets",
    "correcta": "respuesta3"
  },
  {
    "pregunta": "¿Cómo hacer que un div flote a la derecha?",
    "respuesta1": "float: right;",
    "respuesta2": "position: right;",
    "respuesta3": "align: right;",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué propiedad ajusta el espaciado entre letras?",
    "respuesta1": "letter-spacing",
    "respuesta2": "text-spacing",
    "respuesta3": "line-height",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué propiedad CSS ajusta el margen exterior?",
    "respuesta1": "padding",
    "respuesta2": "border",
    "respuesta3": "margin",
    "correcta": "respuesta3"
  },
  {
    "pregunta": "¿Qué etiqueta se usa para encabezados?",
    "respuesta1": "<h1> a <h6>",
    "respuesta2": "<header>",
    "respuesta3": "<title>",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué etiqueta agrupa contenido en bloque?",
    "respuesta1": "<span>",
    "respuesta2": "<div>",
    "respuesta3": "<group>",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Cuál es el valor por defecto de position?",
    "respuesta1": "absolute",
    "respuesta2": "relative",
    "respuesta3": "static",
    "correcta": "respuesta3"
  },
  {
    "pregunta": "¿Qué etiqueta HTML representa una línea horizontal?",
    "respuesta1": "<hr>",
    "respuesta2": "<line>",
    "respuesta3": "<br>",
    "correcta": "respuesta1"
  },

  {
    "pregunta": "¿Qué etiqueta representa texto en cursiva?",
    "respuesta1": "<b>",
    "respuesta2": "<em>",
    "respuesta3": "<u>",
    "correcta": "respuesta2"
  },
  {
    "pregunta": "¿Qué valor de position permite posicionar con top/left?",
    "respuesta1": "absolute",
    "respuesta2": "static",
    "respuesta3": "fixed",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué etiqueta crea una celda de tabla?",
    "respuesta1": "<td>",
    "respuesta2": "<tr>",
    "respuesta3": "<th>",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué atributo define un campo obligatorio?",
    "respuesta1": "required",
    "respuesta2": "mandatory",
    "respuesta3": "necessary",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué propiedad controla el subrayado del texto?",
    "respuesta1": "text-decoration",
    "respuesta2": "font-style",
    "respuesta3": "text-line",
    "correcta": "respuesta1"
  },
  {
    "pregunta": "¿Qué etiqueta se usa para resaltar código?",
    "respuesta1": "<pre>",
    "respuesta2": "<code>",
    "respuesta3": "<samp>",
    "correcta": "respuesta2"
  }
]
