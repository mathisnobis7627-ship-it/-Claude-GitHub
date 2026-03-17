/* ============================================
   DONNÉES - PREMIÈRE
   Programme d'Histoire-Géographie
   ============================================ */

window.PREMIERE_DATA = {
    level: 'premiere',
    label: 'Première',
    icon: '⚔️',
    subjects: [
        {
            subject: 'histoire',
            label: 'Histoire',
            icon: '📜',
            themes: [
                {
                    theme: 'Thème 1 – L\'Europe face aux révolutions',
                    chapters: [
                        {
                            id: 'pre-h1',
                            title: 'La Révolution française et l\'Empire',
                            subtitle: '1789-1815 : une nouvelle France',
                            sections: [
                                {
                                    title: '🏰 I. 1789 : la fin de l\'Ancien Régime',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            En 1789, la France traverse une crise profonde : le roi Louis XVI est endetté, le peuple souffre
                                            de la faim, et les idées des Lumières ont fait germer l'aspiration à plus de liberté et d'égalité.
                                            La convocation des États généraux, le 5 mai 1789, va déclencher un processus révolutionnaire qui
                                            va transformer la France et l'Europe.
                                        </div>

                                        <h4>Les causes de la Révolution</h4>
                                        <ul>
                                            <li><strong>Crise financière</strong> : le royaume est endetté par les guerres et le train de vie de la cour</li>
                                            <li><strong>Crise sociale</strong> : le Tiers état supporte seul les impôts tandis que la noblesse et le clergé en sont exemptés</li>
                                            <li><strong>Crise politique</strong> : la monarchie absolue est contestée par les idées des Lumières</li>
                                            <li><strong>Crise économique</strong> : mauvaises récoltes en 1788, hausse du prix du pain</li>
                                        </ul>

                                        <h4>Les événements fondateurs</h4>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Chronologie de 1789</span>
                                            <ul>
                                                <li><span class="date">5 mai 1789</span> Ouverture des États généraux à Versailles</li>
                                                <li><span class="date">17 juin 1789</span> Le Tiers état se proclame Assemblée nationale</li>
                                                <li><span class="date">20 juin 1789</span> Serment du Jeu de Paume</li>
                                                <li><span class="date">14 juillet 1789</span> Prise de la Bastille</li>
                                                <li><span class="date">4 août 1789</span> Abolition des privilèges</li>
                                                <li><span class="date">26 août 1789</span> Déclaration des droits de l'homme et du citoyen (DDHC)</li>
                                            </ul>
                                        </div>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 DDHC (26 août 1789)</span>
                                            <span class="def-text">Texte fondateur qui proclame les droits naturels et imprescriptibles de l'homme : la liberté, la propriété, la sûreté et la résistance à l'oppression. Elle affirme l'égalité en droits et la souveraineté de la nation.</span>
                                        </div>
                                    `
                                },
                                {
                                    title: '⚔️ II. De la monarchie constitutionnelle à la République (1789-1799)',
                                    content: `
                                        <h4>La monarchie constitutionnelle (1789-1792)</h4>
                                        <p>L'Assemblée nationale rédige une <strong>Constitution</strong> (1791) qui limite les pouvoirs du roi. Mais Louis XVI tente de fuir (fuite à Varennes, juin 1791), perdant la confiance du peuple.</p>

                                        <h4>La République et la Terreur (1792-1794)</h4>
                                        <p>En septembre 1792, la République est proclamée. Louis XVI est jugé et guillotiné le <strong>21 janvier 1793</strong>. Face aux menaces intérieures et extérieures, le Comité de salut public dirigé par <strong>Robespierre</strong> instaure la <strong>Terreur</strong> : des milliers de « suspects » sont exécutés. Robespierre est lui-même guillotiné en juillet 1794.</p>

                                        <h4>Napoléon Bonaparte : du Consulat à l'Empire</h4>
                                        <p>En 1799, le général Bonaparte prend le pouvoir par un coup d'État. Il se proclame <strong>empereur</strong> en 1804. Il modernise la France (Code civil, lycées, préfets) mais mène des guerres de conquête dans toute l'Europe. Vaincu à Waterloo (1815), il est exilé.</p>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les régimes politiques de 1789 à 1815</div>
                                            <div class="schema-timeline">
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1789-1792</div>
                                                    <div class="timeline-text">Monarchie constitutionnelle</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1792-1799</div>
                                                    <div class="timeline-text">Première République (Convention puis Directoire)</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1799-1804</div>
                                                    <div class="timeline-text">Consulat (Bonaparte)</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1804-1815</div>
                                                    <div class="timeline-text">Premier Empire (Napoléon Ier)</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le contrôle</span>
                                            <p>Retiens bien les héritages de la Révolution : DDHC, abolition des privilèges, souveraineté nationale, Code civil. Ce sont les fondements de la France moderne.</p>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'pre-h2',
                            title: 'L\'Europe entre restauration et révolution (1814-1848)',
                            subtitle: 'Le combat entre l\'ordre ancien et les aspirations nouvelles',
                            sections: [
                                {
                                    title: '👑 I. Le congrès de Vienne et la Restauration',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Après la chute de Napoléon, les grandes puissances européennes se réunissent à Vienne (1814-1815)
                                            pour redessiner la carte de l'Europe et restaurer l'ordre monarchique. Mais les idées de liberté
                                            et de nation semées par la Révolution française ne sont pas mortes...
                                        </div>

                                        <h4>Le congrès de Vienne (1814-1815)</h4>
                                        <p>Organisé par le chancelier autrichien <strong>Metternich</strong>, le congrès vise à :</p>
                                        <ul>
                                            <li>Restaurer les dynasties légitimes sur leurs trônes</li>
                                            <li>Redessiner les frontières pour équilibrer les puissances</li>
                                            <li>Empêcher toute nouvelle révolution (Sainte-Alliance)</li>
                                        </ul>

                                        <h4>En France : Restauration et monarchie de Juillet</h4>
                                        <p>Les Bourbons reviennent au pouvoir : <strong>Louis XVIII</strong> (1814-1824) puis <strong>Charles X</strong> (1824-1830). Ce dernier tente de rétablir la monarchie absolue, provoquant les <strong>Trois Glorieuses</strong> (27-29 juillet 1830), une révolution qui le renverse.</p>
                                        <p><strong>Louis-Philippe</strong>, le « roi-citoyen », instaure une monarchie constitutionnelle plus libérale (1830-1848).</p>
                                    `
                                },
                                {
                                    title: '🏴 II. Les mouvements nationaux et libéraux',
                                    content: `
                                        <h4>Le « Printemps des peuples » (1848)</h4>
                                        <p>En 1848, une vague révolutionnaire déferle sur toute l'Europe. Les peuples réclament :</p>
                                        <ul>
                                            <li>La <strong>liberté</strong> : liberté de presse, d'association, de réunion</li>
                                            <li>L'<strong>égalité</strong> : suffrage universel, abolition des privilèges</li>
                                            <li>La <strong>nation</strong> : droit des peuples à disposer d'eux-mêmes</li>
                                        </ul>

                                        <p>En France, la révolution de février 1848 renverse Louis-Philippe et proclame la <strong>IIe République</strong>. Le suffrage universel masculin est instauré, l'esclavage est aboli (décret Schoelcher).</p>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Nationalisme</span>
                                            <span class="def-text">Idéologie affirmant que chaque peuple (nation) a le droit de se gouverner lui-même dans un État souverain. Au XIXe siècle, le nationalisme est un mouvement libéral et progressiste qui revendique la liberté des peuples.</span>
                                        </div>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">1814-1815</span> Congrès de Vienne</li>
                                                <li><span class="date">1830</span> Trois Glorieuses en France, révolutions en Belgique, Pologne</li>
                                                <li><span class="date">1848</span> Printemps des peuples, IIe République en France</li>
                                            </ul>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 2 – La France dans l\'Europe des nationalités : politique et société (1848-1871)',
                    chapters: [
                        {
                            id: 'pre-h3',
                            title: 'La difficile entrée dans l\'âge démocratique : la Deuxième République et le Second Empire',
                            subtitle: 'De la IIe République au Second Empire (1848-1870)',
                            sections: [
                                {
                                    title: '🗳️ I. La IIe République (1848-1852)',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            La IIe République, née dans l'enthousiasme de février 1848, porte de grandes espérances :
                                            suffrage universel masculin, abolition de l'esclavage, liberté de la presse. Mais les divisions
                                            sociales sont profondes, et en décembre 1851, le président Louis-Napoléon Bonaparte s'empare
                                            du pouvoir par un coup d'État.
                                        </div>

                                        <h4>Les avancées de la IIe République</h4>
                                        <ul>
                                            <li><strong>Suffrage universel masculin</strong> (mars 1848)</li>
                                            <li><strong>Abolition de l'esclavage</strong> dans les colonies (avril 1848, décret Schoelcher)</li>
                                            <li><strong>Liberté de la presse</strong> et de réunion</li>
                                            <li>Création des <strong>Ateliers nationaux</strong> (emploi pour les chômeurs)</li>
                                        </ul>

                                        <h4>La chute de la République</h4>
                                        <p>Les <strong>journées de Juin 1848</strong> (insurrection ouvrière à Paris, réprimée dans le sang) marquent la rupture entre bourgeoisie et ouvriers. <strong>Louis-Napoléon Bonaparte</strong>, élu président en décembre 1848, réalise un coup d'État le <strong>2 décembre 1851</strong> et se proclame empereur sous le nom de <strong>Napoléon III</strong>.</p>
                                    `
                                },
                                {
                                    title: '🏭 II. Le Second Empire (1852-1870)',
                                    content: `
                                        <h4>Un régime autoritaire qui se libéralise</h4>
                                        <p>Le Second Empire est d'abord un régime <strong>autoritaire</strong> : censure, contrôle des élections, opposition muselée. Mais à partir des années 1860, Napoléon III <strong>libéralise</strong> progressivement le régime : droit de grève (1864), liberté de réunion (1868).</p>

                                        <h4>La modernisation économique</h4>
                                        <p>Le Second Empire est une période de forte croissance économique :</p>
                                        <ul>
                                            <li>Développement du <strong>chemin de fer</strong> (réseau multiplié par 6)</li>
                                            <li>Transformation de Paris par le baron <strong>Haussmann</strong></li>
                                            <li>Industrialisation et essor du libre-échange</li>
                                            <li>Expansion coloniale (Algérie, Indochine)</li>
                                        </ul>

                                        <h4>La chute du Second Empire</h4>
                                        <p>La défaite face à la Prusse à <strong>Sedan</strong> (2 septembre 1870) entraîne la chute de Napoléon III. La <strong>IIIe République</strong> est proclamée le 4 septembre 1870.</p>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">Fév. 1848</span> Proclamation de la IIe République</li>
                                                <li><span class="date">Avr. 1848</span> Abolition de l'esclavage (décret Schoelcher)</li>
                                                <li><span class="date">2 déc. 1851</span> Coup d'État de Louis-Napoléon Bonaparte</li>
                                                <li><span class="date">1852-1870</span> Second Empire</li>
                                                <li><span class="date">2 sept. 1870</span> Défaite de Sedan, chute du Second Empire</li>
                                            </ul>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'pre-h4',
                            title: 'L\'unité italienne et l\'unité allemande',
                            subtitle: 'Les constructions nationales au XIXe siècle',
                            sections: [
                                {
                                    title: '🇮🇹 I. L\'unité italienne (1848-1871)',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Au milieu du XIXe siècle, l'Italie n'est qu'une « expression géographique » : elle est divisée
                                            en plusieurs États, dont une partie est sous domination autrichienne. Le mouvement du Risorgimento
                                            (« résurrection ») va progressivement réaliser l'unification autour du royaume de Piémont-Sardaigne.
                                        </div>

                                        <h4>Les acteurs de l'unité italienne</h4>
                                        <ul>
                                            <li><strong>Cavour</strong> : Premier ministre du Piémont, il mène la diplomatie (alliance avec la France de Napoléon III)</li>
                                            <li><strong>Garibaldi</strong> : héros populaire, il conquiert le sud de l'Italie avec l'expédition des Mille (1860)</li>
                                            <li><strong>Victor-Emmanuel II</strong> : roi de Piémont-Sardaigne, puis premier roi d'Italie (1861)</li>
                                        </ul>

                                        <p>L'unité s'achève avec la prise de <strong>Rome</strong> en 1870, qui devient la capitale du royaume d'Italie.</p>
                                    `
                                },
                                {
                                    title: '🇩🇪 II. L\'unité allemande (1848-1871)',
                                    content: `
                                        <h4>Le rôle de la Prusse et de Bismarck</h4>
                                        <p>L'Allemagne est elle aussi divisée en de nombreux États. Le chancelier prussien <strong>Otto von Bismarck</strong> réalise l'unité « par le fer et par le sang », c'est-à-dire par la guerre :</p>
                                        <ul>
                                            <li><strong>1864</strong> : guerre contre le Danemark</li>
                                            <li><strong>1866</strong> : victoire contre l'Autriche (Sadowa), création de la Confédération de l'Allemagne du Nord</li>
                                            <li><strong>1870-1871</strong> : guerre contre la France, victoire prussienne</li>
                                        </ul>

                                        <p>Le <strong>18 janvier 1871</strong>, l'Empire allemand (IIe Reich) est proclamé dans la galerie des Glaces de Versailles. <strong>Guillaume Ier</strong> devient empereur.</p>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Italie vs Allemagne : deux unifications</div>
                                            <table class="schema-table">
                                                <tr><th></th><th>Italie</th><th>Allemagne</th></tr>
                                                <tr><td><strong>État moteur</strong></td><td>Piémont-Sardaigne</td><td>Prusse</td></tr>
                                                <tr><td><strong>Homme clé</strong></td><td>Cavour (diplomatie) + Garibaldi (action)</td><td>Bismarck (guerre)</td></tr>
                                                <tr><td><strong>Méthode</strong></td><td>Diplomatie + insurrections populaires</td><td>Guerres victorieuses</td></tr>
                                                <tr><td><strong>Date d'unification</strong></td><td>1861 (Rome en 1870)</td><td>1871</td></tr>
                                                <tr><td><strong>Régime</strong></td><td>Monarchie constitutionnelle</td><td>Empire fédéral</td></tr>
                                            </table>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 3 – La Troisième République avant 1914 : un régime politique, un empire colonial',
                    chapters: [
                        {
                            id: 'pre-h5',
                            title: 'La mise en œuvre du projet républicain',
                            subtitle: 'L\'enracinement de la République en France (1870-1914)',
                            sections: [
                                {
                                    title: '🇫🇷 I. L\'installation difficile de la République',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Après la chute du Second Empire en 1870, la République s'installe progressivement en France,
                                            mais elle est fragile. Il faut attendre les années 1880 pour que les républicains l'emportent
                                            définitivement et mettent en œuvre leur projet politique : école gratuite, laïque et obligatoire,
                                            libertés fondamentales, et séparation de l'Église et de l'État.
                                        </div>

                                        <h4>Les crises surmontées</h4>
                                        <ul>
                                            <li><strong>La Commune de Paris</strong> (mars-mai 1871) : insurrection populaire, violemment réprimée</li>
                                            <li><strong>La crise du 16 mai 1877</strong> : tentative du président Mac-Mahon de reprendre le pouvoir, échec qui confirme la primauté du Parlement</li>
                                            <li><strong>Le boulangisme</strong> (1886-1889) : menace populiste du général Boulanger</li>
                                            <li><strong>L'affaire Dreyfus</strong> (1894-1906) : division profonde de la société française</li>
                                        </ul>
                                    `
                                },
                                {
                                    title: '📚 II. Les grandes lois républicaines',
                                    content: `
                                        <h4>L'école de la République</h4>
                                        <p>Les <strong>lois Jules Ferry</strong> (1881-1882) rendent l'école <strong>gratuite, laïque et obligatoire</strong> (de 6 à 13 ans). L'école doit former des citoyens républicains, attachés aux valeurs de liberté, égalité et fraternité.</p>

                                        <h4>Les grandes libertés</h4>
                                        <ul>
                                            <li><strong>1881</strong> : liberté de la presse</li>
                                            <li><strong>1884</strong> : liberté syndicale</li>
                                            <li><strong>1901</strong> : liberté d'association</li>
                                        </ul>

                                        <h4>La laïcité</h4>
                                        <p>La loi de <strong>séparation des Églises et de l'État</strong> (9 décembre 1905) établit la laïcité : l'État ne reconnaît, ne salarie ni ne subventionne aucun culte. La liberté de conscience est garantie.</p>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Laïcité</span>
                                            <span class="def-text">Principe de séparation du politique et du religieux. L'État est neutre en matière religieuse, garantit la liberté de conscience et ne privilégie aucune religion. En France, ce principe est fixé par la loi de 1905.</span>
                                        </div>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">1881-1882</span> Lois Jules Ferry (école gratuite, laïque, obligatoire)</li>
                                                <li><span class="date">1881</span> Liberté de la presse</li>
                                                <li><span class="date">1884</span> Liberté syndicale</li>
                                                <li><span class="date">1894-1906</span> Affaire Dreyfus</li>
                                                <li><span class="date">1901</span> Liberté d'association</li>
                                                <li><span class="date">1905</span> Loi de séparation des Églises et de l'État</li>
                                            </ul>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'pre-h6',
                            title: 'Permanences et mutations de la société française (1870-1914)',
                            subtitle: 'Industrialisation, urbanisation et question sociale',
                            sections: [
                                {
                                    title: '🏭 I. L\'industrialisation et ses conséquences',
                                    content: `
                                        <h4>La deuxième révolution industrielle</h4>
                                        <p>À partir des années 1880, de nouvelles innovations transforment l'économie et la société :</p>
                                        <ul>
                                            <li><strong>Électricité</strong> : éclairage, moteur électrique, métro</li>
                                            <li><strong>Pétrole et automobile</strong> : les premiers véhicules à moteur</li>
                                            <li><strong>Chimie</strong> : médicaments, engrais, matières plastiques</li>
                                            <li><strong>Acier</strong> : construction (tour Eiffel, 1889), armement</li>
                                        </ul>

                                        <h4>L'urbanisation</h4>
                                        <p>Les villes grandissent rapidement. Paris passe de 1 à 3 millions d'habitants. L'exode rural s'accélère : les paysans partent travailler dans les usines des villes.</p>
                                    `
                                },
                                {
                                    title: '👷 II. La question sociale',
                                    content: `
                                        <h4>La condition ouvrière</h4>
                                        <p>Les ouvriers travaillent dans des conditions très dures : journées de 12-14 heures, salaires bas, logements insalubres, travail des enfants. La <strong>question sociale</strong> (comment améliorer la vie des travailleurs ?) devient un enjeu politique majeur.</p>

                                        <h4>Les réponses</h4>
                                        <ul>
                                            <li><strong>Le mouvement ouvrier</strong> : syndicats (CGT, 1895), grèves, partis socialistes (SFIO de Jaurès, 1905)</li>
                                            <li><strong>Les lois sociales</strong> : limitation du travail des enfants, repos hebdomadaire (1906), retraites ouvrières (1910)</li>
                                            <li><strong>Le catholicisme social</strong> : l'Église encourage le patronat à améliorer les conditions de travail</li>
                                        </ul>

                                        <div class="figures-box">
                                            <span class="figures-label">👤 Personnages clés</span>
                                            <ul>
                                                <li><strong>Jean Jaurès</strong> (1859-1914) : leader socialiste, fondateur de la SFIO, pacifiste, assassiné le 31 juillet 1914</li>
                                                <li><strong>Émile Zola</strong> (1840-1902) : écrivain, dénonce les conditions ouvrières (<em>Germinal</em>), défend Dreyfus (« J'accuse »)</li>
                                            </ul>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 4 – La Première Guerre mondiale : le « suicide de l\'Europe » et la fin des empires',
                    chapters: [
                        {
                            id: 'pre-h7',
                            title: 'Un embrasement mondial et ses grandes étapes',
                            subtitle: '1914-1918 : la Grande Guerre',
                            sections: [
                                {
                                    title: '💥 I. Les causes et le déclenchement de la guerre',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Le 28 juin 1914, l'archiduc François-Ferdinand d'Autriche est assassiné à Sarajevo. En quelques
                                            semaines, le jeu des alliances entraîne toute l'Europe dans la guerre. Ce qui devait être un
                                            conflit court et victorieux se transforme en une guerre totale de quatre ans, faisant plus de
                                            10 millions de morts.
                                        </div>

                                        <h4>Les causes profondes</h4>
                                        <ul>
                                            <li><strong>Nationalisme</strong> exacerbé : rivalités entre puissances (France-Allemagne), revendications des peuples des Balkans</li>
                                            <li><strong>Impérialisme</strong> : compétition coloniale, courses aux armements</li>
                                            <li><strong>Alliances</strong> : Triple-Entente (France, Royaume-Uni, Russie) vs Triple-Alliance (Allemagne, Autriche-Hongrie, Italie)</li>
                                        </ul>

                                        <h4>Les grandes phases de la guerre</h4>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les phases de la Grande Guerre</div>
                                            <div class="schema-timeline">
                                                <div class="timeline-item">
                                                    <div class="timeline-date">Août-Nov. 1914</div>
                                                    <div class="timeline-text"><strong>Guerre de mouvement</strong> : offensives rapides, bataille de la Marne</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1915-1917</div>
                                                    <div class="timeline-text"><strong>Guerre de position (tranchées)</strong> : Verdun (1916), Somme (1916), mutineries (1917)</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1917</div>
                                                    <div class="timeline-text"><strong>Tournant</strong> : entrée en guerre des États-Unis, révolution russe et armistice russe</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1918</div>
                                                    <div class="timeline-text"><strong>Retour à la guerre de mouvement</strong> : offensives allemandes puis contre-offensive alliée</div>
                                                </div>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    title: '🏴 II. Une guerre totale et ses conséquences',
                                    content: `
                                        <div class="definition-box">
                                            <span class="def-term">🔑 Guerre totale</span>
                                            <span class="def-text">Guerre qui mobilise toutes les ressources d'un pays : militaires (mobilisation générale), économiques (économie de guerre), culturelles (propagande) et humaines (civils mobilisés pour l'effort de guerre).</span>
                                        </div>

                                        <h4>L'expérience combattante</h4>
                                        <p>Les soldats (les « poilus » en France) vivent dans des conditions terribles dans les tranchées : boue, rats, gaz, bombardements, assauts meurtriers. La bataille de <strong>Verdun</strong> (février-décembre 1916) symbolise cette violence de masse : 300 000 morts.</p>

                                        <h4>Le génocide des Arméniens (1915-1916)</h4>
                                        <p>L'Empire ottoman organise le <strong>génocide</strong> de la population arménienne : déportations, massacres, marches de la mort. Entre 1,2 et 1,5 million d'Arméniens sont tués. C'est le premier génocide du XXe siècle.</p>

                                        <h4>Les conséquences de la guerre</h4>
                                        <ul>
                                            <li><strong>Bilan humain</strong> : plus de 10 millions de morts, 20 millions de blessés, « gueules cassées »</li>
                                            <li><strong>Bilan politique</strong> : chute des empires (russe, ottoman, austro-hongrois, allemand), traité de Versailles (1919)</li>
                                            <li><strong>Bilan social</strong> : traumatisme collectif, rôle accru des femmes, mouvement pacifiste</li>
                                        </ul>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">28 juin 1914</span> Assassinat de François-Ferdinand à Sarajevo</li>
                                                <li><span class="date">Fév.-Déc. 1916</span> Bataille de Verdun</li>
                                                <li><span class="date">Avril 1917</span> Entrée en guerre des États-Unis</li>
                                                <li><span class="date">11 nov. 1918</span> Armistice</li>
                                                <li><span class="date">28 juin 1919</span> Traité de Versailles</li>
                                            </ul>
                                        </div>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le contrôle</span>
                                            <p>Pour montrer que c'est une guerre totale, pense aux 4 dimensions : militaire (mobilisation), économique (usines d'armement), culturelle (propagande, « bourrage de crâne ») et humaine (civils mobilisés, femmes dans les usines).</p>
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
                    theme: 'Thème 1 – La métropolisation : un processus mondial différencié',
                    chapters: [
                        {
                            id: 'pre-g1',
                            title: 'Les villes à l\'échelle mondiale : le poids croissant des métropoles',
                            subtitle: 'Métropolisation, villes mondiales et mégapoles',
                            sections: [
                                {
                                    title: '🏙️ I. Un monde de plus en plus urbain',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            Depuis 2007, plus de la moitié de l'humanité vit en ville. En 2050, ce sera les deux tiers.
                                            Mais toutes les villes ne se ressemblent pas : certaines sont devenues des métropoles mondiales
                                            qui concentrent les pouvoirs, les richesses et les flux. C'est la métropolisation.
                                        </div>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Métropolisation</span>
                                            <span class="def-text">Processus de concentration croissante des populations, des activités, des richesses et des pouvoirs de commandement dans les plus grandes villes (métropoles). Les métropoles attirent et dominent les territoires qui les entourent.</span>
                                        </div>

                                        <h4>Les caractéristiques des métropoles</h4>
                                        <ul>
                                            <li><strong>Fonction de commandement</strong> : sièges sociaux, institutions internationales, bourses</li>
                                            <li><strong>Connectivité</strong> : hubs aériens, nœuds de télécommunications, ports</li>
                                            <li><strong>Innovation</strong> : universités, centres de recherche, start-ups</li>
                                            <li><strong>Culture</strong> : musées, événements, architecture iconique</li>
                                        </ul>

                                        <h4>Les villes mondiales (ou « villes globales »)</h4>
                                        <p>Au sommet de la hiérarchie urbaine, on trouve les <strong>villes mondiales</strong> : New York, Londres, Tokyo, Paris. Elles concentrent les fonctions de commandement économique et financier à l'échelle mondiale.</p>
                                    `
                                },
                                {
                                    title: '🌐 II. Métropolisation et inégalités',
                                    content: `
                                        <h4>Des métropoles fragmentées</h4>
                                        <p>Les métropoles sont aussi des lieux de fortes <strong>inégalités socio-spatiales</strong> :</p>
                                        <ul>
                                            <li>Quartiers d'affaires et résidences de luxe côtoient bidonvilles et quartiers défavorisés</li>
                                            <li><strong>Gentrification</strong> : les quartiers populaires sont transformés par l'arrivée de populations aisées, repoussant les anciens habitants</li>
                                            <li>Dans les pays du Sud, la croissance urbaine rapide crée des mégapoles aux défis immenses (Lagos, Dacca, Mumbai)</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Gentrification</span>
                                            <span class="def-text">Processus par lequel un quartier populaire se transforme avec l'arrivée de populations plus aisées : rénovation des logements, hausse des prix, changement des commerces, départ des anciens habitants.</span>
                                        </div>

                                        <h4>Les défis des métropoles</h4>
                                        <ul>
                                            <li><strong>Transports</strong> : embouteillages, pollution, développement des transports en commun</li>
                                            <li><strong>Logement</strong> : crise du logement, étalement urbain</li>
                                            <li><strong>Environnement</strong> : îlots de chaleur, gestion des déchets, espaces verts</li>
                                            <li><strong>Gouvernance</strong> : comment gérer une agglomération de millions d'habitants ?</li>
                                        </ul>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le contrôle</span>
                                            <p>Métropolisation ≠ urbanisation. L'urbanisation c'est l'augmentation de la population vivant en ville. La métropolisation c'est la concentration dans les plus grandes villes. Fais bien la distinction !</p>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 2 – Une diversification des espaces et des acteurs de la production',
                    chapters: [
                        {
                            id: 'pre-g2',
                            title: 'Les espaces de production dans le monde',
                            subtitle: 'Mondialisation, division internationale du travail et nouveaux acteurs',
                            sections: [
                                {
                                    title: '🏭 I. La mondialisation des espaces productifs',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            La mondialisation a profondément transformé la géographie de la production. Les entreprises
                                            fragmentent leurs chaînes de production à l'échelle mondiale : conception dans un pays,
                                            fabrication dans un autre, assemblage dans un troisième. Cette division internationale du
                                            travail crée de nouveaux espaces productifs.
                                        </div>

                                        <h4>La division internationale du travail (DIT)</h4>
                                        <ul>
                                            <li><strong>Pays développés</strong> : conception, R&D, services, marketing (haute valeur ajoutée)</li>
                                            <li><strong>Pays émergents</strong> (Chine, Inde) : fabrication industrielle, montée en gamme progressive</li>
                                            <li><strong>Pays en développement</strong> : matières premières, assemblage, main-d'œuvre peu qualifiée</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Chaîne de valeur mondiale</span>
                                            <span class="def-text">Ensemble des étapes de production d'un bien, réparties entre différents pays selon leurs avantages comparatifs. Exemple : un iPhone est conçu aux États-Unis, ses composants sont fabriqués dans plusieurs pays d'Asie, et il est assemblé en Chine.</span>
                                        </div>
                                    `
                                },
                                {
                                    title: '📍 II. Les espaces productifs en France',
                                    content: `
                                        <h4>Les mutations des espaces productifs français</h4>
                                        <p>La France connaît de profondes transformations :</p>
                                        <ul>
                                            <li><strong>Désindustrialisation</strong> : recul de l'industrie traditionnelle (textile, sidérurgie), surtout dans le Nord et l'Est</li>
                                            <li><strong>Métropolisation de la production</strong> : concentration des activités de pointe dans les grandes métropoles (Paris, Lyon, Toulouse)</li>
                                            <li><strong>Espaces productifs agricoles</strong> : agriculture intensive dans les grandes plaines (Beauce, Picardie), viticulture, élevage</li>
                                            <li><strong>Tourisme</strong> : premier pays touristique mondial, littoraux et montagne</li>
                                        </ul>

                                        <h4>Les pôles de compétitivité</h4>
                                        <p>Pour favoriser l'innovation, la France a créé des <strong>pôles de compétitivité</strong> regroupant entreprises, universités et centres de recherche sur un territoire. Exemples : Aerospace Valley (Toulouse, aéronautique), Medicen (Île-de-France, santé).</p>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 3 – Les espaces ruraux : multifonctionnalité ou fragmentation ?',
                    chapters: [
                        {
                            id: 'pre-g3',
                            title: 'La France : des espaces ruraux multifonctionnels',
                            subtitle: 'Entre agriculture, résidence, tourisme et protection de l\'environnement',
                            sections: [
                                {
                                    title: '🌾 I. Des espaces ruraux en mutation',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            Les espaces ruraux ne sont plus seulement agricoles. Ils accueillent aujourd'hui de multiples
                                            fonctions : résidentielle (néo-ruraux), touristique, environnementale, énergétique (éoliennes, solaire).
                                            On parle de multifonctionnalité.
                                        </div>

                                        <h4>La diversification des fonctions rurales</h4>
                                        <ul>
                                            <li><strong>Fonction productive</strong> : agriculture (toujours présente mais emploie moins de 3% des actifs), forêts, énergies renouvelables</li>
                                            <li><strong>Fonction résidentielle</strong> : périurbanisation, installation de « néo-ruraux » attirés par le cadre de vie</li>
                                            <li><strong>Fonction récréative</strong> : tourisme vert, randonnée, gîtes ruraux</li>
                                            <li><strong>Fonction environnementale</strong> : parcs naturels, biodiversité, puits de carbone</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Périurbanisation</span>
                                            <span class="def-text">Extension des zones urbaines vers les espaces ruraux proches. Les ménages s'installent à la campagne tout en travaillant en ville, créant des communes « périurbaines » entre ville et campagne.</span>
                                        </div>
                                    `
                                },
                                {
                                    title: '⚖️ II. Des espaces ruraux fragiles et inégaux',
                                    content: `
                                        <h4>Des dynamiques contrastées</h4>
                                        <ul>
                                            <li><strong>Espaces ruraux dynamiques</strong> : proches des métropoles, bien connectés, attractifs (Sud, Ouest)</li>
                                            <li><strong>Espaces ruraux en difficulté</strong> : « diagonale du vide » (du Nord-Est au Sud-Ouest), perte de population, de services publics</li>
                                        </ul>

                                        <h4>Les défis des espaces ruraux</h4>
                                        <ul>
                                            <li><strong>Désertification médicale</strong> : manque de médecins, fermeture d'hôpitaux</li>
                                            <li><strong>Mobilité</strong> : dépendance à la voiture, manque de transports en commun</li>
                                            <li><strong>Numérique</strong> : zones blanches, retard dans le déploiement de la fibre</li>
                                            <li><strong>Services publics</strong> : fermeture d'écoles, de bureaux de poste, de gares</li>
                                        </ul>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le contrôle</span>
                                            <p>Ne présente pas les espaces ruraux comme « en déclin ». Montre la diversité : certains sont dynamiques (périurbains, touristiques), d'autres en difficulté (ruraux isolés). Utilise des exemples localisés.</p>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 4 – La Chine : des recompositions spatiales multiples',
                    chapters: [
                        {
                            id: 'pre-g4',
                            title: 'La Chine : des recompositions spatiales multiples',
                            subtitle: 'Urbanisation, littoralisation et nouvelles routes de la soie',
                            sections: [
                                {
                                    title: '🇨🇳 I. La Chine, puissance en recomposition',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            Avec 1,4 milliard d'habitants et la deuxième économie mondiale, la Chine connaît depuis les
                                            années 1980 des transformations spatiales spectaculaires : urbanisation massive, littoralisation
                                            de l'économie, et désormais un projet d'envergure mondiale avec les « nouvelles routes de la soie ».
                                        </div>

                                        <h4>Une urbanisation spectaculaire</h4>
                                        <p>La Chine est passée de 20% de population urbaine en 1980 à plus de 65% aujourd'hui. Des villes comme <strong>Shenzhen</strong> (passée de village à mégapole de 17 millions d'habitants en 40 ans) illustrent cette transformation.</p>

                                        <h4>La littoralisation</h4>
                                        <p>Le développement économique chinois s'est d'abord concentré sur le littoral oriental, avec la création de <strong>Zones Économiques Spéciales</strong> (ZES) ouvertes aux investissements étrangers. Cela a créé un fort déséquilibre entre la côte (riche, industrialisée) et l'intérieur (rural, plus pauvre).</p>
                                    `
                                },
                                {
                                    title: '🌏 II. La Chine et le monde',
                                    content: `
                                        <h4>Les « Nouvelles routes de la soie » (BRI)</h4>
                                        <p>Lancé en 2013 par Xi Jinping, le projet <strong>Belt and Road Initiative</strong> (BRI) vise à créer un réseau d'infrastructures (ports, routes, voies ferrées) reliant la Chine à l'Europe, l'Afrique et l'Asie. C'est un outil de puissance géoéconomique considérable.</p>

                                        <h4>Les défis internes</h4>
                                        <ul>
                                            <li><strong>Inégalités territoriales</strong> : côte vs intérieur, villes vs campagnes</li>
                                            <li><strong>Environnement</strong> : pollution massive, premier émetteur de CO₂ mondial</li>
                                            <li><strong>Démographie</strong> : vieillissement de la population après la politique de l'enfant unique</li>
                                            <li><strong>Tensions sociales</strong> : mingong (travailleurs migrants), libertés politiques limitées</li>
                                        </ul>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les contrastes spatiaux en Chine</div>
                                            <table class="schema-table">
                                                <tr><th></th><th>Chine littorale (Est)</th><th>Chine intérieure (Ouest)</th></tr>
                                                <tr><td><strong>Population</strong></td><td>Dense, urbaine</td><td>Moins dense, rurale</td></tr>
                                                <tr><td><strong>Économie</strong></td><td>Industrie, services, commerce</td><td>Agriculture, ressources</td></tr>
                                                <tr><td><strong>Niveau de vie</strong></td><td>Élevé, classe moyenne</td><td>Plus faible</td></tr>
                                                <tr><td><strong>Villes</strong></td><td>Shanghai, Pékin, Shenzhen</td><td>Chengdu, Xi'an (en développement)</td></tr>
                                            </table>
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
