import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

const plantList = [
  {
    name: 'Monstera',
    category: 'Plante Classique',
    id: '1ed',
    bestSale: true,
    light: 2,
    water: 3,
    cover: monstera,
    price: 15,
    description: [
      "Monstera est une plante d'intérieur populaire.",
      'Elle est appréciée pour ses grandes feuilles vertes en forme de cœur.',
      'Monstera nécessite un éclairage modéré et un arrosage régulier.'
    ]
  },
  {
    name: 'Ficus Lyrata',
    category: 'Plante Classique',
    id: '2ab',
    light: 3,
    water: 1,
    cover: lyrata,
    price: 16,
    description: [
      "Le Ficus Lyrata, également connu sous le nom de Figuier lyre, est une plante d'intérieur élégante.",
      'Il se caractérise par ses grandes feuilles en forme de violon.',
      'Le Ficus Lyrata préfère un éclairage lumineux indirect et un arrosage modéré.'
    ]
  },
  {
    name: 'Pothos Argenté',
    category: 'Plante Classique',
    id: '3sd',
    light: 1,
    water: 2,
    cover: pothos,
    price: 9,
    description: [
      "Le Pothos Argenté est une plante d'intérieur facile à entretenir.",
      'Il présente des feuilles vertes marbrées de blanc argenté.',
      'Le Pothos Argenté tolère bien les conditions de faible luminosité.'
    ]
  },
  {
    name: 'Calathea',
    category: 'Plante Classique',
    id: '4kk',
    light: 2,
    water: 3,
    cover: calathea,
    price: 20,
    description: [
      "Le Calathea est une plante d'intérieur connue pour ses feuilles aux motifs uniques.",
      'Elle nécessite un éclairage modéré et un arrosage régulier pour maintenir son humidité.'
    ]
  },
  {
    name: 'Olivier',
    category: 'Plante Extérieure',
    id: '5pl',
    light: 3,
    water: 1,
    cover: olivier,
    price: 25,
    description: [
      "L'Olivier est un arbre d'extérieur apprécié pour ses feuilles grises et son port élégant.",
      "Il prospère sous un ensoleillement abondant et nécessite peu d'arrosage."
    ]
  },
  {
    name: 'Cactus',
    category: 'Plante Grasse',
    id: '8fp',
    light: 2,
    water: 1,
    cover: cactus,
    price: 6,
    description: [
      'Le Cactus est une plante grasse idéale pour les environnements secs.',
      'Il préfère une lumière vive et nécessite un arrosage minimal.'
    ]
  },
  {
    name: 'Basilique',
    category: 'Plante Extérieure',
    id: '7ie',
    bestSale: true,
    light: 2,
    water: 3,
    cover: basil,
    price: 5,
    description: [
      'La Basilique est une herbe aromatique prisée en cuisine.',
      'Elle pousse bien en plein air et nécessite un arrosage régulier.'
    ]
  },
  {
    name: 'Succulente',
    category: 'Plante Grasse',
    id: '9vn',
    light: 2,
    water: 1,
    cover: succulent,
    price: 8,
    description: [
      'Les Succulentes sont des plantes grasses attrayantes et faciles à entretenir.',
      "Elles préfèrent une lumière vive et nécessitent peu d'eau."
    ]
  },
  {
    name: 'Menthe',
    category: 'Plante Extérieure',
    id: '6uo',
    light: 2,
    water: 2,
    cover: mint,
    price: 4,
    description: [
      'La Menthe est une herbe aromatique rafraîchissante utilisée en cuisine et pour les boissons.',
      'Elle pousse bien en plein air et nécessite une hydratation régulière.'
    ]
  }
]

export default plantList
