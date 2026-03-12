import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('country_events').del();
  await knex('country_quizzes').del();

  // Fetch countries by code
  const countries = await knex('countries').select('id', 'code_iso2');
  const countryByCode = (code: string) => countries.find((c: any) => c.code_iso2 === code);

  const france = countryByCode('FR');
  const allemagne = countryByCode('DE');
  const italie = countryByCode('IT');
  const royaumeUni = countryByCode('GB');
  const espagne = countryByCode('ES');
  const usa = countryByCode('US');
  const japon = countryByCode('JP');
  const grece = countryByCode('GR');
  const chine = countryByCode('CN');

  // Fetch events by title
  const events = await knex('historical_events').select('id', 'title');
  const eventByTitle = (title: string) => events.find((e: any) => e.title === title);

  // Fetch wars by title
  const wars = await knex('wars').select('id', 'title');
  const warByTitle = (title: string) => wars.find((w: any) => w.title === title);

  // Country ↔ Events associations
  const countryEventAssociations: Array<{ country_id: string; event_id: string; relevance: string }> = [];

  const addEvent = (country: any, title: string, relevance: string) => {
    const event = eventByTitle(title);
    if (country && event) {
      countryEventAssociations.push({
        country_id: country.id,
        event_id: event.id,
        relevance,
      });
    }
  };

  // France
  addEvent(france, 'Baptême de Clovis', 'majeur');
  addEvent(france, 'Sacre de Charlemagne', 'majeur');
  addEvent(france, 'Édit de Nantes', 'majeur');
  addEvent(france, 'Prise de la Bastille', 'majeur');
  addEvent(france, 'Bataille de Waterloo', 'majeur');
  addEvent(france, 'Abolition de l\'esclavage en France', 'majeur');
  addEvent(france, 'Armistice du 11 novembre 1918', 'majeur');
  addEvent(france, 'Débarquement de Normandie', 'majeur');

  // Italie
  addEvent(italie, 'Fondation de Rome', 'majeur');
  addEvent(italie, 'Chute de l\'Empire romain d\'Occident', 'majeur');
  addEvent(italie, 'Découverte de l\'Amérique', 'secondaire'); // Christophe Colomb, Génois

  // Grèce
  addEvent(grece, 'Bataille de Marathon', 'majeur');
  addEvent(grece, 'Mort d\'Alexandre le Grand', 'majeur');

  // Allemagne
  addEvent(allemagne, 'Chute du mur de Berlin', 'majeur');
  addEvent(allemagne, 'Sacre de Charlemagne', 'secondaire');

  // États-Unis
  addEvent(usa, 'Déclaration d\'indépendance américaine', 'majeur');
  addEvent(usa, 'Débarquement de Normandie', 'majeur');

  // Royaume-Uni
  addEvent(royaumeUni, 'Bataille de Waterloo', 'secondaire');
  addEvent(royaumeUni, 'Déclaration d\'indépendance américaine', 'secondaire');

  // Espagne
  addEvent(espagne, 'Découverte de l\'Amérique', 'majeur'); // Financé par l'Espagne

  // Prise de Constantinople — lié à la Grèce (Empire byzantin)
  addEvent(grece, 'Prise de Constantinople', 'majeur');

  if (countryEventAssociations.length > 0) {
    await knex('country_events').insert(countryEventAssociations);
  }

  // Country ↔ Quizzes associations
  const quizzes = await knex('quizzes').select('id', 'title');
  const quizByTitle = (title: string) => quizzes.find((q: any) => q.title === title);

  const countryQuizAssociations: Array<{ country_id: string; quiz_id: string }> = [];

  const addQuiz = (country: any, title: string) => {
    const quiz = quizByTitle(title);
    if (country && quiz) {
      countryQuizAssociations.push({
        country_id: country.id,
        quiz_id: quiz.id,
      });
    }
  };

  // "Les grandes dates de l'histoire de France" → France
  addQuiz(france, 'Les grandes dates de l\'histoire de France');

  // "Géographie de l'Europe" → all European countries
  const europeanCountries = [france, allemagne, italie, royaumeUni, espagne, grece];
  for (const country of europeanCountries) {
    addQuiz(country, 'Géographie de l\'Europe');
  }

  // "La Première Guerre mondiale" → belligerents
  const wwiBelligerents = [france, allemagne, italie, royaumeUni, usa, japon];
  for (const country of wwiBelligerents) {
    addQuiz(country, 'La Première Guerre mondiale');
  }

  if (countryQuizAssociations.length > 0) {
    await knex('country_quizzes').insert(countryQuizAssociations);
  }
}
