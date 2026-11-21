/**
 * "Walk in the Spirit" — Topical Verses & Spiritual Victory Guide
 * 10 Comprehensive collections for spiritual warfare, holiness, prayer, and godly living.
 * Uses public domain World English Bible (WEB) scripture text with actionable spiritual victory guides.
 */

const TOPICAL_COLLECTIONS = [
  {
    id: "overcoming-temptation",
    title: "Overcoming Temptation & Escaping Sin's Trap",
    category: "Holiness & Victory",
    icon: "shield-check",
    badge: "Victory Over Sin",
    description: "Temptation is not sin, but yielding to it brings bondage. God provides a supernatural escape path in every trial and an empathetic High Priest who conquered all temptation.",
    victoryGuide: {
      truth: "God is faithful; He never allows you to be tempted beyond your divine empowerment, and He always provides the way of escape.",
      actionSteps: [
        "Flee youthful lusts immediately — do not negotiate or linger near the trigger (2 Timothy 2:22).",
        "Quote God's living Word aloud, just as Jesus rebuked Satan in the wilderness (Matthew 4:4).",
        "Submit your will to God first, and then boldly resist the devil; he must flee from you (James 4:7)."
      ],
      prayer: "Heavenly Father, You know my weaknesses and the snares of the adversary. Deliver me from every trap of temptation. Grant me holy discernment, prompt my spirit to flee from compromise, and fill me with Your Holy Spirit that I may walk in purity and triumph through Jesus Christ. Amen."
    },
    verses: [
      {
        reference: "1 Corinthians 10:13",
        bookId: "1CO",
        chapter: 10,
        verse: 13,
        text: "No temptation has taken you except what is common to man. God is faithful, who will not allow you to be tempted above what you are able, but will with the temptation also make the way of escape, that you may be able to endure it.",
        insight: "There is never a circumstance where sin is unavoidable; God's escape route is already prepared.",
        colorType: "promises"
      },
      {
        reference: "James 4:7",
        bookId: "JAS",
        chapter: 4,
        verse: 7,
        text: "Be subject therefore to God. Resist the devil, and he will flee from you.",
        insight: "Spiritual authority flows from submission to God; resistance without submission is powerless.",
        colorType: "growth"
      },
      {
        reference: "Psalm 119:9-11",
        bookId: "PSA",
        chapter: 119,
        verse: 9,
        text: "How can a young man keep his way pure? By living according to your word... I have hidden your word in my heart, that I might not sin against you.",
        insight: "Treasuring Scripture in the memory and affections is the primary safeguard against sin.",
        colorType: "wisdom"
      },
      {
        reference: "Matthew 26:41",
        bookId: "MAT",
        chapter: 26,
        verse: 41,
        text: "Watch and pray, that you don't enter into temptation. The spirit indeed is willing, but the flesh is weak.",
        insight: "Vigilance and prayerful alertness bridge the gap between our good intentions and human fragility.",
        colorType: "growth"
      },
      {
        reference: "Hebrews 2:18",
        bookId: "HEB",
        chapter: 2,
        verse: 18,
        text: "For in that he himself has suffered being tempted, he is able to help those who are tempted.",
        insight: "Jesus understands the full agony of temptation because He endured it to the end without yielding.",
        colorType: "comfort"
      },
      {
        reference: "2 Timothy 2:22",
        bookId: "2TI",
        chapter: 2,
        verse: 22,
        text: "Flee from youthful lusts; but pursue righteousness, faith, love, and peace with those who call on the Lord out of a pure heart.",
        insight: "True victory is twofold: running away from corruption and running toward godly companionship.",
        colorType: "growth"
      }
    ]
  },
  {
    id: "armor-of-god",
    title: "Putting on the Full Armor of God (Spiritual Warfare)",
    category: "Spiritual Warfare",
    icon: "shield",
    badge: "Kingdom Warfare",
    description: "Our battle is not against flesh and blood, but against spiritual powers of darkness. God equips every believer with divine armor that renders demonic schemes powerless.",
    victoryGuide: {
      truth: "The battle belongs to the Lord. In Christ, we fight from victory, not for victory.",
      actionSteps: [
        "Put on the Belt of Truth by rejecting every worldly deception and believing God's Word.",
        "Take the Shield of Faith to extinguish every flaming arrow of accusation, fear, and condemnation.",
        "Wield the Sword of the Spirit through specific spoken Scripture and constant praying in the Spirit."
      ],
      prayer: "Almighty God, I stand strong in Your mighty power today. I gird my loins with truth, put on the breastplate of righteousness, shod my feet with the preparation of the gospel of peace, take the shield of faith, put on the helmet of salvation, and wield the sword of the Spirit. Keep me vigilant, fearless, and rooted in Christ's victory. Amen."
    },
    verses: [
      {
        reference: "Ephesians 6:10-11",
        bookId: "EPH",
        chapter: 6,
        verse: 10,
        text: "Finally, be strong in the Lord, and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the wiles of the devil.",
        insight: "Our spiritual stability comes solely from the Lord's supreme might, not our personal resilience.",
        colorType: "promises"
      },
      {
        reference: "Ephesians 6:14-17",
        bookId: "EPH",
        chapter: 6,
        verse: 14,
        text: "Stand therefore, having the utility belt of truth buckled around your waist, and having put on the breastplate of righteousness... taking up the shield of faith, with which you will be able to quench all the fiery darts of the evil one.",
        insight: "Every piece of armor is a dimension of Christ Himself applied to our daily thought and action.",
        colorType: "growth"
      },
      {
        reference: "2 Corinthians 10:3-5",
        bookId: "2CO",
        chapter: 10,
        verse: 3,
        text: "For though we walk in the flesh, we don't wage war according to the flesh; for the weapons of our warfare are not of the flesh, but mighty before God to the throwing down of strongholds, throwing down imaginations and every high thing that is exalted against the knowledge of God.",
        insight: "Spiritual strongholds in the mind are demolished through the divine power of God's truth.",
        colorType: "wisdom"
      },
      {
        reference: "1 Peter 5:8-9",
        bookId: "1PE",
        chapter: 5,
        verse: 8,
        text: "Be sober and self-controlled. Be watchful. Your adversary, the devil, walks around like a roaring lion, seeking whom he may devour. Withstand him steadfast in your faith.",
        insight: "Sober watchfulness prevents ambushes; firm faith silences the adversary's intimidating roar.",
        colorType: "growth"
      },
      {
        reference: "Romans 8:37",
        bookId: "ROM",
        chapter: 8,
        verse: 37,
        text: "No, in all these things, we are more than conquerors through him who loved us.",
        insight: "Our victory is overwhelming and permanent because it is secured by the unbreakable love of Christ.",
        colorType: "comfort"
      }
    ]
  },
  {
    id: "renewing-mind",
    title: "Renewing the Mind & Guarding Heart Purity",
    category: "Mind & Heart",
    icon: "sparkles",
    badge: "Mind Renewal",
    description: "The mind is the battleground of spiritual transformation. By meditating on what is true, pure, and praiseworthy, we dismantle worldly patterns and experience divine peace.",
    victoryGuide: {
      truth: "You become what you behold. As a person thinks in their heart, so are they.",
      actionSteps: [
        "Filter your media, conversations, and entertainment through Philippians 4:8.",
        "Take every rebellious thought captive to the obedience of Christ the moment it arises.",
        "Cultivate daily periods of silence and Scripture meditation to silence toxic cultural noise."
      ],
      prayer: "Lord God, cleanse the thoughts of my heart by the inspiration of Your Holy Spirit. Forgive me where I have allowed ungodly images and toxic anxieties to take root. Wash my mind in the water of Your Word. Let only what is true, honorable, just, pure, and lovely dwell within my thoughts today. In Jesus' name, Amen."
    },
    verses: [
      {
        reference: "Romans 12:2",
        bookId: "ROM",
        chapter: 12,
        verse: 2,
        text: "Don't be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God.",
        insight: "Transformation (metamorphosis) happens from the inside out through a restructured mindset.",
        colorType: "growth"
      },
      {
        reference: "Philippians 4:8",
        bookId: "PHP",
        chapter: 4,
        verse: 8,
        text: "Finally, brothers, whatever things are true, whatever things are honorable, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report; if there is any virtue, and if there is any praise, think about these things.",
        insight: "The eightfold divine thought filter creates an impregnable fortress of mental peace.",
        colorType: "wisdom"
      },
      {
        reference: "Proverbs 4:23",
        bookId: "PRO",
        chapter: 4,
        verse: 23,
        text: "Keep your heart with all diligence, for out of it is the wellspring of life.",
        insight: "The heart is the command center of our existence; guard its gates with holy vigilance.",
        colorType: "wisdom"
      },
      {
        reference: "Psalm 51:10",
        bookId: "PSA",
        chapter: 51,
        verse: 10,
        text: "Create in me a clean heart, O God. Renew a right spirit within me.",
        insight: "A pure heart is not a human achievement, but a fresh creative miracle of divine grace.",
        colorType: "comfort"
      },
      {
        reference: "Matthew 5:8",
        bookId: "MAT",
        chapter: 5,
        verse: 8,
        text: "Blessed are the pure in heart: for they shall see God.",
        insight: "Spiritual clarity and intimate vision of God are directly tied to an undivided, cleansed heart.",
        colorType: "promises"
      }
    ]
  },
  {
    id: "walking-by-spirit",
    title: "Walking by the Spirit vs. Works of the Flesh",
    category: "Spiritual Growth",
    icon: "flame",
    badge: "Spirit-Led Life",
    description: "The Christian life is not self-effort, but the supernatural indwelling life of the Holy Spirit. As we walk in step with the Spirit, the desires of the flesh lose their grip.",
    victoryGuide: {
      truth: "Those who belong to Christ have crucified the flesh with its passions. The Spirit produces effortless fruit when we abide.",
      actionSteps: [
        "Begin every morning by consciously yielding your will, eyes, tongue, and hands to the Holy Spirit.",
        "Identify and confess the subtle works of the flesh: bitterness, jealousy, outbursts of anger, and selfish ambition.",
        "Nurture the ninefold Fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control."
      ],
      prayer: "Holy Spirit, breathe fresh life into my soul. I acknowledge that in my own flesh dwells no good thing. I surrender my rights, my pride, and my desires to You. Guide my steps today, speak through my words, and cultivate in me the supernatural fruit of Christlikeness. Amen."
    },
    verses: [
      {
        reference: "Galatians 5:16",
        bookId: "GAL",
        chapter: 5,
        verse: 16,
        text: "But I say, walk by the Spirit, and you won't fulfill the lust of the flesh.",
        insight: "Focusing on following the Spirit naturally displaces and starves the cravings of the flesh.",
        colorType: "promises"
      },
      {
        reference: "Galatians 5:22-23",
        bookId: "GAL",
        chapter: 5,
        verse: 22,
        text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Against such things there is no law.",
        insight: "Spiritual fruit is the natural outflow of abiding in the True Vine, not forced religious labor.",
        colorType: "growth"
      },
      {
        reference: "Romans 8:5-6",
        bookId: "ROM",
        chapter: 8,
        verse: 5,
        text: "For those who live according to the flesh set their minds on the things of the flesh, but those who live according to the Spirit, the things of the Spirit. For the mind of the flesh is death, but the mind of the Spirit is life and peace.",
        insight: "Where you set your mind determines whether your life yields spiritual decay or divine vitality.",
        colorType: "wisdom"
      },
      {
        reference: "Romans 6:11",
        bookId: "ROM",
        chapter: 6,
        verse: 11,
        text: "Thus consider yourselves also to be dead to sin, but alive to God in Christ Jesus our Lord.",
        insight: "Count on the accomplished reality: sin has lost its legal jurisdiction over your life in Christ.",
        colorType: "growth"
      },
      {
        reference: "Colossians 3:9-10",
        bookId: "COL",
        chapter: 3,
        verse: 9,
        text: "Don't lie to one another, seeing that you have put off the old man with his doings, and have put on the new man, who is being renewed in knowledge after the image of his Creator.",
        insight: "You are a new creation; dress your character in the royal garments of your true identity.",
        colorType: "comfort"
      }
    ]
  },
  {
    id: "grace-repentance",
    title: "Grace, Repentance & Freedom from Guilt/Shame",
    category: "Grace & Mercy",
    icon: "heart-handshake",
    badge: "Full Pardon",
    description: "Satan condemns to crush and isolate; the Holy Spirit convicts to heal and restore. In Christ, there is zero condemnation, full forgiveness, and everlasting righteousness.",
    victoryGuide: {
      truth: "There is therefore now NO condemnation for those in Christ Jesus. God remembers your forgiven sins no more.",
      actionSteps: [
        "Confess any known failure honestly without making excuses or bargaining with God.",
        "Receive the promise of 1 John 1:9 by faith: you are 100% forgiven and cleansed from all unrighteousness.",
        "Renounce condemning internal voices by quoting the finished work of the Cross."
      ],
      prayer: "Gracious Father, I come boldly to Your throne of grace. Thank You for the precious blood of Jesus that washes away all my stains. I renounce guilt, shame, and the lies of the accuser. Restore to me the joy of Your salvation, and help me walk in the spotless freedom of Your beloved child. Amen."
    },
    verses: [
      {
        reference: "1 John 1:9",
        bookId: "1JN",
        chapter: 1,
        verse: 9,
        text: "If we confess our sins, he is faithful and righteous to forgive us our sins, and to cleanse us from all unrighteousness.",
        insight: "God's forgiveness is rooted in His unwavering faithfulness and justice satisfied at Calvary.",
        colorType: "promises"
      },
      {
        reference: "Romans 8:1-2",
        bookId: "ROM",
        chapter: 8,
        verse: 1,
        text: "There is therefore now no condemnation to those who are in Christ Jesus, who don't walk according to the flesh, but according to the Spirit. For the law of the Spirit of life in Christ Jesus made me free from the law of sin and of death.",
        insight: "The verdict has been handed down from the highest court of heaven: not guilty, forever cleared.",
        colorType: "promises"
      },
      {
        reference: "Psalm 103:12",
        bookId: "PSA",
        chapter: 103,
        verse: 12,
        text: "As far as the east is from the west, so far has he removed our transgressions from us.",
        insight: "East and west never meet; your forgiven sins are infinitely banished from God's record.",
        colorType: "comfort"
      },
      {
        reference: "Ephesians 2:8-9",
        bookId: "EPH",
        chapter: 2,
        verse: 8,
        text: "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.",
        insight: "Salvation is a free gift of sheer grace; human boasting is forever excluded.",
        colorType: "wisdom"
      },
      {
        reference: "2 Corinthians 5:17",
        bookId: "2CO",
        chapter: 5,
        verse: 17,
        text: "Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, they have become new.",
        insight: "Your past history does not define your destiny; you have been reborn into royal sonship.",
        colorType: "growth"
      },
      {
        reference: "Isaiah 1:18",
        bookId: "ISA",
        chapter: 1,
        verse: 18,
        text: "'Come now, and let us reason together,' says the LORD: 'Though your sins are as scarlet, they shall be as white as snow. Though they are red like crimson, they shall be as wool.'",
        insight: "No stain of sin is so deep that the atoning mercy of God cannot wash it spotless white.",
        colorType: "comfort"
      }
    ]
  },
  {
    id: "conquering-fear",
    title: "Conquering Fear, Anxiety & Spiritual Discouragement",
    category: "Peace & Courage",
    icon: "sun",
    badge: "Fearless Trust",
    description: "Fear paralyzes, but perfect love casts out all fear. God has not given us a spirit of fear, but of power, love, and a sound mind. Cast all your cares on Him because He cares for you.",
    victoryGuide: {
      truth: "God is with you, God is for you, and God's peace surpasses all human comprehension.",
      actionSteps: [
        "Turn worries into prayers immediately with specific thanksgiving for God's past faithfulness.",
        "Meditate on God's sovereignty: not a single sparrow falls without the Father's knowledge.",
        "Speak words of faith rather than voicing panic, anchoring your soul to God's unfailing promises."
      ],
      prayer: "Lord Jesus, Prince of Peace, calm the stormy waters of my soul. I cast every burden, every anxious thought, and every fear of tomorrow at Your feet. Fill me with Your Holy Spirit's power, love, and sound mind. Thank You that You will never leave me nor forsake me. In You I am secure. Amen."
    },
    verses: [
      {
        reference: "Isaiah 41:10",
        bookId: "ISA",
        chapter: 41,
        verse: 10,
        text: "Don't you be afraid, for I am with you. Don't be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.",
        insight: "The antidote to fear is not self-confidence, but the conscious reality of God's presence.",
        colorType: "promises"
      },
      {
        reference: "Philippians 4:6-7",
        bookId: "PHP",
        chapter: 4,
        verse: 6,
        text: "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.",
        insight: "Thanksgiving transforms desperate pleading into faith-filled release, establishing divine peace.",
        colorType: "wisdom"
      },
      {
        reference: "2 Timothy 1:7",
        bookId: "2TI",
        chapter: 1,
        verse: 7,
        text: "For God didn't give us a spirit of fear, but of power, love, and self-control.",
        insight: "Fear is never from God; whenever anxiety grips your heart, recognize its foreign origin and reject it.",
        colorType: "growth"
      },
      {
        reference: "Psalm 23:4",
        bookId: "PSA",
        chapter: 23,
        verse: 4,
        text: "Even though I walk through the valley of the shadow of death, I will fear no evil; for you are with me. Your rod and your staff, they comfort me.",
        insight: "Shadows cannot harm you without sunlight nearby; God walks beside you through the deepest ravines.",
        colorType: "comfort"
      },
      {
        reference: "Joshua 1:9",
        bookId: "JOS",
        chapter: 1,
        verse: 9,
        text: "Haven't I commanded you? Be strong and courageous. Don't be afraid. Don't be dismayed, for the LORD your God is with you wherever you go.",
        insight: "Courage is a sacred command backed by God's omnipresent companionship.",
        colorType: "growth"
      },
      {
        reference: "1 Peter 5:7",
        bookId: "1PE",
        chapter: 5,
        verse: 7,
        text: "Casting all your worries on him, because he cares for you.",
        insight: "You were never designed to carry the heavy weight of life; roll the entire burden onto God.",
        colorType: "comfort"
      }
    ]
  },
  {
    id: "prayer-fasting",
    title: "Deepening Prayer, Fasting & Intimacy with God",
    category: "Spiritual Disciplines",
    icon: "book-open",
    badge: "Intimate Prayer",
    description: "Prayer is not convincing God to do our will; it is aligning our heart with His. Through secret prayer, humble fasting, and abiding in the Vine, we experience life-changing intimacy with the Father.",
    victoryGuide: {
      truth: "If you abide in Christ and His words abide in you, ask whatever you desire and it will be done.",
      actionSteps: [
        "Establish a daily 'secret place' appointment with God, shutting the door to distractions.",
        "Practice biblical fasting to quiet physical appetites and heighten spiritual sensitivity.",
        "Pray the Scriptures back to God, turning His promises into bold intercessory petitions."
      ],
      prayer: "Dearest Father, draw me into deep communion with You. Teach me to pray in the Holy Spirit. Break every spirit of slumber and complacency off my life. Give me an insatiable hunger for Your presence, Your Word, and Your kingdom purposes. May my life be an altar of perpetual praise and intercession. Amen."
    },
    verses: [
      {
        reference: "John 15:4-5",
        bookId: "JHN",
        chapter: 15,
        verse: 4,
        text: "Remain in me, and I in you. As the branch can't bear fruit by itself, unless it remains in the vine, so neither can you, unless you remain in me. I am the vine. You are the branches. He who remains in me and I in him bears much fruit, for apart from me you can do nothing.",
        insight: "Total dependence on Christ is not weakness; it is the secret of abundant spiritual fruit.",
        colorType: "growth"
      },
      {
        reference: "Jeremiah 29:12-13",
        bookId: "JER",
        chapter: 29,
        verse: 12,
        text: "You shall call on me, and you shall go and pray to me, and I will listen to you. You shall seek me, and find me, when you search for me with all your heart.",
        insight: "Half-hearted seeking finds little; wholehearted desperation finds the fullness of God.",
        colorType: "promises"
      },
      {
        reference: "Matthew 6:6",
        bookId: "MAT",
        chapter: 6,
        verse: 6,
        text: "But you, when you pray, enter into your inner room, and having shut your door, pray to your Father who is in secret, and your Father who sees in secret will reward you openly.",
        insight: "The hidden secret place of prayer determines the public victory and power of your life.",
        colorType: "wisdom"
      },
      {
        reference: "Hebrews 4:16",
        bookId: "HEB",
        chapter: 4,
        verse: 16,
        text: "Let's therefore draw near with boldness to the throne of grace, that we may receive mercy, and may find grace for help in time of need.",
        insight: "We approach God's throne not as trembling beggars, but as blood-bought children of the King.",
        colorType: "promises"
      },
      {
        reference: "Psalm 46:10",
        bookId: "PSA",
        chapter: 46,
        verse: 10,
        text: "Be still, and know that I am God. I will be exalted among the nations. I will be exalted in the earth.",
        insight: "True prayer includes holy silence, ceasing frantic striving to know God's absolute majesty.",
        colorType: "comfort"
      }
    ]
  },
  {
    id: "unshakable-faith",
    title: "Building Unshakable Faith & Trust in Trials",
    category: "Faith & Endurance",
    icon: "anchor",
    badge: "Tested Gold",
    description: "Faith is the assurance of things hoped for, the conviction of things not seen. Fiery trials do not come to destroy your faith, but to refine it into pure, shining gold.",
    victoryGuide: {
      truth: "All things work together for good to those who love God and are called according to His purpose.",
      actionSteps: [
        "Praise God in advance for victory before you see physical manifestation or change.",
        "Refuse to evaluate God's love through painful circumstances; evaluate circumstances through the Cross.",
        "Feed your faith daily with the Word of God, for faith comes by hearing the Word of Christ."
      ],
      prayer: "Lord, I believe; help my unbelief! When trials press hard and the path is shrouded in mystery, I choose to trust Your unfailing love. You are working all things for my eternal good. Anchor my heart in Your faithfulness, and grant me endurance that lacks nothing. In Jesus' name, Amen."
    },
    verses: [
      {
        reference: "Hebrews 11:1",
        bookId: "HEB",
        chapter: 11,
        verse: 1,
        text: "Now faith is assurance of things hoped for, proof of things not seen.",
        insight: "Biblical faith is not wishful thinking, but solid spiritual reality anchored in God's integrity.",
        colorType: "wisdom"
      },
      {
        reference: "James 1:2-4",
        bookId: "JAS",
        chapter: 1,
        verse: 2,
        text: "Count it all joy, my brothers, when you fall into various temptations, knowing that the testing of your faith produces endurance. Let endurance have its perfect work, that you may be perfect and complete, lacking in nothing.",
        insight: "Trials are God's gymnasium for building mature spiritual character and endurance.",
        colorType: "growth"
      },
      {
        reference: "Romans 8:28",
        bookId: "ROM",
        chapter: 8,
        verse: 28,
        text: "We know that all things work together for good for those who love God, to those who are called according to his purpose.",
        insight: "God's sovereignty masterfully weaves even tears, setbacks, and delays into His ultimate good.",
        colorType: "promises"
      },
      {
        reference: "Proverbs 3:5-6",
        bookId: "PRO",
        chapter: 3,
        verse: 5,
        text: "Trust in the LORD with all your heart, and don't lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.",
        insight: "Relinquishing self-reliance opens the highway for divine direction and straight paths.",
        colorType: "wisdom"
      },
      {
        reference: "2 Corinthians 4:17-18",
        bookId: "2CO",
        chapter: 4,
        verse: 17,
        text: "For our light affliction, which is for the moment, works for us more and more exceedingly an eternal weight of glory; while we don't look at the things which are seen, but at the things which are not seen.",
        insight: "Present trials are momentary and lightweight compared to the eternal weight of glory ahead.",
        colorType: "comfort"
      }
    ]
  },
  {
    id: "humility-love",
    title: "Humility, Forgiveness & Christlike Love",
    category: "Love & Character",
    icon: "heart",
    badge: "Christlike Agape",
    description: "Love is the supreme mark of the disciple of Jesus. By forgiving as we have been forgiven and walking in genuine humility, we reflect the heart of the Savior to a broken world.",
    victoryGuide: {
      truth: "God opposes the proud, but gives grace to the humble. Forgive one another, even as God in Christ forgave you.",
      actionSteps: [
        "Release every person who has wronged you; unforgiveness is drinking poison and waiting for the other to die.",
        "Look for opportunities to serve others quietly without seeking recognition, praise, or credit.",
        "Bless those who mistreat you and pray sincerely for their spiritual well-being."
      ],
      prayer: "Lord Jesus, You humbled Yourself and washed the disciples' feet, even Judas who betrayed You. Pluck out all root of bitterness, pride, and self-defense from my soul. Teach me to love unconditionally, to forgive swiftly, and to esteem others higher than myself. Let Your agape love overflow through me today. Amen."
    },
    verses: [
      {
        reference: "1 Corinthians 13:4-7",
        bookId: "1CO",
        chapter: 13,
        verse: 4,
        text: "Love is patient and is kind; love doesn't envy. Love doesn't brag, is not proud, doesn't behave itself inappropriately, doesn't seek its own way, is not provoked, takes no account of evil; doesn't rejoice in unrighteousness, but rejoices with the truth; bears all things, believes all things, hopes all things, endures all things.",
        insight: "Love is not a sentiment; it is a sacrificial, active posture of enduring patience and goodness.",
        colorType: "wisdom"
      },
      {
        reference: "Colossians 3:12-14",
        bookId: "COL",
        chapter: 3,
        verse: 12,
        text: "Put on therefore, as God's chosen ones, holy and beloved, a heart of compassion, kindness, lowliness, humility, and perseverance; bearing with one another, and forgiving each other, if any man has a complaint against any; even as Christ forgave you, so you also do. Above all these things, walk in love, which is the bond of perfection.",
        insight: "Forgiveness toward others is the natural overflow of having experienced Christ's lavish pardon.",
        colorType: "growth"
      },
      {
        reference: "Ephesians 4:31-32",
        bookId: "EPH",
        chapter: 4,
        verse: 31,
        text: "Let all bitterness, wrath, anger, outcry, and slander, be put away from you, with all malice. And be kind to one another, tenderhearted, forgiving each other, just as God also in Christ forgave you.",
        insight: "Clearing out toxic emotional clutter makes room for tenderhearted, divine forgiveness.",
        colorType: "growth"
      },
      {
        reference: "Philippians 2:3-4",
        bookId: "PHP",
        chapter: 2,
        verse: 3,
        text: "Doing nothing through rivalry or through conceit, but in humility, each counting others better than himself; each of you not just looking to his own things, but each of you also to the things of others.",
        insight: "True humility is not thinking less of yourself; it is thinking of yourself less.",
        colorType: "wisdom"
      },
      {
        reference: "Matthew 6:14-15",
        bookId: "MAT",
        chapter: 6,
        verse: 14,
        text: "For if you forgive men their trespasses, your heavenly Father will also forgive you. But if you don't forgive men their trespasses, neither will your Father forgive your trespasses.",
        insight: "A closed fist cannot receive God's blessings; an open, forgiving hand keeps grace flowing.",
        colorType: "promises"
      }
    ]
  },
  {
    id: "godly-wisdom",
    title: "Godly Wisdom, Purpose & Living for Eternity",
    category: "Wisdom & Calling",
    icon: "compass",
    badge: "Eternal Focus",
    description: "The world chases temporary vapor; the wise steward their days for eternity. Seek first the Kingdom of God, walk humbly with your Creator, and invest your life in what outlasts the grave.",
    victoryGuide: {
      truth: "Only one life, 'twill soon be past, only what's done for Christ will last.",
      actionSteps: [
        "Audit your daily schedule and financial investments: are they storing treasures on earth or in heaven?",
        "Do whatever work is in your hands with wholehearted excellence, doing it as unto the Lord and not men.",
        "Ask God daily for celestial wisdom: to love what He loves and hate what destroys human souls."
      ],
      prayer: "Eternal God, You are my dwelling place throughout all generations. Teach me to number my days that I may gain a heart of wisdom. Deliver me from chasing the fleeting applause of this world. Let my life count for Your everlasting kingdom. May everything I do bring honor to the name of Jesus Christ. Amen."
    },
    verses: [
      {
        reference: "Matthew 6:33",
        bookId: "MAT",
        chapter: 6,
        verse: 33,
        text: "But seek first God's Kingdom, and his righteousness; and all these things will be given to you as well.",
        insight: "Put God first, and all other legitimate needs will fall into their proper, blessed alignment.",
        colorType: "promises"
      },
      {
        reference: "Colossians 3:23-24",
        bookId: "COL",
        chapter: 3,
        verse: 23,
        text: "Whatever you do, work at it with all your heart, as working for the Lord, and not for men, knowing that from the Lord you will receive the reward of the inheritance; for you serve the Lord Christ.",
        insight: "Every honest task becomes sacred worship when done to honor the Master of the universe.",
        colorType: "growth"
      },
      {
        reference: "Micah 6:8",
        bookId: "MIC",
        chapter: 6,
        verse: 8,
        text: "He has shown you, O man, what is good. What does the LORD require of you, but to act justly, to love mercy, and to walk humbly with your God?",
        insight: "God's core requirement is simple and profound: justice, loyal love, and humble companionship.",
        colorType: "wisdom"
      },
      {
        reference: "Psalm 90:12",
        bookId: "PSA",
        chapter: 90,
        verse: 12,
        text: "So teach us to number our days, that we may gain a heart of wisdom.",
        insight: "Acknowledging the brevity of earthly life is the fastest route to true spiritual wisdom.",
        colorType: "comfort"
      },
      {
        reference: "Ecclesiastes 12:13",
        bookId: "ECC",
        chapter: 12,
        verse: 13,
        text: "This is the end of the matter. All has been heard. Fear God, and keep his commandments; for this is the whole duty of man.",
        insight: "At the end of all philosophy, reverent awe and loving obedience to God is the sum of life.",
        colorType: "wisdom"
      }
    ]
  }
];

function getTopicById(topicId) {
  return TOPICAL_COLLECTIONS.find(t => t.id === topicId) || null;
}
