// ============================================================================
// content.ts — Lebanese Academy of Beauty (LAB)
// ALL copy in this file is the REAL content extracted from https://www.lab-lb.com
// Do NOT rewrite, "improve", or paraphrase this text. Render it verbatim.
// Image fields are placeholder slots — replace `img: ""` with your own asset
// paths (e.g. "/assets/courses/barbering.jpg"). Do NOT hotlink lab-lb.com URLs.
// ============================================================================

export const site = {
  name: "Lebanese Academy of Beauty",
  shortName: "LAB",
  // Replace with the real logo file the client provides (lab-logo.webp).
  logo: "/assets/lab-logo.webp",
  tagline: "We do not sell courses, we offer careers.",
  heroHeadline: "Master the Art of Beauty with Confidence",
  heroSubline: "Dora · Jbeil",
  branchesLine: "We offer a selection of courses in both our branches Dora & Jbeil. Browse what we have on offer, and register now to start a new career.",
  primaryCta: { label: "Enroll Now", href: "/register" },
};

export const about = {
  eyebrow: "About Us",
  title: "Welcome to LEBANESE ACADEMY OF BEAUTY",
  body:
    "Our website aims to give you an insight into life and work at the academy. We are committed to ensuring that the quality of the provision and that every student has a happy and enjoyable experience while being challenged to achieve their absolute best.",
  founderNote:
    "Beauty is not only art and passion, but also education.",
  founderName: "Dany Attieh",
  readMore: { label: "Read More", href: "/about" },
};

// Animated count-up stats (from the homepage stats bar)
export const stats = [
  { value: 16, suffix: "", label: "Years Experience" },
  { value: 4480, suffix: "", label: "Graduates" },
  { value: 19, suffix: "", label: "Teachers" },
  { value: 2, suffix: "", label: "Branches" },
];

// ---------------------------------------------------------------------------
// COURSES — verbatim from each course page. `blurb` is the short one-liner for
// the carousel card; `why` / `program` / `duration` / `certification` are the
// full detail-page content.
// ---------------------------------------------------------------------------
export interface Course {
  slug: string;
  title: string;
  subtitle?: string;      // e.g. "#1 MAKE UP SCHOOL IN LEBANON"
  blurb: string;          // short line for the carousel card
  why: string;            // "Why Enroll In This Course?" body (may be multi-paragraph)
  program: string[];      // "The Program Includes:" bullets
  duration: string;       // "Course Duration & Certification"
  certification?: string; // certification sentence, if present
  perk?: string;          // e.g. "BY ENROLLING ... YOU GET LAB'S PRO KIT!"
  price?: string;         // if a price is listed inline
  img: string;            // REPLACE with local asset path
}

export const courses: Course[] = [
  {
    slug: "barbering",
    title: "Barbering",
    blurb: "Learn the art of haircuts, creative hair design and stay up to date with the latest trend shapes and styles.",
    why: "The Lebanese Academy of Beauty offers a unique curriculum in barbering. Learn the art of haircuts, creative hair design and stay up to date with the latest trend shapes and styles.",
    program: [
      "Scalp and hair composition",
      "Tools sterilization and handling",
      "Shaving",
      "Baby hair waxing (ears, nose, cheeks, forehead)",
      "Beard trimming",
      "Hair cutting",
      "Hairstyling and blow drying",
      "Hair coloring",
      "Serums and treatments",
      "Defrisage",
    ],
    duration: "6 months, 2 days/week",
    certification: "Upon successful completion of the course, students are awarded a certification as a professional barber.",
    img: "",
  },
  {
    slug: "hair-artistry",
    title: "Hair Artistry",
    subtitle: "Become a Professional Hair Stylist",
    blurb: "Everything from the fundamentals to advanced techniques that will help develop your career in professional hairstyling.",
    why: "Welcome to the world of professional hairstyling, one of the most creative industries in the world today! If you are passionate about this domain, and would like to start making a career out of it, then we are excited to guide you through this journey at the Lebanese Academy of Beauty. In this course, expect to learn everything from the fundamentals to advanced techniques that will help develop your career.",
    program: [
      "Scalp and hair composition",
      "Tools sterilization and handling",
      "Shampooing",
      "Hair cutting",
      "Color wheel theory",
      "Highlight / lowlight",
      "Defrisage",
      "Permanent",
      "Serums and treatments",
      "Up does",
      "Bridal up does",
      "Hairstyling and blow drying",
      "Hair coloring",
      "Color correction",
    ],
    duration: "9 months / 2 days /week",
    price: "2100$",
    certification: "Upon successful completion of the course, students are awarded a certification as a professional hair stylist.",
    img: "",
  },
  {
    slug: "face-tattoo",
    title: "Face Tattoo",
    blurb: "A semi-permanent technique for enhancing the appearance of the eyebrows, lips and eyeliner.",
    why: "Face tattoo is a semi-permanent technique for enhancing the appearance of the eyebrows, lips and eyeliner. This course is offered by our professional face tattoo artists. You will learn all the fundamental techniques including different types of face tattoos, different skin types, hair composition, ink and pigment composition, design principals, safety and hygiene practices, equipment and tools used for face tattoos at an energetic and professional environment to become a confident artist in the industry.\n\nOne of the key aspects covered in our face tattoo course is understanding the unique challenges and considerations involved in tattooing the face. The face has delicate and sensitive skin, which requires special care and attention during the process. Students learn about proper needle selection, ink placement techniques, and how to ensure a comfortable experience for the client.\n\nHands-on practical training is crucial component of the face tattoo course. Our students get the opportunity to practice their skills under the guidance of experienced instructors on artificial skin at first, and then on volunteers provided by the academy.",
    program: [
      "Hair by hair strokes",
      "Ombre",
      "Combo brows",
      "Blade and shade",
      "Eye brow mapping",
      "Microblading",
      "Color and shape correction for eyebrows",
      "Lip blush",
      "Lip contour",
      "Color and shape correction for lips",
      "Shading and soft line effect for eyeliners",
    ],
    perk: "By enrolling in the Face Tattoo course, you get LAB's PRO KIT!",
    duration: "3 months, 3 days/week",
    certification: "Upon successful completion of the course, students are awarded a certification as professional face tattoo artist.",
    img: "",
  },
  {
    slug: "lashes-extension",
    title: "Lashes Extension",
    blurb: "Application of individual synthetic lashes to natural lashes, creating a longer, fuller, more dramatic look.",
    why: "Lash extensions are a very popular beauty treatment that involves the application of individual synthetic lashes to natural lashes, creating a longer, fuller, and more dramatic look. The course covers various aspects, including lash anatomy, safety and hygiene practices, lash extension techniques, product knowledge, client consultation and aftercare.",
    program: [
      "Theory (Anatomy and physiology of the eyelashes, types of lashes…) + practice on doll eyes.",
      "Classic Eye + Gel Remover + Peeling + Practice on real eyes.",
      "Easy Fan Volume Eye + Ring Use + Practice on doll eyes.",
      "W 3D Volume Eye + Y 2D Squirrel Eye.",
      "Volume Eye + Classic Eye + Hybrid Eye + Cat Eye.",
    ],
    duration: "5 sessions, 10 training hours in total",
    certification: "Upon successful completion of the course, students are awarded a certification as a lash extension technician.",
    img: "",
  },
  {
    slug: "lash-lifting",
    title: "Lash Lifting, Tinting Lashes and Brows Lamination",
    blurb: "Non-invasive, painless treatments that enhance lashes and brows without make-up or extensions.",
    why: "Lash lifting and brow lamination are two popular treatments that have gained immense popularity in recent years due to their ability to enhance the appearance of the eyelashes and brows without the need for make up or extensions. These treatments are non-invasive, painless and can be performed in a matter of minutes.\n\nThe purpose of this course is to provide students with the knowledge and skills necessary to perform lash lifting and brow lamination treatments safely and effectively. The course covers all aspects of these treatments, including preparation, technique, and aftercare. Students will be able to perform these treatments confidently and competently, and will have a comprehensive understanding of the techniques and principals involved.",
    program: [
      "Introduction to lash lifting and brow lamination",
      "Anatomy and physiology of the eyelashes and brows",
      "Preparation of lash lifting, tinting lashes and brows lamination",
      "Techniques",
      "Aftercare",
      "Practical training and assessment",
    ],
    duration: "1 session / 2 hours",
    img: "",
  },
  {
    slug: "make-up",
    title: "Make Up",
    subtitle: "#1 Make Up School in Lebanon",
    blurb: "A one-of-a-kind curriculum giving students a solid foundation in the art of make-up application.",
    why: "Welcome to the world of beauty artistry! Our academy offers a one-of-a-kind curriculum that is designed to provide students with a solid foundation in the art of make-up application.\n\nWhether you are a beginner or an experienced make-up artist looking to enhance your skills, this course offers a wide range of techniques and knowledge to help you excel in this very competitive industry. Our expert instructors will guide you through various modules, covering topics such as bridal make-up, artistic make-up, European make-up, Oriental make-up and Lebanese make-up. Through hands-on practice and demonstrations, you will learn how to create flawless looks for different occasions. Additionally, you will gain insights into industry trends and receive guidance on building a successful career as a make-up artist.\n\nJoin us at LAB, the most reputable academy based on experiences from working on sets on LBCI, MTV, L'oreal, Swarzkopf and Baalbeck theatre to mention a few…and embark on an exciting journey into the world of beauty artistry!",
    program: [
      "Knowledge in different skin types and tones",
      "Color wheel theory",
      "Fundamentals of make-up",
      "Product knowledge",
      "Tools & brushes",
      "Face shapes",
      "Eyeshadow styles",
      "Eyeliner styles",
      "Contouring",
      "Eyes, nose, lips shapes and correction",
      "Blush application",
      "Lash application",
      "Day make-up / Night make-up",
      "Artistic make-up",
      "European and Oriental make-up",
      "History of make up (TV / Theater)",
      "Bridal make-up",
    ],
    duration: "3 months, 5 days/week or 3 days/week",
    certification: "Upon successful completion of the course, students are awarded a certification as professional make-up artist.",
    img: "",
  },
  {
    slug: "body-tattoo",
    title: "Body Tattoo",
    blurb: "Discover the human body as your canvas and explore the different styles of body tattoo.",
    why: "Curious about body tattoo but don't know where to start? In this course, we teach you everything you need to know about the art of body tattoo as a profession. Discover the human body as your canvas, and get ready to explore the different styles of body tattoo.\n\nThe course is divided into 2 parts. A theoretical part, where you learn everything you need to know about hygiene, skin composition, and different types of needles to mention a few. As well as a hands-on training under the supervision of experienced tattoo artists and instructors. This allows the students to practice their skills on artificial skin and models before working on real clients. Practical training covers techniques such as outlining, shading, color application, and proper machine handling.",
    program: [
      "Introduction to tattooing",
      "Tattoo safety and hygiene",
      "Anatomy and physiology",
      "Tattoo equipment and tools",
      "Tattoo techniques",
      "Design and composition",
      "Client consultation and communication",
      "Tattoo aftercare",
    ],
    perk: "By enrolling in the Body Tattoo course, you get LAB's PRO TATTOO",
    duration: "3 months, 2 days/week",
    certification: "Upon successful completion of the course, students are awarded a certification as a professional body tattoo artist.",
    img: "",
  },
  {
    slug: "special-effects",
    title: "Special Effects",
    blurb: "Create realistic and visually stunning effects using make-up techniques.",
    why: "Our special effects makeup course is designed to provide students with the knowledge and skills necessary to create realistic and visually stunning effects using make up techniques. Makeup artists need to have a good understanding of anatomy, color theory, and the properties of different material to achieve realistic and convincing effects.",
    program: [
      "Prosthetics",
      "Character creation",
      "Aging",
      "Wounds and injuries",
      "Fantasy makeup",
      "Creature design",
    ],
    duration: "7 sessions of 2 hours each",
    certification: "Upon successful completion of the course, students are awarded a certification as a special effects expert.",
    img: "",
  },
  {
    slug: "skin-care",
    title: "Skin Care",
    blurb: "Master the most innovative skin care techniques with our professional trainers.",
    why: "Skincare professionals are in high demand as the beauty industry is in constant growth and expansion. If you are curious and passionate about how to have flawless skin, and would like to make a career out of it, then this course is right for you!\n\nOur professional trainers will guide you step by step to master the most innovative skin care techniques.",
    program: [
      "Skin types and composition",
      "Skin examination",
      "Skin diseases",
      "Mini skin protocol",
      "Microdermabrasion",
      "Mask application",
      "Black heads extraction",
      "Mesotherapy",
      "Micro needling",
      "Radio frequency",
      "Ultrasound",
      "Hydra facial",
      "High frequency",
      "Fibroblast",
      "Face & hand massage",
      "Carbon laser",
      "Chemical peeling",
      "HIFU",
    ],
    duration: "3 months, 3 days/week",
    img: "",
  },
  {
    slug: "nail-course",
    title: "Nail Course",
    blurb: "Covers all the basics and the latest nail care knowledge and skills at the highest level.",
    why: "LAB's unique curriculum covers all the basics and teaches you the latest Nail care knowledge and skills at the highest level. We prepare you to become a skilled and confident business owner in the beauty industry.",
    program: [
      "Basic knowledge of nail composition",
      "Nail diseases and treatments",
      "Hygiene and contamination",
      "Body waxing",
      "Hands paraffine treatment",
      "Hands and feet massage",
      "Eyebrow shaping and tweezing",
      "Manicure",
      "Pedicure",
      "Russian manicure and pedicure",
      "Rubber Base",
      "Gel extensions / gel polish",
      "Acrylic",
      "Polygel",
      "Fiberglass Nails",
      "Refills",
    ],
    duration: "3 months, 3 days/week",
    img: "",
  },
  {
    slug: "organic-course",
    title: "Organic Course",
    blurb: "Learn the basic concept and science to formalize and create your own product.",
    why: "Learn the basic concept and science to formalize and create your own product.",
    program: [
      "Day 1: Carrier oils vs essential oils + ayurvedic hair serum",
      "Day 2: Lotion bar + extract",
      "Day 3: Oil base sunscreen",
      "Day 4: Hair Butter",
      "Day 5: Body butter + bronzing",
      "Day 6: Face serum (oil base)",
      "Day 7: Toners + Facial mist",
      "Day 8: Hyaluronic acid + Niacinamide",
      "Day 9: Aloevera plant to cosmetic grade",
      "Day 10: Gel (eye + facial + hair)",
      "Day 11: Lip Balm + oil base deodorant",
      "Day 12: Emulsified Sugar Scrub + Bath Bomb",
      "Day 13: Base Cream or Lotion",
      "Day 14: Sunscreen Water Base",
    ],
    duration: "Beginners + Advanced: 15 Sessions / 2 days /week",
    img: "",
  },
];

// ---------------------------------------------------------------------------
// CONTACT / FOOTER
// ---------------------------------------------------------------------------
export const contact = {
  phones: [
    { label: "Dora", number: "+961 1 889 540" },
    { label: "Dora", number: "+961 3 497 756" },
    { label: "Jbeil", number: "+961 3 544 966" },
  ],
  email: "info@lab-lb.com",
  whatsapp: "+961 3 497 756", // floating WhatsApp button on current site
  hours: [
    { days: "Monday, Wednesday, and Thursday", time: "9 am to 8 pm" },
    { days: "Tuesday and Friday", time: "9 am to 5 pm" },
  ],
  hoursNote: "The Academy closes its doors on weekends and holidays.",
  social: {
    facebook: "https://www.facebook.com/LABacademy?ref=hl",
    instagram: "https://www.instagram.com/LABacademy/",
  },
  copyright: "Copyright © 2026 Lebanese Academy of Beauty",
};

// Register-page course checkboxes + branch options (from the contact/register form)
export const registerForm = {
  intro:
    "Ask about details and registration dates for upcoming sessions.",
  courseOptions: courses.map((c) => c.title),
  branches: ["Dora", "Jbeil"],
  fields: ["Your name", "Your email", "Phone", "Your message (optional)"],
};
