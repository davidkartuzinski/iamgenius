// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

import { Blockquote } from './app/components/server-side/Blockquote';
import {
  Drive,
  Courage,
  DevotionToGoals,
  Knowledge,
  Honesty,
  Optimism,
  AbilityToJudge,
  Enthusiasm,
  WillingnessToTakeChances,
  DynamicEnergy,
  Enterprise,
  Persuasion,
  Outgoingness,
  AbilityToCommunicate,
  Patience,
  Perception,
  Perfectionism,
  SenseOfHumor,
  Versatility,
  Adaptability,
  Curiosity,
  Individualism,
  Idealism,
  Imagination,
} from './app/components/server-side/Traits/(english)';
import {
  Energie,
  LeCourage,
  DevouementAuxObjectifs,
  Connaissance,
  Honnetete,
  Optimisme,
  CapaciteAJuger,
  Enthousiasme,
  VolonteDePrendreDesRisques,
  Dynamisme,
  Initiative,
  LaPersuasion,
  Extravertie,
  CapaciteACommuniquer,
  LaPatience,
  LaPerception,
  Perfectionnisme,
  LeSensDeLHumour,
  Polyvalence,
  Adaptabilite,
  Curiosite,
  Individualisme,
  Idealisme,
  LImagination,
} from './app/components/server-side/Traits/(french)';

import {
  Energia,
  Coraje,
  DedicacionALosObjetivos,
  Conocimiento,
  Honestidad,
  Optimismo,
  CapacidadDeJuzgar,
  Entusiasmo,
  DisposicionParaCorrerRiesgos,
  Dinamismo,
  Iniciativa,
  Persuasivo,
  Extrovertido,
  CapacidadDeCommunicarse,
  Paciencia,
  Percepcion,
  Perfeccionismo,
  SentidoDelHumor,
  Versatilidad,
  Adaptabilidad,
  Curiosidad,
  Individualismo,
  Idealismo,
  Imaginacion,
} from './app/components/server-side/Traits/(spanish)';

import {
  TraitsMenuEN,
  TraitsMenuFR,
  TraitsMenuES,
} from './app/components/server-side/TraitsMenu';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    TraitsMenuEN,
    TraitsMenuES,
    TraitsMenuFR,
    Blockquote,
    // ENGLISH
    Drive,
    Courage,
    DevotionToGoals,
    Knowledge,
    Honesty,
    Optimism,
    AbilityToJudge,
    Enthusiasm,
    WillingnessToTakeChances,
    DynamicEnergy,
    Enterprise,
    Persuasion,
    Outgoingness,
    AbilityToCommunicate,
    Patience,
    Perception,
    Perfectionism,
    SenseOfHumor,
    Versatility,
    Adaptability,
    Curiosity,
    Individualism,
    Idealism,
    Imagination,
    // FRENCH
    Energie,
    LeCourage,
    DevouementAuxObjectifs,
    Connaissance,
    Honnetete,
    Optimisme,
    CapaciteAJuger,
    Enthousiasme,
    VolonteDePrendreDesRisques,
    Dynamisme,
    Initiative,
    LaPersuasion,
    Extravertie,
    CapaciteACommuniquer,
    LaPatience,
    LaPerception,
    Perfectionnisme,
    LeSensDeLHumour,
    Polyvalence,
    Adaptabilite,
    Curiosite,
    Individualisme,
    Idealisme,
    LImagination,
    // spanish
    Energia,
    Coraje,
    DedicacionALosObjetivos,
    Conocimiento,
    Honestidad,
    Optimismo,
    CapacidadDeJuzgar,
    Entusiasmo,
    DisposicionParaCorrerRiesgos,
    Dinamismo,
    Iniciativa,
    Persuasivo,
    Extrovertido,
    CapacidadDeCommunicarse,
    Paciencia,
    Percepcion,
    Perfeccionismo,
    SentidoDelHumor,
    Versatilidad,
    Adaptabilidad,
    Curiosidad,
    Individualismo,
    Idealismo,
    Imaginacion,

    ...components,
  };
}
