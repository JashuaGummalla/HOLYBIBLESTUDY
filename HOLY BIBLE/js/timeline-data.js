/**
 * Chronological Biblical Timeline Data
 * The 10 Major Epochs of Redemption History from Creation to Revelation
 */

const BIBLICAL_TIMELINE = [
  {
    id: "creation-fall",
    eraNumber: 1,
    name: "Creation & The Primeval World",
    dates: "c. The Beginning – c. 2100 BC",
    badge: "Genesis 1–11",
    summary: "The sovereign spoken creation of the cosmos, the pristine Garden of Eden, the tragic Fall of mankind through serpent deception, the first promise of the Seed in Genesis 3:15, the catastrophic Flood of Noah, and the dispersion of nations at the Tower of Babel.",
    majorFigures: ["Adam & Eve", "Abel & Seth", "Enoch", "Noah & his sons"],
    keyEvents: [
      "The six days of majestic cosmic creation and divine Sabbath rest",
      "The Fall of humanity, loss of Eden, and the Protoevangelium promise",
      "The wickedness of man, building of Noah's Ark, and the Great Deluge",
      "God's rainbow covenant promising never again to destroy the earth with water",
      "Human pride at Babel confounded by the division of languages"
    ],
    spiritualLessons: [
      "God is the sole eternal Creator and rightful Sovereign of all existence.",
      "Sin brings spiritual death and fractured communion with God.",
      "Even in severe judgment, God's redeeming mercy provides an ark of salvation."
    ],
    associatedBooks: [
      { id: "GEN", name: "Genesis", chapters: "Ch 1–11", startChapter: 1 }
    ]
  },
  {
    id: "patriarchs",
    name: "The Patriarchs & Covenant Promise",
    dates: "c. 2100 – 1876 BC",
    badge: "Genesis 12–50; Job",
    summary: "God calls Abram out of pagan Ur with an unconditional covenant: land, seed, and global blessing through his lineage. Abraham fathered Isaac, who fathered Jacob (renamed Israel), the father of the twelve tribes. Joseph was sold into Egyptian slavery and elevated to save the world from famine.",
    majorFigures: ["Abraham & Sarah", "Isaac & Rebekah", "Jacob (Israel)", "Joseph", "Job"],
    keyEvents: [
      "The calling of Abram and the unconditional covenant of faith",
      "The birth of Isaac and the ultimate test on Mount Moriah",
      "Jacob's midnight wrestling with God at Peniel and receiving the name Israel",
      "Joseph sold into Egyptian slavery, falsely imprisoned, and exalted to prime minister",
      "Job's steadfast faith and triumph over suffering in the land of Uz"
    ],
    spiritualLessons: [
      "Faith is counted as righteousness when we trust God's promises.",
      "God works through imperfect families to fulfill eternal covenant purposes.",
      "What men intend for evil, God orchestrates for saving life."
    ],
    associatedBooks: [
      { id: "GEN", name: "Genesis", chapters: "Ch 12–50", startChapter: 12 },
      { id: "JOB", name: "Job", chapters: "All 42 Chapters", startChapter: 1 }
    ]
  },
  {
    id: "exodus-law",
    name: "The Exodus, Wilderness & The Law",
    dates: "c. 1446 – 1406 BC",
    badge: "Exodus, Leviticus, Numbers, Deuteronomy",
    summary: "Centuries of harsh bondage in Egypt end as God raises Moses. Through ten devastating plagues, the Passover lamb's blood, and the miraculous parting of the Red Sea, God redeems Israel. At Mount Sinai, God gives the Moral Law and Tabernacle blueprints before 40 years of wilderness wandering.",
    majorFigures: ["Moses", "Aaron", "Miriam", "Joshua & Caleb", "Balaam"],
    keyEvents: [
      "The Burning Bush and God revealing His sacred name 'I AM WHO I AM'",
      "The ten plagues against Egypt and the institution of the Passover Lamb",
      "The miraculous Red Sea crossing and singing of Moses' song of deliverance",
      "Giving of the Ten Commandments and Moral Law at Mount Sinai",
      "Construction of the sacred Tabernacle where God's radiant Glory dwells",
      "The failure of faith at Kadesh Barnea leading to 40 years of wilderness wandering"
    ],
    spiritualLessons: [
      "God hears the groans of the oppressed and delivers through atoning blood.",
      "Holiness is required to dwell in communion with a holy God.",
      "Unbelief delays the inheritance of God's promises."
    ],
    associatedBooks: [
      { id: "EXO", name: "Exodus", chapters: "All 40 Chapters", startChapter: 1 },
      { id: "LEV", name: "Leviticus", chapters: "All 27 Chapters", startChapter: 1 },
      { id: "NUM", name: "Numbers", chapters: "All 36 Chapters", startChapter: 1 },
      { id: "DEU", name: "Deuteronomy", chapters: "All 34 Chapters", startChapter: 1 }
    ]
  },
  {
    id: "conquest-judges",
    name: "Conquest of Canaan & Era of the Judges",
    dates: "c. 1406 – 1050 BC",
    badge: "Joshua, Judges, Ruth",
    summary: "Under Joshua's courageous command, Israel crosses the Jordan River and conquers Canaan's fortified strongholds. After Joshua's death, Israel lapses into repetitive cycles of idolatry, foreign oppression, cries for mercy, and divine rescue through charismatic military judges.",
    majorFigures: ["Joshua", "Rahab", "Deborah", "Gideon", "Samson", "Ruth & Boaz"],
    keyEvents: [
      "Miraculous crossing of the swollen Jordan River and falling of Jericho's walls",
      "Sun standing still during battle at Gibeon and land apportioned to the 12 tribes",
      "Deborah and Barak liberating Israel from Sisera's iron chariot army",
      "Gideon routing Midianite hordes with a band of 300 torch-and-trumpet warriors",
      "Samson destroying the Philistine temple of Dagon in his sacrificial death",
      "Boaz redeeming Moabite Ruth in Bethlehem, securing King David's ancestry"
    ],
    spiritualLessons: [
      "Courage is born not from self-confidence, but from resting in God's presence.",
      "Compromise with the world produces bondage and spiritual blindness.",
      "God's faithful providence works through the quiet loyalty of humble hearts."
    ],
    associatedBooks: [
      { id: "JOS", name: "Joshua", chapters: "All 24 Chapters", startChapter: 1 },
      { id: "JDG", name: "Judges", chapters: "All 21 Chapters", startChapter: 1 },
      { id: "RUT", name: "Ruth", chapters: "All 4 Chapters", startChapter: 1 }
    ]
  },
  {
    id: "united-kingdom",
    name: "The United Monarchy: Saul, David & Solomon",
    dates: "c. 1050 – 930 BC",
    badge: "1–2 Samuel, 1 Kings 1–11, 1 Chronicles, Psalms, Proverbs, Ecclesiastes, Song of Solomon",
    summary: "Israel transitions from tribal confederacy to monarchy under Saul. David, a man after God's own heart, slays Goliath, unites the nation, conquers Jerusalem, and receives an eternal throne covenant. Solomon inherits unprecedented peace, constructs the magnificent Temple, but his compromise splits the realm.",
    majorFigures: ["Samuel", "Saul", "Jonathan", "David", "Solomon", "Bathsheba"],
    keyEvents: [
      "Samuel anointing young David in Bethlehem as the future king of Israel",
      "David defeating Goliath with simple faith and five smooth stones",
      "David crowned king over all Israel, bringing the Ark to Mount Zion",
      "The eternal Davidic Covenant promising a kingdom without end (2 Sam 7)",
      "Solomon dedicating the first Temple of Jerusalem in radiant divine glory",
      "The golden era of wisdom literature: Psalms, Proverbs, Ecclesiastes, and Song of Songs"
    ],
    spiritualLessons: [
      "Man looks on the outward appearance, but the Lord looks on the heart.",
      "Genuine brokenness and repentance restore fellowship after tragic failure.",
      "Earthly wealth and wisdom are empty when hearts wander from undivided worship."
    ],
    associatedBooks: [
      { id: "1SA", name: "1 Samuel", chapters: "All 31 Chapters", startChapter: 1 },
      { id: "2SA", name: "2 Samuel", chapters: "All 24 Chapters", startChapter: 1 },
      { id: "1KI", name: "1 Kings", chapters: "Ch 1–11", startChapter: 1 },
      { id: "1CH", name: "1 Chronicles", chapters: "All 29 Chapters", startChapter: 1 },
      { id: "PSA", name: "Psalms", chapters: "All 150 Psalms", startChapter: 23 },
      { id: "PRO", name: "Proverbs", chapters: "All 31 Chapters", startChapter: 3 },
      { id: "ECC", name: "Ecclesiastes", chapters: "All 12 Chapters", startChapter: 1 },
      { id: "SNG", name: "Song of Solomon", chapters: "All 8 Chapters", startChapter: 1 }
    ]
  },
  {
    id: "divided-kingdom",
    name: "The Divided Kingdom & Pre-Exilic Prophets",
    dates: "c. 930 – 586 BC",
    badge: "1 Kings 12–22, 2 Kings, 2 Chronicles, Isaiah, Hosea, Amos, Micah, Jeremiah",
    summary: "Civil war splits Israel into Northern Israel (ten tribes) and Southern Judah (two tribes). The north succumbs rapidly to calf worship and falls to Assyria in 722 BC. Judah experiences alternating revivals under Hezekiah and Josiah and wickedness under Manasseh before falling to Babylon in 586 BC.",
    majorFigures: ["Elijah & Elisha", "Hezekiah & Isaiah", "Josiah", "Jeremiah", "Amos & Hosea"],
    keyEvents: [
      "Rehoboam's foolish counsel splits the monarchy into Israel and Judah",
      "Elijah summoning fire from heaven on Mount Carmel against the prophets of Baal",
      "Elisha's double portion miracles and prophetic ministries to kings",
      "Assyrian siege of Samaria and the permanent destruction of the Northern Kingdom (722 BC)",
      "Hezekiah's miraculous deliverance from the Assyrian emperor Sennacherib",
      "Young King Josiah rediscovering the Torah scroll and igniting nationwide reformation"
    ],
    spiritualLessons: [
      "Idolatry fractures communities and invites devastating judgment.",
      "A solitary prophet walking with God can stand against an apostate empire.",
      "The Word of God rediscovered holds the power to spark profound spiritual revival."
    ],
    associatedBooks: [
      { id: "1KI", name: "1 Kings", chapters: "Ch 12–22", startChapter: 12 },
      { id: "2KI", name: "2 Kings", chapters: "All 25 Chapters", startChapter: 1 },
      { id: "2CH", name: "2 Chronicles", chapters: "Ch 10–36", startChapter: 10 },
      { id: "ISA", name: "Isaiah", chapters: "All 66 Chapters", startChapter: 1 },
      { id: "JER", name: "Jeremiah", chapters: "All 52 Chapters", startChapter: 1 },
      { id: "HOS", name: "Hosea", chapters: "All 14 Chapters", startChapter: 1 },
      { id: "MIC", name: "Micah", chapters: "All 7 Chapters", startChapter: 1 }
    ]
  },
  {
    id: "exile",
    name: "The Babylonian Exile & Prophetic Visions",
    dates: "c. 605 – 538 BC",
    badge: "Daniel, Ezekiel, Lamentations, Obadiah",
    summary: "King Nebuchadnezzar levels Jerusalem, burns Solomon's Temple, and drags Judah's populace into Babylonian exile. Stripped of land and altar, the faithful cling to God. Daniel maintains uncompromising devotion in the royal court, while Ezekiel receives breathtaking visions of dry bones reviving.",
    majorFigures: ["Daniel", "Shadrach, Meshach, Abednego", "Ezekiel", "Nebuchadnezzar", "Cyrus"],
    keyEvents: [
      "The three deportations of Judah to Babylon culminating in Jerusalem's fall (586 BC)",
      "Three Hebrew youths delivered unharmed from the midst of the seven-times heated furnace",
      "Daniel surviving the lions' den and interpreting global kingdom prophecies",
      "Ezekiel witnessing the departure and promised return of the divine Glory",
      "Ezekiel's vision of the Valley of Dry Bones breathed to life by the Ruach (Spirit)",
      "Belshazzar's feast and the supernatural handwriting on the palace wall"
    ],
    spiritualLessons: [
      "God's dominion remains absolute even when earthly temples lie in ruins.",
      "Conviction and daily prayer will overcome the strongest worldly pressures.",
      "No situation is so dead that the Spirit of God cannot breathe resurrection life into it."
    ],
    associatedBooks: [
      { id: "DAN", name: "Daniel", chapters: "All 12 Chapters", startChapter: 1 },
      { id: "EZK", name: "Ezekiel", chapters: "All 48 Chapters", startChapter: 1 },
      { id: "LAM", name: "Lamentations", chapters: "All 5 Chapters", startChapter: 1 },
      { id: "OBA", name: "Obadiah", chapters: "1 Chapter", startChapter: 1 }
    ]
  },
  {
    id: "return-rebuild",
    name: "Return from Exile & Rebuilding Jerusalem",
    dates: "c. 538 – 400 BC",
    badge: "Ezra, Nehemiah, Esther, Haggai, Zechariah, Malachi",
    summary: "In 538 BC, King Cyrus decrees the exiles may return to Zion. Zerubbabel and Joshua rebuild the altar and Second Temple. Queen Esther courageously saves Persian Jewry. Decades later, Ezra restores biblical worship and Nehemiah rebuilds Jerusalem's broken stone walls in 52 days.",
    majorFigures: ["Zerubbabel", "Joshua the High Priest", "Ezra", "Nehemiah", "Esther & Mordecai", "Malachi"],
    keyEvents: [
      "Cyrus the Great issues the liberation decree permitting the Jewish return (538 BC)",
      "Laying the foundations of the Second Temple amid weeping and ecstatic praise",
      "Esther risking her life to thwart Haman's genocidal scheme in Susa",
      "Ezra leading the second return wave, teaching and instilling the Law of God",
      "Nehemiah rallying the people to reconstruct Jerusalem's ruined walls in 52 days",
      "Malachi prophesying the coming Messenger and the rising of the Sun of Righteousness"
    ],
    spiritualLessons: [
      "God stirs the hearts of secular rulers to accomplish His holy promises.",
      "Work and prayer go hand-in-hand when building God's kingdom.",
      "Spiritual renewal requires reverent return to God's holy Word."
    ],
    associatedBooks: [
      { id: "EZR", name: "Ezra", chapters: "All 10 Chapters", startChapter: 1 },
      { id: "NEH", name: "Nehemiah", chapters: "All 13 Chapters", startChapter: 1 },
      { id: "EST", name: "Esther", chapters: "All 10 Chapters", startChapter: 1 },
      { id: "HAG", name: "Haggai", chapters: "All 2 Chapters", startChapter: 1 },
      { id: "ZEC", name: "Zechariah", chapters: "All 14 Chapters", startChapter: 1 },
      { id: "MAL", name: "Malachi", chapters: "All 4 Chapters", startChapter: 1 }
    ]
  },
  {
    id: "life-of-christ",
    name: "The Incarnation, Ministry, Passion & Resurrection of Jesus Christ",
    dates: "c. 4 BC – AD 30/33",
    badge: "Matthew, Mark, Luke, John",
    summary: "The fullness of time arrives: God becomes flesh in Jesus of Nazareth, born of the Virgin Mary in Bethlehem. He proclaims the Kingdom of God, heals the sick, opens blind eyes, casts out demons, and raises the dead. On Golgotha, He offers Himself as the spotless Lamb of God, rising victoriously on the third day.",
    majorFigures: ["Jesus Christ", "Mary & Joseph", "John the Baptist", "The 12 Apostles", "Mary Magdalene", "Pontius Pilate"],
    keyEvents: [
      "The Annunciation, Virgin Birth in Bethlehem, and angelic choirs over the fields",
      "The baptism of Jesus in the Jordan River and temptation in the Judean wilderness",
      "The Sermon on the Mount and proclamation of the Gospel of the Kingdom",
      "Mighty signs, wonderous miracles, and the Transfiguration on the holy mountain",
      "The Last Supper, agony in Gethsemane, betrayal, and crucifixion at Calvary",
      "The glorious bodily Resurrection on the third day, transforming the disciples",
      "The Great Commission and triumphant bodily Ascension from the Mount of Olives"
    ],
    spiritualLessons: [
      "Jesus Christ is the radiance of God's glory and the only Savior of mankind.",
      "Salvation is finished: Christ paid the ultimate ransom with His atoning blood.",
      "The Resurrection validates our faith, conquers death, and guarantees eternal life."
    ],
    associatedBooks: [
      { id: "MAT", name: "Matthew", chapters: "All 28 Chapters", startChapter: 1 },
      { id: "MRK", name: "Mark", chapters: "All 16 Chapters", startChapter: 1 },
      { id: "LUK", name: "Luke", chapters: "All 24 Chapters", startChapter: 1 },
      { id: "JHN", name: "John", chapters: "All 21 Chapters", startChapter: 1 }
    ]
  },
  {
    id: "early-church-eternity",
    name: "The Early Church, Apostolic Mission & The Eternal Hope",
    dates: "AD 30 – Eternity",
    badge: "Acts, Epistles & Revelation",
    summary: "On Pentecost, the Holy Spirit empowers the infant Church with miraculous boldness. Despite fierce Roman and Jewish persecution, the Gospel explodes across Asia Minor, Greece, and Rome. The Apostolic Epistles establish doctrine and holy living. Revelation unveils the final triumph of the Lamb and the New Jerusalem.",
    majorFigures: ["Peter", "Paul", "John", "Stephen", "Barnabas", "Timothy"],
    keyEvents: [
      "The descent of the Holy Spirit on Pentecost and the birth of 3,000 in the Church",
      "Martyrdom of Stephen and the widespread dispersion of believers carrying the Gospel",
      "The dramatic Damascus road conversion of Saul of Tarsus into the Apostle Paul",
      "The Jerusalem Council confirming Gentile believers are saved solely by grace",
      "Paul's three missionary journeys planting resilient churches across the empire",
      "The writing of the Epistles detailing justification, sanctification, and spiritual warfare",
      "John's apocalyptic vision on Patmos: the return of Christ, resurrection, and New Jerusalem"
    ],
    spiritualLessons: [
      "The Holy Spirit empowers ordinary believers for supernatural witness.",
      "We wrestle not against flesh and blood, but against spiritual darkness.",
      "Christ will return in glory to make all things new, and His kingdom shall have no end."
    ],
    associatedBooks: [
      { id: "ACT", name: "Acts", chapters: "All 28 Chapters", startChapter: 1 },
      { id: "ROM", name: "Romans", chapters: "All 16 Chapters", startChapter: 1 },
      { id: "1CO", name: "1 Corinthians", chapters: "All 16 Chapters", startChapter: 13 },
      { id: "EPH", name: "Ephesians", chapters: "All 6 Chapters", startChapter: 6 },
      { id: "PHP", name: "Philippians", chapters: "All 4 Chapters", startChapter: 4 },
      { id: "HEB", name: "Hebrews", chapters: "All 13 Chapters", startChapter: 11 },
      { id: "REV", name: "Revelation", chapters: "All 22 Chapters", startChapter: 21 }
    ]
  }
];

function getTimelineEraById(eraId) {
  return BIBLICAL_TIMELINE.find(era => era.id === eraId) || null;
}
