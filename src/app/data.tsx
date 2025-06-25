const peopleData = [
    { id: 1, name: "Mark Zuckerberg", ratings: [4,5,5,4,4,5,3,5,4,5,4,5,5,4,3], url: "zuckerbma", bio: "CEO of Meta Platforms and Facebook", links:["https://facebook.com/zuck"], tags: ["tech", "ceo"] },
    { id: 2, name: "Elon Musk", ratings: [5,5,4,5,4,5,5,4,5,4,5,5,4,5,5,4], url: "muskel", bio: "CEO of SpaceX, Tesla", links:["https://x.com/elonmusk"], tags: ["tech", "ceo"] },
    { id: 3, name: "Veritasium YT", ratings: [5,5,4,5,4,4,3,5,4,3], url: "veritasyt", bio: "A science youtube channel", links:["https://youtube.com/@veritasium"], tags: ["youtube", "science"] },
    { id: 4, name: "Taylor Swift", ratings: [5,5,4,5,5,5,4,5,5,5,5,4,5,5], url: "swiftta", bio: "Singer-songwriter and pop icon", links:["https://instagram.com/taylorswift"], tags: ["music", "artist"] },
    { id: 5, name: "Cristiano Ronaldo", ratings: [5,5,5,5,4,5,5,5,5,4,5,5,5,4,5], url: "ronaldocr", bio: "Professional footballer", links:["https://instagram.com/cristiano"], tags: ["sports", "football"] },
    { id: 6, name: "Serena Williams", ratings: [5,5,4,5,5,5,4,5,5,4,5,5], url: "williamse", bio: "Tennis legend", links:["https://instagram.com/serenawilliams"], tags: ["sports", "tennis"] },
    { id: 7, name: "Oprah Winfrey", ratings: [5,5,5,4,5,5,4,5,5,5,5], url: "winfreyop", bio: "TV host and media mogul", links:["https://oprah.com"], tags: ["media", "philanthropy"] },
    { id: 8, name: "Jeff Bezos", ratings: [5,4,5,4,4,5,5,4,4,5,4,5,5,4], url: "bezosje", bio: "Founder of Amazon", links:["https://blueorigin.com"], tags: ["tech", "business"] },
    { id: 9, name: "Barack Obama", ratings: [5,5,5,5,4,5,5,4,5,4,5,5], url: "obamaba", bio: "44th President of the USA", links:["https://twitter.com/BarackObama"], tags: ["politics"] },
    { id: 10, name: "Emma Watson", ratings: [5,4,5,5,5,4,5,4,5,5,5,4], url: "watsone", bio: "Actress and activist", links:["https://instagram.com/emmawatson"], tags: ["film", "activism"] },
    { id: 11, name: "Bill Gates", ratings: [5,5,4,4,5,4,5,5,5,4,5,5,4], url: "gatesbi", bio: "Co-founder of Microsoft, philanthropist", links:["https://gatesnotes.com"], tags: ["tech", "philanthropy"] },
    { id: 12, name: "Lady Gaga", ratings: [5,5,4,5,5,5,4,5,5,5,4,5,4], url: "gagalady", bio: "Singer and actress", links:["https://instagram.com/ladygaga"], tags: ["music", "film"] },
    { id: 13, name: "Lionel Messi", ratings: [5,5,5,5,5,4,5,5,5,4,5,5,4], url: "messili", bio: "Professional footballer", links:["https://instagram.com/leomessi"], tags: ["sports", "football"] },
    { id: 14, name: "Adele Adkins", ratings: [5,5,4,5,5,4,5,5,4,5,5,5], url: "adkinsad", bio: "Singer-songwriter", links:["https://instagram.com/adele"], tags: ["music"] },
    { id: 15, name: "Micheal Jordan", ratings: [5,4,5,5,4,5,4,5,5,5,5,4], url: "jordanmi", bio: "Former NBA player", links:["https://www.instagram.com/michael_jordann_"], tags: ["sports", "basketball"] },
    { id: 16, name: "LeBron James", ratings: [5,5,5,4,5,5,4,5,5,5,4,5], url: "jamesle", bio: "NBA player", links:["https://instagram.com/kingjames"], tags: ["sports", "basketball"] },
    { id: 17, name: "Greta Thunberg", ratings: [5,5,4,5,5,5,4,5,5,4,5,5,4], url: "thunbergr", bio: "Climate activist", links:["https://twitter.com/gretathunberg"], tags: ["activism"] },
    { id: 18, name: "Tom Hanks", ratings: [5,5,4,5,5,4,5,4,5,5,5], url: "hanksto", bio: "Actor and filmmaker", links:["https://instagram.com/tomhanks"], tags: ["film"] },
    { id: 19, name: "Shakira Ripoll", ratings: [5,5,4,5,5,4,5,5,4,5,5], url: "ripollsh", bio: "Singer and performer", links:["https://instagram.com/shakira"], tags: ["music"] },
    { id: 20, name: "Stephen King", ratings: [5,4,5,5,5,4,5,5,4,5,5,5], url: "kingst", bio: "Author of horror novels", links:["https://stephenking.com"], tags: ["literature"] }
];

export default peopleData;