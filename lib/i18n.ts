export const locales = ["en", "ps", "fa"] as const;

export type Locale = (typeof locales)[number];

export type Direction = "ltr" | "rtl";

export const localeMeta: Record<
  Locale,
  {
    code: string;
    label: string;
    nativeLabel: string;
    languageName: string;
    dir: Direction;
  }
> = {
  en: {
    code: "EN",
    label: "English",
    nativeLabel: "English",
    languageName: "English",
    dir: "ltr",
  },
  ps: {
    code: "PS",
    label: "Pashto",
    nativeLabel: "پښتو",
    languageName: "Pashto",
    dir: "rtl",
  },
  fa: {
    code: "DR",
    label: "Dari",
    nativeLabel: "دری",
    languageName: "Dari",
    dir: "rtl",
  },
};

export const translations = {
  en: {
    brand: "Arya Shipping",
    meta: {
      title: "Arya Shipping | Premium Vehicle Logistics",
      description:
        "Secure vehicle shipping from the USA and Canada to Afghanistan through Mersin Port.",
    },
    header: {
      themeToggle: "Toggle theme",
    },
    hero: {
      badge: "Next-Gen Logistics",
      titlePrefix: "Engineering the",
      titleAccent: "movement of luxury.",
      subtitle:
        "High-control vehicle shipping from North America to Afghanistan. Precision routing, real-time command, zero compromise.",
      primaryCta: "Initiate Transport",
      secondaryCta: "Explore Infrastructure",
    },
    features: {
      heading: "Uncompromising",
      accent: "Infrastructure.",
      items: [
        {
          title: "Mersin Gateway",
          desc: "Optimized route via Turkey. Bypass standard congestion points with our dedicated terminal agreements.",
          icon: "🚢",
        },
        {
          title: "Ro-Ro & Container",
          desc: "Flexible loading options. Choose between fast Roll-on/Roll-off or secure containerized transport.",
          icon: "🏗️",
        },
        {
          title: "Afghanistan Inland",
          desc: "Seamless handover at the border. We manage the complex logistics so you don't have to.",
          icon: "🚛",
        },
        {
          title: "Customs Clearing",
          desc: "Pre-cleared paperwork. Our agents handle the bureaucratic friction before the vessel arrives.",
          icon: "📄",
        },
      ],
    },
    process: {
      headingPrefix: "The",
      headingAccent: "Blueprint",
      steps: [
        {
          num: "01",
          title: "Procurement & Pickup",
          desc: "We retrieve the vehicle from any North American auction, dealership, or private address.",
        },
        {
          num: "02",
          title: "Consolidation",
          desc: "Vehicles are securely staged and loaded at our advanced outbound facilities.",
        },
        {
          num: "03",
          title: "Ocean Freight",
          desc: "Express transit via Mersin Gateway, prioritizing speed and absolute security.",
        },
        {
          num: "04",
          title: "Final Handover",
          desc: "Inland transport and organized handover in Afghanistan with full documentation.",
        },
      ],
    },
    quote: {
      heading: "Initiate",
      accent: "Transport.",
      intro: "Provide the details. We execute. Experience the zero-friction handoff.",
      stats: [
        { value: "15+", label: "Years Experience" },
        { value: "24/7", label: "Command Center" },
      ],
      fields: {
        origin: "Origin",
        destination: "Destination",
        vehicle: "Vehicle Link / VIN",
        vehiclePlaceholder: "Paste Auction Link or VIN",
      },
      countries: {
        usa: "USA",
        canada: "Canada",
        afghanistan: "Afghanistan",
      },
      submit: "Request Intelligence Quote",
    },
    footer: {
      description:
        "Engineered vehicle logistics from North America to Afghanistan. Precision, security, and absolute control.",
      connect: "Connect",
      whatsapp: "WhatsApp Command",
      email: "info@aryashipping.com",
      portal: "Client Portal",
      legal: "Legal",
      terms: "Terms of Transport",
      privacy: "Privacy Infrastructure",
      copyright: "© 2026 Arya Shipping. All systems operational.",
      languageLabel: "Language",
    },
  },
  ps: {
    brand: "آریا شیپینګ",
    meta: {
      title: "آریا شیپینګ | د موټرو باوري لېږد",
      description:
        "له امریکا او کاناډا څخه افغانستان ته د مرسین بندر له لارې د موټرو خوندي لېږد.",
    },
    header: {
      themeToggle: "رنګ بدل کړئ",
    },
    hero: {
      badge: "نوې لوژستیکي حللارې",
      titlePrefix: "د لوکس موټرو",
      titleAccent: "خوځښت په دقت سمبالوو.",
      subtitle:
        "له شمالي امریکا څخه افغانستان ته د موټرو باوري لېږد. دقیق مسیر، پر وخت څارنه، او بشپړ اطمینان.",
      primaryCta: "لېږد پیل کړئ",
      secondaryCta: "زیرساخت وګورئ",
    },
    features: {
      heading: "بې سازشه",
      accent: "زیرساخت.",
      items: [
        {
          title: "د مرسین دروازه",
          desc: "د ترکیې له لارې غوره شوی مسیر. زموږ ځانګړي ترمینلي تړونونه عادي ګڼه ګوڼه کموي.",
          icon: "🚢",
        },
        {
          title: "Ro-Ro او کانتینر",
          desc: "انعطاف منونکي بارولو انتخابونه. چټک رول-آن/رول-آف یا خوندي کانتینري لېږد وټاکئ.",
          icon: "🏗️",
        },
        {
          title: "د افغانستان دننه لېږد",
          desc: "په پوله منظم سپارل. پېچلې لوژستیکي چارې موږ پر مخ وړو.",
          icon: "🚛",
        },
        {
          title: "ګمرکي تصفیه",
          desc: "اسناد له مخکې چمتو کېږي. زموږ استازي د کښتۍ له رسېدو مخکې اداري چارې بشپړوي.",
          icon: "📄",
        },
      ],
    },
    process: {
      headingPrefix: "د کار",
      headingAccent: "نقشه",
      steps: [
        {
          num: "۰۱",
          title: "پېرود او پورته کول",
          desc: "موټر له هر شمالي امریکايي لیلام، ډیلرشپ، یا شخصي پتې څخه ترلاسه کوو.",
        },
        {
          num: "۰۲",
          title: "یوځای کول",
          desc: "موټرونه زموږ په پرمختللو وتونکو مرکزونو کې خوندي درول او بارېږي.",
        },
        {
          num: "۰۳",
          title: "سمندري لېږد",
          desc: "د مرسین دروازې له لارې چټک مسیر، د سرعت او بشپړ امنیت په لومړیتوب.",
        },
        {
          num: "۰۴",
          title: "وروستی سپارل",
          desc: "په افغانستان کې دننه لېږد او منظم سپارل د بشپړو اسنادو سره.",
        },
      ],
    },
    quote: {
      heading: "لېږد",
      accent: "پیل کړئ.",
      intro: "جزئیات راکړئ. اجرا یې موږ کوو. بې خنډه سپارل تجربه کړئ.",
      stats: [
        { value: "۱۵+", label: "کلونه تجربه" },
        { value: "۲۴/۷", label: "د قوماندې مرکز" },
      ],
      fields: {
        origin: "پیل ځای",
        destination: "منزل",
        vehicle: "د موټر لینک / VIN",
        vehiclePlaceholder: "د لیلام لینک یا VIN ولیکئ",
      },
      countries: {
        usa: "امریکا",
        canada: "کاناډا",
        afghanistan: "افغانستان",
      },
      submit: "د نرخ هوښیار غوښتنلیک",
    },
    footer: {
      description:
        "له شمالي امریکا څخه افغانستان ته د موټرو دقیق، خوندي، او بشپړ کنټرول لرونکی لېږد.",
      connect: "اړیکه",
      whatsapp: "د WhatsApp قومانده",
      email: "info@aryashipping.com",
      portal: "د مراجعینو پورټل",
      legal: "حقوقي",
      terms: "د لېږد شرایط",
      privacy: "د محرمیت زیرساخت",
      copyright: "© ۲۰۲۶ آریا شیپینګ. ټول سیستمونه فعال دي.",
      languageLabel: "ژبه",
    },
  },
  fa: {
    brand: "آریا شیپینگ",
    meta: {
      title: "آریا شیپینگ | لوجستیک ممتاز موتر",
      description:
        "انتقال امن موتر از امریکا و کانادا به افغانستان از طریق بندر مرسین.",
    },
    header: {
      themeToggle: "تغییر رنگ",
    },
    hero: {
      badge: "لوجستیک نسل نو",
      titlePrefix: "حرکت موترهای لوکس را",
      titleAccent: "با مهندسی دقیق پیش می بریم.",
      subtitle:
        "انتقال مطمئن موتر از امریکای شمالی به افغانستان. مسیر دقیق، نظارت لحظه ای، و اطمینان کامل.",
      primaryCta: "شروع انتقال",
      secondaryCta: "دیدن زیرساخت",
    },
    features: {
      heading: "زیرساخت",
      accent: "بدون مصالحه.",
      items: [
        {
          title: "دروازه مرسین",
          desc: "مسیر بهینه از راه ترکیه. با توافق های ترمینلی اختصاصی، از ازدحام معمول عبور می کنیم.",
          icon: "🚢",
        },
        {
          title: "Ro-Ro و کانتینر",
          desc: "گزینه های انعطاف پذیر بارگیری. انتقال سریع رول-آن/رول-آف یا کانتینری امن را انتخاب کنید.",
          icon: "🏗️",
        },
        {
          title: "انتقال داخلی افغانستان",
          desc: "تحویل منظم در مرز. مدیریت لوجستیک پیچیده را ما انجام می دهیم.",
          icon: "🚛",
        },
        {
          title: "ترخیص گمرکی",
          desc: "اسناد از پیش آماده می شود. نمایندگان ما کارهای اداری را پیش از رسیدن کشتی انجام می دهند.",
          icon: "📄",
        },
      ],
    },
    process: {
      headingPrefix: "نقشه",
      headingAccent: "کار",
      steps: [
        {
          num: "۰۱",
          title: "خرید و دریافت",
          desc: "موتر را از هر حراجی، نمایشگاه، یا آدرس شخصی در امریکای شمالی دریافت می کنیم.",
        },
        {
          num: "۰۲",
          title: "تجمیع",
          desc: "موترها در مراکز پیشرفته خروجی ما به شکل امن آماده و بارگیری می شوند.",
        },
        {
          num: "۰۳",
          title: "حمل بحری",
          desc: "انتقال سریع از مسیر دروازه مرسین، با اولویت سرعت و امنیت کامل.",
        },
        {
          num: "۰۴",
          title: "تحویل نهایی",
          desc: "انتقال داخلی و تحویل منظم در افغانستان همراه با اسناد کامل.",
        },
      ],
    },
    quote: {
      heading: "شروع",
      accent: "انتقال.",
      intro: "جزئیات را بدهید. اجرا با ما. تحویل بی دردسر را تجربه کنید.",
      stats: [
        { value: "۱۵+", label: "سال تجربه" },
        { value: "۲۴/۷", label: "مرکز فرماندهی" },
      ],
      fields: {
        origin: "مبدا",
        destination: "مقصد",
        vehicle: "لینک موتر / VIN",
        vehiclePlaceholder: "لینک حراجی یا VIN را وارد کنید",
      },
      countries: {
        usa: "امریکا",
        canada: "کانادا",
        afghanistan: "افغانستان",
      },
      submit: "درخواست نرخ هوشمند",
    },
    footer: {
      description:
        "لوجستیک مهندسی شده موتر از امریکای شمالی به افغانستان؛ دقت، امنیت، و کنترول کامل.",
      connect: "ارتباط",
      whatsapp: "فرمان WhatsApp",
      email: "info@aryashipping.com",
      portal: "پورتال مشتریان",
      legal: "حقوقی",
      terms: "شرایط انتقال",
      privacy: "زیرساخت حریم خصوصی",
      copyright: "© ۲۰۲۶ آریا شیپینگ. همه سیستم ها فعال است.",
      languageLabel: "زبان",
    },
  },
} as const;
