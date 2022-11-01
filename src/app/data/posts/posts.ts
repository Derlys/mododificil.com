import { Post } from '../models/post';
declare var require: any;

export const posts: Post[] = [
  {
    description:
      'Kin es una moneda digital para los pagos dentro de las aplicaciones. Un 14% de transacciones en Solana,\n' +
      '650.000 transacciones diarias en el 2021 y 1,8 millones de usuarios activos.',
    published: true,
    content: require('!!raw-loader!./Qué es Kin.md')
      .default,
    imgUrl: '/assets/images/art9.png',
    title: '¿Qué es Kin?',
    createdAt: '2022-11-01',
    id: 'Qué es Kin',
  },
  {
    description:
      'En la situación actual en que nos encontramos ya es muy común que la mayoría de personas trabajen de manera remota.',
    published: true,
    content: require('!!raw-loader!./el-trabajo-remoto-el-futuro-del-desarrollo-web.md')
      .default,
    imgUrl: '/assets/images/art1.jpg',
    title: 'El trabajo remoto, el futuro del desarrollo web',
    createdAt: '2020-10-23',
    id: 'el-trabajo-remoto-el-futuro-del-desarrollo-web',
  },
  {
    published: true,
    description:
      'Falacia lógica es un razonamiento aparentemente correcto, pero que en realidad no lo es.\nQuieres saber más sigue leyendo el articulo.',
    content: require('!!raw-loader!./el-mejor-consejo-que-leeras-hoy-sobre-falacia-logica.md')
      .default,
    imgUrl: '/assets/images/art2.jpg',
    title: 'El mejor consejo que leerás hoy sobre falacia lógica',
    createdAt: '2020-10-16',
    id: 'el-mejor-consejo-que-leeras-hoy-sobre-falacia-logica',
  },
  {
    description:
      'Conoce las que para mí son las herramientas digitales que te ayudan a prender desarrollo web.',
    title: 'Las mejores herramientas digitales para aprender desarrollo web',
    content: require('!!raw-loader!./las-mejores-herramientas-digitales-para-aprender-desarrollo-web.md')
      .default,
    imgUrl: '/assets/images/art3.jpg',
    published: true,
    createdAt: '2020-09-24',
    id: 'las-mejores-herramientas-digitales-para-aprender-desarrollo-web',
  },
  {
    createdAt: '2020-09-09',
    description:
      'Muchas personas piensan que cuando escribo la frase **modo difícil** me refiero a que todo lo que hagamos tenga que ser tortuoso y nada divertido. Quiero aclarar que no es así😜. .',
    title: 'Creando mi homepage en modo difícil',
    content: require('!!raw-loader!./creando-mi-homepage-en-modo-dificil.md')
      .default,
    imgUrl: '/assets/images/art4.jpg',
    published: true,
    id: 'creando-mi-homepage-en-modo-dificil',
  },
  {
    createdAt: '2020-09-03',
    title: '5 claves para empezar como developer in training',
    content: require('!!raw-loader!./5-claves-para-empezar-como-developer-in-training.md')
      .default,
    imgUrl: '/assets/images/art5.jpg',
    description:
      '¿Cómo comienza mi aprendizaje de código? Es algo que debí pensar detenidamente porque no estaba realmente consciente del momento exacto en que hice mi primera línea de código.',
    published: true,
    id: '5-claves-para-empezar-como-developer-in-training',
  },
  {
    title: 'Mi trabajo en una fundación',
    published: true,
    description:
      'Code Your Future Colombia (CYFCO) es una fundación sin ánimo de lucro que otorga becas a personas sin la posibilidad de acceder a una carrera universitaria.',
    createdAt: '2020-08-26',
    content: require('!!raw-loader!./mi-trabajo-en-una-fundacion.md').default,
    imgUrl: '/assets/images/art6.png',
    id: 'mi-trabajo-en-una-fundacion',
  },
  {
    content: require('!!raw-loader!./de-tecnologa-electromecanica-a-coordinadora-de-una-fundacion.md')
      .default,
    imgUrl: '/assets/images/art7.jpg',
    title: 'De tecnóloga electromecánica a coordinadora de una fundación',
    published: true,
    description:
      '**!Uppp¡** Que cambio drastico, no les parece? ¿En que momento paso?, ¿Cómo lo decidi?, ¿Qué cambios tuve que hacer?.',
    createdAt: '2020-08-19',
    id: 'de-tecnologa-electromecanica-a-coordinadora-de-una-fundacion',
  },
  {
    createdAt: '2020-08-15',
    description:
      'Quiero contarte un poco de mi historia para que puedas entender cómo y porqué nació Modo Difícil.',
    published: true,
    title: 'Cómo descubrí el mundo del desarrollo web',
    content: require('!!raw-loader!./como-descubri-el-mundo-del-desarrollo-web.md')
      .default,
    imgUrl: '/assets/images/art8.jpg',
    id: 'como-descubri-el-mundo-del-desarrollo-web',
  }
];
