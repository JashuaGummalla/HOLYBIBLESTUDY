/**
 * Holy Bible Data & Canonical Metadata
 * Complete canonical catalog of all 66 Books of the Bible (39 Old Testament, 27 New Testament)
 * USFM 3-letter codes, Genre, Chapters, Authorship, Date, Historical Era, Core Theme & Spiritual Highlights
 */

const BIBLE_BOOKS = [
  // ==========================================
  // OLD TESTAMENT (39 Books)
  // ==========================================
  // --- The Pentateuch / The Law (Torah) ---
  {
    id: "GEN",
    name: "Genesis",
    testament: "OT",
    genre: "Law",
    totalChapters: 50,
    author: "Moses",
    date: "c. 1445–1405 BC",
    era: "Creation & Patriarchs",
    theme: "Beginnings: Creation, The Fall, God's Covenant Promise, and the Seed of Faith",
    highlights: [
      "The majestic creation of the universe and mankind in God's image (Ch 1-2)",
      "The tragic Fall of humanity and the first Messianic promise of redemption (Ch 3:15)",
      "Noah's Ark, the Great Flood, and God's rainbow covenant of mercy (Ch 6-9)",
      "The Abrahamic Covenant: unconditional promise of land, seed, and global blessing (Ch 12, 15, 17)",
      "Joseph's sovereign journey: God turning human evil into redemptive salvation (Ch 37-50)"
    ],
    keyVerses: ["Genesis 1:1", "Genesis 3:15", "Genesis 12:1-3", "Genesis 50:20"]
  },
  {
    id: "EXO",
    name: "Exodus",
    testament: "OT",
    genre: "Law",
    totalChapters: 40,
    author: "Moses",
    date: "c. 1445–1405 BC",
    era: "The Exodus & Wilderness",
    theme: "Redemption from Bondage, Deliverance by Blood, and the Presence of God in the Tabernacle",
    highlights: [
      "The Burning Bush and the sacred self-revelation of God as 'I AM WHO I AM' (Ch 3)",
      "The Passover Lamb, deliverance from death, and the parting of the Red Sea (Ch 12-14)",
      "The Ten Commandments given at Mount Sinai (Ch 20)",
      "The blueprints and construction of the Holy Tabernacle where God dwells with man (Ch 25-40)",
      "The Glory of the Lord filling the Tabernacle (Ch 40:34-38)"
    ],
    keyVerses: ["Exodus 3:14", "Exodus 14:14", "Exodus 20:1-17", "Exodus 33:14"]
  },
  {
    id: "LEV",
    name: "Leviticus",
    testament: "OT",
    genre: "Law",
    totalChapters: 27,
    author: "Moses",
    date: "c. 1445–1405 BC",
    era: "The Exodus & Wilderness",
    theme: "The Call to Holiness: Approaching a Holy God Through Atoning Blood and Consecrated Living",
    highlights: [
      "The Five Sacred Offerings: Burnt, Grain, Peace, Sin, and Guilt Offerings (Ch 1-7)",
      "The Consecration and solemn ministry of the Levitical Priesthood (Ch 8-10)",
      "Yom Kippur (The Day of Atonement) and the Scapegoat bearing away sins (Ch 16)",
      "The Sacred Holiness Code: 'You shall be holy, for I the LORD your God am holy' (Ch 19:2)",
      "The Seven Appointed Feasts of the Lord foreshadowing the redemptive calendar (Ch 23)"
    ],
    keyVerses: ["Leviticus 17:11", "Leviticus 19:2", "Leviticus 20:26"]
  },
  {
    id: "NUM",
    name: "Numbers",
    testament: "OT",
    genre: "Law",
    totalChapters: 36,
    author: "Moses",
    date: "c. 1445–1405 BC",
    era: "The Exodus & Wilderness",
    theme: "Wilderness Pilgrimage: God's Enduring Faithfulness Amid Human Rebellion and Unbelief",
    highlights: [
      "The Priestly Aaronic Blessing of peace, grace, and divine light (Ch 6:24-26)",
      "The report of the twelve spies, the tragic crisis of faith at Kadesh Barnea (Ch 13-14)",
      "Aaron's rod that budded, confirming divine priestly authority (Ch 17)",
      "The Bronze Serpent lifted on a pole, foreshadowing Christ's crucifixion (Ch 21:4-9; John 3:14)",
      "Balaam's prophetic oracle declaring the Star that shall come out of Jacob (Ch 24:17)"
    ],
    keyVerses: ["Numbers 6:24-26", "Numbers 14:18", "Numbers 21:8-9", "Numbers 23:19"]
  },
  {
    id: "DEU",
    name: "Deuteronomy",
    testament: "OT",
    genre: "Law",
    totalChapters: 34,
    author: "Moses",
    date: "c. 1406 BC",
    era: "The Exodus & Wilderness",
    theme: "Covenant Renewal: Wholehearted Love, Obedience, and Remembering God's Mighty Acts",
    highlights: [
      "The Shema: 'Hear, O Israel: The LORD our God, the LORD is one! Love Him with all your heart' (Ch 6:4-5)",
      "The warning against spiritual pride and forgetting God when entering prosperity (Ch 8)",
      "The promise of the Great Prophet like unto Moses (Ch 18:15-19)",
      "The solemn call to choose between life and death, blessing and curse (Ch 30:19-20)",
      "The death of Moses upon Mount Nebo and the passing of leadership to Joshua (Ch 34)"
    ],
    keyVerses: ["Deuteronomy 6:4-5", "Deuteronomy 8:3", "Deuteronomy 30:19", "Deuteronomy 31:6"]
  },

  // --- Historical Books (12) ---
  {
    id: "JOS",
    name: "Joshua",
    testament: "OT",
    genre: "History",
    totalChapters: 24,
    author: "Joshua (with Phinehas)",
    date: "c. 1400–1370 BC",
    era: "Conquest & Judges",
    theme: "Inheriting the Promised Land: Courage, Faith, and Total Reliance on God's Word",
    highlights: [
      "God's charge of fearless courage and meditating day and night on the Law (Ch 1:6-9)",
      "Rahab's faith and the scarlet cord of salvation (Ch 2)",
      "The miraculous crossing of the Jordan River and twelve memorial stones (Ch 3-4)",
      "The collapse of Jericho's fortified walls through praise and obedience (Ch 6)",
      "Joshua's immortal declaration: 'As for me and my house, we will serve the LORD' (Ch 24:15)"
    ],
    keyVerses: ["Joshua 1:8-9", "Joshua 24:15"]
  },
  {
    id: "JDG",
    name: "Judges",
    testament: "OT",
    genre: "History",
    totalChapters: 21,
    author: "Samuel (trad.)",
    date: "c. 1050–1000 BC",
    era: "Conquest & Judges",
    theme: "Cycles of Sin, Deliverance, and the Need for a Righteous Shepherd-King",
    highlights: [
      "The repeating cycle: rebellion, oppression, cry for help, and God raising a deliverer (Ch 2)",
      "Deborah and Barak's victorious battle song of faith (Ch 4-5)",
      "Gideon's fleece, overcoming fear, and victory with only 300 men (Ch 6-7)",
      "Samson's supernatural strength, tragic compromise, and final triumph (Ch 13-16)",
      "The spiritual chaos when 'everyone did what was right in his own eyes' (Ch 21:25)"
    ],
    keyVerses: ["Judges 2:18", "Judges 21:25"]
  },
  {
    id: "RUT",
    name: "Ruth",
    testament: "OT",
    genre: "History",
    totalChapters: 4,
    author: "Samuel (trad.)",
    date: "c. 1000 BC",
    era: "Conquest & Judges",
    theme: "Loyal Love (Hesed), Divine Providence, and the Kinsman-Redeemer",
    highlights: [
      "Ruth's unbreakable covenant devotion to Naomi: 'Where you go I will go' (Ch 1:16-17)",
      "Boaz shows sacrificial grace to an impoverished foreign gleaner (Ch 2)",
      "The Kinsman-Redeemer (Go'el) stepping forward to restore the lost inheritance (Ch 3-4)",
      "The royal genealogy of Ruth connecting directly to King David and Jesus Christ (Ch 4:18-22)"
    ],
    keyVerses: ["Ruth 1:16-17", "Ruth 2:12", "Ruth 4:14"]
  },
  {
    id: "1SA",
    name: "1 Samuel",
    testament: "OT",
    genre: "History",
    totalChapters: 31,
    author: "Samuel, Nathan, Gad",
    date: "c. 930–722 BC",
    era: "The United Kingdom",
    theme: "Transition from Theocracy to Monarchy: God Looks at the Heart, Not Outward Appearance",
    highlights: [
      "Hannah's heartfelt prayer, the birth of Samuel, and her prophetic song of exaltation (Ch 1-2)",
      "The call of young Samuel in the temple: 'Speak, LORD, for Your servant hears' (Ch 3)",
      "Israel demands a human king; Saul anointed as the first king (Ch 8-10)",
      "David anointed king in Bethlehem: 'The LORD looks at the heart' (Ch 16:7)",
      "David's heroic faith defeating Goliath with a sling and five smooth stones (Ch 17)"
    ],
    keyVerses: ["1 Samuel 12:24", "1 Samuel 15:22", "1 Samuel 16:7", "1 Samuel 17:47"]
  },
  {
    id: "2SA",
    name: "2 Samuel",
    testament: "OT",
    genre: "History",
    totalChapters: 24,
    author: "Nathan, Gad",
    date: "c. 930–722 BC",
    era: "The United Kingdom",
    theme: "David's Reign, the Davidic Covenant, and the Gravity of Sin and Forgiveness",
    highlights: [
      "David crowned king over all Israel and establishing Jerusalem as the holy city (Ch 5)",
      "Bringing the Ark of the Covenant to Zion with joyful dancing and worship (Ch 6)",
      "The unconditional Davidic Covenant: an everlasting throne fulfilled in Christ (Ch 7)",
      "David's moral fall with Bathsheba, Nathan's rebuke, and deep brokenhearted repentance (Ch 11-12)",
      "David's song of deliverance and praise for the Rock of his salvation (Ch 22)"
    ],
    keyVerses: ["2 Samuel 7:16", "2 Samuel 22:2-4"]
  },
  {
    id: "1KI",
    name: "1 Kings",
    testament: "OT",
    genre: "History",
    totalChapters: 22,
    author: "Jeremiah (trad.)",
    date: "c. 560–538 BC",
    era: "The United & Divided Kingdom",
    theme: "Glory and Division: Solomon's Wisdom, the Splendid Temple, and Elijah's Bold Stance",
    highlights: [
      "Solomon asking God for an understanding heart to judge His people (Ch 3)",
      "The construction and dedication of Solomon's magnificent Temple filled with God's glory (Ch 6-8)",
      "The division of the kingdom into Northern Israel and Southern Judah under Rehoboam and Jeroboam (Ch 12)",
      "Elijah the prophet fed by ravens, reviving the widow's son at Zarephath (Ch 17)",
      "The dramatic showdown on Mount Carmel: Fire from heaven consuming the offering (Ch 18)"
    ],
    keyVerses: ["1 Kings 3:9", "1 Kings 8:27", "1 Kings 18:39", "1 Kings 19:12"]
  },
  {
    id: "2KI",
    name: "2 Kings",
    testament: "OT",
    genre: "History",
    totalChapters: 25,
    author: "Jeremiah (trad.)",
    date: "c. 560–538 BC",
    era: "The Divided Kingdom & Exile",
    theme: "Apostasy, Prophetic Warning, and the Inevitable Judgment of the Exile",
    highlights: [
      "Elijah taken up to heaven in a chariot of fire; Elisha receives a double portion of his spirit (Ch 2)",
      "Elisha's miracles: the widow's oil, healing Naaman the Syrian of leprosy (Ch 4-5)",
      "The fall and Assyrian exile of the Northern Kingdom of Israel (Ch 17)",
      "King Hezekiah's prayer for deliverance from Sennacherib and miraculous salvation (Ch 18-19)",
      "Young King Josiah's sweeping revival upon rediscovering the Book of the Law (Ch 22-23)"
    ],
    keyVerses: ["2 Kings 2:9", "2 Kings 6:16", "2 Kings 20:5"]
  },
  {
    id: "1CH",
    name: "1 Chronicles",
    testament: "OT",
    genre: "History",
    totalChapters: 29,
    author: "Ezra (trad.)",
    date: "c. 450–420 BC",
    era: "Return from Exile",
    theme: "Spiritual Heritage: David's Heart of Worship and Preparation for the House of God",
    highlights: [
      "The Prayer of Jabez: asking God to bless and enlarge territory and keep from evil (Ch 4:9-10)",
      "David bringing the Ark to Jerusalem and appointing perpetual Levite worship singers (Ch 16)",
      "David's magnificent psalm of thanksgiving: 'Oh, give thanks to the LORD, for He is good!' (Ch 16:8-36)",
      "David assembling enormous resources and building plans for the future Temple (Ch 22, 28)",
      "David's closing doxology: 'Yours, O LORD, is the greatness, the power, and the glory' (Ch 29:11)"
    ],
    keyVerses: ["1 Chronicles 4:10", "1 Chronicles 16:34", "1 Chronicles 29:11-12"]
  },
  {
    id: "2CH",
    name: "2 Chronicles",
    testament: "OT",
    genre: "History",
    totalChapters: 36,
    author: "Ezra (trad.)",
    date: "c. 450–420 BC",
    era: "Return from Exile",
    theme: "Seeking the Lord: The Temple, Royal Revivals, and the Power of Repentant Prayer",
    highlights: [
      "The divine promise of national healing: 'If My people who are called by My name humble themselves and pray' (Ch 7:14)",
      "King Asa's battle cry: 'Help us, O LORD our God, for we rest on You' (Ch 14)",
      "Jehoshaphat's choir marching before the army singing praises and watching God rout enemies (Ch 20)",
      "Hezekiah's grand Passover celebration uniting scattered Israelites in genuine praise (Ch 30)",
      "Cyrus the Persian king's decree liberating God's people to rebuild the Temple in Jerusalem (Ch 36:22-23)"
    ],
    keyVerses: ["2 Chronicles 7:14", "2 Chronicles 16:9", "2 Chronicles 20:12", "2 Chronicles 20:17"]
  },
  {
    id: "EZR",
    name: "Ezra",
    testament: "OT",
    genre: "History",
    totalChapters: 10,
    author: "Ezra",
    date: "c. 450–430 BC",
    era: "Return from Exile",
    theme: "Restoration of the Temple and Spiritual Revival Through the Word of God",
    highlights: [
      "The first wave of exiles returns to Jerusalem under Zerubbabel to lay the altar (Ch 1-3)",
      "Laying the foundation of the second Temple amid mingled shouts of joy and weeping (Ch 3:10-13)",
      "The prophets Haggai and Zechariah stirring the people to complete the Temple (Ch 5-6)",
      "Ezra the scribe sets his heart to study, practice, and teach the statutes of God (Ch 7:10)",
      "Ezra's agonizing intercessory prayer and national repentance regarding unfaithfulness (Ch 9-10)"
    ],
    keyVerses: ["Ezra 3:11", "Ezra 7:10", "Ezra 8:22"]
  },
  {
    id: "NEH",
    name: "Nehemiah",
    testament: "OT",
    genre: "History",
    totalChapters: 13,
    author: "Nehemiah",
    date: "c. 430–400 BC",
    era: "Return from Exile",
    theme: "Rebuilding Broken Walls, Godly Leadership, and Restoring Covenant Community",
    highlights: [
      "Nehemiah weeping, fasting, and praying over the ruined walls of Jerusalem (Ch 1)",
      "The bold inspection of the broken walls by night and rallying the people to build (Ch 2)",
      "Building with a trowel in one hand and a sword in the other against relentless enemies (Ch 4)",
      "The miraculous completion of Jerusalem's massive walls in only 52 days (Ch 6:15)",
      "The public reading of the Law: 'Do not grieve, for the joy of the LORD is your strength' (Ch 8:10)"
    ],
    keyVerses: ["Nehemiah 1:4", "Nehemiah 4:14", "Nehemiah 8:10"]
  },
  {
    id: "EST",
    name: "Esther",
    testament: "OT",
    genre: "History",
    totalChapters: 10,
    author: "Mordecai (trad.)",
    date: "c. 460–330 BC",
    era: "Return from Exile",
    theme: "Silent Sovereignty: God's Hidden Hand Preserving His People from Annihilation",
    highlights: [
      "Young Jewish orphan Esther crowned queen in the imperial palace of Persia (Ch 2)",
      "Mordecai's courageous challenge: 'Who knows whether you have come to the kingdom for such a time as this?' (Ch 4:14)",
      "Esther's selfless surrender: 'Go, gather all the Jews... fast for me... if I perish, I perish' (Ch 4:16)",
      "The poetic reversal: Haman hanged on the very gallows he erected for Mordecai (Ch 7)",
      "The institution of the joyous Feast of Purim celebrating divine deliverance (Ch 9)"
    ],
    keyVerses: ["Esther 4:14", "Esther 4:16", "Esther 8:17"]
  },

  // --- Poetry & Wisdom Literature (5) ---
  {
    id: "JOB",
    name: "Job",
    testament: "OT",
    genre: "Poetry/Wisdom",
    totalChapters: 42,
    author: "Unknown (trad. Moses/Elihu)",
    date: "c. Patriarchal Era",
    era: "The Patriarchs",
    theme: "Sovereignty in Suffering, Unshakable Trust, and the Majesty of God Beyond Human Logic",
    highlights: [
      "Job's agonizing losses and steadfast worship: 'The LORD gave and the LORD has taken away' (Ch 1:21)",
      "Job's triumphant proclamation of faith: 'I know that my Redeemer lives!' (Ch 19:25-27)",
      "The divine dialogue: God speaking to Job out of the whirlwind of creation (Ch 38-41)",
      "Job's repentant humility: 'I had heard of You by the hearing of the ear, but now my eye sees You' (Ch 42:5)",
      "Job praying for his critical friends and God restoring double what was lost (Ch 42:10)"
    ],
    keyVerses: ["Job 1:21", "Job 13:15", "Job 19:25-26", "Job 42:2"]
  },
  {
    id: "PSA",
    name: "Psalms",
    testament: "OT",
    genre: "Poetry/Wisdom",
    totalChapters: 150,
    author: "David, Asaph, Sons of Korah, Moses, Solomon",
    date: "c. 1410–430 BC",
    era: "The United Kingdom",
    theme: "The Inspired Prayer Book: Honest Lament, Ecstatic Praise, and Messianic Hope",
    highlights: [
      "Psalm 1: The blessed man rooted like a tree planted by streams of living water",
      "Psalm 23: 'The LORD is my Shepherd; I shall not want. He leads me beside still waters'",
      "Psalm 51: David's profound prayer of repentance: 'Create in me a clean heart, O God'",
      "Psalm 91: The divine shield of protection under the shadow of the Almighty",
      "Psalm 150: The grand cosmic crescendo: 'Let everything that has breath praise the LORD!'"
    ],
    keyVerses: ["Psalm 1:1-3", "Psalm 23:1-6", "Psalm 46:1", "Psalm 91:1-2", "Psalm 119:105", "Psalm 150:6"]
  },
  {
    id: "PRO",
    name: "Proverbs",
    testament: "OT",
    genre: "Poetry/Wisdom",
    totalChapters: 31,
    author: "Solomon, Agur, Lemuel",
    date: "c. 970–700 BC",
    era: "The United Kingdom",
    theme: "Skillful Living in the Fear of the Lord: Practical Wisdom, Righteousness, and Discernment",
    highlights: [
      "The foundation of all true understanding: 'The fear of the LORD is the beginning of knowledge' (Ch 1:7)",
      "Trusting God over self: 'Trust in the LORD with all your heart and lean not on your own understanding' (Ch 3:5-6)",
      "Guarding the spiritual core: 'Keep your heart with all vigilance, for from it flow the springs of life' (Ch 4:23)",
      "The supreme blessing of wise words, integrity in work, and righteous relationships (Ch 10-24)",
      "The noble woman of valor who fears the Lord and manages her household with diligence (Ch 31)"
    ],
    keyVerses: ["Proverbs 1:7", "Proverbs 3:5-6", "Proverbs 4:23", "Proverbs 16:3", "Proverbs 27:17"]
  },
  {
    id: "ECC",
    name: "Ecclesiastes",
    testament: "OT",
    genre: "Poetry/Wisdom",
    totalChapters: 12,
    author: "Solomon (Qoheleth)",
    date: "c. 935 BC",
    era: "The United Kingdom",
    theme: "The Emptiness of Life 'Under the Sun' Apart from God, and the Joy of Reverent Obedience",
    highlights: [
      "The vanity of chasing pleasure, wealth, and worldly achievements apart from divine purpose (Ch 1-2)",
      "The famous poetic rhythm of time: 'For everything there is a season, and a time for every purpose under heaven' (Ch 3:1-8)",
      "The strength of fellowship: 'A threefold cord is not quickly broken' (Ch 4:9-12)",
      "Remembering the Creator in the days of youth before the golden bowl is shattered (Ch 12:1-7)",
      "The definitive conclusion of the whole matter: 'Fear God and keep His commandments, for this is man's all' (Ch 12:13)"
    ],
    keyVerses: ["Ecclesiastes 3:1", "Ecclesiastes 3:11", "Ecclesiastes 12:13"]
  },
  {
    id: "SNG",
    name: "Song of Solomon",
    testament: "OT",
    genre: "Poetry/Wisdom",
    totalChapters: 8,
    author: "Solomon",
    date: "c. 965 BC",
    era: "The United Kingdom",
    theme: "The Beauty of Marital Love, Pure Passion, and Christ's Sacred Romance with His Bride",
    highlights: [
      "The celebration of pure, joyful romance and physical attraction in God's covenant design (Ch 1-2)",
      "The bride's ardent search and joyful reunion with her beloved (Ch 3)",
      "The groom's breathtaking poetic praise of the spotless beauty of his bride (Ch 4)",
      "The power of love: 'Love is strong as death, jealousy as cruel as the grave; its flashes are flashes of fire' (Ch 8:6)",
      "The unquenchable nature of divine covenant love: 'Many waters cannot quench love' (Ch 8:7)"
    ],
    keyVerses: ["Song of Solomon 2:4", "Song of Solomon 2:16", "Song of Solomon 8:6-7"]
  },

  // --- Major Prophets (5) ---
  {
    id: "ISA",
    name: "Isaiah",
    testament: "OT",
    genre: "Major Prophets",
    totalChapters: 66,
    author: "Isaiah",
    date: "c. 740–680 BC",
    era: "Divided Kingdom & Prophets",
    theme: "The Holy One of Israel: Judgment, Comfort, and the Suffering Servant Who Redeems the World",
    highlights: [
      "Isaiah's vision of the thrice-holy God and burning coal of cleansing: 'Here am I! Send me' (Ch 6)",
      "The Virgin Birth prophecy of Immanuel ('God with us') and the Prince of Peace (Ch 7:14; 9:6)",
      "Comfort for God's people: Those who wait upon the LORD renewing their strength like eagles (Ch 40:28-31)",
      "The Suffering Servant: 'He was pierced for our transgressions, crushed for our iniquities' (Ch 53)",
      "The glorious vision of the New Heavens and New Earth where peace reigns eternally (Ch 65-66)"
    ],
    keyVerses: ["Isaiah 7:14", "Isaiah 9:6", "Isaiah 40:31", "Isaiah 41:10", "Isaiah 53:5-6", "Isaiah 55:8-9"]
  },
  {
    id: "JER",
    name: "Jeremiah",
    testament: "OT",
    genre: "Major Prophets",
    totalChapters: 52,
    author: "Jeremiah",
    date: "c. 627–580 BC",
    era: "Divided Kingdom & Exile",
    theme: "The Weeping Prophet: Unrelenting Warnings, Brokenness over Sin, and the New Covenant",
    highlights: [
      "Jeremiah's divine calling in his mother's womb to uproot, tear down, build, and plant (Ch 1)",
      "The indictment of forsaking God, the fountain of living waters, for broken cisterns (Ch 2:13)",
      "The potter's house: God shaping stubborn clay according to His sovereign will (Ch 18)",
      "God's message of hope to exiles: 'I know the plans I have for you... to give you a future and a hope' (Ch 29:11)",
      "The promise of the New Covenant written upon the hearts of God's people (Ch 31:31-34)"
    ],
    keyVerses: ["Jeremiah 1:5", "Jeremiah 17:7-8", "Jeremiah 29:11-13", "Jeremiah 31:33", "Jeremiah 33:3"]
  },
  {
    id: "LAM",
    name: "Lamentations",
    testament: "OT",
    genre: "Major Prophets",
    totalChapters: 5,
    author: "Jeremiah",
    date: "c. 586 BC",
    era: "The Babylonian Exile",
    theme: "Grief Over Jerusalem's Ruin, Yet Hope in the Unfailing Mercies of God",
    highlights: [
      "The desolation of Jerusalem sitting solitary, like an abandoned widow weeping in the night (Ch 1)",
      "The solemn acknowledgment that God's righteous wrath visited the sins of the leaders (Ch 2)",
      "The blazing center of faith amidst ashes: 'The steadfast love of the LORD never ceases; His mercies are new every morning' (Ch 3:22-24)",
      "The contrast between past royal splendor and present degrading starvation (Ch 4)",
      "A desperate plea for restoration: 'Turn us back to You, O LORD, and we will be restored' (Ch 5:21)"
    ],
    keyVerses: ["Lamentations 3:22-26", "Lamentations 5:21"]
  },
  {
    id: "EZK",
    name: "Ezekiel",
    testament: "OT",
    genre: "Major Prophets",
    totalChapters: 48,
    author: "Ezekiel",
    date: "c. 593–571 BC",
    era: "The Babylonian Exile",
    theme: "The Glory of God: Departure due to Idolatry, and Resurrection of the Dry Bones",
    highlights: [
      "The awe-inspiring chariot throne of God and the four living creatures by the Chebar River (Ch 1)",
      "The tragic departure of God's radiant glory from the corrupt Jerusalem temple (Ch 10-11)",
      "The promise of heart surgery: 'I will give you a new heart and put a new spirit within you' (Ch 36:26)",
      "The Vision of the Valley of Dry Bones breathing back to life by the Spirit of God (Ch 37)",
      "The glorious future temple with life-giving river waters flowing from the altar (Ch 47)"
    ],
    keyVerses: ["Ezekiel 34:11", "Ezekiel 36:26-27", "Ezekiel 37:4-5"]
  },
  {
    id: "DAN",
    name: "Daniel",
    testament: "OT",
    genre: "Major Prophets",
    totalChapters: 12,
    author: "Daniel",
    date: "c. 605–536 BC",
    era: "The Babylonian Exile",
    theme: "God Rules the Kingdoms of Men: Uncompromising Faith and Apocalyptic Visions of the Messiah",
    highlights: [
      "Four young captives resolve not to defile themselves with the king's delicacies (Ch 1)",
      "Nebuchadnezzar's dream of the great statue crushed by a supernatural rock of eternity (Ch 2)",
      "Shadrach, Meshach, and Abednego in the fiery furnace accompanied by a fourth man like the Son of God (Ch 3)",
      "Daniel delivered unharmed from the den of hungry lions because he trusted in his God (Ch 6)",
      "The apocalyptic vision of the Ancient of Days and the Son of Man receiving an eternal dominion (Ch 7)"
    ],
    keyVerses: ["Daniel 2:21", "Daniel 3:17-18", "Daniel 6:23", "Daniel 7:13-14"]
  },

  // --- Minor Prophets (12) ---
  {
    id: "HOS",
    name: "Hosea",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 14,
    author: "Hosea",
    date: "c. 753–715 BC",
    era: "Divided Kingdom & Prophets",
    theme: "Relentless Redeeming Love: God's Agonizing Heart for His Unfaithful Bride",
    highlights: [
      "Hosea commanded to marry Gomer, embodying God's wounded love for idolatrous Israel (Ch 1-3)",
      "Hosea buying back his unfaithful wife from the slave market with silver and barley (Ch 3)",
      "God's desire for genuine intimacy: 'I desire mercy and not sacrifice, the knowledge of God rather than burnt offerings' (Ch 6:6)",
      "The tender fatherly love of God teaching Ephraim to walk, leading with cords of kindness (Ch 11:1-4)",
      "The heartfelt call to return to the Lord with words of repentance and receive healing (Ch 14)"
    ],
    keyVerses: ["Hosea 6:3", "Hosea 6:6", "Hosea 14:4"]
  },
  {
    id: "JOL",
    name: "Joel",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 3,
    author: "Joel",
    date: "c. 835–796 BC",
    era: "Divided Kingdom & Prophets",
    theme: "The Day of the Lord: Judgment, National Repentance, and the Outpouring of the Holy Spirit",
    highlights: [
      "A devastating locust plague as a wake-up call to awaken a spiritually sleeping nation (Ch 1)",
      "The urgent call to heartfelt brokenness: 'Rend your heart and not your garments' (Ch 2:12-13)",
      "God's promise to restore the years that the swarming locust has eaten (Ch 2:25)",
      "The historic prophecy of the Spirit poured out upon all flesh fulfilled on Pentecost (Ch 2:28-32; Acts 2)",
      "The Valley of Decision and the final triumph of God from Zion (Ch 3)"
    ],
    keyVerses: ["Joel 2:12-13", "Joel 2:25", "Joel 2:28-29", "Joel 2:32"]
  },
  {
    id: "AMO",
    name: "Amos",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 9,
    author: "Amos",
    date: "c. 760–750 BC",
    era: "Divided Kingdom & Prophets",
    theme: "Let Justice Roll Like Waters: Confronting Religious Hypocrisy and Defending the Oppressed",
    highlights: [
      "The shepherd from Tekoa called by God to confront the affluent, callous northern kingdom (Ch 1)",
      "Indictments against nations for inhumanity and against Israel for selling the poor for sandals (Ch 2)",
      "God's rejection of empty religious festivals when oppression continues unchecked (Ch 5:21-23)",
      "The ringing prophetic mandate: 'Let justice roll down like waters, and righteousness like an ever-flowing stream' (Ch 5:24)",
      "The final vision of the restoration of David's fallen tent and fertile abundance (Ch 9:11-15)"
    ],
    keyVerses: ["Amos 5:14-15", "Amos 5:24", "Amos 9:11"]
  },
  {
    id: "OBA",
    name: "Obadiah",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 1,
    author: "Obadiah",
    date: "c. 586 BC",
    era: "The Babylonian Exile",
    theme: "The Downfall of Edom's Pride and the Triumph of the Kingdom of God",
    highlights: [
      "Judgment pronounced against Edom for dwelling in the rock clefts and boasting in pride (v 1-4)",
      "Edom condemned for gloating over brother Jacob during the tragic fall of Jerusalem (v 10-14)",
      "The principle of divine retribution: 'As you have done, it shall be done to you' (v 15)",
      "Deliverance on Mount Zion and the holy inheritance of God's people (v 17)",
      "The ultimate victory: 'And the kingdom shall be the LORD's' (v 21)"
    ],
    keyVerses: ["Obadiah 1:3", "Obadiah 1:15", "Obadiah 1:21"]
  },
  {
    id: "JON",
    name: "Jonah",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 4,
    author: "Jonah",
    date: "c. 785–760 BC",
    era: "Divided Kingdom & Prophets",
    theme: "The Boundary-Breaking Mercy of God and the Peril of Resisting His Missionary Heart",
    highlights: [
      "Jonah fleeing from God's presence on a ship to Tarshish and the terrifying sea storm (Ch 1)",
      "Jonah swallowed by a great fish; praying from the belly of Sheol: 'Salvation belongs to the LORD!' (Ch 2)",
      "Nineveh's extraordinary national repentance from the king to the beasts upon hearing Jonah's message (Ch 3)",
      "Jonah's petty sulking over the withered plant and his resentment of God's forgiveness (Ch 4:1-3)",
      "God's compassionate heart for 120,000 lost souls who cannot discern their right hand from their left (Ch 4:11)"
    ],
    keyVerses: ["Jonah 2:9", "Jonah 4:2", "Jonah 4:11"]
  },
  {
    id: "MIC",
    name: "Micah",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 7,
    author: "Micah",
    date: "c. 735–700 BC",
    era: "Divided Kingdom & Prophets",
    theme: "Justice, Mercy, and the Humble Ruler Born in Little Bethlehem",
    highlights: [
      "Micah denouncing corrupt rulers and false prophets who exploit the poor (Ch 2-3)",
      "The glorious vision of Mount Zion in the latter days where swords are beaten into plowshares (Ch 4:1-4)",
      "The precise prophecy of the Messiah's birthplace: 'You, Bethlehem Ephrathah... out of you shall come forth' (Ch 5:2)",
      "The golden summary of true religion: 'To do justice, love mercy, and walk humbly with your God' (Ch 6:8)",
      "The wondrous praise of God's forgiving grace casting our sins into the depths of the sea (Ch 7:18-19)"
    ],
    keyVerses: ["Micah 5:2", "Micah 6:8", "Micah 7:18-19"]
  },
  {
    id: "NAM",
    name: "Nahum",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 3,
    author: "Nahum",
    date: "c. 663–612 BC",
    era: "Divided Kingdom & Prophets",
    theme: "The Fall of Nineveh: God as the Avenger of Oppression and Stronghold for the Faithful",
    highlights: [
      "The awe-inspiring character of God: slow to anger, great in power, a stronghold in the day of trouble (Ch 1:1-7)",
      "The proclamation of peace to Judah: the overthrow of their brutal Assyrian oppressor (Ch 1:15)",
      "The vivid depiction of Nineveh's siege and catastrophic collapse (Ch 2)",
      "The utter helplessness of the bloodstained city despite its immense wealth and fortifications (Ch 3)",
      "The universal relief of oppressed nations at the end of Nineveh's cruelty (Ch 3:19)"
    ],
    keyVerses: ["Nahum 1:3", "Nahum 1:7", "Nahum 1:15"]
  },
  {
    id: "HAB",
    name: "Habakkuk",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 3,
    author: "Habakkuk",
    date: "c. 612–589 BC",
    era: "Divided Kingdom & Prophets",
    theme: "From Wrestling to Worship: 'The Righteous Shall Live by Faith'",
    highlights: [
      "Habakkuk's honest complaint to God over unchecked injustice and violence in Judah (Ch 1:1-4)",
      "God's shocking response: raising up the ruthless Babylonians to execute judgment (Ch 1:5-11)",
      "The watchtower vigil and the seminal theological truth: 'The just shall live by his faith' (Ch 2:1-4)",
      "The vision of the earth filled with the knowledge of the glory of the LORD as waters cover the sea (Ch 2:14)",
      "Habakkuk's magnificent prayer song: rejoicing in the LORD even if the fig tree does not blossom (Ch 3:17-19)"
    ],
    keyVerses: ["Habakkuk 2:4", "Habakkuk 2:14", "Habakkuk 2:20", "Habakkuk 3:17-19"]
  },
  {
    id: "ZEP",
    name: "Zephaniah",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 3,
    author: "Zephaniah",
    date: "c. 640–621 BC",
    era: "Divided Kingdom & Prophets",
    theme: "The Great Day of the Lord: Purging Fire and God Rejoicing Over His People with Singing",
    highlights: [
      "The sweeping judgment on all idolatry and complacent cynicism: 'The LORD will not do good nor evil' (Ch 1)",
      "The exhortation to seek the Lord, seek righteousness, and seek humility before the day of anger (Ch 2:1-3)",
      "The purifying of peoples' speech that they may call upon the name of the Lord with one accord (Ch 3:9)",
      "A humble and lowly remnant trusting in the holy name of the LORD (Ch 3:12-13)",
      "The joyous picture of God: 'He will rejoice over you with gladness, He will quiet you with His love' (Ch 3:17)"
    ],
    keyVerses: ["Zephaniah 2:3", "Zephaniah 3:9", "Zephaniah 3:17"]
  },
  {
    id: "HAG",
    name: "Haggai",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 2,
    author: "Haggai",
    date: "c. 520 BC",
    era: "Return from Exile",
    theme: "Prioritizing the Kingdom: Rebuilding the House of God and the Promise of Greater Glory",
    highlights: [
      "Confronting misaligned priorities: living in paneled houses while God's house lies in ruins (Ch 1:1-4)",
      "The sobering challenge: 'Consider your ways!' and the resulting obedience of Zerubbabel and the people (Ch 1:5-14)",
      "God's comforting presence: 'Be strong, all you people of the land... and work; for I am with you' (Ch 2:4)",
      "The promise of greater glory: 'The glory of this present house shall be greater than the former' (Ch 2:9)",
      "Zerubbabel chosen as God's royal signet ring, pointing toward the Messianic line (Ch 2:23)"
    ],
    keyVerses: ["Haggai 1:5", "Haggai 2:4", "Haggai 2:9"]
  },
  {
    id: "ZEC",
    name: "Zechariah",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 14,
    author: "Zechariah",
    date: "c. 520–480 BC",
    era: "Return from Exile",
    theme: "The Coming Shepherd-King: Visions of Restoration, the Pierced Messiah, and His Global Kingdom",
    highlights: [
      "Eight night visions encouraging the rebuilding of Jerusalem and the Temple (Ch 1-6)",
      "The divine empowerer: 'Not by might nor by power, but by My Spirit, says the LORD of hosts' (Ch 4:6)",
      "The Humble King arriving on a donkey: 'Rejoice greatly, O daughter of Zion!' (Ch 9:9; Matt 21:5)",
      "The betrayal price of thirty pieces of silver cast to the potter in the house of the LORD (Ch 11:12-13)",
      "The pierced Savior: 'They will look on Me whom they pierced, and mourn for Him' (Ch 12:10; 14:9)"
    ],
    keyVerses: ["Zechariah 4:6", "Zechariah 9:9", "Zechariah 12:10", "Zechariah 14:9"]
  },
  {
    id: "MAL",
    name: "Malachi",
    testament: "OT",
    genre: "Minor Prophets",
    totalChapters: 4,
    author: "Malachi",
    date: "c. 430–400 BC",
    era: "Return from Exile",
    theme: "God's Covenant Love, Honoring the Altar, and the Rising of the Sun of Righteousness",
    highlights: [
      "God's enduring love declared and defended against cynical doubts (Ch 1:1-5)",
      "Rebuke of priests offering blemished sacrifices and breaking the sacred marriage covenant (Ch 1-2)",
      "The Messenger of the Covenant coming suddenly to His temple like a refiner's fire (Ch 3:1-3)",
      "Bringing the full tithe into the storehouse and watching God open the windows of heaven (Ch 3:10)",
      "The Sun of Righteousness rising with healing in His wings, sending Elijah before the great Day (Ch 4)"
    ],
    keyVerses: ["Malachi 3:1", "Malachi 3:10", "Malachi 4:2"]
  },

  // ==========================================
  // NEW TESTAMENT (27 Books)
  // ==========================================
  // --- The Four Gospels (4) ---
  {
    id: "MAT",
    name: "Matthew",
    testament: "NT",
    genre: "Gospels",
    totalChapters: 28,
    author: "Matthew (Levi)",
    date: "c. AD 55–65",
    era: "The Life of Christ",
    theme: "Jesus Christ the Promised King of the Jews and Fulfillment of Old Testament Prophecy",
    highlights: [
      "The royal genealogy of Jesus descending from Abraham and David (Ch 1)",
      "The Sermon on the Mount: The Beatitudes, salt and light, and the Kingdom righteousness (Ch 5-7)",
      "Peter's confession: 'You are the Christ, the Son of the living God' and the rock-solid church (Ch 16:16-18)",
      "The Olivet Discourse on the end of the age and Christ's glorious return (Ch 24-25)",
      "The Great Commission: 'All authority has been given to Me... Go therefore and make disciples of all nations' (Ch 28:18-20)"
    ],
    keyVerses: ["Matthew 5:3-10", "Matthew 6:33", "Matthew 11:28-30", "Matthew 16:16", "Matthew 28:18-20"]
  },
  {
    id: "MRK",
    name: "Mark",
    testament: "NT",
    genre: "Gospels",
    totalChapters: 16,
    author: "John Mark",
    date: "c. AD 55–62",
    era: "The Life of Christ",
    theme: "Jesus the Suffering Servant of God: Miracles, Immediacy, and Ransom for Many",
    highlights: [
      "The rapid beginning of Jesus' ministry: 'The time is fulfilled, and the kingdom of God is at hand' (Ch 1:15)",
      "Authority over demons, sickness, the tempest, and death itself (Ch 4-5)",
      "The central core verse: 'For even the Son of Man came not to be served, but to serve, and to give His life as a ransom for many' (Ch 10:45)",
      "The Roman centurion's confession at the cross: 'Truly this man was the Son of God!' (Ch 15:39)",
      "The empty tomb and the resurrection announcement: 'He is risen; He is not here' (Ch 16:6)"
    ],
    keyVerses: ["Mark 1:15", "Mark 8:34-36", "Mark 10:45", "Mark 16:6"]
  },
  {
    id: "LUK",
    name: "Luke",
    testament: "NT",
    genre: "Gospels",
    totalChapters: 24,
    author: "Luke the Physician",
    date: "c. AD 60–62",
    era: "The Life of Christ",
    theme: "Jesus the Perfect Son of Man: Compassion for the Lost, the Poor, Outcasts, and Sinners",
    highlights: [
      "The angelic annunciation to Mary, Mary's Magnificat, and the birth in Bethlehem's manger (Ch 1-2)",
      "Jesus announces His mission in Nazareth: 'The Spirit of the Lord is upon Me... to preach good news to the poor' (Ch 4:18)",
      "The Parables of Grace: The Good Samaritan, the Lost Sheep, and the Prodigal Son (Ch 10, 15)",
      "Zacchaeus the chief tax collector transformed: 'For the Son of Man has come to seek and save that which was lost' (Ch 19:10)",
      "The resurrected Christ walking unrecognized with two disciples on the Emmaus road (Ch 24:13-35)"
    ],
    keyVerses: ["Luke 1:37", "Luke 4:18-19", "Luke 9:23", "Luke 15:7", "Luke 19:10", "Luke 24:32"]
  },
  {
    id: "JHN",
    name: "John",
    testament: "NT",
    genre: "Gospels",
    totalChapters: 21,
    author: "John the Apostle",
    date: "c. AD 85–95",
    era: "The Life of Christ",
    theme: "Jesus the Incarnate Word and Divine Son of God: Believe and Have Eternal Life",
    highlights: [
      "The majestic Prologue: 'In the beginning was the Word... and the Word became flesh' (Ch 1:1, 14)",
      "The nocturnal conversation with Nicodemus: 'You must be born again... For God so loved the world' (Ch 3:3, 16)",
      "The Seven 'I AM' Sayings: Bread of Life, Light of the World, Door, Good Shepherd, Resurrection & Life, Way Truth Life, True Vine",
      "The Upper Room Discourse and promises of the Holy Spirit the Comforter (Ch 14-16)",
      "Christ's High Priestly Prayer for the unity and sanctification of all believers (Ch 17)"
    ],
    keyVerses: ["John 1:1", "John 1:14", "John 3:16", "John 10:10", "John 11:25", "John 14:6", "John 15:5"]
  },

  // --- Church History (1) ---
  {
    id: "ACT",
    name: "Acts",
    testament: "NT",
    genre: "Acts",
    totalChapters: 28,
    author: "Luke the Physician",
    date: "c. AD 62–64",
    era: "The Early Church & Eternity",
    theme: "The Holy Spirit Unleashed: The Birth, Power, Witness, and Global Advance of the Church",
    highlights: [
      "The Day of Pentecost: Holy Spirit falls with rushing wind and tongues of fire (Ch 2)",
      "The fellowship of the first believers: prayer, breaking of bread, and signs and wonders (Ch 2:42-47)",
      "Stephen's bold martyrdom and dying prayer for forgiveness (Ch 7)",
      "The supernatural conversion of Saul of Tarsus on the road to Damascus (Ch 9)",
      "The Gospel breaks through to the Gentiles at Cornelius's house and Paul's missionary journeys (Ch 10, 13-28)"
    ],
    keyVerses: ["Acts 1:8", "Acts 2:38", "Acts 4:12", "Acts 16:31"]
  },

  // --- Pauline Epistles (14) ---
  {
    id: "ROM",
    name: "Romans",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 16,
    author: "Paul",
    date: "c. AD 57",
    era: "The Early Church & Eternity",
    theme: "The Righteousness of God: Justification by Faith, Unbreakable Grace, and Transformed Living",
    highlights: [
      "Universal condemnation: 'All have sinned and fall short of the glory of God' (Ch 3:23)",
      "Justified freely by faith in Christ's blood apart from works of the law (Ch 3:24-28; Ch 5:1)",
      "Freedom from the power of sin: Dead to sin, alive to God in Christ Jesus (Ch 6)",
      "The grand anthem of assurance: 'There is therefore now no condemnation for those in Christ Jesus' (Ch 8:1, 31-39)",
      "The living sacrifice: 'Do not be conformed to this world, but be transformed by the renewing of your mind' (Ch 12:1-2)"
    ],
    keyVerses: ["Romans 1:16-17", "Romans 3:23", "Romans 5:8", "Romans 8:1", "Romans 8:28", "Romans 8:38-39", "Romans 12:1-2"]
  },
  {
    id: "1CO",
    name: "1 Corinthians",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 16,
    author: "Paul",
    date: "c. AD 55",
    era: "The Early Church & Eternity",
    theme: "Sanctifying the Church: Overcoming Division, Living in Purity, Operating in Love and Gifts",
    highlights: [
      "The wisdom of the Cross as the foolishness of God confounding the wisdom of the world (Ch 1:18-25)",
      "Our bodies as temples of the Holy Spirit, purchased with the precious blood (Ch 6:19-20)",
      "Grace in temptation: God providing a way of escape so we can endure (Ch 10:13)",
      "The Hymn of Divine Love (Agape): 'Love is patient, love is kind... love never fails' (Ch 13)",
      "The triumphant defense of the physical resurrection of Christ and our victory over death (Ch 15)"
    ],
    keyVerses: ["1 Corinthians 1:18", "1 Corinthians 6:19-20", "1 Corinthians 10:13", "1 Corinthians 13:4-7", "1 Corinthians 15:55-57"]
  },
  {
    id: "2CO",
    name: "2 Corinthians",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 13,
    author: "Paul",
    date: "c. AD 55–56",
    era: "The Early Church & Eternity",
    theme: "Power Perfected in Weakness: The Heart of an Apostle, Comfort in Affliction, and Generosity",
    highlights: [
      "The God of all comfort comforting us in tribulations so we can comfort others (Ch 1:3-4)",
      "Treasure in earthen jars, that the surpassing greatness of the power may be of God (Ch 4:7)",
      "New creation: 'If anyone is in Christ, he is a new creation; old things have passed away' (Ch 5:17-21)",
      "The joy of cheerful giving and God multiplying every good seed (Ch 9:6-8)",
      "Paul's thorn in the flesh: 'My grace is sufficient for you, for My power is made perfect in weakness' (Ch 12:9-10)"
    ],
    keyVerses: ["2 Corinthians 1:3-4", "2 Corinthians 4:17-18", "2 Corinthians 5:17", "2 Corinthians 9:7", "2 Corinthians 12:9"]
  },
  {
    id: "GAL",
    name: "Galatians",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 6,
    author: "Paul",
    date: "c. AD 48–49",
    era: "The Early Church & Eternity",
    theme: "Christian Liberty: Freedom from the Law Through Grace and Walking by the Spirit",
    highlights: [
      "Zeal for the true Gospel: Warning against deserting Christ for another gospel (Ch 1:6-9)",
      "Crucified with Christ: 'It is no longer I who live, but Christ lives in me' (Ch 2:20)",
      "The purpose of the Law as a tutor leading us to Christ that we might be justified by faith (Ch 3:24)",
      "Adoption as sons: Calling God 'Abba, Father' and no longer being slaves (Ch 4:4-7)",
      "Walking by the Spirit vs. the works of the flesh, and cultivating the Fruit of the Spirit (Ch 5:16-25)"
    ],
    keyVerses: ["Galatians 2:20", "Galatians 5:1", "Galatians 5:16", "Galatians 5:22-23", "Galatians 6:9"]
  },
  {
    id: "EPH",
    name: "Ephesians",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 6,
    author: "Paul",
    date: "c. AD 60–62",
    era: "The Early Church & Eternity",
    theme: "Our Heavenly Riches in Christ: The Mystery of the Church and the Full Armor of God",
    highlights: [
      "Blessed with every spiritual blessing in heavenly places in Christ (Ch 1:3-14)",
      "Saved by grace through faith: 'Not of works, so that no one can boast' (Ch 2:8-10)",
      "Christ breaking down the dividing wall of hostility between Jew and Gentile (Ch 2:14-16)",
      "Walking worthy of our calling in unity, love, and spiritual maturity (Ch 4:1-16)",
      "Putting on the Whole Armor of God to withstand the schemes of the devil (Ch 6:10-18)"
    ],
    keyVerses: ["Ephesians 1:3", "Ephesians 2:8-10", "Ephesians 3:20", "Ephesians 4:32", "Ephesians 6:10-11"]
  },
  {
    id: "PHP",
    name: "Philippians",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 4,
    author: "Paul",
    date: "c. AD 60–62",
    era: "The Early Church & Eternity",
    theme: "Rejoice in the Lord: Unsinkable Joy, Christ's Mind of Humility, and Contentment in All Things",
    highlights: [
      "Confidence in God's completion: 'He who began a good work in you will complete it' (Ch 1:6)",
      "The Great Christ Hymn: Jesus emptying Himself, taking the form of a servant, exalted above all (Ch 2:5-11)",
      "Pressing toward the goal: Forgetting what lies behind and straining toward the prize of the high call (Ch 3:13-14)",
      "The antidote to anxiety: 'In everything by prayer and supplication with thanksgiving' (Ch 4:6-7)",
      "The secret of supernatural strength: 'I can do all things through Christ who strengthens me' (Ch 4:13)"
    ],
    keyVerses: ["Philippians 1:6", "Philippians 2:5-8", "Philippians 4:6-7", "Philippians 4:8", "Philippians 4:13", "Philippians 4:19"]
  },
  {
    id: "COL",
    name: "Colossians",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 4,
    author: "Paul",
    date: "c. AD 60–62",
    era: "The Early Church & Eternity",
    theme: "The Supremacy and Sufficiency of Christ: Head of Creation, Head of the Church, and Life of the Believer",
    highlights: [
      "The cosmic supremacy of Christ: The image of the invisible God, by whom all things were created (Ch 1:15-20)",
      "The glorious mystery revealed: 'Christ in you, the hope of glory' (Ch 1:27)",
      "Fullness in Christ: In Him dwells all the fullness of the Godhead bodily, cancelling our debt (Ch 2:9-14)",
      "Setting minds on things above, where Christ is seated at the right hand of God (Ch 3:1-4)",
      "Putting on the new self: Compassion, kindness, humility, gentleness, patience, and love (Ch 3:12-17)"
    ],
    keyVerses: ["Colossians 1:15-18", "Colossians 2:9-10", "Colossians 3:1-2", "Colossians 3:12-14", "Colossians 3:23"]
  },
  {
    id: "1TH",
    name: "1 Thessalonians",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 5,
    author: "Paul",
    date: "c. AD 51",
    era: "The Early Church & Eternity",
    theme: "Comfort in Christ's Return: Model Church Living, Sanctification, and the Blessed Hope",
    highlights: [
      "A model church celebrated for work of faith, labor of love, and steadfastness of hope (Ch 1:2-3)",
      "Paul's gentle pastoral heart: Caring for believers like a nursing mother and father (Ch 2:7-12)",
      "The will of God for our sanctification and living in moral purity (Ch 4:3-8)",
      "The Rapture and return of the Lord with trumpet call and resurrection of the sleeping saints (Ch 4:13-18)",
      "Continuous spiritual rhythm: 'Rejoice always, pray without ceasing, in everything give thanks' (Ch 5:16-18)"
    ],
    keyVerses: ["1 Thessalonians 4:16-17", "1 Thessalonians 5:16-18", "1 Thessalonians 5:23-24"]
  },
  {
    id: "2TH",
    name: "2 Thessalonians",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 3,
    author: "Paul",
    date: "c. AD 51–52",
    era: "The Early Church & Eternity",
    theme: "Standing Firm Amid Persecution: Clarifying the Day of the Lord and Diligent Christian Living",
    highlights: [
      "Growth in faith and love flourishing despite severe persecutions and tribulations (Ch 1:3-4)",
      "Comfort regarding the Day of the Lord: Correcting false rumors that it had already occurred (Ch 2:1-3)",
      "The unveiling of the Man of Lawlessness and his destruction by the breath of Christ's mouth (Ch 2:3-8)",
      "Praying for the Word of the Lord to run swiftly and be glorified (Ch 3:1-5)",
      "A stern warning against idleness and the call to quiet, productive industry (Ch 3:6-13)"
    ],
    keyVerses: ["2 Thessalonians 2:15", "2 Thessalonians 3:3", "2 Thessalonians 3:13"]
  },
  {
    id: "1TI",
    name: "1 Timothy",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 6,
    author: "Paul",
    date: "c. AD 62–64",
    era: "The Early Church & Eternity",
    theme: "Order and Sound Doctrine in the Household of God: Pastoral Wisdom for Church Leaders",
    highlights: [
      "The goal of Christian instruction: Love from a pure heart, a good conscience, and sincere faith (Ch 1:5)",
      "Christ Jesus came into the world to save sinners, of whom Paul counts himself foremost (Ch 1:15)",
      "The call to intercessory prayer for all people, for kings, and for those in high authority (Ch 2:1-4)",
      "Qualifications for overseers (elders) and deacons in God's church (Ch 3:1-13)",
      "Warning against the love of money and exhortation to fight the good fight of faith (Ch 6:6-12)"
    ],
    keyVerses: ["1 Timothy 1:15", "1 Timothy 2:5", "1 Timothy 4:12", "1 Timothy 6:6", "1 Timothy 6:12"]
  },
  {
    id: "2TI",
    name: "2 Timothy",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 4,
    author: "Paul",
    date: "c. AD 66–67",
    era: "The Early Church & Eternity",
    theme: "Paul's Final Charge: Unashamed Endurance, Biblical Fidelity, and Finishing the Race",
    highlights: [
      "God's spirit given to us: 'Not a spirit of fear, but of power, love, and a sound mind' (Ch 1:7)",
      "The disciple-making chain: Entrusting truth to faithful people who will teach others also (Ch 2:2)",
      "The soldier, athlete, and farmer metaphors of Christian perseverance and discipline (Ch 2:3-6)",
      "The divine inspiration and power of Scripture: 'All Scripture is God-breathed and profitable' (Ch 3:16-17)",
      "Paul's moving epitaph: 'I have fought the good fight, I have finished the race, I have kept the faith' (Ch 4:7-8)"
    ],
    keyVerses: ["2 Timothy 1:7", "2 Timothy 2:15", "2 Timothy 3:16-17", "2 Timothy 4:7-8"]
  },
  {
    id: "TIT",
    name: "Titus",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 3,
    author: "Paul",
    date: "c. AD 63–65",
    era: "The Early Church & Eternity",
    theme: "Sound Doctrine Producing Godly Character and Good Works in an Unbelieving Culture",
    highlights: [
      "Appointing elders in every city who hold fast the faithful word (Ch 1:5-9)",
      "Discipling older men, older women, young women, and young men in sound living (Ch 2:1-8)",
      "The grace of God that brings salvation teaching us to deny ungodliness and live self-controlled lives (Ch 2:11-14)",
      "Reminding believers to be submissive to rulers, ready for every good work, and gentle to all (Ch 3:1-2)",
      "Salvation not by works of righteousness which we have done, but according to His mercy by the washing of regeneration (Ch 3:5)"
    ],
    keyVerses: ["Titus 2:11-13", "Titus 3:5"]
  },
  {
    id: "PHM",
    name: "Philemon",
    testament: "NT",
    genre: "Pauline Epistles",
    totalChapters: 1,
    author: "Paul",
    date: "c. AD 60–62",
    era: "The Early Church & Eternity",
    theme: "Radical Reconciliation: Receiving a Runaway Slave as a Beloved Brother in Christ",
    highlights: [
      "Paul's loving thanksgiving and prayer for Philemon's faith and love (v 4-7)",
      "Paul appeals on behalf of Onesimus, whom he fathered in the faith while in chains (v 8-10)",
      "A once 'useless' runaway slave now made deeply useful for the kingdom of God (v 11)",
      "Christlike imputation: 'If he has wronged you or owes anything, charge that to my account' (v 18)",
      "The transformative power of Christian brotherhood overcoming social and cultural barriers (v 15-16)"
    ],
    keyVerses: ["Philemon 1:6", "Philemon 1:16", "Philemon 1:18"]
  },
  {
    id: "HEB",
    name: "Hebrews",
    testament: "NT",
    genre: "General Epistles",
    totalChapters: 13,
    author: "Unknown (Paul, Apollos, Luke, Barnabas)",
    date: "c. AD 64–68",
    era: "The Early Church & Eternity",
    theme: "The Absolute Superiority of Jesus Christ: Our Eternal Great High Priest and Better Covenant",
    highlights: [
      "God's final revelation through His Son, who is the radiance of His glory and upheld by His Word (Ch 1:1-3)",
      "Jesus our sympathetic High Priest who was tempted in all points yet without sin (Ch 4:14-16)",
      "The Melchizedekian priesthood and the New Covenant rendering the old obsolete (Ch 7-8)",
      "Christ entering the Holy Place once for all with His own atoning blood (Ch 9:11-14)",
      "The Hall of Faith (Ch 11) and fixing our eyes on Jesus, the author and finisher of our faith (Ch 12:1-2)"
    ],
    keyVerses: ["Hebrews 1:1-3", "Hebrews 4:12", "Hebrews 4:16", "Hebrews 11:1", "Hebrews 12:1-2", "Hebrews 13:8"]
  },

  // --- General Epistles (7) ---
  {
    id: "JAS",
    name: "James",
    testament: "NT",
    genre: "General Epistles",
    totalChapters: 5,
    author: "James (brother of Jesus)",
    date: "c. AD 45–49",
    era: "The Early Church & Eternity",
    theme: "Living Faith: Authentic Christian Character Proved by Good Works, Wisdom, and Prayer",
    highlights: [
      "Counting trials as joy and asking God for wisdom in faith without doubting (Ch 1:2-6)",
      "Being doers of the Word and not hearers only, deceiving yourselves (Ch 1:22)",
      "The radical warning against favoritism and showing that genuine faith produces loving deeds (Ch 2)",
      "The untamable danger of the tongue and the beauty of wisdom from above (Ch 3)",
      "Humbling oneself before God, resisting the devil, and the prayer of faith healing the sick (Ch 4:7-10; Ch 5:14-16)"
    ],
    keyVerses: ["James 1:2-4", "James 1:22", "James 2:26", "James 4:7-8", "James 5:16"]
  },
  {
    id: "1PE",
    name: "1 Peter",
    testament: "NT",
    genre: "General Epistles",
    totalChapters: 5,
    author: "Peter",
    date: "c. AD 62–64",
    era: "The Early Church & Eternity",
    theme: "Hope Amid Suffering: Holy Living as Pilgrims, Elect Strangers, and Royal Priesthood",
    highlights: [
      "A living hope through the resurrection of Christ to an imperishable inheritance (Ch 1:3-5)",
      "The solemn call to holiness: 'Be holy in all your conduct, because it is written, Be holy' (Ch 1:15-16)",
      "Our identity in Christ: 'A chosen generation, a royal priesthood, a holy nation' (Ch 2:9)",
      "Always being ready to give a defense of the hope that is in you with gentleness and respect (Ch 3:15)",
      "Casting all your anxieties on Him, and staying vigilant against the roaring lion adversary (Ch 5:7-9)"
    ],
    keyVerses: ["1 Peter 1:3", "1 Peter 2:9", "1 Peter 3:15", "1 Peter 5:7", "1 Peter 5:8-10"]
  },
  {
    id: "2PE",
    name: "2 Peter",
    testament: "NT",
    genre: "General Epistles",
    totalChapters: 3,
    author: "Peter",
    date: "c. AD 65–68",
    era: "The Early Church & Eternity",
    theme: "Growing in Grace: All Things Pertaining to Life and Godliness, and Guarding Against False Teachers",
    highlights: [
      "His divine power giving us all things that pertain to life and godliness through His promises (Ch 1:3-4)",
      "The golden ladder of spiritual growth: Supplementing faith with virtue, knowledge, and love (Ch 1:5-8)",
      "The reliability of Scripture: Men spoke from God as they were carried along by the Holy Spirit (Ch 1:20-21)",
      "Sober warnings against deceptive false teachers who exploit with fabricated words (Ch 2)",
      "The patient mercy of the Lord not wishing that any should perish, and looking for new heavens and earth (Ch 3:9-13)"
    ],
    keyVerses: ["2 Peter 1:3", "2 Peter 1:21", "2 Peter 3:9", "2 Peter 3:18"]
  },
  {
    id: "1JN",
    name: "1 John",
    testament: "NT",
    genre: "General Epistles",
    totalChapters: 5,
    author: "John the Apostle",
    date: "c. AD 85–95",
    era: "The Early Church & Eternity",
    theme: "Fellowship with God: Walking in the Light, Testing the Spirits, and Loving One Another",
    highlights: [
      "Walking in the light as He is in the light, and the blood of Jesus cleansing from all sin (Ch 1:7)",
      "Confession of sins: 'If we confess our sins, He is faithful and just to forgive us' (Ch 1:9)",
      "The Father's lavish love: 'Behold what manner of love the Father has bestowed on us, that we should be called children of God' (Ch 3:1)",
      "The definition of love: God is love; whoever does not love does not know God (Ch 4:7-12)",
      "Assurance of eternal life: 'These things I have written to you who believe in the name of the Son of God' (Ch 5:13)"
    ],
    keyVerses: ["1 John 1:7", "1 John 1:9", "1 John 3:1", "1 John 4:8", "1 John 4:18", "1 John 5:13"]
  },
  {
    id: "2JN",
    name: "2 John",
    testament: "NT",
    genre: "General Epistles",
    totalChapters: 1,
    author: "John the Apostle",
    date: "c. AD 85–95",
    era: "The Early Church & Eternity",
    theme: "Walking in Truth and Love: Rejecting Deceivers Who Deny the Incarnation of Christ",
    highlights: [
      "Joy in finding believers walking in the truth as received from the Father (v 4)",
      "The commandment from the beginning: Loving one another according to His commandments (v 5-6)",
      "Warning against deceivers who refuse to acknowledge Jesus Christ as coming in the flesh (v 7)",
      "The necessity of abiding in the doctrine of Christ to have both the Father and the Son (v 9)",
      "Refusing hospitality to those who propagate false doctrine, protecting the flock (v 10-11)"
    ],
    keyVerses: ["2 John 1:6", "2 John 1:8", "2 John 1:9"]
  },
  {
    id: "3JN",
    name: "3 John",
    testament: "NT",
    genre: "General Epistles",
    totalChapters: 1,
    author: "John the Apostle",
    date: "c. AD 85–95",
    era: "The Early Church & Eternity",
    theme: "Faithful Hospitality to Gospel Workers: Walking in Truth vs. Self-Exalting Ambition",
    highlights: [
      "John's prayer for Gaius: 'Beloved, I pray that all may go well with you and that you may be in good health' (v 2)",
      "The highest pastoral joy: 'I have no greater joy than to hear that my children are walking in the truth' (v 4)",
      "Commending hospitality to visiting traveling missionaries as fellow workers for the truth (v 5-8)",
      "The rebuke of Diotrephes, who loved to have preeminence and rejected apostolic authority (v 9-10)",
      "The good testimony of Demetrius, praised by all and by the truth itself (v 12)"
    ],
    keyVerses: ["3 John 1:2", "3 John 1:4", "3 John 1:11"]
  },
  {
    id: "JUD",
    name: "Jude",
    testament: "NT",
    genre: "General Epistles",
    totalChapters: 1,
    author: "Jude (brother of James and Jesus)",
    date: "c. AD 65–70",
    era: "The Early Church & Eternity",
    theme: "Contending for the Faith Once Delivered: Warning Against Apostasy and Keeping in God's Love",
    highlights: [
      "The urgent apostolic appeal: 'Contend earnestly for the faith which was once for all delivered to the saints' (v 3)",
      "Exposing ungodly infiltrators who turn the grace of God into licentiousness (v 4)",
      "Historical reminders of divine judgment: Wilderness generation, rebellious angels, and Sodom (v 5-7)",
      "Building yourselves up on your most holy faith, praying in the Holy Spirit (v 20-21)",
      "The immortal closing Doxology: 'Now to Him who is able to keep you from stumbling and present you blameless' (v 24-25)"
    ],
    keyVerses: ["Jude 1:3", "Jude 1:20-21", "Jude 1:24-25"]
  },

  // --- Apocalyptic / Prophecy (1) ---
  {
    id: "REV",
    name: "Revelation",
    testament: "NT",
    genre: "Prophecy",
    totalChapters: 22,
    author: "John the Apostle",
    date: "c. AD 95–96",
    era: "The Early Church & Eternity",
    theme: "The Consummation of All Things: The Triumphant Lamb of God, Final Victory, and New Jerusalem",
    highlights: [
      "The glorious vision of the glorified Jesus walking among the seven golden lampstands (Ch 1)",
      "The seven letters to the churches of Asia: Commendations, rebukes, and promises to overcomers (Ch 2-3)",
      "The heavenly throne room: 'Holy, holy, holy is the Lord God Almighty' and the Worthy Lamb taking the scroll (Ch 4-5)",
      "The defeat of the dragon, the beast, and Babylon; the Rider on the White Horse crowned King of Kings (Ch 19-20)",
      "The New Jerusalem, no more death or tears, the River of Life, and Christ's promise: 'Surely I am coming soon' (Ch 21-22)"
    ],
    keyVerses: ["Revelation 1:8", "Revelation 3:20", "Revelation 5:12", "Revelation 19:16", "Revelation 21:3-4", "Revelation 22:20"]
  }
];

/**
 * Helper to get a book by USFM ID
 */
function getBookById(bookId) {
  if (!bookId) return null;
  const upper = bookId.toUpperCase().trim();
  return BIBLE_BOOKS.find(b => b.id === upper) || null;
}

/**
 * Helper to get a book by name
 */
function getBookByName(bookName) {
  if (!bookName) return null;
  const lower = bookName.toLowerCase().trim();
  return BIBLE_BOOKS.find(b => b.name.toLowerCase() === lower || b.id.toLowerCase() === lower) || null;
}

/**
 * Returns dynamic chapter study context, key takeaways, and Christological significance
 */
function getChapterStudyContext(bookId, chapterNum) {
  const book = getBookById(bookId);
  if (!book) return null;

  const ch = parseInt(chapterNum, 10) || 1;

  // Curated prominent chapter insights
  const customKeyPoints = {
    // Genesis
    "GEN-1": ["The sovereign spoken creation of the cosmos out of nothing (Ex Nihilo)", "Creation of mankind in the image and likeness of God", "God pronouncing all of His creation 'very good'"],
    "GEN-3": ["The temptation of the serpent and the tragic Fall of humanity", "The immediate shame, alienation, and promise of the Seed in Genesis 3:15", "The coats of skin: the first shedding of blood to cover human guilt"],
    "GEN-12": ["God's covenant call to Abram out of Ur to an unknown land", "The threefold promise: land, great nation, and global blessing through his seed", "Abram building altars and calling upon the name of the Lord"],
    "GEN-50": ["The burial of Jacob and Joseph reassuring his fearful brothers", "The golden theological principle: 'You meant evil against me, but God meant it for good'", "Joseph's dying faith in the future Exodus of God's people"],
    // Exodus
    "EXO-3": ["Moses at Mount Horeb witnessing the burning bush not consumed", "God revealing His sacred name: 'I AM WHO I AM'", "The divine commission to lead Israel out of Egyptian bondage"],
    "EXO-14": ["Israel trapped between Pharaoh's army and the impassable Red Sea", "Moses' cry of faith: 'Stand firm, and see the salvation of the LORD'", "The parting of the waters and Israel walking through on dry ground"],
    "EXO-20": ["The giving of the Ten Commandments at Mount Sinai amidst thunder and smoke", "Duties toward God (commandments 1-4) and duties toward neighbor (commandments 5-10)", "God's call for reverent awe and wholehearted fidelity"],
    // Psalms
    "PSA-23": ["The Lord as our personal Shepherd: supplying all needs and restoring the soul", "Walking fearlessly through the valley of the shadow of death", "The prepared banquet table, anointed head, and dwelling in God's house forever"],
    "PSA-91": ["The secret place of the Most High and resting in the shadow of the Almighty", "Deliverance from the snare of the fowler and deadly pestilence", "Angelic protection and God's promise: 'With long life I will satisfy him'"],
    "PSA-119": ["The supreme psalm of the Word of God: delighting in divine statutes", "The Word as a lamp to our feet and a light to our path (v 105)", "Sanctifying the heart: 'Your word I have hidden in my heart, that I might not sin against You'"],
    // Isaiah
    "ISA-53": ["The Suffering Servant despised and rejected by men", "He was wounded for our transgressions, bruised for our iniquities", "By His stripes we are healed: the Lord laying on Him the iniquity of us all"],
    // Matthew
    "MAT-5": ["The Beatitudes: the upside-down character of the Kingdom of Heaven", "Believers as the salt of the earth and the light of the world", "The fulfillment of the Law and the heart-level holiness required by God"],
    "MAT-6": ["Sincere giving, fasting, and the Lord's Prayer (The Our Father)", "Treasures in heaven over earthly wealth and freedom from anxiety", "The great priority: 'Seek first the kingdom of God and His righteousness'"],
    "MAT-28": ["The angelic announcement of the empty tomb: 'He is not here; for He is risen'", "Jesus meeting His disciples with joy and peace", "The Great Commission: disciple all nations, baptizing and teaching them"],
    // John
    "JHN-1": ["In the beginning was the Word, and the Word was God", "The Light shining in darkness and darkness cannot overcome it", "The Word became flesh and tabernacled among us, full of grace and truth"],
    "JHN-3": ["Jesus explaining the spiritual new birth to Nicodemus", "The Bronze Serpent lifted up foreshadowing the Son of Man", "The heart of the Gospel: 'For God so loved the world that He gave His only begotten Son'"],
    "JHN-14": ["Comforting troubled hearts: 'I go to prepare a place for you'", "'I am the way, the truth, and the life. No one comes to the Father except through Me'", "The promise of the Holy Spirit, the Spirit of Truth and divine Peace"],
    // Romans
    "ROM-8": ["No condemnation for those in Christ Jesus who walk according to the Spirit", "The Spirit of adoption crying 'Abba, Father' with our spirit", "All things working together for good for those who love God", "Nothing can separate us from the love of God in Christ Jesus our Lord"],
    "ROM-12": ["Presenting our bodies as living sacrifices holy and pleasing to God", "Renewing the mind: not being conformed to this worldly age", "Operating in spiritual gifts and overcoming evil with good"],
    // 1 Corinthians
    "1CO-13": ["The supremacy of love over spiritual gifts, knowledge, and sacrifice", "The patient, kind, unselfish, rejoicing character of agape love", "Faith, hope, and love abide, but the greatest of these is love"],
    "1CO-15": ["The historical core of the Gospel: Christ died, was buried, and rose again according to the Scriptures", "The order of resurrection and Christ reigning until all enemies are under His feet", "The mystery: 'We shall not all sleep, but we shall all be changed... O death, where is your sting?'"],
    // Ephesians
    "EPH-6": ["Children, parents, masters, and servants living in mutual respect", "The call to be strong in the Lord and the power of His might", "Putting on the Whole Armor of God: Belt of Truth, Breastplate of Righteousness, Shield of Faith, Helmet of Salvation, Sword of the Spirit, and praying always"],
    // Revelation
    "REV-21": ["The vision of a New Heaven and a New Earth; the first heaven and earth passed away", "God wiping every tear: no more death, sorrow, crying, or pain", "The New Jerusalem coming down out of heaven, radiant like a bride adorned for her husband"],
    "REV-22": ["The River of the Water of Life and the Tree of Life yielding twelve kinds of fruit", "The throne of God and of the Lamb, and His servants will see His face", "The final promise: 'Behold, I am coming quickly!' and the Church's response: 'Even so, come, Lord Jesus!'"]
  };

  const specificKey = `${book.id}-${ch}`;
  const keyPoints = customKeyPoints[specificKey] || [
    `Spiritual focus of ${book.name} Chapter ${ch} in the unfolding history of redemption`,
    `Examining God's covenant character, holiness, and promises in this passage`,
    `Personal application: applying these sacred truths to cultivate faith, obedience, and prayer`
  ];

  return {
    bookName: book.name,
    bookId: book.id,
    chapter: ch,
    testament: book.testament,
    genre: book.genre,
    author: book.author,
    date: book.date,
    era: book.era,
    keyPoints: keyPoints,
    historicalContext: `Recorded during the era of "${book.era}" (c. ${book.date}) by ${book.author}. As part of ${book.name}'s ${book.totalChapters} chapters, Chapter ${ch} reveals vital insights into God's grand plan of salvation.`
  };
}

// Built-in emergency scriptures for popular foundational chapters to ensure 100% offline reliability
const OFFLINE_SAMPLE_CHAPTERS = {
  "GEN-1": [
    { verse: 1, text: "In the beginning, God created the heavens and the earth." },
    { verse: 2, text: "The earth was formless and empty. Darkness was on the surface of the deep and God's Spirit was hovering over the surface of the waters." },
    { verse: 3, text: "God said, 'Let there be light,' and there was light." },
    { verse: 4, text: "God saw the light, and saw that it was good. God divided the light from the darkness." },
    { verse: 5, text: "God called the light 'day', and the darkness he called 'night'. There was evening and there was morning, the first day." },
    { verse: 26, text: "God said, 'Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the birds of the sky, and over the livestock, and over all the earth, and over every creeping thing that creeps on the earth.'" },
    { verse: 27, text: "God created man in his own image. In God's image he created him; male and female he created them." },
    { verse: 31, text: "God saw everything that he had made, and, behold, it was very good. There was evening and there was morning, the sixth day." }
  ],
  "PSA-23": [
    { verse: 1, text: "The LORD is my shepherd: I shall not want." },
    { verse: 2, text: "He makes me lie down in green pastures. He leads me beside still waters." },
    { verse: 3, text: "He restores my soul. He leads me in the paths of righteousness for his name's sake." },
    { verse: 4, text: "Even though I walk through the valley of the shadow of death, I will fear no evil; for you are with me. Your rod and your staff, they comfort me." },
    { verse: 5, text: "You prepare a table before me in the presence of my enemies. You anoint my head with oil. My cup runs over." },
    { verse: 6, text: "Surely goodness and loving kindness shall follow me all the days of my life, and I will dwell in the house of the LORD forever." }
  ],
  "JHN-3": [
    { verse: 1, text: "Now there was a man of the Pharisees named Nicodemus, a ruler of the Jews." },
    { verse: 2, text: "The same came to him by night, and said to him, 'Rabbi, we know that you are a teacher come from God, for no one can do these signs that you do, unless God is with him.'" },
    { verse: 3, text: "Jesus answered him, 'Most certainly, I tell you, unless one is born anew, he can't see the Kingdom of God.'" },
    { verse: 14, text: "As Moses lifted up the serpent in the wilderness, even so must the Son of Man be lifted up," },
    { verse: 15, text: "that whoever believes in him should not perish, but have eternal life." },
    { verse: 16, text: "For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life." },
    { verse: 17, text: "For God didn't send his Son into the world to judge the world, but that the world should be saved through him." }
  ],
  "ROM-8": [
    { verse: 1, text: "There is therefore now no condemnation to those who are in Christ Jesus, who don't walk according to the flesh, but according to the Spirit." },
    { verse: 2, text: "For the law of the Spirit of life in Christ Jesus made me free from the law of sin and of death." },
    { verse: 28, text: "We know that all things work together for good for those who love God, to those who are called according to his purpose." },
    { verse: 31, text: "What then shall we say about these things? If God is for us, who can be against us?" },
    { verse: 37, text: "No, in all these things, we are more than conquerors through him who loved us." },
    { verse: 38, text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers," },
    { verse: 39, text: "nor height, nor depth, nor any other created thing, will be able to separate us from the love of God, which is in Christ Jesus our Lord." }
  ]
};
