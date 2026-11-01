const siteData = {
    ar: {
        searchPlaceholder: "ابحث في أقسام وأبواب الموسوعة...",
        sections: [
            {
                sectionTitle: "القسم الأول: الكون والحياة",
                description: "تفنيد آراء الملحدين في الكون ونشأة الحياة",
                chapters: [
                    { num: "الباب الأول", title: "في الكون والحياة", count: "42 سؤالاً", desc: "كيف بدأ الكون والشفرة الجينية ودلائل وجود الخالق." }
                ]
            },
            {
                sectionTitle: "القسم الثاني: صحة الإسلام",
                description: "بصائر صحة الإسلام: ظهور الدين، ودلائل النبوة، والإعجاز",
                chapters: [
                    { num: "الباب الثاني", title: "كيف ظهر الدِّينُ؟", count: "15 سؤالاً", desc: "الرد على فرضيات نشأة الدين البدائية." },
                    { num: "الباب الثالث", title: "رسـولُ الْأُميـِّينَ", count: "31 سؤالاً", desc: "دلائل نبوة محمد صلى الله عليه وسلم وبيِّنات صدقه." },
                    { num: "الباب الرابع", title: "الإعجازُ العلميُّ؟", count: "15 سؤالاً", desc: "براهين الإعجاز في الكتاب والسنة." },
                    { num: "الباب الخامس", title: "أعظمُ بُرهانٍ على صحَّةِ الإسلامِ", count: "8 أسئلة", desc: "أعظم آية أُيد بها النبي صلى الله عليه وسلم." },
                    { num: "الباب السادس", title: "الإخبارُ بالمُغيَّباتِ", count: "47 سؤالاً", desc: "تحقق النبوءات والأخبار المستقبلية." }
                ]
            },
            {
                sectionTitle: "القسم الثالث: شبهات وأفكار منحرفة",
                description: "تفكيك الشبهات والرد على أشهرها وكشف الأفكار الضالة",
                chapters: [
                    { num: "الباب السابع", title: "تفكيك الشُّبْهة", count: "10 أسئلة", desc: "فهم طبيعة الابتلاء والتكليف الإلهي والشبهات." },
                    { num: "الباب الثامن", title: "الوَسْواس القهري", count: "59 سؤالاً", desc: "التعامل مع الوساوس العقدية والأفكار القهرية." },
                    { num: "الباب التاسع", title: "الردُّ على أشهر شبهات الملحدين", count: "65 سؤالاً", desc: "لماذا يوجد شر؟ والرد على الشبهات الكبرى." },
                    { num: "الباب العاشر", title: "أفكار ضالَّة", count: "35 سؤالاً", desc: "تفنيد التيارات والأفكار الهدامة." },
                    { num: "الباب الحادي عشر", title: "يقينية الإيمان", count: "7 أسئلة", desc: "أسباب الطمأنينة ويقينية الإيمان بالقلب والعقل." }
                ]
            }
        ]
    },
    en: {
        searchPlaceholder: "Search sections and chapters...",
        sections: [
            {
                sectionTitle: "Part I: Universe & Life",
                description: "Refuting atheistic views on the origin of the universe and life",
                chapters: [
                    { num: "Chapter 1", title: "Universe and Life", count: "42 Questions", desc: "Evidence of the Creator and the genetic code." }
                ]
            },
            {
                sectionTitle: "Part II: Truth of Islam",
                description: "The emergence of religion, prophethood, and miracles",
                chapters: [
                    { num: "Chapter 2", title: "How did religion emerge?", count: "15 Questions", desc: "Refuting primitive origin theories." },
                    { num: "Chapter 3", title: "The Prophet of the Unlettered", count: "31 Questions", desc: "Proofs of prophethood." },
                    { num: "Chapter 4", title: "Scientific Miracles", count: "15 Questions", desc: "Evidences in Quran and Sunnah." },
                    { num: "Chapter 5", title: "The Greatest Proof", count: "8 Questions", desc: "The supreme miracle of Islam." },
                    { num: "Chapter 6", title: "Prophecies & Unseen", count: "47 Questions", desc: "Fulfillment of future events." }
                ]
            },
            {
                sectionTitle: "Part III: Doubts & Deviant Ideas",
                description: "Deconstructing suspicions and answering common doubts",
                chapters: [
                    { num: "Chapter 7", title: "Deconstructing Doubts", count: "10 Questions", desc: "Understanding the nature of divine testing." },
                    { num: "Chapter 8", title: "Obsessive Compulsive Whispers (OCD)", count: "59 Questions", desc: "Coping with intrusive thoughts." },
                    { num: "Chapter 9", title: "Answering Atheist Doubts", count: "65 Questions", desc: "Addressing the problem of evil and major doubts." },
                    { num: "Chapter 10", title: "Deviant Thoughts", count: "35 Questions", desc: "Refuting destructive ideologies." },
                    { num: "Chapter 11", title: "Certainty of Faith", count: "7 Questions", desc: "Foundations of inner peace and absolute faith." }
                ]
            }
        ]
    },
    fr: {
        searchPlaceholder: "Rechercher des sections...",
        sections: [
            {
                sectionTitle: "Partie I : Univers et Vie",
                description: "Réfutation des vues athées sur l'origine de l'univers",
                chapters: [
                    { num: "Chapitre 1", title: "L'Univers et la Vie", count: "42 Questions", desc: "Preuves du Créateur et code génétique." }
                ]
            },
            {
                sectionTitle: "Partie II : Vérité de l'Islam",
                description: "L'émergence de la religion et prophétie",
                chapters: [
                    { num: "Chapitre 2", title: "Comment est née la religion ?", count: "15 Questions", desc: "Réfutation des théories primitives." },
                    { num: "Chapitre 3", title: "Le Prophète des Illétrés", count: "31 Questions", desc: "Preuves de la prophétie." },
                    { num: "Chapitre 4", title: "Miracles scientifiques", count: "15 Questions", desc: "Preuves dans le Coran." },
                    { num: "Chapitre 5", title: "La plus grande preuve", count: "8 Questions", desc: "Le miracle suprême." },
                    { num: "Chapitre 6", title: "Prédictions et Inconnu", count: "47 Questions", desc: "Accomplissement des prophéties." }
                ]
            },
            {
                sectionTitle: "Partie III : Doutes et Idées déviantes",
                description: "Déconstruction des soupçons et réponses aux doutes",
                chapters: [
                    { num: "Chapitre 7", title: "Déconstruction des doutes", count: "10 Questions", desc: "Comprendre les tests divins." },
                    { num: "Chapitre 8", title: "Obsessions et Murmures", count: "59 Questions", desc: "Faire face aux pensées intrusives." },
                    { num: "Chapitre 9", title: "Réponses aux doutes athées", count: "65 Questions", desc: "Le problème du mal et grands doutes." },
                    { num: "Chapitre 10", title: "Pensées déviantes", count: "35 Questions", desc: "Réfutation des idéologies." },
                    { num: "Chapitre 11", title: "Certitude de la foi", count: "7 Questions", desc: "Bases de la paix intérieure." }
                ]
            }
        ]
    },
    es: {
        searchPlaceholder: "Buscar secciones...",
        sections: [
            {
                sectionTitle: "Parte I: Universo y Vida",
                description: "Refutación de puntos de vista ateos",
                chapters: [
                    { num: "Capítulo 1", title: "El Universo y la Vida", count: "42 Preguntas", desc: "Evidencia del Creador y código genético." }
                ]
            },
            {
                sectionTitle: "Parte II: Verdad del Islam",
                description: "El surgimiento de la religión y profecía",
                chapters: [
                    { num: "Capítulo 2", title: "¿Cómo surgió la religión?", count: "15 Preguntas", desc: "Refutación de teorías primitivas." },
                    { num: "Capítulo 3", title: "El Profeta de los Analfabetos", count: "31 Preguntas", desc: "Pruebas de la profecía." },
                    { num: "Capítulo 4", title: "Milagros científicos", count: "15 Preguntas", desc: "Evidencias en el Corán." },
                    { num: "Capítulo 5", title: "La mayor prueba", count: "8 Preguntas", desc: "El milagro supremo." },
                    { num: "Capítulo 6", title: "Profecías y lo Oculto", count: "47 Preguntas", desc: "Cumplimiento de eventos futuros." }
                ]
            },
            {
                sectionTitle: "Parte III: Dudas e Ideas desviadas",
                description: "Deconstrucción de sospechas y respuestas a dudas",
                chapters: [
                    { num: "Capítulo 7", title: "Deconstrucción de dudas", count: "10 Preguntas", desc: "Comprender las pruebas divinas." },
                    { num: "Capítulo 8", title: "Susurros obsesivos", count: "59 Preguntas", desc: "Lidiar con pensamientos intrusivos." },
                    { num: "Capítulo 9", title: "Respuestas a dudas ateas", count: "65 Preguntas", desc: "El problema del mal y grandes dudas." },
                    { num: "Capítulo 10", title: "Pensamientos desviados", count: "35 Preguntas", desc: "Refutación de ideologías." },
                    { num: "Capítulo 11", title: "Certeza de la fe", count: "7 Preguntas", desc: "Bases de la paz interior." }
                ]
            }
        ]
    }
};
