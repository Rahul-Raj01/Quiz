const questions = {
  "General Knowledge": {
    Easy: [
      {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        correct: "Delhi",
      },
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: "7",
      },
      {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Elephant", "Lion", "Bear"],
        correct: "Lion",
      },
      {
        question: "What do we call a baby dog?",
        options: ["Kitten", "Cub", "Puppy", "Calf"],
        correct: "Puppy",
      },
      {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        correct: "7",
      }
    ],
    Medium: [
      {
        question: "Who wrote the national anthem of India?",
        options: ["Tagore", "Gandhi", "Nehru", "Ambedkar"],
        correct: "Tagore",
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Thar", "Gobi", "Arctic"],
        correct: "Sahara",
      },
      {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        options: ["Punjab", "Kerala", "Haryana", "Gujarat"],
        correct: "Punjab",
      },
      {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correct: "2",
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: "Canberra",
      }
    ],
    Hard: [
      {
        question: "Who invented the periodic table?",
        options: ["Newton", "Mendeleev", "Einstein", "Bohr"],
        correct: "Mendeleev",
      },
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Ganga", "Yangtze"],
        correct: "Nile",
      },
      {
        question: "Which country gifted the Statue of Liberty to the USA?",
        options: ["France", "UK", "Germany", "Italy"],
        correct: "France",
      },
      {
        question: "Which Indian president was a renowned scientist?",
        options: ["Kalam", "Nehru", "Pranab", "Patel"],
        correct: "Kalam",
      },
      {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correct: "12",
      }
    ]
  },

  "Science": {
    Easy: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars",
      },
      {
        question: "Which gas do plants absorb?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correct: "Carbon Dioxide",
      },
      {
        question: "What is H2O commonly known as?",
        options: ["Hydrogen", "Oxygen", "Salt", "Water"],
        correct: "Water",
      },
      {
        question: "What part of the body pumps blood?",
        options: ["Lungs", "Heart", "Brain", "Liver"],
        correct: "Heart",
      },
      {
        question: "Which sense organ helps us see?",
        options: ["Eyes", "Ears", "Nose", "Skin"],
        correct: "Eyes",
      }
    ],
    Medium: [
      {
        question: "Which vitamin is produced in our skin with sunlight?",
        options: ["A", "B", "C", "D"],
        correct: "D",
      },
      {
        question: "What is the boiling point of water?",
        options: ["100°C", "90°C", "80°C", "120°C"],
        correct: "100°C",
      },
      {
        question: "Which organ produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Heart"],
        correct: "Pancreas",
      },
      {
        question: "What is the center of an atom called?",
        options: ["Nucleus", "Electron", "Neutron", "Proton"],
        correct: "Nucleus",
      },
      {
        question: "How many legs does an insect have?",
        options: ["4", "6", "8", "10"],
        correct: "6",
      }
    ],
    Hard: [
      {
        question: "Speed of light is approximately?",
        options: ["3x10^8 m/s", "3x10^6 m/s", "1x10^5 m/s", "9.8 m/s²"],
        correct: "3x10^8 m/s",
      },
      {
        question: "What is the hardest natural substance?",
        options: ["Iron", "Diamond", "Platinum", "Gold"],
        correct: "Diamond",
      },
      {
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Fluorine", "Iron", "Fermium", "Francium"],
        correct: "Iron",
      },
      {
        question: "Which scientist proposed the laws of motion?",
        options: ["Newton", "Einstein", "Galileo", "Bohr"],
        correct: "Newton",
      },
      {
        question: "What type of energy does the Sun produce?",
        options: ["Nuclear", "Thermal", "Solar", "Kinetic"],
        correct: "Nuclear",
      }
    ]
  },

  "History": {
    Easy: [
      {
        question: "Who was the first President of India?",
        options: ["Rajendra Prasad", "Nehru", "Gandhi", "Ambedkar"],
        correct: "Rajendra Prasad",
      },
      {
        question: "In which year did India become independent?",
        options: ["1947", "1950", "1942", "1962"],
        correct: "1947",
      },
      {
        question: "Who is known as the Father of the Nation?",
        options: ["Patel", "Nehru", "Gandhi", "Tagore"],
        correct: "Gandhi",
      },
      {
        question: "Which fort is in Delhi?",
        options: ["Red Fort", "Amber Fort", "Agra Fort", "Golconda Fort"],
        correct: "Red Fort",
      },
      {
        question: "What is the national song of India?",
        options: ["Jana Gana Mana", "Vande Mataram", "Saare Jahan Se Achha", "Ae Mere Watan"],
        correct: "Vande Mataram",
      }
    ],
    Medium: [
      {
        question: "Who was the founder of the Maurya Empire?",
        options: ["Ashoka", "Chandragupta", "Bindusara", "Harsha"],
        correct: "Chandragupta",
      },
      {
        question: "Who gave the slogan 'Do or Die'?",
        options: ["Gandhi", "Bhagat Singh", "Nehru", "Bose"],
        correct: "Gandhi",
      },
      {
        question: "In which year did the Quit India Movement begin?",
        options: ["1940", "1942", "1944", "1945"],
        correct: "1942",
      },
      {
        question: "Who wrote 'Discovery of India'?",
        options: ["Nehru", "Gandhi", "Ambedkar", "Tagore"],
        correct: "Nehru",
      },
      {
        question: "Which Mughal emperor built the Taj Mahal?",
        options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
        correct: "Shah Jahan",
      }
    ],
    Hard: [
      {
        question: "Who discovered the sea route to India?",
        options: ["Columbus", "Vasco da Gama", "Magellan", "Cook"],
        correct: "Vasco da Gama",
      },
      {
        question: "In which year was the Battle of Plassey fought?",
        options: ["1757", "1857", "1707", "1800"],
        correct: "1757",
      },
      {
        question: "Which empire ruled India before the British?",
        options: ["Maurya", "Mughal", "Chola", "Gupta"],
        correct: "Mughal",
      },
      {
        question: "Who was the last Governor-General of India?",
        options: ["Mountbatten", "Nehru", "Curzon", "Canning"],
        correct: "Mountbatten",
      },
      {
        question: "Which Indian king fought the British in the 18th century?",
        options: ["Shivaji", "Tipu Sultan", "Akbar", "Ranjit Singh"],
        correct: "Tipu Sultan",
      }
    ]
  }
};

export default questions;
