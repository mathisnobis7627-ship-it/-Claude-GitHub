/* ============================================
   DONNÉES - TERMINALE
   Programme d'Histoire-Géographie
   ============================================ */

window.TERMINALE_DATA = {
    level: 'terminale',
    label: 'Terminale',
    icon: '🌍',
    subjects: [
        {
            subject: 'histoire',
            label: 'Histoire',
            icon: '📜',
            themes: [
                {
                    theme: 'Thème 1 – Fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)',
                    chapters: [
                        {
                            id: 'ter-h1',
                            title: 'L\'impact de la crise de 1929 : démocraties fragilisées et régimes totalitaires',
                            subtitle: 'Des années 1930 à la veille de la guerre',
                            sections: [
                                {
                                    title: '📉 I. La crise de 1929 et ses conséquences',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Le 24 octobre 1929, la Bourse de New York s'effondre. C'est le « Jeudi noir ». En quelques mois,
                                            la crise financière américaine se propage au monde entier, provoquant chômage de masse, misère
                                            et instabilité politique. Cette crise va fragiliser les démocraties et favoriser la montée
                                            des régimes autoritaires et totalitaires.
                                        </div>

                                        <h4>Le mécanisme de la crise</h4>
                                        <ul>
                                            <li><strong>Spéculation boursière</strong> aux États-Unis dans les années 1920</li>
                                            <li><strong>Krach boursier</strong> du 24 octobre 1929 : effondrement des cours</li>
                                            <li><strong>Crise bancaire</strong> : les banques font faillite, le crédit se tarit</li>
                                            <li><strong>Crise économique</strong> : faillites d'entreprises, chômage de masse (25% aux USA)</li>
                                            <li><strong>Diffusion mondiale</strong> : la crise se propage à l'Europe via le commerce et les flux financiers</li>
                                        </ul>

                                        <h4>Les réponses des démocraties</h4>
                                        <p>Aux États-Unis, le président <strong>Roosevelt</strong> lance le <strong>New Deal</strong> (1933) : grands travaux, réglementation bancaire, aides sociales. En France, le <strong>Front populaire</strong> (1936) obtient les congés payés, la semaine de 40 heures et les conventions collectives.</p>
                                    `
                                },
                                {
                                    title: '⚫ II. Les régimes totalitaires',
                                    content: `
                                        <div class="definition-box">
                                            <span class="def-term">🔑 Totalitarisme</span>
                                            <span class="def-text">Régime politique qui cherche à contrôler totalement la société : parti unique, idéologie officielle, propagande omniprésente, terreur policière, culte du chef, encadrement de la jeunesse. Trois exemples au XXe siècle : l'Italie fasciste, l'Allemagne nazie, l'URSS stalinienne.</span>
                                        </div>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les trois totalitarismes</div>
                                            <table class="schema-table">
                                                <tr><th></th><th>URSS stalinienne</th><th>Italie fasciste</th><th>Allemagne nazie</th></tr>
                                                <tr><td><strong>Chef</strong></td><td>Staline</td><td>Mussolini</td><td>Hitler</td></tr>
                                                <tr><td><strong>Parti unique</strong></td><td>PCUS</td><td>PNF</td><td>NSDAP</td></tr>
                                                <tr><td><strong>Idéologie</strong></td><td>Communisme, société sans classes</td><td>Nationalisme, État tout-puissant</td><td>Racisme, antisémitisme, « espace vital »</td></tr>
                                                <tr><td><strong>Terreur</strong></td><td>Goulag, purges</td><td>Milice, OVRA</td><td>SS, Gestapo, camps</td></tr>
                                                <tr><td><strong>Économie</strong></td><td>Planifiée, collectivisée</td><td>Corporatisme d'État</td><td>Réarmement, autarcie</td></tr>
                                            </table>
                                        </div>

                                        <h4>La montée du nazisme</h4>
                                        <p><strong>Hitler</strong> arrive au pouvoir légalement en <strong>janvier 1933</strong>, profitant de la crise économique et du ressentiment allemand après le traité de Versailles. Il met rapidement en place une dictature :</p>
                                        <ul>
                                            <li>Interdiction des partis et syndicats</li>
                                            <li>Lois de Nuremberg (1935) : persécution des Juifs</li>
                                            <li>Politique de réarmement et d'expansion (Anschluss 1938, Sudètes)</li>
                                        </ul>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">Oct. 1929</span> Krach de Wall Street</li>
                                                <li><span class="date">Janv. 1933</span> Hitler chancelier d'Allemagne</li>
                                                <li><span class="date">1935</span> Lois de Nuremberg</li>
                                                <li><span class="date">Juin 1936</span> Front populaire en France</li>
                                                <li><span class="date">Sept. 1938</span> Accords de Munich</li>
                                            </ul>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'ter-h2',
                            title: 'La Seconde Guerre mondiale',
                            subtitle: '1939-1945 : une guerre d\'anéantissement',
                            sections: [
                                {
                                    title: '⚔️ I. Les grandes phases de la guerre',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Le 1er septembre 1939, l'Allemagne nazie envahit la Pologne. En six ans, cette guerre va
                                            impliquer le monde entier et faire plus de 60 millions de morts, dont une majorité de civils.
                                            C'est la guerre la plus meurtrière de l'histoire.
                                        </div>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les grandes phases de la Seconde Guerre mondiale</div>
                                            <div class="schema-timeline">
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1939-1941</div>
                                                    <div class="timeline-text"><strong>Les victoires de l'Axe</strong> : Blitzkrieg, chute de la France (juin 1940), bataille d'Angleterre</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1941-1942</div>
                                                    <div class="timeline-text"><strong>Mondialisation du conflit</strong> : invasion de l'URSS (juin 1941), Pearl Harbor (déc. 1941), entrée en guerre des USA</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1942-1943</div>
                                                    <div class="timeline-text"><strong>Le tournant</strong> : Stalingrad, El-Alamein, Midway – l'Axe recule</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1944-1945</div>
                                                    <div class="timeline-text"><strong>La victoire des Alliés</strong> : débarquement en Normandie (6 juin 1944), libération de l'Europe, capitulations</div>
                                                </div>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    title: '💀 II. Une guerre d\'anéantissement',
                                    content: `
                                        <h4>La violence de masse</h4>
                                        <p>La Seconde Guerre mondiale est marquée par une violence sans précédent contre les civils :</p>
                                        <ul>
                                            <li><strong>Bombardements massifs</strong> : Blitz sur Londres, bombardement de Dresde, bombes atomiques sur Hiroshima et Nagasaki</li>
                                            <li><strong>Massacres</strong> : Oradour-sur-Glane, représailles contre les résistants et les civils</li>
                                            <li><strong>Travail forcé</strong> : millions de prisonniers et de déportés exploités</li>
                                        </ul>

                                        <h4>La Shoah : le génocide des Juifs</h4>
                                        <p>Le régime nazi planifie et exécute l'extermination systématique des Juifs d'Europe : c'est la <strong>Shoah</strong>.</p>
                                        <ul>
                                            <li><strong>1941</strong> : début des massacres de masse par les Einsatzgruppen (« Shoah par balles ») à l'Est</li>
                                            <li><strong>Janvier 1942</strong> : conférence de Wannsee, planification de la « Solution finale »</li>
                                            <li><strong>Camps d'extermination</strong> : Auschwitz-Birkenau, Treblinka, Sobibor... Chambres à gaz, extermination industrielle</li>
                                            <li><strong>Bilan</strong> : environ 6 millions de Juifs assassinés, soit les deux tiers des Juifs d'Europe</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Génocide</span>
                                            <span class="def-text">Destruction méthodique et planifiée d'un groupe ethnique, national, racial ou religieux. Le terme a été créé en 1944 par le juriste Raphael Lemkin. La Shoah (Juifs) et le génocide des Tsiganes (Porajmos) sont les deux génocides de la Seconde Guerre mondiale.</span>
                                        </div>
                                    `
                                },
                                {
                                    title: '🇫🇷 III. La France dans la guerre',
                                    content: `
                                        <h4>La défaite et le régime de Vichy</h4>
                                        <p>Après la défaite de juin 1940, la France est coupée en deux. Le maréchal <strong>Pétain</strong> instaure le <strong>régime de Vichy</strong>, qui collabore avec l'Allemagne nazie : il livre des Juifs, fournit de la main-d'œuvre (STO) et aide l'occupant.</p>

                                        <h4>La Résistance et la France libre</h4>
                                        <p>Le <strong>18 juin 1940</strong>, le général <strong>de Gaulle</strong> lance son appel depuis Londres, refusant la défaite. La <strong>Résistance</strong> s'organise progressivement : réseaux clandestins, maquis, sabotages, renseignement. Jean Moulin unifie la Résistance en créant le <strong>CNR</strong> (Conseil national de la Résistance) en 1943.</p>

                                        <h4>La Libération</h4>
                                        <p>Après le débarquement du 6 juin 1944 en Normandie, Paris est libéré le <strong>25 août 1944</strong>. Le programme du CNR pose les bases de la France d'après-guerre : Sécurité sociale, nationalisations, droit de vote des femmes.</p>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">1er sept. 1939</span> Invasion de la Pologne, début de la guerre</li>
                                                <li><span class="date">18 juin 1940</span> Appel du général de Gaulle</li>
                                                <li><span class="date">22 juin 1941</span> Invasion de l'URSS par l'Allemagne</li>
                                                <li><span class="date">7 déc. 1941</span> Pearl Harbor, entrée en guerre des USA</li>
                                                <li><span class="date">6 juin 1944</span> Débarquement en Normandie</li>
                                                <li><span class="date">8 mai 1945</span> Capitulation de l'Allemagne</li>
                                                <li><span class="date">6-9 août 1945</span> Bombes atomiques sur Hiroshima et Nagasaki</li>
                                                <li><span class="date">2 sept. 1945</span> Capitulation du Japon, fin de la guerre</li>
                                            </ul>
                                        </div>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le bac</span>
                                            <p>Pour montrer que c'est une guerre d'anéantissement, articule violence militaire (bombardements, Blitzkrieg), violence contre les civils (Shoah, bombardements de villes) et idéologies (nazisme, racisme). N'oublie pas le bilan : 60 millions de morts dont une majorité de civils.</p>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 2 – La multiplication des acteurs internationaux dans un monde bipolaire (de 1945 au début des années 1970)',
                    chapters: [
                        {
                            id: 'ter-h3',
                            title: 'La guerre froide (1947-1991)',
                            subtitle: 'Un monde bipolaire entre Est et Ouest',
                            sections: [
                                {
                                    title: '🧊 I. La mise en place du monde bipolaire',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Dès 1947, les deux superpuissances victorieuses de la guerre – les États-Unis et l'URSS – s'affrontent
                                            dans une rivalité globale sans jamais s'affronter directement : c'est la guerre froide. Le monde
                                            se divise en deux blocs, avec le « rideau de fer » qui coupe l'Europe en deux.
                                        </div>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Guerre froide</span>
                                            <span class="def-text">Période de tensions et de rivalité entre les États-Unis et l'URSS (1947-1991), sans affrontement militaire direct entre les deux superpuissances. Elle se manifeste par la course aux armements, la compétition idéologique, et des guerres par « pays interposés ».</span>
                                        </div>

                                        <h4>Deux blocs face à face</h4>
                                        <div class="schema-container">
                                            <div class="schema-title">📊 Le monde bipolaire</div>
                                            <table class="schema-table">
                                                <tr><th></th><th>Bloc de l'Ouest</th><th>Bloc de l'Est</th></tr>
                                                <tr><td><strong>Leader</strong></td><td>États-Unis</td><td>URSS</td></tr>
                                                <tr><td><strong>Idéologie</strong></td><td>Capitalisme, démocratie libérale</td><td>Communisme, économie planifiée</td></tr>
                                                <tr><td><strong>Alliance militaire</strong></td><td>OTAN (1949)</td><td>Pacte de Varsovie (1955)</td></tr>
                                                <tr><td><strong>Aide économique</strong></td><td>Plan Marshall (1947)</td><td>CAEM/Comecon</td></tr>
                                                <tr><td><strong>Zone</strong></td><td>Europe de l'Ouest, Amériques, Japon</td><td>Europe de l'Est, Chine (jusqu'en 1960)</td></tr>
                                            </table>
                                        </div>
                                    `
                                },
                                {
                                    title: '💥 II. Les crises majeures et la fin de la guerre froide',
                                    content: `
                                        <h4>Les grandes crises</h4>
                                        <ul>
                                            <li><strong>Blocus de Berlin</strong> (1948-1949) : l'URSS bloque l'accès à Berlin-Ouest, les USA organisent un pont aérien</li>
                                            <li><strong>Guerre de Corée</strong> (1950-1953) : premier conflit armé de la guerre froide</li>
                                            <li><strong>Crise de Cuba</strong> (1962) : le monde frôle la guerre nucléaire quand l'URSS installe des missiles à Cuba</li>
                                            <li><strong>Guerre du Vietnam</strong> (1955-1975) : intervention américaine massive, défaite des USA</li>
                                        </ul>

                                        <h4>La chute du bloc soviétique</h4>
                                        <p>À partir de 1985, <strong>Gorbatchev</strong> lance des réformes (glasnost, perestroïka) qui accélèrent la fin du système soviétique :</p>
                                        <ul>
                                            <li><strong>1989</strong> : chute du mur de Berlin (9 novembre), révolutions en Europe de l'Est</li>
                                            <li><strong>1990</strong> : réunification allemande</li>
                                            <li><strong>1991</strong> : dissolution de l'URSS (25 décembre)</li>
                                        </ul>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">1947</span> Doctrine Truman, plan Marshall</li>
                                                <li><span class="date">1948-1949</span> Blocus de Berlin</li>
                                                <li><span class="date">1961</span> Construction du mur de Berlin</li>
                                                <li><span class="date">1962</span> Crise des missiles de Cuba</li>
                                                <li><span class="date">9 nov. 1989</span> Chute du mur de Berlin</li>
                                                <li><span class="date">25 déc. 1991</span> Dissolution de l'URSS</li>
                                            </ul>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'ter-h4',
                            title: 'La décolonisation',
                            subtitle: 'Indépendances et construction de nouveaux États',
                            sections: [
                                {
                                    title: '🏴 I. Les causes et les formes de la décolonisation',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Après 1945, les empires coloniaux européens s'effondrent. En Asie puis en Afrique, les peuples
                                            colonisés revendiquent leur indépendance. Certaines se font pacifiquement (Inde), d'autres
                                            par la guerre (Algérie, Indochine). En trente ans (1945-1975), la carte du monde est redessinée.
                                        </div>

                                        <h4>Les causes de la décolonisation</h4>
                                        <ul>
                                            <li><strong>Affaiblissement des métropoles</strong> après la Seconde Guerre mondiale</li>
                                            <li><strong>Montée des nationalismes</strong> dans les colonies (élites formées en Europe)</li>
                                            <li><strong>Pression internationale</strong> : ONU, États-Unis et URSS hostiles au colonialisme</li>
                                            <li><strong>Principes de la Charte de l'ONU</strong> : droit des peuples à disposer d'eux-mêmes</li>
                                        </ul>

                                        <h4>Deux voies vers l'indépendance</h4>
                                        <ul>
                                            <li><strong>Indépendance négociée</strong> : l'Inde (1947, Gandhi et la non-violence), l'Afrique noire française (1960)</li>
                                            <li><strong>Indépendance par la guerre</strong> : l'Indochine (1946-1954, défaite française à Diên Biên Phu), l'Algérie (1954-1962)</li>
                                        </ul>
                                    `
                                },
                                {
                                    title: '🌍 II. La guerre d\'Algérie et le Tiers monde',
                                    content: `
                                        <h4>La guerre d'Algérie (1954-1962)</h4>
                                        <p>L'Algérie, considérée comme partie intégrante de la France, est le théâtre d'une guerre longue et violente. Le <strong>FLN</strong> (Front de libération nationale) mène la lutte pour l'indépendance. La guerre divise profondément la société française. Les <strong>accords d'Évian</strong> (mars 1962) mettent fin au conflit. L'Algérie devient indépendante le 5 juillet 1962.</p>

                                        <h4>Le Tiers monde et le mouvement des non-alignés</h4>
                                        <p>Les nouveaux États indépendants refusent de choisir entre les deux blocs. À la <strong>conférence de Bandung</strong> (1955), ils affirment leur volonté de rester <strong>non-alignés</strong> et de coopérer entre eux.</p>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Tiers monde</span>
                                            <span class="def-text">Expression créée par Alfred Sauvy en 1952, par analogie avec le Tiers état de 1789. Désigne les pays qui ne font partie ni du bloc occidental ni du bloc soviétique, et qui sont souvent d'anciennes colonies en développement.</span>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 3 – Les remises en cause économiques, politiques et sociales des années 1970 à 1991',
                    chapters: [
                        {
                            id: 'ter-h5',
                            title: 'La modification des grands équilibres économiques et politiques mondiaux',
                            subtitle: 'Crises économiques, montée du libéralisme et fin de la guerre froide',
                            sections: [
                                {
                                    title: '📉 I. Les chocs pétroliers et la fin des Trente Glorieuses',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Pendant trente ans (1945-1975), les pays occidentaux ont connu une croissance économique
                                            exceptionnelle : les Trente Glorieuses. Mais les chocs pétroliers de 1973 et 1979 mettent
                                            fin à cette période faste. Le chômage de masse apparaît, et de nouvelles politiques
                                            économiques s'imposent.
                                        </div>

                                        <h4>Les Trente Glorieuses (1945-1975)</h4>
                                        <ul>
                                            <li>Croissance économique forte et continue (5% par an en moyenne)</li>
                                            <li>Plein emploi, hausse du niveau de vie</li>
                                            <li>Société de consommation : automobile, électroménager, loisirs</li>
                                            <li>État-providence : Sécurité sociale, allocations, services publics</li>
                                        </ul>

                                        <h4>Les chocs pétroliers</h4>
                                        <p>En <strong>1973</strong>, les pays producteurs de pétrole (OPEP) quadruplent le prix du pétrole en réponse à la guerre du Kippour. Un deuxième choc suit en <strong>1979</strong> (révolution iranienne). Les économies occidentales plongent dans la <strong>stagflation</strong> (stagnation + inflation).</p>
                                    `
                                },
                                {
                                    title: '🌐 II. La montée du néolibéralisme',
                                    content: `
                                        <h4>Le tournant libéral des années 1980</h4>
                                        <p>Face à la crise, <strong>Margaret Thatcher</strong> (Royaume-Uni, 1979) et <strong>Ronald Reagan</strong> (États-Unis, 1981) imposent des politiques néolibérales :</p>
                                        <ul>
                                            <li>Privatisations des entreprises publiques</li>
                                            <li>Dérégulation des marchés financiers</li>
                                            <li>Réduction des impôts et de la protection sociale</li>
                                            <li>Lutte contre les syndicats</li>
                                        </ul>

                                        <h4>En France : alternances et transformations</h4>
                                        <p>L'élection de <strong>François Mitterrand</strong> en 1981 marque l'alternance politique (premier président socialiste de la Ve République). Après une politique de relance keynésienne (1981-1983), le gouvernement opère un « tournant de la rigueur » et adopte progressivement une politique plus libérale.</p>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">1973</span> Premier choc pétrolier</li>
                                                <li><span class="date">1979</span> Deuxième choc pétrolier, Thatcher au pouvoir</li>
                                                <li><span class="date">1981</span> Élection de Mitterrand, Reagan aux USA</li>
                                                <li><span class="date">1989</span> Chute du mur de Berlin</li>
                                                <li><span class="date">1991</span> Dissolution de l'URSS</li>
                                            </ul>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 4 – Le monde, l\'Europe et la France depuis les années 1990, entre coopérations et conflits',
                    chapters: [
                        {
                            id: 'ter-h6',
                            title: 'Le monde depuis 1991 : un nouvel ordre mondial ?',
                            subtitle: 'Superpuissance américaine, terrorisme et multipolarité',
                            sections: [
                                {
                                    title: '🇺🇸 I. L\'hyperpuissance américaine et ses limites',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Après la chute de l'URSS en 1991, les États-Unis semblent être la seule superpuissance mondiale.
                                            Le président Bush père parle d'un « nouvel ordre mondial ». Mais les attentats du 11 septembre 2001
                                            et les guerres qui suivent montrent les limites de la puissance américaine. Aujourd'hui, le monde
                                            est devenu multipolaire.
                                        </div>

                                        <h4>Les années 1990 : le « moment unipolaire »</h4>
                                        <ul>
                                            <li>Les États-Unis, seule superpuissance : première armée, première économie, soft power (Hollywood, Internet)</li>
                                            <li>Intervention dans la guerre du Golfe (1991)</li>
                                            <li>Espoir d'un « nouvel ordre mondial » fondé sur le droit international et l'ONU</li>
                                        </ul>

                                        <h4>Le 11 septembre 2001 et ses conséquences</h4>
                                        <p>Les attentats du 11 septembre marquent un tournant. Les États-Unis lancent une « guerre contre le terrorisme » :</p>
                                        <ul>
                                            <li><strong>2001</strong> : intervention en Afghanistan (contre les talibans et Al-Qaïda)</li>
                                            <li><strong>2003</strong> : invasion de l'Irak (sans mandat de l'ONU), renversement de Saddam Hussein</li>
                                            <li>Ces guerres s'enlisent et fragilisent la légitimité américaine</li>
                                        </ul>
                                    `
                                },
                                {
                                    title: '🌍 II. Vers un monde multipolaire',
                                    content: `
                                        <h4>De nouvelles puissances émergent</h4>
                                        <ul>
                                            <li><strong>Chine</strong> : deuxième économie mondiale, puissance militaire et technologique croissante</li>
                                            <li><strong>Russie</strong> : retour sur la scène internationale (Poutine), tensions avec l'Occident</li>
                                            <li><strong>Puissances régionales</strong> : Inde, Brésil, Turquie, Arabie saoudite</li>
                                        </ul>

                                        <h4>Les nouveaux conflits</h4>
                                        <ul>
                                            <li><strong>Terrorisme</strong> : Al-Qaïda, Daech, attentats en Europe (2015-2016)</li>
                                            <li><strong>Conflits régionaux</strong> : Syrie, Libye, Sahel, Ukraine</li>
                                            <li><strong>Tensions géopolitiques</strong> : rivalité USA-Chine, guerre en Ukraine (2022)</li>
                                        </ul>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Du monde bipolaire au monde multipolaire</div>
                                            <div class="schema-flow">
                                                <div class="flow-row">
                                                    <div class="flow-box primary">1947-1991<br><small>Monde bipolaire</small><br><small>USA vs URSS</small></div>
                                                    <span class="flow-arrow">→</span>
                                                    <div class="flow-box accent">1991-2001<br><small>Moment unipolaire</small><br><small>Hyperpuissance USA</small></div>
                                                    <span class="flow-arrow">→</span>
                                                    <div class="flow-box secondary">Depuis 2001<br><small>Monde multipolaire</small><br><small>Nouvelles puissances</small></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le bac</span>
                                            <p>Ce chapitre est un classique du bac. Structure ta réponse en trois temps : le moment unipolaire (1991-2001), les limites de la puissance américaine (11 septembre et ses suites), l'émergence d'un monde multipolaire. Utilise des exemples précis et datés.</p>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            subject: 'geographie',
            label: 'Géographie',
            icon: '🌍',
            themes: [
                {
                    theme: 'Thème 1 – Mers et océans : au cœur de la mondialisation',
                    chapters: [
                        {
                            id: 'ter-g1',
                            title: 'Mers et océans : vecteurs essentiels de la mondialisation',
                            subtitle: 'Routes maritimes, façades littorales et enjeux géostratégiques',
                            sections: [
                                {
                                    title: '🚢 I. Les mers et océans, artères de la mondialisation',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            Plus de 80% du commerce mondial transite par voie maritime. Les mers et océans sont devenus
                                            des espaces stratégiques majeurs : routes commerciales, ressources énergétiques, enjeux militaires
                                            et environnementaux. Les contrôler, c'est contrôler la mondialisation.
                                        </div>

                                        <h4>Le transport maritime, pilier du commerce mondial</h4>
                                        <ul>
                                            <li><strong>Conteneurisation</strong> : invention qui a révolutionné le transport de marchandises (standardisation, efficacité)</li>
                                            <li><strong>Routes maritimes</strong> : les principales relient l'Asie orientale à l'Europe et à l'Amérique du Nord</li>
                                            <li><strong>Points de passage stratégiques</strong> : détroits de Malacca, d'Ormuz, de Bab-el-Mandeb, canaux de Suez et Panama</li>
                                        </ul>

                                        <h4>Les grandes façades maritimes</h4>
                                        <p>Les <strong>façades maritimes</strong> concentrent les plus grands ports et les zones industrialo-portuaires :</p>
                                        <ul>
                                            <li><strong>Façade est-asiatique</strong> : Shanghai, Singapour, Busan (les plus grands ports du monde)</li>
                                            <li><strong>Northern Range</strong> : Rotterdam, Anvers, Hambourg (Europe du Nord)</li>
                                            <li><strong>Façade est des États-Unis</strong> : New York, ports du Golfe du Mexique</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Zone Économique Exclusive (ZEE)</span>
                                            <span class="def-text">Bande maritime de 200 milles nautiques (370 km) à partir des côtes d'un État. L'État côtier y a des droits exclusifs sur l'exploitation des ressources (pêche, hydrocarbures, minerais). La France possède la 2e ZEE mondiale grâce à ses territoires d'outre-mer.</span>
                                        </div>
                                    `
                                },
                                {
                                    title: '⚓ II. Les mers et océans : entre rivalités et protection',
                                    content: `
                                        <h4>Des espaces de rivalités géopolitiques</h4>
                                        <ul>
                                            <li><strong>Mer de Chine méridionale</strong> : la Chine revendique la quasi-totalité de cet espace, tensions avec les pays voisins et les USA</li>
                                            <li><strong>Arctique</strong> : la fonte des glaces ouvre de nouvelles routes et l'accès à des ressources, rivalités entre Russie, Canada, USA, Norvège</li>
                                            <li><strong>Piraterie</strong> : golfe de Guinée, détroit de Malacca, corne de l'Afrique</li>
                                        </ul>

                                        <h4>Les enjeux environnementaux</h4>
                                        <ul>
                                            <li><strong>Pollution</strong> : marées noires, plastiques, rejets industriels</li>
                                            <li><strong>Surpêche</strong> : épuisement des stocks de poissons, pêche illégale</li>
                                            <li><strong>Réchauffement climatique</strong> : montée des eaux, acidification des océans, blanchissement des coraux</li>
                                        </ul>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le bac</span>
                                            <p>En croquis de géographie, savoir localiser les grandes routes maritimes, les détroits et canaux stratégiques, les principales façades maritimes et les espaces de tensions (mer de Chine, Arctique).</p>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 2 – Dynamiques territoriales, coopérations et tensions dans la mondialisation',
                    chapters: [
                        {
                            id: 'ter-g2',
                            title: 'Des territoires inégalement intégrés dans la mondialisation',
                            subtitle: 'Centres, périphéries et marges de la mondialisation',
                            sections: [
                                {
                                    title: '🌐 I. Une mondialisation sélective',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            La mondialisation ne profite pas à tous les territoires de la même façon. Certains espaces
                                            en sont les moteurs (pôles de la Triade, métropoles mondiales), d'autres s'y intègrent
                                            progressivement (pays émergents), et d'autres encore en sont largement exclus (PMA).
                                        </div>

                                        <h4>Les pôles de la mondialisation</h4>
                                        <ul>
                                            <li><strong>La Triade</strong> : Amérique du Nord, Europe occidentale, Asie-Pacifique (Japon, Corée du Sud, Australie) – concentrent les échanges, les IDE et les sièges sociaux</li>
                                            <li><strong>Les villes mondiales</strong> : New York, Londres, Tokyo, Paris – nœuds de la mondialisation</li>
                                            <li><strong>Les pays émergents</strong> : Chine, Inde, Brésil – s'intègrent rapidement dans les flux mondiaux</li>
                                        </ul>

                                        <h4>Les espaces en marge</h4>
                                        <ul>
                                            <li><strong>PMA</strong> (Pays les Moins Avancés) : surtout en Afrique subsaharienne, faiblement connectés</li>
                                            <li><strong>Espaces enclavés</strong> : pays sans littoral, régions isolées</li>
                                            <li><strong>Zones de conflit</strong> : Sahel, Syrie, Afghanistan – la guerre empêche l'intégration</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 IDE (Investissements Directs à l'Étranger)</span>
                                            <span class="def-text">Investissements réalisés par une entreprise dans un pays étranger (création d'usine, rachat d'entreprise). Les IDE sont un indicateur clé de l'intégration dans la mondialisation. Ils se concentrent dans la Triade et les pays émergents.</span>
                                        </div>
                                    `
                                },
                                {
                                    title: '🤝 II. Coopérations et tensions',
                                    content: `
                                        <h4>Les organisations régionales</h4>
                                        <p>Face à la mondialisation, les États se regroupent en organisations régionales :</p>
                                        <ul>
                                            <li><strong>Union européenne</strong> : intégration la plus poussée (marché unique, monnaie commune)</li>
                                            <li><strong>ALENA/ACEUM</strong> : accord de libre-échange nord-américain</li>
                                            <li><strong>ASEAN</strong> : coopération en Asie du Sud-Est</li>
                                            <li><strong>MERCOSUR</strong> : marché commun d'Amérique du Sud</li>
                                        </ul>

                                        <h4>Les contestations de la mondialisation</h4>
                                        <ul>
                                            <li><strong>Mouvements altermondialistes</strong> : demandent une « autre mondialisation », plus juste et durable</li>
                                            <li><strong>Protectionnisme</strong> : retour des barrières douanières (guerre commerciale USA-Chine)</li>
                                            <li><strong>Enjeux environnementaux</strong> : la mondialisation accélère le changement climatique</li>
                                        </ul>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'ter-g3',
                            title: 'L\'Union européenne dans la mondialisation',
                            subtitle: 'Construction, fonctionnement et défis de l\'UE',
                            sections: [
                                {
                                    title: '🇪🇺 I. La construction européenne',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            Née de la volonté de réconcilier la France et l'Allemagne après 1945, la construction européenne
                                            est un processus unique dans l'histoire : des États souverains acceptent de partager une partie
                                            de leur souveraineté pour construire un espace de paix et de prospérité.
                                        </div>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les grandes étapes de la construction européenne</div>
                                            <div class="schema-timeline">
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1951</div>
                                                    <div class="timeline-text">CECA (Communauté européenne du charbon et de l'acier) : 6 pays fondateurs</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1957</div>
                                                    <div class="timeline-text">Traité de Rome : création de la CEE (marché commun)</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1992</div>
                                                    <div class="timeline-text">Traité de Maastricht : création de l'Union européenne, citoyenneté européenne</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">2002</div>
                                                    <div class="timeline-text">Mise en circulation de l'euro</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">2004-2013</div>
                                                    <div class="timeline-text">Élargissement à l'Est (de 15 à 28 membres)</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">2020</div>
                                                    <div class="timeline-text">Brexit : le Royaume-Uni quitte l'UE (27 membres)</div>
                                                </div>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    title: '⚡ II. L\'UE face aux défis actuels',
                                    content: `
                                        <h4>Une puissance économique et commerciale</h4>
                                        <p>L'UE est la première puissance commerciale mondiale et le premier marché intérieur du monde (450 millions de consommateurs). Mais sa puissance politique et militaire reste limitée.</p>

                                        <h4>Les défis de l'UE</h4>
                                        <ul>
                                            <li><strong>Inégalités territoriales</strong> : écarts de développement entre Nord/Ouest et Sud/Est</li>
                                            <li><strong>Crise migratoire</strong> : désaccords entre États sur l'accueil des migrants</li>
                                            <li><strong>Euroscepticisme</strong> : montée des partis populistes, Brexit (2020)</li>
                                            <li><strong>Défense et sécurité</strong> : dépendance vis-à-vis de l'OTAN, guerre en Ukraine</li>
                                            <li><strong>Transition écologique</strong> : Pacte vert européen, neutralité carbone en 2050</li>
                                        </ul>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le bac</span>
                                            <p>Ne présente pas l'UE de façon uniquement positive ou négative. Montre ses réussites (paix, prospérité, marché unique) ET ses limites (inégalités, euroscepticisme, faiblesse politique). C'est l'équilibre qui fait la bonne copie.</p>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 3 – La France et ses régions dans l\'Union européenne et dans la mondialisation',
                    chapters: [
                        {
                            id: 'ter-g4',
                            title: 'La France : un rayonnement international différencié',
                            subtitle: 'Puissance française, territoires et métropolisation',
                            sections: [
                                {
                                    title: '🇫🇷 I. La France, une puissance mondiale',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            La France est la 7e économie mondiale, membre permanent du Conseil de sécurité de l'ONU,
                                            puissance nucléaire, et possède la 2e ZEE mondiale grâce à ses territoires ultramarins.
                                            Mais son influence est inégale et fait face à de nombreux défis.
                                        </div>

                                        <h4>Les atouts de la puissance française</h4>
                                        <ul>
                                            <li><strong>Politique</strong> : siège permanent au Conseil de sécurité de l'ONU, puissance nucléaire, armée projetable</li>
                                            <li><strong>Économique</strong> : grandes entreprises mondiales (CAC 40), tourisme (1er pays visité au monde)</li>
                                            <li><strong>Culturel</strong> : francophonie (300 millions de locuteurs), gastronomie, mode, patrimoine</li>
                                            <li><strong>Territorial</strong> : présence sur tous les océans grâce aux outre-mer, 2e ZEE mondiale</li>
                                        </ul>

                                        <h4>Paris, ville mondiale</h4>
                                        <p><strong>Paris</strong> est une <strong>ville mondiale</strong> qui concentre les fonctions de commandement : sièges sociaux, institutions, finance, culture, universités. L'Île-de-France produit 30% du PIB français.</p>
                                    `
                                },
                                {
                                    title: '🗺️ II. Les dynamiques territoriales françaises',
                                    content: `
                                        <h4>Des territoires aux dynamiques contrastées</h4>
                                        <ul>
                                            <li><strong>Métropoles dynamiques</strong> : Paris, Lyon, Toulouse, Bordeaux, Nantes – concentrent emplois et croissance</li>
                                            <li><strong>Littoraux et Sud attractifs</strong> : héliotropisme, tourisme, cadre de vie</li>
                                            <li><strong>Espaces en difficulté</strong> : anciennes régions industrielles (Nord, Lorraine), « diagonale du vide »</li>
                                            <li><strong>Outre-mer</strong> : territoires éloignés, enjeux spécifiques (isolement, dépendance, risques naturels)</li>
                                        </ul>

                                        <h4>Les politiques d'aménagement</h4>
                                        <p>L'État et les collectivités tentent de réduire les inégalités territoriales :</p>
                                        <ul>
                                            <li><strong>Décentralisation</strong> : transfert de compétences aux régions et départements</li>
                                            <li><strong>Transports</strong> : TGV, autoroutes, pour désenclaver les territoires</li>
                                            <li><strong>Numérique</strong> : déploiement de la fibre et de la 5G</li>
                                            <li><strong>Politique de la ville</strong> : rénovation urbaine des quartiers défavorisés</li>
                                        </ul>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les contrastes territoriaux en France</div>
                                            <div class="schema-map">
                                                <div class="map-region" style="background: #2563eb33; border: 2px solid #2563eb;">
                                                    <span class="region-name">Île-de-France</span>
                                                    <span class="region-detail">Ville mondiale, 30% du PIB, métropolisation</span>
                                                </div>
                                                <div class="map-region" style="background: #059669​33; border: 2px solid #059669;">
                                                    <span class="region-name">Sud et littoraux</span>
                                                    <span class="region-detail">Attractifs, héliotropisme, tourisme</span>
                                                </div>
                                                <div class="map-region" style="background: #7c3aed33; border: 2px solid #7c3aed;">
                                                    <span class="region-name">Métropoles régionales</span>
                                                    <span class="region-detail">Lyon, Toulouse, Bordeaux, Nantes</span>
                                                </div>
                                                <div class="map-region" style="background: #f59e0b33; border: 2px solid #f59e0b;">
                                                    <span class="region-name">Espaces ruraux / diagonale du vide</span>
                                                    <span class="region-detail">Désertification, perte de services</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le bac</span>
                                            <p>Pour le croquis de géographie sur la France, savoir représenter : la métropolisation (Paris dominant + métropoles régionales), les axes de communication, les espaces attractifs (Sud, littoraux) et les espaces en marge (diagonale du vide, Nord-Est).</p>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
