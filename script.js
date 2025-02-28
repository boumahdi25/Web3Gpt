const languageData = {
    fr: {
      title: "Bienvenue chez UNICORN Web3Gpt",
      subtitle: "Découvrez nos projets futurs :",
      items: [
        "Innovation Technologique",
        "Croissance Utilisateurs",
        "Coopération Écologique"
      ],
      texts: [
        "Innovation Technologique : Optimiser et améliorer continuellement les algorithmes intelligents pour renforcer la sécurité et l'efficacité des transactions, garantissant ainsi aux utilisateurs la meilleure expérience de trading dans un environnement de marché complexe.",
        "Croissance Utilisateurs : En simplifiant l'expérience utilisateur et en renforçant l'interactivité de la plateforme, attirer davantage d'utilisateurs à s'inscrire et utiliser nos services, élargir la base d'utilisateurs et améliorer leur fidélité.",
        "Coopération Écologique : Construire activement des relations de coopération avec les principales plateformes de trading, projets blockchain et institutions financières pour partager les ressources, co-créer de la valeur et promouvoir la généralisation complète des services de trading intelligent."
      ]
    },
    en: {
      title: "Welcome to UNICORN Web3Gpt",
      subtitle: "Discover our future projects:",
      items: [
        "Technological Innovation",
        "User Growth",
        "Ecological Cooperation"
      ],
      texts: [
        "Technological Innovation: Continuously optimize and upgrade intelligent algorithms to improve the security and efficiency of transactions and ensure that users get the best trading experience in a complex market environment.",
        "User Growth: By simplifying the user experience and enhancing the interactivity of the platform, attract more users to register and use our services, expand the user base and improve user stickiness.",
        "Ecological Cooperation: Actively build cooperative relationships with major trading platforms, blockchain projects and financial institutions to achieve resource sharing and value co-creation, and promote the full popularization of intelligent trading services."
      ]
    },
    es: {
      title: "Bienvenido a UNICORN Web3Gpt",
      subtitle: "Descubra nuestros proyectos futuros:",
      items: [
        "Innovación Tecnológica",
        "Crecimiento de Usuarios",
        "Cooperación Ecológica"
      ],
      texts: [
        "Innovación Tecnológica: Optimizar y mejorar continuamente los algoritmos inteligentes para aumentar la seguridad y eficiencia de las transacciones, garantizando a los usuarios la mejor experiencia de trading en un entorno de mercado complejo.",
        "Crecimiento de Usuarios: Simplificando la experiencia del usuario y mejorando la interactividad de la plataforma, atraer a más usuarios a registrarse y utilizar nuestros servicios, expandir la base de usuarios y mejorar su lealtad.",
        "Cooperación Ecológica: Construir activamente relaciones de cooperación con las principales plataformas de trading, proyectos de blockchain e instituciones financieras para compartir recursos, co-crear valor y promover la total popularización de los servicios de trading inteligente."
      ]
    },
    ar: {
      title:"مرحبا بكم في يونيكورن ويب جبت 3",
      subtitle: "اكتشف مشاريعنا المستقبلية:",
      items: [
        "الابتكار التكنولوجي",
        "نمو المستخدمين",
        "التعاون البيئي"
      ],
      texts: [
        "الابتكار التكنولوجي: تحسين وتحديث الخوارزميات الذكية باستمرار لزيادة أمان وكفاءة المعاملات، وضمان حصول المستخدمين على أفضل تجربة تداول في بيئة سوق معقدة.",
        "نمو المستخدمين: من خلال تبسيط تجربة المستخدم وتعزيز التفاعل على المنصة، جذب المزيد من المستخدمين للتسجيل واستخدام خدماتنا، وتوسيع قاعدة المستخدمين وزيادة ولائهم.",
        "التعاون البيئي: بناء علاقات تعاونية نشطة مع منصات التداول الرئيسية، ومشاريع البلوكشين، والمؤسسات المالية لتحقيق مشاركة الموارد وخلق قيمة مشتركة، وتعزيز انتشار خدمات التداول الذكية بشكل كامل."
      ]
    }
  };
  
  function setLanguage(lang) {
    const data = languageData[lang];
    document.getElementById('header-title').textContent = data.title;
    document.getElementById('subtitle').textContent = data.subtitle;
    
    document.querySelectorAll('li').forEach((item, index) => {
      item.textContent = data.items[index];
    });
  
    document.querySelectorAll('.textbox').forEach(box => {
      box.style.display = 'none';
      box.textContent = '';
    });
    document.querySelectorAll('li').forEach(item => {
      item.classList.remove('clicked');
    });
  
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = lang;
  }
  
  function handleClick(element, textBoxId) {
    let textBox = document.getElementById(textBoxId);
    let isClicked = element.classList.contains('clicked');
    const currentLang = Array.from(document.body.classList).find(cls => ['fr', 'en', 'es', 'ar'].includes(cls));
  
    if (isClicked) {
      textBox.style.display = 'none';
      element.classList.remove('clicked');
    } else {
      document.querySelectorAll('.textbox').forEach(box => box.style.display = 'none');
      document.querySelectorAll('li').forEach(item => item.classList.remove('clicked'));
      
      textBox.style.display = 'block';
      element.classList.add('clicked');
      const index = Array.from(element.parentElement.children).indexOf(element) / 2;
      textBox.textContent = languageData[currentLang].texts[index];
    }
  }
  





  // Mise à jour du bouton au chargement de la page
window.addEventListener("load", updateSubscribeButton);
