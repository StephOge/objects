// 1. Using the construction method:
 
function InstagramPost(authorHandle, content, imageLink, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
  }
  
    

// 2. Create 2 Instagram post objects from the constructor function

  
  const firstPost = new InstagramPost(
    this.authorHandle = 'stephenie',
    this.content = 'Beautiful home',
    this.imageLink = 'https://media.istockphoto.com/id/155374658/photo/large-american-detached-home-with-garden-and-blue-sky.jpg?s=612x612&w=0&k=20&c=-jxhWacK1nuWcnbovLMMyKJA5zDMN_vzpGR41nnqIWQ=',
    this.views = 1000,
    this.likes = 50
  );
  
  const secondPost = new InstagramPost(
    this.authorHandle = 'Koko',
    this.content = 'The moon',
    this.imageLink = 'https://cdn.britannica.com/24/151224-050-E79BBF39/side-Earth-Moon-spacecraft-way-Jupiter-Galileo.jpg',
    this.views = 500,
    this.likes = 20
  );
  
  console.log(firstPost); 
  console.log(secondPost); 
  
// 3. Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT -85
// LIT - 82
// CRK - 94

// 3a. Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

function createPerson(name, age, location) {
    return {
      name:name,
      age:age,
      location:location,
    };
  }
  
  const musa = createPerson('Musa Dawodu', 19, 'Lekki Lagos State');
  console.log(musa);
 


//  3b.Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

    function createJambScores(eng, govt, lit, crk) {
        return {
          eng: eng,
          govt: govt,
          lit: lit,
          crk: crk
        };
      }
      musa.jambScores = {
        ENG: 70,
        GOVT: 85,
        LIT: 82,
        CRK: 94,
      };
  console.log(musa)    

    //   4. How to clone an object:
    // a.  Using Object.assign()

const firstVisitor = {
  food: "Rice",
  drink: "Malt",
  monthVisited: "May",
};

const secondVisitor = Object.assign({}, firstVisitor);

console.log(firstVisitor);
console.log(secondVisitor);

secondVisitor.drink = "Stout";

console.log(firstVisitor);
console.log(secondVisitor);

// b. - Using spread syntax 

const thirdVisitor = { ...firstVisitor };
thirdVisitor.drink = "caprison";
console.log({ firstVisitor }); 
console.log({ thirdVisitor });

// c. Using the method JSON.parse(JSON.stringify())

const fourthVisitor = JSON.parse;
fourthVisitor.drink = "Pepsi";
console.log({ firstVisitor });
console.log({ fourthVisitor });

// 5. 

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 };
 
 for (const party in presidentialCandidates) {
   const candidate = presidentialCandidates[party];
   console.log(`${candidate} is the presidential candidate of ${party}`);
 }
 
   