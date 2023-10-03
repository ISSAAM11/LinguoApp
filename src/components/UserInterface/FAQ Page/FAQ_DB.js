import userImage2 from './../../../Images/userImages/userImage8.jpeg'
import userImage3 from './../../../Images/userImages/userImage9.jpeg'
import userImage1 from './../../../Images/userImages/userImage10.jpg'
import userImage4 from './../../../Images/userImages/userImage11.jpeg'
import userImage5 from './../../../Images/userImages/userImage12.jpg'
import userImage8 from './../../../Images/userImages/userImage13.webp'
import userImage6 from './../../../Images/userImages/userimage6.png'
import userImage7 from './../../../Images/userImages/userImage7.png'


import iconCivil from "../../../Images/FAQ_Icons/fefzfe.png"
import iconFiscal from "../../../Images/FAQ_Icons/fiscal.png"
import iconAdministratif from "../../../Images/FAQ_Icons/fzgzfg.png"
import iconIntelectuel from "../../../Images/FAQ_Icons/idée.png"
import iconimmmobiliére from "../../../Images/FAQ_Icons/immmobiliére.png"
import iconFAQ6 from "../../../Images/FAQ_Icons/international.png"
import iconpenal from "../../../Images/FAQ_Icons/pénal.png"
import iconSante from "../../../Images/FAQ_Icons/santé.png"
import iconbank from "../../../Images/FAQ_Icons/bank.png"
import iconNature from "../../../Images/FAQ_Icons/nature.png"

const FAQ_DB = [
    { id: 1,image:iconCivil, title: "Droit civil", description: "Le droit civil est un secteur du droit privé qui régit les rapports d'un individu à un autre. La fonction du juge civil est ainsi de trancher un conflit juridique entre deux parties : le demandeur et le défendeur.", 
        details: [
            {name: "Ray Steve", image:userImage2, Job:"Business Coach",title: "Droit de la famille ",description:"Le droit de la famille est une branche large du droit civil incluant l'ensemble des règles juridiques régissant les rapports familiaux"},
            {name: "Sami Samti", image:userImage3,  Job:"Analyste Sportif",title: "Droit des successions",description:"Les avocats de Giambrone spécialisés dans les droits de succession abordent la question de l'héritage sous deux angles : la fiscalité et les lois sur l'héritage qui s'appliquent aux étrangers laissant des biens en Tunisie : quelles sont les restrictions et s'il est conseillé de rédiger un testament."},
            {name: "Salem Ben Salem", image:userImage1,  Job:"Analyste",title: "Droit des obligations",description:"Le droit des obligations est la branche du droit privé dans les systèmes de tradition romano-germanique qui porte sur les obligations. L'intérêt du droit des obligations est de faire suivre la création d'obligations de conséquences juridiques, permettant la sécurité des affaires et l'émergence d'un marché stable."},
            {name: "Fakhri Ben Fradj", image:userImage4,  Job:"Analyste Sportif",title: "Droit de la propriété",description:"Le droit de propriété est le droit, détenu par une personne physique ou une personne morale, d'user, de profiter et disposer d'un bien de toute nature (corporelle ou incorporelle), dans les conditions fixées par loi. Le propriétaire est celui qui dispose de ce droit. Le titre de propriété officialise ce droit."},
            {name: "Mounir ben Jalel", image:userImage2,  Job:"Administrateur",title: "Droit des personnes",description:"Le droit de propriété est le droit, détenu par une personne physique ou une personne morale, d'user, de profiter et disposer d'un bien de toute nature (corporelle ou incorporelle), dans les conditions fixées par loi. Le propriétaire est celui qui dispose de ce droit. Le titre de propriété officialise ce droit."},
        ]
    },
    { id: 2,image:iconpenal, title: "Droit pénal", description: "Le droit pénal est la branche du droit qui réunit l'ensemble des règles de conduite imposées par la société aux citoyens sous peine de sanction.", 
        details: [
            {name: "Sabri Zamni", image:userImage5, Job:"Business Coach",title: "Défense pénale",description:"Les droits de la défense peuvent être définis comme l'ensemble des garanties qui sont accordées à une personne mise en cause, mise en examen, accusée ou prévenue pour lui permettre d'assurer la protection de ses intérêts tout au long du procès pénal."},
            {name: "Sami Samti", image:userImage8, Job:"Lougistique",title: "Représentation des victimes",description:"Les avocats de Giambrone spécialisés dans les droits de succession abordent la question de l'héritage sous deux angles : la fiscalité et les lois sur l'héritage qui s'appliquent aux étrangers laissant des biens en Tunisie : quelles sont les restrictions et s'il est conseillé de rédiger un testament."},
        ]
    },
    { id: 3,image: iconbank, title: "Droit du travail", description: "Le droit du travail organise les relations professionnelles de travail entre l’employeur et le salarié individuellement et la collectivité des salariés. Il encadre de nombreux domaines tels que le contrat de travail, la rémunération, la durée du travail, les congés, la discipline, le licenciement, l’emploi, la formation, la sécurité et la santé au travail, la négociation collective, la grève et la représentation du personnel. ", 
        details: [
            {name: "Rami monsef", image:userImage7,  Job:"Business Coach",title: "Relations individuelles ",description:"Le Droit du travail est en évolution permanente. Il est donc essentiel d'en suivre l'actualité. Les réformes Macron de 2017, en particulier, impactent fortement la matière."},
            {name: "Sami Samti", image:userImage6,  Job:"Analyste Sportif",title: "Relations collectives",description:"Le cours de Relations collectives de travail a pour objet l’étude des règles qui régissent les relations entre, d’un côté, les salariés ou leurs représentants et, de l’autre, l’employeur ou les groupements d’employeurs."},
        ]
    },
    { id: 4,image:iconAdministratif, title: "Droit administratif", description: "Le droit administratif est constitué de l’ensemble des règles définissant les droits et les obligations de l’administration. Il constitue la partie la plus importante du droit public.", 
        details: [
            {name: "Fathel Riyahi", image:userImage3, Job:"Business Coach",title: "Litiges avec l'administration ",description:"Les services du Défenseur des droits essaient en priorité de trouver une solution amiable à votre litige. Ils étudient votre demande et font leur enquête avant de proposer une solution."},
            {name: "Sami Samti", image:userImage1,  Job:"Analyste Sportif",title: "Droit public des affaires",description:"Le droit public des affaires est le droit des relations entre l'administration et les opérateurs économiques. Il regroupe ce que l'on appelle communément le droit public économique (administration de l'économie et entreprises publiques)."},
            {name: "Salem Ben Salem", image:userImage5,  Job:"Analyste",title: "Droit de l'urbanisme",description:"Le droit de l'urbanisme permet aux autorités publiques décentralisées d'entreprendre différentes actions d'urbanisation et d'aménagement territorial."},
        ]
    },
    { id: 5,image: iconNature, title: "Droit de l'environnement", description: "Le droit à l'environnement est ainsi compris comme un droit procédural, un droit à la protection de l'environnement : l'obligation des pouvoirs publics de prêter main forte à celui qui est lésé dans la jouissance de ce droit. En fait, cette façon de voir permet d'unifier les deux méthodes de protéger l'environnement.", 
        details: [
            {name: "Samir Steve", image:userImage5,  Job:"Business Coach",title: "Pollution ",description:"Le droit de la famille est une branche large du droit civil incluant l'ensemble des règles juridiques régissant les rapports familiaux"},
            {name: "Sami Samti", image:userImage7,  Job:"Analyste Sportif",title: "Protection de la nature",description:"Les avocats de Giambrone spécialisés dans les droits de succession abordent la question de l'héritage sous deux angles : la fiscalité et les lois sur l'héritage qui s'appliquent aux étrangers laissant des biens en Tunisie : quelles sont les restrictions et s'il est conseillé de rédiger un testament."},
            {name: "Salem Ben Salem", image:userImage8,  Job:"Analyste",title: "Réglementations spécifiques",description:"Le droit des obligations est la branche du droit privé dans les systèmes de tradition romano-germanique qui porte sur les obligations. L'intérêt du droit des obligations est de faire suivre la création d'obligations de conséquences juridiques, permettant la sécurité des affaires et l'émergence d'un marché stable."},
        ]
    },    
    { id: 6,image: iconFAQ6, title: "Droit international", description: "Le droit international définit les responsabilités juridiques des États dans leurs relations les uns avec les autres et les rapports que peuvent avoir ces États avec les individus qui vivent sur leur territoire.", 
        details: [
            {name: "Lee Sin Steve", image:userImage8, Job:"Business Coach",title: "Droit international privé ",description:"Le droit de la famille est une branche large du droit civil incluant l'ensemble des règles juridiques régissant les rapports familiaux"},
            {name: "Sami Samti", image:userImage4,  Job:"Analyste Sportif",title: "Droit international public",description:"Les avocats de Giambrone spécialisés dans les droits de succession abordent la question de l'héritage sous deux angles : la fiscalité et les lois sur l'héritage qui s'appliquent aux étrangers laissant des biens en Tunisie : quelles sont les restrictions et s'il est conseillé de rédiger un testament."},
            {name: "Salem Ben Salem", image:userImage2,  Job:"Analyste",title: "Droit de l'Union européenne",description:"Le droit des obligations est la branche du droit privé dans les systèmes de tradition romano-germanique qui porte sur les obligations. L'intérêt du droit des obligations est de faire suivre la création d'obligations de conséquences juridiques, permettant la sécurité des affaires et l'émergence d'un marché stable."},
        ]
    },
    { id: 7,image: iconIntelectuel, title: "Droit de la propriété intellectuelle", description: "Les droits de propriété intellectuelle sont les droits conférés à l'individu par une création intellectuelle. Ils donnent généralement au créateur un droit exclusif sur l'utilisation de sa création pendant une certaine période.", 
        details: [
            {name: "Ray lee", image:userImage2, Job:"Business Coach",title: "Droit d'auteur ",description:"Le droit de la famille est une branche large du droit civil incluant l'ensemble des règles juridiques régissant les rapports familiaux"},
            {name: "Sami Ben Samti", image:userImage7,  Job:"Analyste Sportif",title: "Droit des marques",description:"Les avocats de Giambrone spécialisés dans les droits de succession abordent la question de l'héritage sous deux angles : la fiscalité et les lois sur l'héritage qui s'appliquent aux étrangers laissant des biens en Tunisie : quelles sont les restrictions et s'il est conseillé de rédiger un testament."},
            {name: "Steve Ben Salem", image:userImage4,  Job:"Analyste",title: "Droit des brevets",description:"Le droit des obligations est la branche du droit privé dans les systèmes de tradition romano-germanique qui porte sur les obligations. L'intérêt du droit des obligations est de faire suivre la création d'obligations de conséquences juridiques, permettant la sécurité des affaires et l'émergence d'un marché stable."},
        ]
    },
    { id: 8, image: iconFiscal, title: "Droit fiscal", description:  "Le droit fiscal peut être défini comme la branche du droit recouvrant l'ensemble des règles de droit relatives aux impôts. Elle désigne aussi la participation des sujets de droit (personnes physiques, personnes morales) à l'organisation financière de l'État et à l'expression de sa politique économique et sociale.", 
        details: [
            {name: "Ray Steve", image:userImage6,  Job:"Business Coach",title: "Impôts et taxes ",description:"Le droit de la famille est une branche large du droit civil incluant l'ensemble des règles juridiques régissant les rapports familiaux"},
         ]
    },
    { id: 9,image:iconSante, title: "Droit de la santé", description: "Le droit à la santé est un droit global couvrant un large éventail d'éléments qui nous aident à mener une vie saine, comme l'accès à l'eau potable, à des moyens adéquats d'assainissement, à des aliments salubres, à des conditions de travail saines, etc.", 
        details: [
            {name: "Ray Steve", image:userImage7,  Job:"Business Coach",title: "Responsabilité médicale ",description:"Le droit de la famille est une branche large du droit civil incluant l'ensemble des règles juridiques régissant les rapports familiaux"},
            {name: "Sami Samti", image:userImage2,  Job:"Analyste Sportif",title: "Droit pharmaceutique",description:"Les avocats de Giambrone spécialisés dans les droits de succession abordent la question de l'héritage sous deux angles : la fiscalité et les lois sur l'héritage qui s'appliquent aux étrangers laissant des biens en Tunisie : quelles sont les restrictions et s'il est conseillé de rédiger un testament."},
        ]
    },    
    { id: 10,image: iconimmmobiliére, title: "Droit de l'immobilier", description: "Le droit immobilier peut se définir comme l'ensemble des droits découlant des immeubles bâtis ou non bâtis. Il regroupe toutes les règles spécifiques concernant les biens immobiliers.", 
        details: [
            {name: "Ray Ben Fradj", image:userImage5, Job:"Business Coach",title: "Bail commercial et habitation",description:"Le droit de la famille est une branche large du droit civil incluant l'ensemble des règles juridiques régissant les rapports familiaux"},
            {name: "Sami Salem", image:userImage4,  Job:"Analyste Sportif",title: "Copropriété",description:"Les avocats de Giambrone spécialisés dans les droits de succession abordent la question de l'héritage sous deux angles : la fiscalité et les lois sur l'héritage qui s'appliquent aux étrangers laissant des biens en Tunisie : quelles sont les restrictions et s'il est conseillé de rédiger un testament."},
            {name: "Salem Ben Salem", image:userImage3,  Job:"Analyste",title: "Transactions immobilières",description:"Le droit des obligations est la branche du droit privé dans les systèmes de tradition romano-germanique qui porte sur les obligations. L'intérêt du droit des obligations est de faire suivre la création d'obligations de conséquences juridiques, permettant la sécurité des affaires et l'émergence d'un marché stable."},
            {name: "Ray Sami", image:userImage1,  Job:"Analyste Sportif",title: "Droit de la consommation",description:"Le droit de propriété est le droit, détenu par une personne physique ou une personne morale, d'user, de profiter et disposer d'un bien de toute nature (corporelle ou incorporelle), dans les conditions fixées par loi. Le propriétaire est celui qui dispose de ce droit. Le titre de propriété officialise ce droit."},
        ]
    },
];

export default FAQ_DB;
