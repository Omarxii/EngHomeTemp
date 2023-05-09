// Books Data In Object
let storeBookData = [{
  id: "aaa001",
  name: "Rebecca",
  author: "Daphne du Maurier",
  levelC: "lvl6",
  level: "6",
  image: "images/b-rebecca.jpg",
  desc: `Maxim de Winter never talked about Rebecca, but others talked.
  Rebecca's death had been in all the newspapers.
  Everyone thought that she had drowned in the sea near Manderley...`,
  price: 3,
},
{
  id: "aaa002",
  name: "Meteor <br><span>and Other Stories</span>",
  author: "JOHN WYNDHAM",
  levelC: "lvl6",
  level: "6",
  image: "images/b-meteor.jpg",
  desc: `It was just a smooth round metal ball, less than a metre in diameter. Although it was still hot from its journey through the huge nothingness of space, it looked quite harmless. But what was it, exactly? A meteor, perhaps - just one of those pieces of roch from outer space that occasionally fall down on to the planet Earth. But meteors don't usually make strange hissing sounds...
  In this collection of four of his famous science-fiction stories, John Wyndham creates visions of the future that make us think carefully about the way we live now.`,
  price: 3,
},
{
  id: "aaa003",
  name: "Macbeth",
  author: "William Shakespeare",
  levelC: "lvl6",
  level: "6",
  image: "images/b-macbeth.jpg",
  desc: `Macbeth: If I do it, then I must do it quickly. But will this murder be enough? Will it bring success? Or will more problems follow? No man avoids the judgment that's to come And I'll be judged in this world too.
  Shakespeare's Scottish story of magic and murder is one of his darkest works. Macbeth's bloody rise to power is encouraged by his wife, Lady Macbeth. Their ambition leads them into a world of quilt and madness which destroys their marriage - and ends in tragedy.
  This Macmillan Reader is written as a playscript and includes original extracts from Macbeth.`,
  price: 3,
},
{
  id: "aaa004",
  name: "The Final Problem <br><span>and Other Stories</span>",
  author: "Arthur Conan Doyle",
  levelC: "lvl3",
  level: "3",
  image: "images/b-thefinalproblem.jpg",
  desc: `Sherlock Holmes is the world's only consulting detective. He helps Scotland Yard to solve mysteries they can't solve. Surely no-one can defeat Sherlock Holmes… or can they? In this collection of short stories, Holmes comes face to face with some of his most difficult challenges and his main rival, Professor Moriarty.`,
},
{
  id: "aaa005",
  name: "I, Robot <br><span>Short Stories</span>",
  author: "ISAAC ASIMOV",
  levelC: "lvl5",
  level: "5",
  image: "images/b-irobot.jpg",
  desc: `A human being is a soft, weak creature. It needs constant supplies of air, water, and food; it has to spend a third of its life asleep, and it can't work if the temperature is too hot or too cold.

  But a robot is made of strong metal. It uses electrical energy directly, never sleeps, and can work in any temperature. It is stronger, more efficient - and sometimes more human than human beings.
  
  Isaac Asimov was one of the greatest science-fiction writers, and these short stories give us an unforgettable and terrifying vision of the future.`,
  price: 1.9,
},
{
  id: "aaa006",
  name: "THE Moneymaker",
  author: "JANET GLEESON",
  levelC: "lvl5",
  level: "5",
  image: "images/b-themoneymaker.jpg",
  desc: `Here is the amazing true story of John Law - gambler, murderer and adventurer. In 1695 Law arrived in Paris with an idea, paper money. He started the first bank to print paper notes and today's financial system was born.`,
  price: 3,
},
{
  id: "aaa007",
  name: "L. A. Winners",
  author: "Philip Prowse",
  levelC: "lvl3",
  level: "3",
  image: "images/b-lawinners.jpg",
  desc: `The woman looked around my office. She looked at the old furniture and the dirty windows. She looked at the broken blind and the plastic coffee cups in the waste bin. Then she looked at me. I wasn't looking good. I hadn't shaved. And my suit and hair were untidy. The woman didn't speak.
  Suddenly, she took a handkerchief out of her bag. She wiped the dust from the chair and she sat down.
  'Mr Samuel,' she said. 'I saw your name and address in the telephone book. Are you cheap? And are you a good detective?'
  ' I'm not good,' I replied. ' I'm the best. The best private detective in Los Angeles.'`,
  price: 1,
},
{
  id: "aaa008",
  name: "Grace Darling",
  author: "TIM VICARY",
  levelC: "lvl2",
  level: "2",
  image: "images/b-gracedarling.jpg",
  desc: `All they could hear was the wind, and the waves. All they could see was the night. 
  They could not see the ship, broken in two, or the people holding on to the dark wet rock, 
  slowly dying of cold. And they could not hear the cries for help - only the wind. 
  How could a man and his daughter save the people on the rock? They only had a little wooden 
  boat in that wild and dangerous sea. The Forfarshire was wrecked off the north-east coast of England in 1838. 
  This is the true story of Grace Darling - a girl who became a famous heroine on that stormy night.`,
},
{
  id: "aaa009",
  name: "Disaster!",
  author: "MARY McINTOSH",
  levelC: "lvl4",
  level: "4",
  image: "images/b-disaster!.jpg",
  desc: `From out of the sky, from under the earth, from far out at sea disaster comes.
  We build and invent new things and sometimes bring disaster on ourselves.
  Today television and the Internet mean that we can watch disasters as they happen,
  and see their terrible results.
  From Pompeii to the Asian Tsunami, from the Great Fire of London to Chernobyl,
  the stories of disasters are frightening, but they have much to tell us.
  Disasters bring stories of fear, pain, loss, and death –
  but also of people whose extraordinary bravery and feeling for others will touch your heart.`,
},
{
  id: "aaa010",
  name: "Ghost Stories",
  author: "<span>RETOLD BY</span><br> ROSEMARY BORDER",
  levelC: "lvl5",
  level: "5",
  image: "images/b-ghoststories.jpg",
  desc: `After dinner we turned the lights out and played 'hide-and-seek'. In the dark, 
  I touched a hand, a very cold hand. Now, because of the game, I had to hide in the dark 
  with... with this cold person - not speaking, not knowing who it was. Slowly the others found us, 
  hid with us, until we were all there - all thirteen. Thirteen? But there were only 
  twelve people in the house! We touched each other in the dark, 
  counting. Thirteen. Quickly, nervously, I lit a match to see...'`,
},
{
  id: "aaa011",
  name: "The Art Show",
  author: "Paula Smith",
  levelC: "lvl6",
  level: "6",
  image: "images/b-theartshow.jpg",
  desc: `Sophie loves painting and wants to become an artist, but her parents have other ideas. 
  Her good friend Dorothy gives her some advice - ' Show them that you are good enough to go to art college.
  ' She offers to help Sophie put on her own art show. While working to prepare for the show, 
  Sophie discovers a sad secret about Dorothy's past and decides to try to help her friend. 
  It's a life-changing time for both of them.`,
},
{
  id: "aaa012",
  name: "Land of my Childhood <br><span>Stories from South Asia</span>",
  author: "<span>RETOLD BY</span><br> CLARE WEST",
  levelC: "lvl4",
  level: "4",
  image: "images/b-landofmychildhood.jpg",
  desc: `My brother preferred being with mother and me. He used to help us prepare vegetables in the kitchen 
  or make the bread. But what he liked best was listening to my mother's stories. 
  ' But those childhood days are long gone, and sister and brother, mother and children are now far apart. 
  The stories in this volume of World Stories come from India, Pakistan, and Sri Lanka. 
  The writers are Romesh Gunesekera, M. Athar Tahir, Chitra Divakaruni, Anu Kumar, Anne Ranasinghe, Ruskin Bond, 
  Anita Desai, Vijita Fernando, and Amara Bavani Dev.`,
},
{
  id: "aaa013",
  name: "Goldfinger",
  author: "Lan Fleming",
  levelC: "lvl5",
  level: "5",
  image: "images/b-goldfinger.jpg",
  desc: `When James Bond 007 is introduced to the rich and mysterious Auric Goldfinger, 
  he quickly learns that Goldfinger is a clever cheat at card games. But card games are not the only way 
  that Goldfinger makes money. Soon, Bond finds himself part of an evil plan, 
  a plan which could lead to the deaths of many people...`,
},
{
  id: "aaa014",
  name: "Martin Luther King",
  author: "ALAN C. McLEAN",
  levelC: "lvl3",
  level: "3",
  image: "images/b-martinlutherking.jpg",
  desc: `The United States in the 1950s and 60s was a troubled place. Black people were angry, 
  because they did not have the same rights as whites. It was a time of angry words, of marches, 
  of protests, a time of bombs and killings. But above the angry noise came the voice of 
  one man - a man of peace. 'I have a dream,' said Martin Luther King, and it was a dream of blacks 
  and whites living together in peace and freedom. This is the story of an extraordinary man, 
  who changed American history in his short life.`,
},
{
  id: "aaa015",
  name: "Room 13 <br><span>and Other Ghost Stories</span>",
  author: "M. R. James",
  levelC: "lvl3",
  level: "3",
  image: "images/b-room13andotherghoststories.jpg",
  desc: `Five short stories about ghosts, evil spirits and
  creatures of the night.
  Beware! Don't turn your light out immediately after
  you've finished reading. Something may be waiting for
  you in the dark...`,
},
{
  id: "aaa016",
  name: "Slumdog Millionaire",
  author: "Vikas Swarup",
  levelC: "lvl5",
  level: "5",
  image: "images/b-slumdogmillionaire.jpg",
  desc: `'Correct!' Prem Kumar said, in a shaky voice. 'Mr Ram Mohammad Thomas, you have won one billion rupees!'
  You've seen the movie, now read teh book! Ram Mohammad Thomas answers all the questions correctly 
  on a TV quiz show and wins a billion rupees, but how does he know the answers?
  Slumdog Milionaire takes us through the major events of Ram's life, from his fight to survive 
  in the slums of Mumbai and Delhi to his final act of love and revenge - and the amazing good fortune it brings!`,
},
{
  id: "aaa017",
  name: "THE GAMBLER",
  author: "Fyodor Dostoyevsky",
  levelC: "lvl6",
  level: "6",
  image: "images/b-thegambler.jpg",
  desc: `Alexis Ivanovitch is a young Russian who lives in Roulettenberg with the General and his family. 
  He is a Russian teacher with a small salary. As luck would have it, Alexis Ivanovitch witnesses 
  all kind of family intrigues, love triangles, and unbelievable failures. 
  He is himself madly in love with Polina Alexandrovna, while the latter loves the Marquis de Griers. 
  To win her sympathy, Alexis Ivanovitch plays roulette on her behalf and fulfil all her orders. 
  However, after winning a good deal of money, his love for Polina Alexandrovna takes a back seat. 
  He becomes completely submissive to roulette and its turn of chance.  
  Consequently, he comes to the conclusion that roulette is the only way of acquiring money and social status. 
  Roulette gives him the feeling of power, luck, and victory, and even love seems less valuable in comparison with game passion. 
  Thus he ruins himself and, who knows, maybe one day he may rise from the dead or fall deeper into the ‘moving wheel’ of his roulette addiction… `,
},
{
  id: "aaa018",
  name: "Do Androids Dream of Electric Sheep?",
  author: "PHILIP K. DICK",
  levelC: "lvl5",
  level: "5",
  image: "images/b-doandroidsdreamofelectricsheep.jpg",
  desc: `San Francisco lies under a cloud of radioactive dust. People live in half-deserted buildings, 
  and keep electric animals as pets because many real animals have died. 
  Most people emigrate to Mars - unless they have a job to do on Earth. 
  Like Rick Deckard - android killer for the police and owner of an electric sheep. 
  This week he has to find, identify, and kill six escaped androids. 
  They're machines, but they look and sound and think like humans - clever, dangerous humans. 
  The film Blade Runner was based on this famous novel.`,
},
{
  id: "aaa019",
  name: "The Meaning of Gifts <br><span>Stories from Turkey</span>",
  author: "<span>RETOLD BY</span><br> JENNIFER BASSETT",
  levelC: "lvl1",
  level: "1",
  image: "images/b-themeaningofgiftsstoriesfromturkey.jpg",
  desc: `Izzet Efendi and his family are afraid that their guests are never going to go home, but what can they do?`,
},];
// Books Data In Object Bottom