const eyeFacts = [
    {
        "english": "Nearly 80% of vision impairment worldwide is preventable or treatable.",
        "assamese": "বিশ্বজুৰি প্ৰায় ৮০% দৃষ্টিশক্তিৰ অক্ষমতা প্ৰতিৰোধযোগ্য বা চিকিৎসাযোগ্য"
    },
    {
        "english": "Regular eye exams can detect early signs of serious health conditions like diabetes, high blood pressure, and even some cancers",
        "assamese": "নিয়মিত চকুৰ পৰীক্ষাই ডায়েবিটিছ, উচ্চ ৰক্তচাপ আৰু কিছুমান কেঞ্চাৰৰ দৰে গুৰুতৰ স্বাস্থ্য অৱস্থাৰ আগতীয়া সংকেত চিনাক্ত কৰিব পাৰে"
    },
    {
        "english": "Children with undiagnosed vision problems often struggle in school without anyone realizing the cause",
        "assamese": "নিদান নকৰা চকুৰ সমস্যাৰ সৈতে শিশু প্ৰায়েই বিদ্যালয়ত সংগ্ৰাম কৰে য'ত কাৰণটো বুজা নাযায়"
    },
    {
        "english": "Your eyes can reveal the first signs of diabetes, high blood pressure, and even certain cancers before symptoms appear elsewhere in your body",
        "assamese": "আপোনাৰ চকুৱে ডায়েবিটিছ, উচ্চ ৰক্তচাপ আৰু কিছুমান কেঞ্চাৰৰ প্ৰথম সংকেত দেখুৱাব পাৰে যেতিয়া অন্য ঠাইত লক্ষণসমূহ দেখা নাযায়"
    },
    {
        "english": "Many serious eye conditions like glaucoma develop silently with no pain or early symptoms, causing irreversible damage if not caught in routine exams",
        "assamese": "গ্লুকোমাৰ দৰে বহুতো গুৰুতৰ চকুৰ অৱস্থা নিৰৱে বিকাশ ঘটে য'ত কোনো বিষাদ বা আগতীয়া লক্ষণ নাথাকে, যিয়ে নিয়মিত পৰীক্ষাত ধৰা নপৰিলে উল্টাব পৰা ক্ষতি কৰে"
    },
    {
        "english": "Proper eye care needs change throughout life – from developing visual skills in childhood to managing digital eye strain in adulthood and addressing age-related conditions in seniors",
        "assamese": "জীৱনৰ জুৰি সঠিক চকুৰ যত্নৰ প্ৰয়োজনীয়তা পৰিৱৰ্তন হয় - শিশুৰ সময়ত দৃষ্টিৰ দক্ষতা বিকাশৰ পৰা আৰম্ভ কৰি বয়সৰ সৈতে সম্পর্কিত অৱস্থাসমূহৰ সমাধানলৈ"
    }
]

export const getData = () =>
    new Promise((resolve)=>{
        setTimeout(() => {
            resolve(eyeFacts)
        }, 1000)
    })