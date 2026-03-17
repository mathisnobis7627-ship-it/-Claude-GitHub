/* ============================================
   DONNÉES - SECONDE
   Programme d'Histoire-Géographie
   ============================================ */

window.SECONDE_DATA = {
    level: 'seconde',
    label: 'Seconde',
    icon: '🏛️',
    subjects: [
        {
            subject: 'histoire',
            label: 'Histoire',
            icon: '📜',
            themes: [
                {
                    theme: 'Thème 1 – Le monde méditerranéen : empreintes de l\'Antiquité et du Moyen Âge',
                    chapters: [
                        {
                            id: 'sec-h1',
                            title: 'La Méditerranée antique : les empreintes grecques et romaines',
                            subtitle: 'Athènes au Ve siècle et Rome, de la République à l\'Empire',
                            sections: [
                                {
                                    title: '🏛️ I. Athènes, berceau de la démocratie (Ve siècle av. J.-C.)',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Imagine une cité où, pour la première fois dans l'histoire, les citoyens décident eux-mêmes des lois.
                                            Après les guerres médiques contre les Perses (490-479 av. J.-C.), Athènes devient la cité la plus puissante
                                            du monde grec. Sous l'impulsion de Périclès, elle développe un système politique révolutionnaire : la démocratie directe.
                                        </div>

                                        <h4>La démocratie athénienne : un système unique</h4>
                                        <p>À Athènes, la démocratie repose sur trois institutions principales :</p>
                                        <ul>
                                            <li><strong>L'Ecclésia</strong> : l'assemblée de tous les citoyens, qui vote les lois et décide de la guerre ou de la paix</li>
                                            <li><strong>La Boulè</strong> : conseil de 500 citoyens tirés au sort, qui prépare les lois</li>
                                            <li><strong>L'Héliée</strong> : tribunal populaire composé de 6 000 jurés tirés au sort</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Démocratie directe</span>
                                            <span class="def-text">Système politique où les citoyens participent directement aux décisions, sans élire de représentants. À Athènes, chaque citoyen peut prendre la parole à l'Ecclésia.</span>
                                        </div>

                                        <h4>Les limites de la démocratie athénienne</h4>
                                        <p>Attention : la démocratie athénienne n'est pas celle d'aujourd'hui ! Seuls les <strong>citoyens</strong> participent, soit environ 40 000 hommes sur 300 000 habitants. Sont exclus :</p>
                                        <ul>
                                            <li>Les <strong>femmes</strong>, même athéniennes</li>
                                            <li>Les <strong>métèques</strong> (étrangers résidant à Athènes)</li>
                                            <li>Les <strong>esclaves</strong> (environ 80 000 personnes)</li>
                                        </ul>

                                        <h4>Le rayonnement culturel d'Athènes</h4>
                                        <p>Athènes au Ve siècle, c'est aussi un formidable rayonnement culturel. Périclès lance la construction du <strong>Parthénon</strong> sur l'Acropole, temple dédié à Athéna. La cité attire philosophes (Socrate), auteurs de théâtre (Sophocle, Euripide) et historiens (Thucydide).</p>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les institutions de la démocratie athénienne</div>
                                            <div class="schema-flow">
                                                <div class="flow-row">
                                                    <div class="flow-box primary">ECCLÉSIA<br><small>Assemblée des citoyens</small><br><small>Vote les lois</small></div>
                                                </div>
                                                <div class="flow-row"><span class="flow-arrow">↕</span></div>
                                                <div class="flow-row">
                                                    <div class="flow-box secondary">BOULÈ<br><small>500 membres tirés au sort</small><br><small>Prépare les lois</small></div>
                                                    <div class="flow-box accent">HÉLIÉE<br><small>6000 jurés tirés au sort</small><br><small>Rend la justice</small></div>
                                                </div>
                                                <div class="flow-row"><span class="flow-arrow">↕</span></div>
                                                <div class="flow-row">
                                                    <div class="flow-box success">STRATÈGES<br><small>10, élus pour 1 an</small><br><small>Dirigent l'armée</small></div>
                                                    <div class="flow-box neutral">MAGISTRATS<br><small>Tirés au sort</small><br><small>Exécutent les décisions</small></div>
                                                </div>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    title: '🦅 II. Rome : de la République à l\'Empire',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Rome naît comme une petite cité du Latium au VIIIe siècle av. J.-C. En quelques siècles, elle va conquérir
                                            tout le bassin méditerranéen et bâtir un empire immense. Son histoire politique est un passage progressif
                                            de la monarchie à la République, puis de la République à l'Empire.
                                        </div>

                                        <h4>La République romaine (509-27 av. J.-C.)</h4>
                                        <p>Après avoir chassé les rois étrusques en 509 av. J.-C., Rome devient une <strong>République</strong>. Le pouvoir est partagé entre :</p>
                                        <ul>
                                            <li>Le <strong>Sénat</strong> : assemblée des anciens magistrats, il oriente la politique</li>
                                            <li>Les <strong>Consuls</strong> : deux magistrats élus pour un an, ils dirigent l'État et l'armée</li>
                                            <li>Les <strong>Comices</strong> : assemblées du peuple qui votent les lois</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 République</span>
                                            <span class="def-text">Du latin <em>res publica</em> (la chose publique). Régime politique où le pouvoir n'est pas héréditaire mais exercé par des magistrats élus pour une durée limitée.</span>
                                        </div>

                                        <h4>La naissance de l'Empire</h4>
                                        <p>Au Ier siècle av. J.-C., les guerres civiles déchirent la République. Jules César s'empare du pouvoir mais est assassiné en 44 av. J.-C. Son fils adoptif <strong>Octave</strong> l'emporte sur ses rivaux et, en 27 av. J.-C., reçoit le titre d'<strong>Auguste</strong>. C'est le début de l'Empire : un seul homme concentre tous les pouvoirs.</p>

                                        <h4>La romanisation du monde méditerranéen</h4>
                                        <p>Rome ne se contente pas de conquérir : elle <strong>romanise</strong> les territoires conquis. Cela passe par :</p>
                                        <ul>
                                            <li>La construction de <strong>routes, aqueducs, thermes, amphithéâtres</strong></li>
                                            <li>La diffusion du <strong>latin</strong> et du <strong>droit romain</strong></li>
                                            <li>L'extension de la <strong>citoyenneté romaine</strong> (édit de Caracalla en 212)</li>
                                        </ul>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">509 av. J.-C.</span> Naissance de la République romaine</li>
                                                <li><span class="date">264-146 av. J.-C.</span> Guerres puniques contre Carthage</li>
                                                <li><span class="date">44 av. J.-C.</span> Assassinat de Jules César</li>
                                                <li><span class="date">27 av. J.-C.</span> Auguste, premier empereur</li>
                                                <li><span class="date">212 ap. J.-C.</span> Édit de Caracalla</li>
                                                <li><span class="date">476 ap. J.-C.</span> Chute de l'Empire romain d'Occident</li>
                                            </ul>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'sec-h2',
                            title: 'La Méditerranée médiévale : espace d\'échanges et de conflits',
                            subtitle: 'Chrétientés et Islam au Moyen Âge (XIe-XIIIe siècles)',
                            sections: [
                                {
                                    title: '⛪ I. Trois civilisations autour de la Méditerranée',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Au Moyen Âge, la Méditerranée est entourée par trois grandes civilisations qui se côtoient, échangent
                                            et parfois s'affrontent : l'Empire byzantin à l'est (héritier de Rome), l'Occident chrétien (la chrétienté latine)
                                            et le monde musulman.
                                        </div>

                                        <h4>L'Empire byzantin</h4>
                                        <p>Héritier de l'Empire romain d'Orient, l'Empire byzantin a pour capitale <strong>Constantinople</strong>. Il est dirigé par un empereur (<strong>basileus</strong>) qui détient à la fois le pouvoir politique et religieux. L'Empire byzantin rayonne par sa culture, son art (mosaïques, icônes) et son commerce.</p>

                                        <h4>L'Occident chrétien</h4>
                                        <p>L'Europe occidentale est organisée autour de la <strong>chrétienté latine</strong>, avec le pape à Rome. La société est féodale : le roi, les seigneurs et les vassaux se lient par des relations de fidélité. L'Église joue un rôle central dans la vie quotidienne.</p>

                                        <h4>Le monde musulman</h4>
                                        <p>Depuis le VIIe siècle, l'Islam s'est étendu de l'Arabie à l'Espagne. Le monde musulman connaît un âge d'or culturel et scientifique : mathématiques (algèbre), médecine (Avicenne), philosophie (Averroès).</p>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Trois civilisations méditerranéennes</div>
                                            <div class="schema-map">
                                                <div class="map-region" style="background:#2563eb33; border: 2px solid #2563eb;">
                                                    <span class="region-name">Occident chrétien</span>
                                                    <span class="region-detail">Pape à Rome, société féodale, latin</span>
                                                </div>
                                                <div class="map-region" style="background:#7c3aed33; border: 2px solid #7c3aed;">
                                                    <span class="region-name">Empire byzantin</span>
                                                    <span class="region-detail">Constantinople, basileus, grec, orthodoxie</span>
                                                </div>
                                                <div class="map-region" style="background:#059669​33; border: 2px solid #059669;">
                                                    <span class="region-name">Monde musulman</span>
                                                    <span class="region-detail">Califats, arabe, âge d'or scientifique</span>
                                                </div>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    title: '⚔️ II. Des échanges et des conflits',
                                    content: `
                                        <h4>Les croisades (1096-1291)</h4>
                                        <p>En 1095, le pape Urbain II appelle les chrétiens d'Occident à libérer Jérusalem. C'est le début des <strong>croisades</strong>, expéditions militaires qui vont durer deux siècles. Elles créent des contacts violents mais aussi des échanges entre chrétiens et musulmans.</p>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Croisade</span>
                                            <span class="def-text">Expédition militaire menée par des chrétiens d'Occident pour reprendre les lieux saints (Jérusalem) aux musulmans. Il y eut 8 croisades entre 1096 et 1270.</span>
                                        </div>

                                        <h4>Les échanges commerciaux et culturels</h4>
                                        <p>Malgré les conflits, la Méditerranée reste un espace d'<strong>échanges intenses</strong> :</p>
                                        <ul>
                                            <li><strong>Commerce</strong> : les villes italiennes (Venise, Gênes) font le lien entre Orient et Occident (épices, soie, or)</li>
                                            <li><strong>Culture</strong> : traduction des textes grecs et arabes, transmission du savoir scientifique</li>
                                            <li><strong>Cohabitation</strong> : en Sicile et en Espagne (Al-Andalus), les trois cultures coexistent</li>
                                        </ul>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">1054</span> Schisme entre chrétienté latine et orthodoxe</li>
                                                <li><span class="date">1096-1099</span> Première croisade, prise de Jérusalem</li>
                                                <li><span class="date">1187</span> Saladin reprend Jérusalem</li>
                                                <li><span class="date">1204</span> Prise de Constantinople par les croisés</li>
                                                <li><span class="date">1453</span> Chute de Constantinople (prise par les Ottomans)</li>
                                            </ul>
                                        </div>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le contrôle</span>
                                            <p>N'oublie pas que la Méditerranée médiévale n'est pas qu'un espace de conflits ! Les échanges commerciaux et culturels sont tout aussi importants. Montre les deux aspects dans tes copies.</p>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 2 – XVe-XVIe siècles : un nouveau rapport au monde, un temps de mutation intellectuelle',
                    chapters: [
                        {
                            id: 'sec-h3',
                            title: 'L\'ouverture atlantique : les conséquences des Grandes Découvertes',
                            subtitle: 'Les grandes explorations et la naissance d\'un monde connecté',
                            sections: [
                                {
                                    title: '🚢 I. Les Grandes Découvertes',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            À la fin du XVe siècle, les Européens se lancent dans des expéditions maritimes qui vont changer le monde.
                                            Poussés par la soif d'or, d'épices et l'envie d'évangéliser, Portugais et Espagnols ouvrent de nouvelles
                                            routes maritimes vers l'Afrique, l'Asie et l'Amérique.
                                        </div>

                                        <h4>Les motivations des explorateurs</h4>
                                        <ul>
                                            <li><strong>Économiques</strong> : trouver de nouvelles routes vers les épices d'Asie, contourner les intermédiaires musulmans</li>
                                            <li><strong>Religieuses</strong> : convertir de nouveaux peuples au christianisme</li>
                                            <li><strong>Scientifiques</strong> : prouver que la Terre est ronde, explorer l'inconnu</li>
                                            <li><strong>Politiques</strong> : étendre la puissance des royaumes européens</li>
                                        </ul>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Chronologie des Grandes Découvertes</div>
                                            <div class="schema-timeline">
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1488</div>
                                                    <div class="timeline-text">Bartolomeu Dias contourne le cap de Bonne-Espérance</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1492</div>
                                                    <div class="timeline-text">Christophe Colomb atteint l'Amérique</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1498</div>
                                                    <div class="timeline-text">Vasco de Gama atteint l'Inde par la mer</div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-date">1519-1522</div>
                                                    <div class="timeline-text">Magellan réalise le premier tour du monde</div>
                                                </div>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    title: '🌎 II. Les conséquences des Grandes Découvertes',
                                    content: `
                                        <h4>Un monde connecté</h4>
                                        <p>Les Grandes Découvertes créent pour la première fois des liens entre tous les continents. C'est le début de la <strong>mondialisation</strong>.</p>

                                        <h4>La conquête de l'Amérique</h4>
                                        <p>Les conquistadors espagnols, comme <strong>Cortés</strong> (Mexique, 1519) et <strong>Pizarro</strong> (Pérou, 1532), conquièrent les empires aztèque et inca. Les conséquences sont dramatiques pour les populations amérindiennes :</p>
                                        <ul>
                                            <li><strong>Choc microbien</strong> : des maladies européennes (variole, rougeole) déciment les populations autochtones</li>
                                            <li><strong>Exploitation</strong> : travail forcé dans les mines et les plantations</li>
                                            <li><strong>Destruction culturelle</strong> : destruction des temples et des cultures amérindiennes</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Commerce triangulaire</span>
                                            <span class="def-text">Circuit commercial entre l'Europe, l'Afrique et l'Amérique. Les Européens échangent des produits manufacturés contre des esclaves africains, déportés en Amérique pour travailler dans les plantations. Les produits coloniaux (sucre, tabac) sont ensuite ramenés en Europe.</span>
                                        </div>

                                        <h4>Le traité de Tordesillas (1494)</h4>
                                        <p>Pour éviter les conflits, le pape partage le « Nouveau Monde » entre l'Espagne et le Portugal par le <strong>traité de Tordesillas</strong>. C'est le début de la colonisation européenne.</p>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le contrôle</span>
                                            <p>Pense à montrer les deux faces des Grandes Découvertes : des avancées pour la connaissance du monde, mais aussi des conséquences dramatiques pour les peuples colonisés.</p>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'sec-h4',
                            title: 'Renaissance, Humanisme et réformes religieuses',
                            subtitle: 'Les bouleversements intellectuels et religieux des XVe-XVIe siècles',
                            sections: [
                                {
                                    title: '🎨 I. L\'Humanisme et la Renaissance',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            À partir du XVe siècle, un formidable mouvement intellectuel naît en Italie avant de se répandre dans toute l'Europe.
                                            Les penseurs redécouvrent les textes de l'Antiquité grecque et romaine, et placent l'Homme au centre de leurs préoccupations.
                                            C'est l'Humanisme, qui s'accompagne d'un renouveau artistique sans précédent : la Renaissance.
                                        </div>

                                        <h4>L'Humanisme : une nouvelle vision de l'Homme</h4>
                                        <p>Les humanistes croient au progrès par l'éducation et la raison. Ils veulent former un homme complet, cultivé dans tous les domaines. Parmi les grands humanistes :</p>
                                        <ul>
                                            <li><strong>Érasme</strong> (1469-1536) : prône la tolérance et critique les abus de l'Église</li>
                                            <li><strong>Thomas More</strong> (1478-1535) : imagine une société idéale dans <em>Utopia</em></li>
                                            <li><strong>Rabelais</strong> (1494-1553) : défend l'éducation libre dans <em>Gargantua</em></li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Humanisme</span>
                                            <span class="def-text">Mouvement intellectuel né en Italie au XVe siècle. Les humanistes placent l'Homme au centre de leurs réflexions, redécouvrent l'Antiquité et croient au progrès par l'éducation et la raison.</span>
                                        </div>

                                        <h4>La Renaissance artistique</h4>
                                        <p>Les artistes de la Renaissance révolutionnent l'art :</p>
                                        <ul>
                                            <li><strong>Perspective</strong> : l'art donne une illusion de profondeur</li>
                                            <li><strong>Réalisme</strong> : les corps humains sont représentés de façon réaliste</li>
                                            <li><strong>Mécénat</strong> : les princes et les papes financent les artistes</li>
                                        </ul>

                                        <div class="figures-box">
                                            <span class="figures-label">👤 Personnages clés</span>
                                            <ul>
                                                <li><strong>Léonard de Vinci</strong> (1452-1519) : peintre, ingénieur, scientifique (<em>La Joconde</em>)</li>
                                                <li><strong>Michel-Ange</strong> (1475-1564) : peintre et sculpteur (plafond de la Chapelle Sixtine)</li>
                                                <li><strong>Raphaël</strong> (1483-1520) : peintre de la Renaissance italienne</li>
                                            </ul>
                                        </div>

                                        <h4>L'imprimerie : une révolution</h4>
                                        <p>En 1454, <strong>Gutenberg</strong> invente l'imprimerie à caractères mobiles. Cette invention permet la diffusion massive des livres et des idées. C'est une révolution comparable à Internet aujourd'hui !</p>
                                    `
                                },
                                {
                                    title: '⛪ II. Les réformes religieuses',
                                    content: `
                                        <h4>La Réforme protestante</h4>
                                        <p>Au début du XVIe siècle, l'Église catholique est critiquée pour ses abus : vente des indulgences, richesse du clergé, ignorance des prêtres. En <strong>1517</strong>, le moine allemand <strong>Martin Luther</strong> affiche ses 95 thèses à Wittenberg, dénonçant ces abus. C'est le début de la Réforme.</p>

                                        <p>Les grandes idées de Luther :</p>
                                        <ul>
                                            <li>Le salut vient de la <strong>foi seule</strong>, pas des œuvres ou des indulgences</li>
                                            <li>La <strong>Bible</strong> est la seule autorité religieuse (pas le pape)</li>
                                            <li>Chaque croyant peut <strong>lire la Bible</strong> lui-même (traduite en allemand)</li>
                                        </ul>

                                        <p>En France, <strong>Jean Calvin</strong> développe une autre forme de protestantisme à Genève, encore plus stricte.</p>

                                        <h4>La Contre-Réforme catholique</h4>
                                        <p>L'Église catholique réagit avec le <strong>Concile de Trente</strong> (1545-1563) :</p>
                                        <ul>
                                            <li>Réaffirmation des dogmes catholiques</li>
                                            <li>Réforme de la formation des prêtres</li>
                                            <li>Création de l'ordre des Jésuites pour l'éducation et l'évangélisation</li>
                                        </ul>

                                        <h4>Les guerres de Religion en France (1562-1598)</h4>
                                        <p>La France est déchirée par les guerres entre catholiques et protestants (huguenots). Le point culminant est le <strong>massacre de la Saint-Barthélemy</strong> (24 août 1572), où des milliers de protestants sont tués à Paris. Les guerres s'achèvent avec l'<strong>édit de Nantes</strong> (1598), signé par Henri IV, qui accorde la liberté de culte aux protestants.</p>

                                        <div class="dates-box">
                                            <span class="dates-label">📅 Dates clés</span>
                                            <ul>
                                                <li><span class="date">1517</span> Thèses de Luther</li>
                                                <li><span class="date">1545-1563</span> Concile de Trente</li>
                                                <li><span class="date">1562-1598</span> Guerres de Religion en France</li>
                                                <li><span class="date">1572</span> Massacre de la Saint-Barthélemy</li>
                                                <li><span class="date">1598</span> Édit de Nantes (Henri IV)</li>
                                            </ul>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 3 – L\'État à l\'époque moderne : France et Angleterre',
                    chapters: [
                        {
                            id: 'sec-h5',
                            title: 'L\'affirmation de l\'État dans le royaume de France',
                            subtitle: 'Du XVIe au XVIIIe siècle : vers la monarchie absolue',
                            sections: [
                                {
                                    title: '👑 I. La construction de l\'État monarchique',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Du XVIe au XVIIIe siècle, les rois de France renforcent progressivement leur pouvoir. De François Ier
                                            à Louis XIV, la monarchie française devient de plus en plus centralisée et absolue. Le roi concentre
                                            tous les pouvoirs et gouverne « par la grâce de Dieu ».
                                        </div>

                                        <h4>François Ier et les débuts de l'État moderne</h4>
                                        <p><strong>François Ier</strong> (1515-1547) renforce l'administration royale. L'<strong>ordonnance de Villers-Cotterêts</strong> (1539) impose le français dans les actes officiels à la place du latin, unifiant le royaume par la langue.</p>

                                        <h4>Louis XIV, le Roi-Soleil</h4>
                                        <p><strong>Louis XIV</strong> (1643-1715) incarne la monarchie absolue à son apogée :</p>
                                        <ul>
                                            <li>Il gouverne seul, sans Premier ministre, après la mort de Mazarin (1661)</li>
                                            <li>Il installe la cour à <strong>Versailles</strong>, contrôlant ainsi la noblesse</li>
                                            <li>Il révoque l'<strong>édit de Nantes</strong> en 1685, interdisant le protestantisme</li>
                                            <li>Il mène de nombreuses guerres pour agrandir le royaume</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Monarchie absolue de droit divin</span>
                                            <span class="def-text">Régime politique où le roi détient tous les pouvoirs (législatif, exécutif, judiciaire) et prétend les tenir de Dieu. Le roi n'a de compte à rendre qu'à Dieu, pas à ses sujets.</span>
                                        </div>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les pouvoirs de Louis XIV</div>
                                            <div class="schema-flow">
                                                <div class="flow-row">
                                                    <div class="flow-box primary">LOUIS XIV<br><small>« L'État, c'est moi »</small></div>
                                                </div>
                                                <div class="flow-row"><span class="flow-arrow">↓</span></div>
                                                <div class="flow-row">
                                                    <div class="flow-box accent">Pouvoir législatif<br><small>Fait les lois</small></div>
                                                    <div class="flow-box secondary">Pouvoir exécutif<br><small>Gouverne le royaume</small></div>
                                                    <div class="flow-box success">Pouvoir judiciaire<br><small>Rend la justice</small></div>
                                                </div>
                                                <div class="flow-row"><span class="flow-arrow">↓</span></div>
                                                <div class="flow-row">
                                                    <div class="flow-box neutral">Intendants dans les provinces</div>
                                                    <div class="flow-box neutral">Versailles contrôle la noblesse</div>
                                                </div>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    title: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 II. Le modèle anglais : vers la monarchie parlementaire',
                                    content: `
                                        <h4>Un chemin différent</h4>
                                        <p>Contrairement à la France, l'Angleterre limite le pouvoir royal dès le Moyen Âge. La <strong>Magna Carta</strong> (1215) oblige déjà le roi à respecter certains droits. Au XVIIe siècle, deux révolutions vont transformer le régime.</p>

                                        <h4>Les révolutions anglaises</h4>
                                        <ul>
                                            <li><strong>1642-1649</strong> : Guerre civile entre le roi Charles Ier et le Parlement. Le roi est exécuté en 1649. Oliver Cromwell instaure une République éphémère.</li>
                                            <li><strong>1688-1689</strong> : La « Glorieuse Révolution ». Le roi Jacques II est chassé sans violence. Le <strong>Bill of Rights</strong> (1689) limite définitivement le pouvoir royal.</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Monarchie parlementaire</span>
                                            <span class="def-text">Régime politique où le roi règne mais ne gouverne pas. Le pouvoir réel appartient au Parlement (qui vote les lois et les impôts) et au gouvernement (responsable devant le Parlement).</span>
                                        </div>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 France vs Angleterre au XVIIe siècle</div>
                                            <table class="schema-table">
                                                <tr><th></th><th>France</th><th>Angleterre</th></tr>
                                                <tr><td><strong>Type de régime</strong></td><td>Monarchie absolue</td><td>Monarchie parlementaire</td></tr>
                                                <tr><td><strong>Pouvoir du roi</strong></td><td>Tous les pouvoirs</td><td>Pouvoir limité par le Parlement</td></tr>
                                                <tr><td><strong>Parlement</strong></td><td>Les États généraux ne sont plus réunis</td><td>Le Parlement vote les lois et les impôts</td></tr>
                                                <tr><td><strong>Droits des sujets</strong></td><td>Pas de droits garantis</td><td>Bill of Rights (1689)</td></tr>
                                                <tr><td><strong>Symbole</strong></td><td>Versailles</td><td>Westminster</td></tr>
                                            </table>
                                        </div>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le contrôle</span>
                                            <p>Ce chapitre se prête parfaitement à une composition comparant les deux modèles politiques. Structure ta réponse en montrant les points communs (monarchies) puis les différences (absolue vs parlementaire).</p>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'sec-h6',
                            title: 'Le siècle des Lumières',
                            subtitle: 'La remise en cause de l\'absolutisme au XVIIIe siècle',
                            sections: [
                                {
                                    title: '💡 I. Les philosophes des Lumières',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Raconte-moi l'histoire</span>
                                            Au XVIIIe siècle, des penseurs audacieux remettent en question l'ordre établi. Ils critiquent la monarchie
                                            absolue, l'intolérance religieuse et les inégalités sociales. Ils veulent « éclairer » les esprits par la
                                            raison et la science. On les appelle les philosophes des Lumières.
                                        </div>

                                        <h4>Les grandes idées des Lumières</h4>
                                        <ul>
                                            <li><strong>La raison</strong> contre les superstitions et les préjugés</li>
                                            <li><strong>La liberté</strong> d'expression, de conscience, de commerce</li>
                                            <li><strong>L'égalité</strong> devant la loi (critique des privilèges)</li>
                                            <li><strong>La séparation des pouvoirs</strong> (Montesquieu)</li>
                                            <li><strong>La souveraineté du peuple</strong> (Rousseau)</li>
                                        </ul>

                                        <div class="figures-box">
                                            <span class="figures-label">👤 Les philosophes des Lumières</span>
                                            <ul>
                                                <li><strong>Montesquieu</strong> (1689-1755) : <em>De l'Esprit des lois</em> – défend la séparation des pouvoirs</li>
                                                <li><strong>Voltaire</strong> (1694-1778) : combat l'intolérance religieuse et défend la liberté d'expression</li>
                                                <li><strong>Rousseau</strong> (1712-1778) : <em>Du Contrat social</em> – la souveraineté appartient au peuple</li>
                                                <li><strong>Diderot</strong> (1713-1784) : dirige l'<em>Encyclopédie</em>, diffuse les savoirs</li>
                                            </ul>
                                        </div>

                                        <h4>L'Encyclopédie (1751-1772)</h4>
                                        <p>Dirigée par <strong>Diderot et d'Alembert</strong>, l'Encyclopédie est une œuvre monumentale de 28 volumes qui rassemble toutes les connaissances de l'époque. Elle diffuse les idées des Lumières dans toute l'Europe.</p>
                                    `
                                },
                                {
                                    title: '🌍 II. L\'influence des Lumières',
                                    content: `
                                        <h4>La Révolution américaine (1776)</h4>
                                        <p>Les colons anglais d'Amérique s'inspirent des Lumières pour réclamer leur indépendance. La <strong>Déclaration d'indépendance</strong> (4 juillet 1776), rédigée par Thomas Jefferson, affirme que « tous les hommes sont créés égaux » et ont droit à « la vie, la liberté et la recherche du bonheur ».</p>

                                        <h4>Vers la Révolution française</h4>
                                        <p>En France, les idées des Lumières se diffusent dans la société. La monarchie absolue est de plus en plus contestée. La crise financière de la fin du XVIIIe siècle oblige Louis XVI à convoquer les <strong>États généraux</strong> en 1789, ce qui mènera à la Révolution française.</p>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Des Lumières aux Révolutions</div>
                                            <div class="schema-flow">
                                                <div class="flow-row">
                                                    <div class="flow-box primary">LUMIÈRES<br><small>Raison, liberté, égalité</small></div>
                                                </div>
                                                <div class="flow-row"><span class="flow-arrow">↓</span></div>
                                                <div class="flow-row">
                                                    <div class="flow-box accent">Révolution américaine<br><small>1776</small></div>
                                                    <div class="flow-box secondary">Révolution française<br><small>1789</small></div>
                                                </div>
                                                <div class="flow-row"><span class="flow-arrow">↓</span></div>
                                                <div class="flow-row">
                                                    <div class="flow-box success">Déclarations des droits<br><small>DDHC 1789</small></div>
                                                </div>
                                            </div>
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
                    theme: 'Thème 1 – Sociétés et environnements : des équilibres fragiles',
                    chapters: [
                        {
                            id: 'sec-g1',
                            title: 'Les sociétés face aux risques',
                            subtitle: 'Risques naturels et technologiques, vulnérabilité et résilience',
                            sections: [
                                {
                                    title: '🌋 I. Les risques : aléas, vulnérabilité et résilience',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            Un tremblement de terre au Japon et un tremblement de terre en Haïti n'ont pas les mêmes conséquences.
                                            Pourquoi ? Parce que le risque ne dépend pas seulement de l'aléa naturel, mais aussi de la capacité
                                            de la société à y faire face. C'est toute la différence entre un pays riche et bien préparé,
                                            et un pays pauvre et vulnérable.
                                        </div>

                                        <h4>Les notions clés</h4>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Aléa</span>
                                            <span class="def-text">Événement naturel ou technologique potentiellement dangereux (séisme, inondation, explosion industrielle).</span>
                                        </div>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Vulnérabilité</span>
                                            <span class="def-text">Fragilité d'une société face à un aléa. Elle dépend de la densité de population, du niveau de développement, de la qualité des infrastructures.</span>
                                        </div>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Risque</span>
                                            <span class="def-text">Risque = Aléa × Vulnérabilité. Un aléa dans un espace non peuplé ne crée pas de risque.</span>
                                        </div>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Résilience</span>
                                            <span class="def-text">Capacité d'une société à se relever après une catastrophe, à s'adapter et se reconstruire.</span>
                                        </div>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 La construction du risque</div>
                                            <div class="schema-flow">
                                                <div class="flow-row">
                                                    <div class="flow-box danger">ALÉA<br><small>Séisme, inondation, cyclone...</small></div>
                                                    <span class="flow-arrow">×</span>
                                                    <div class="flow-box accent">VULNÉRABILITÉ<br><small>Population, infrastructures...</small></div>
                                                    <span class="flow-arrow">=</span>
                                                    <div class="flow-box primary">RISQUE</div>
                                                </div>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    title: '🛡️ II. La gestion des risques',
                                    content: `
                                        <h4>Prévention et prévision</h4>
                                        <p>Les sociétés mettent en place des stratégies pour réduire les risques :</p>
                                        <ul>
                                            <li><strong>Prévention</strong> : normes de construction antisismiques, plans d'urbanisme, digues</li>
                                            <li><strong>Prévision</strong> : systèmes d'alerte, satellites, stations sismologiques</li>
                                            <li><strong>Éducation</strong> : exercices d'évacuation, culture du risque</li>
                                            <li><strong>Protection</strong> : plans de secours, assurances</li>
                                        </ul>

                                        <h4>Des inégalités face aux risques</h4>
                                        <p>Les pays en développement sont plus vulnérables : moins de moyens de prévention, habitations précaires, services de secours insuffisants. Les catastrophes y font proportionnellement plus de victimes.</p>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le contrôle</span>
                                            <p>Utilise la formule Risque = Aléa × Vulnérabilité pour structurer ta réponse. Illustre avec des exemples concrets (Japon vs Haïti, Bangladesh vs Pays-Bas).</p>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'sec-g2',
                            title: 'Des ressources majeures sous pression',
                            subtitle: 'L\'eau et l\'énergie : des enjeux géopolitiques et environnementaux',
                            sections: [
                                {
                                    title: '💧 I. L\'eau, une ressource vitale sous tension',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            L'eau douce ne représente que 2,5% de l'eau sur Terre, et seulement 0,7% est facilement accessible.
                                            Avec une population mondiale qui augmente et des besoins qui explosent, l'eau est devenue un enjeu majeur
                                            du XXIe siècle, source de tensions et de conflits.
                                        </div>

                                        <h4>Une ressource inégalement répartie</h4>
                                        <ul>
                                            <li>Le <strong>Brésil</strong> dispose de 12% des réserves mondiales d'eau douce</li>
                                            <li>Le <strong>Moyen-Orient</strong> et l'<strong>Afrique du Nord</strong> souffrent de stress hydrique</li>
                                            <li>Les besoins augmentent : agriculture (70% des prélèvements), industrie (20%), usage domestique (10%)</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Stress hydrique</span>
                                            <span class="def-text">Situation dans laquelle la demande en eau dépasse les ressources disponibles. On parle de stress hydrique quand la disponibilité en eau est inférieure à 1 700 m³ par habitant et par an.</span>
                                        </div>

                                        <h4>L'eau, source de tensions géopolitiques</h4>
                                        <p>Le contrôle de l'eau peut être source de conflits, notamment au Moyen-Orient (Tigre, Euphrate, Jourdain) ou en Afrique (Nil). Les barrages en amont privent les pays en aval de leur approvisionnement.</p>
                                    `
                                },
                                {
                                    title: '⚡ II. L\'énergie : entre dépendance et transition',
                                    content: `
                                        <h4>Les énergies fossiles dominent encore</h4>
                                        <p>Le pétrole, le gaz et le charbon fournissent encore plus de 80% de l'énergie mondiale. Mais ils posent deux problèmes majeurs :</p>
                                        <ul>
                                            <li><strong>Épuisement</strong> : les réserves sont limitées (pétrole : 50-70 ans, gaz : 60 ans)</li>
                                            <li><strong>Pollution</strong> : les émissions de CO₂ sont la principale cause du réchauffement climatique</li>
                                        </ul>

                                        <h4>La transition énergétique</h4>
                                        <p>Face à ces défis, les sociétés cherchent à développer les <strong>énergies renouvelables</strong> : solaire, éolien, hydraulique, biomasse. Mais la transition est lente et inégale selon les pays.</p>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Le mix énergétique mondial</div>
                                            <table class="schema-table">
                                                <tr><th>Source</th><th>Part mondiale</th><th>Avantages</th><th>Inconvénients</th></tr>
                                                <tr><td>Pétrole</td><td>~31%</td><td>Dense en énergie, transportable</td><td>Polluant, épuisable</td></tr>
                                                <tr><td>Charbon</td><td>~27%</td><td>Abondant, bon marché</td><td>Très polluant</td></tr>
                                                <tr><td>Gaz naturel</td><td>~24%</td><td>Moins polluant que le charbon</td><td>Épuisable, fuites de méthane</td></tr>
                                                <tr><td>Nucléaire</td><td>~4%</td><td>Pas d'émissions CO₂</td><td>Déchets radioactifs, risques</td></tr>
                                                <tr><td>Renouvelables</td><td>~14%</td><td>Propres, inépuisables</td><td>Intermittentes, coût initial</td></tr>
                                            </table>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 2 – Territoires, populations et développement : quels défis ?',
                    chapters: [
                        {
                            id: 'sec-g3',
                            title: 'Des trajectoires démographiques différenciées',
                            subtitle: 'La transition démographique et les défis de la croissance de la population',
                            sections: [
                                {
                                    title: '📈 I. La transition démographique',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            En 1800, la Terre comptait 1 milliard d'habitants. En 2024, nous sommes 8 milliards. Comment expliquer
                                            cette explosion ? Par un phénomène appelé la transition démographique : d'abord la mortalité baisse
                                            (grâce à la médecine), puis la natalité baisse (changement des modes de vie). Entre les deux,
                                            la population explose.
                                        </div>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Transition démographique</span>
                                            <span class="def-text">Passage d'un régime démographique ancien (forte natalité, forte mortalité) à un régime moderne (faible natalité, faible mortalité). Entre les deux phases, la population augmente fortement car la mortalité baisse avant la natalité.</span>
                                        </div>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les phases de la transition démographique</div>
                                            <div class="schema-flow">
                                                <div class="flow-row">
                                                    <div class="flow-box neutral">Phase 1<br><small>Natalité haute</small><br><small>Mortalité haute</small><br><small>→ Pop. stable</small></div>
                                                    <span class="flow-arrow">→</span>
                                                    <div class="flow-box danger">Phase 2<br><small>Natalité haute</small><br><small>Mortalité baisse</small><br><small>→ Pop. explose</small></div>
                                                    <span class="flow-arrow">→</span>
                                                    <div class="flow-box accent">Phase 3<br><small>Natalité baisse</small><br><small>Mortalité basse</small><br><small>→ Ralentissement</small></div>
                                                    <span class="flow-arrow">→</span>
                                                    <div class="flow-box success">Phase 4<br><small>Natalité basse</small><br><small>Mortalité basse</small><br><small>→ Pop. stable</small></div>
                                                </div>
                                            </div>
                                        </div>

                                        <h4>Des situations très différentes dans le monde</h4>
                                        <ul>
                                            <li><strong>Europe, Japon</strong> : transition achevée, vieillissement de la population</li>
                                            <li><strong>Afrique subsaharienne</strong> : en phase 2, forte croissance démographique</li>
                                            <li><strong>Asie, Amérique latine</strong> : en fin de transition, ralentissement</li>
                                        </ul>
                                    `
                                },
                                {
                                    title: '🌍 II. Développement et inégalités',
                                    content: `
                                        <h4>Mesurer le développement : l'IDH</h4>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 IDH (Indice de développement humain)</span>
                                            <span class="def-text">Indicateur créé par le PNUD combinant trois critères : la santé (espérance de vie), l'éducation (durée de scolarisation) et le niveau de vie (revenu par habitant). Il va de 0 à 1.</span>
                                        </div>

                                        <h4>Des inégalités à toutes les échelles</h4>
                                        <p>Les inégalités de développement existent :</p>
                                        <ul>
                                            <li><strong>Entre pays</strong> : IDH de 0,9+ en Europe du Nord, inférieur à 0,4 en Afrique subsaharienne</li>
                                            <li><strong>À l'intérieur des pays</strong> : villes vs campagnes, régions riches vs pauvres</li>
                                            <li><strong>Entre genres</strong> : les femmes sont souvent désavantagées (éducation, emploi, santé)</li>
                                        </ul>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le contrôle</span>
                                            <p>Ne confonds pas croissance économique (PIB) et développement (IDH). Un pays peut avoir un PIB élevé tout en ayant des inégalités fortes (ex : pays pétroliers du Golfe).</p>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'sec-g4',
                            title: 'Développement et inégalités',
                            subtitle: 'Les contrastes de développement à différentes échelles',
                            sections: [
                                {
                                    title: '📊 I. Les défis du développement',
                                    content: `
                                        <h4>Les Objectifs de Développement Durable (ODD)</h4>
                                        <p>En 2015, l'ONU a adopté 17 <strong>Objectifs de Développement Durable</strong> (ODD) à atteindre d'ici 2030 :</p>
                                        <ul>
                                            <li>Éliminer la pauvreté et la faim</li>
                                            <li>Assurer une éducation de qualité pour tous</li>
                                            <li>Garantir l'accès à l'eau et à l'énergie</li>
                                            <li>Réduire les inégalités</li>
                                            <li>Agir contre le changement climatique</li>
                                        </ul>

                                        <h4>Des progrès réels mais insuffisants</h4>
                                        <p>Depuis 1990, des progrès considérables ont été réalisés :</p>
                                        <ul>
                                            <li>L'extrême pauvreté a reculé (de 36% à 10% de la population mondiale)</li>
                                            <li>La mortalité infantile a diminué de moitié</li>
                                            <li>L'accès à l'éducation s'est amélioré</li>
                                        </ul>
                                        <p>Mais les inégalités restent très fortes, et le changement climatique menace les acquis.</p>
                                    `
                                },
                                {
                                    title: '🏙️ II. Étude de cas : un pays émergent',
                                    content: `
                                        <h4>L'exemple de l'Inde</h4>
                                        <p>L'Inde illustre bien les contrastes du développement :</p>
                                        <ul>
                                            <li><strong>Puissance économique</strong> : 5e économie mondiale, pôle informatique mondial (Bangalore)</li>
                                            <li><strong>Défis sociaux</strong> : 230 millions de personnes sous le seuil de pauvreté, inégalités de castes et de genre</li>
                                            <li><strong>Démographie</strong> : premier pays le plus peuplé du monde (1,4 milliard), transition démographique inachevée</li>
                                            <li><strong>Environnement</strong> : pollution majeure, stress hydrique dans plusieurs régions</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Pays émergent</span>
                                            <span class="def-text">Pays en développement connaissant une forte croissance économique et s'intégrant rapidement dans la mondialisation, tout en conservant de fortes inégalités internes (Chine, Inde, Brésil, Mexique...).</span>
                                        </div>
                                    `
                                }
                            ]
                        }
                    ]
                },
                {
                    theme: 'Thème 3 – Des mobilités généralisées',
                    chapters: [
                        {
                            id: 'sec-g5',
                            title: 'Les migrations internationales',
                            subtitle: 'Flux migratoires, causes, conséquences et enjeux',
                            sections: [
                                {
                                    title: '✈️ I. Un monde de mobilités',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            Environ 280 millions de personnes vivent dans un pays différent de celui où elles sont nées,
                                            soit 3,6% de la population mondiale. Les migrations internationales sont un phénomène ancien
                                            qui s'est accéléré avec la mondialisation.
                                        </div>

                                        <h4>Les différents types de migrations</h4>
                                        <ul>
                                            <li><strong>Migrations économiques</strong> : recherche d'un emploi, de meilleures conditions de vie</li>
                                            <li><strong>Migrations forcées</strong> : réfugiés fuyant les guerres, les persécutions</li>
                                            <li><strong>Migrations environnementales</strong> : fuite des catastrophes naturelles, du changement climatique</li>
                                            <li><strong>Migrations étudiantes</strong> : mobilité universitaire internationale</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Réfugié</span>
                                            <span class="def-text">Personne qui a quitté son pays car elle craint d'y être persécutée en raison de sa nationalité, de sa religion, de ses opinions politiques, ou d'un conflit armé. Statut défini par la Convention de Genève (1951).</span>
                                        </div>

                                        <h4>Les grands flux migratoires</h4>
                                        <p>Les migrations suivent généralement les trajectoires suivantes :</p>
                                        <ul>
                                            <li><strong>Sud → Nord</strong> : Afrique/Asie vers Europe, Amérique latine vers États-Unis</li>
                                            <li><strong>Sud → Sud</strong> : flux très importants mais moins médiatisés (Afrique, Asie du Sud-Est)</li>
                                            <li><strong>Nord → Nord</strong> : mobilité entre pays développés (ex : Européens entre pays de l'UE)</li>
                                        </ul>
                                    `
                                },
                                {
                                    title: '🌐 II. Enjeux et débats',
                                    content: `
                                        <h4>Les apports des migrations</h4>
                                        <ul>
                                            <li><strong>Pour les pays d'accueil</strong> : main-d'œuvre, dynamisme démographique, diversité culturelle</li>
                                            <li><strong>Pour les pays de départ</strong> : transferts d'argent (remises), transferts de compétences</li>
                                        </ul>

                                        <h4>Les défis des migrations</h4>
                                        <ul>
                                            <li><strong>Intégration</strong> : insertion dans le marché du travail, apprentissage de la langue</li>
                                            <li><strong>Tensions sociales</strong> : peur de la concurrence, montée du populisme</li>
                                            <li><strong>Drames humains</strong> : traversées dangereuses (Méditerranée), passeurs, camps de réfugiés</li>
                                        </ul>

                                        <div class="exam-tips">
                                            <span class="tips-label">🎯 Pour le contrôle</span>
                                            <p>Montre toujours les différentes échelles : mondiale (grands flux), régionale (politiques migratoires de l'UE) et locale (intégration dans une ville). Utilise des exemples précis.</p>
                                        </div>
                                    `
                                }
                            ]
                        },
                        {
                            id: 'sec-g6',
                            title: 'Les mobilités touristiques internationales',
                            subtitle: 'Le tourisme de masse et ses impacts',
                            sections: [
                                {
                                    title: '🏖️ I. Le boom du tourisme mondial',
                                    content: `
                                        <div class="story-box">
                                            <span class="story-label">📖 Comprendre le sujet</span>
                                            En 1950, 25 millions de touristes internationaux parcouraient le monde. Aujourd'hui, ils sont plus d'1,4 milliard.
                                            Le tourisme est devenu une activité économique majeure (10% du PIB mondial) qui transforme profondément les territoires.
                                        </div>

                                        <h4>Les facteurs d'explication</h4>
                                        <ul>
                                            <li><strong>Hausse du niveau de vie</strong> dans les pays développés et émergents</li>
                                            <li><strong>Développement des transports</strong> : vols low-cost, TGV, croisières</li>
                                            <li><strong>Congés payés</strong> et réduction du temps de travail</li>
                                            <li><strong>Numérique</strong> : plateformes de réservation (Airbnb, Booking)</li>
                                        </ul>

                                        <h4>Les principaux flux touristiques</h4>
                                        <p>L'Europe reste la première destination mondiale (France, 1er pays visité au monde). Mais les flux se diversifient vers l'Asie du Sud-Est, l'Amérique latine et l'Afrique.</p>
                                    `
                                },
                                {
                                    title: '⚖️ II. Les impacts du tourisme',
                                    content: `
                                        <h4>Des retombées économiques majeures</h4>
                                        <p>Le tourisme crée des emplois, génère des revenus et peut favoriser le développement des territoires. Pour certains pays (Maldives, Thaïlande), il représente une part essentielle du PIB.</p>

                                        <h4>Des impacts négatifs</h4>
                                        <ul>
                                            <li><strong>Environnement</strong> : pollution, artificialisation des littoraux, émissions des transports aériens</li>
                                            <li><strong>Social</strong> : hausse des prix du logement, « surtourisme » (Venise, Barcelone, Dubrovnik)</li>
                                            <li><strong>Culturel</strong> : folklorisation des cultures locales, standardisation</li>
                                        </ul>

                                        <div class="definition-box">
                                            <span class="def-term">🔑 Tourisme durable</span>
                                            <span class="def-text">Forme de tourisme qui respecte l'environnement, bénéficie aux populations locales et préserve le patrimoine culturel. Il vise à concilier développement économique et protection des ressources.</span>
                                        </div>

                                        <div class="schema-container">
                                            <div class="schema-title">📊 Les impacts du tourisme</div>
                                            <table class="schema-table">
                                                <tr><th>Dimension</th><th>Impacts positifs</th><th>Impacts négatifs</th></tr>
                                                <tr><td><strong>Économique</strong></td><td>Emplois, revenus, investissements</td><td>Dépendance, emplois précaires</td></tr>
                                                <tr><td><strong>Social</strong></td><td>Échanges culturels, développement</td><td>Surtourisme, hausse des prix</td></tr>
                                                <tr><td><strong>Environnemental</strong></td><td>Financement de la protection</td><td>Pollution, artificialisation</td></tr>
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
